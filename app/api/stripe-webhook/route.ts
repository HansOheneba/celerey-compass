// app/api/stripe-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { google } from "googleapis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function getSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

async function markAsPaid(email: string) {
  const sheets = await getSheet();
  const sheetId = process.env.GOOGLE_SHEET_ID!;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Applications!A1:Z1000",
  });

  const rows = response.data.values;
  if (!rows || rows.length === 0) return false;

  const headers = rows[0];

  const emailColIndex = headers.findIndex((h: string) =>
    h.toLowerCase().includes("email"),
  );

  let statusColIndex = headers.findIndex((h: string) =>
    h.toLowerCase().includes("payment status"),
  );

  if (statusColIndex === -1) {
    statusColIndex = headers.length;
    const statusColLetter = columnToLetter(statusColIndex + 1);
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `Applications!${statusColLetter}1`,
      valueInputOption: "RAW",
      requestBody: { values: [["Payment Status"]] },
    });
  }

  if (emailColIndex === -1) return false;

  const statusColLetter = columnToLetter(statusColIndex + 1);
  for (let i = 1; i < rows.length; i++) {
    const rowEmail = rows[i][emailColIndex]?.toLowerCase().trim();
    if (rowEmail === email.toLowerCase().trim()) {
      const rowNumber = i + 1;
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: `Applications!${statusColLetter}${rowNumber}`,
        valueInputOption: "RAW",
        requestBody: { values: [["Paid"]] },
      });
      console.log(`Marked row ${rowNumber} as paid for ${email}`);
      return true;
    }
  }

  console.warn(`No row found for email: ${email}`);
  return false;
}

function columnToLetter(col: number): string {
  let letter = "";
  while (col > 0) {
    const remainder = (col - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    col = Math.floor((col - 1) / 26);
  }
  return letter;
}

// Check if the session contains your specific product
async function isCompassPayment(
  session: Stripe.Checkout.Session,
): Promise<boolean> {
  const targetPriceId = process.env.STRIPE_PRICE_ID;
  if (!targetPriceId) {
    console.warn("STRIPE_PRICE_ID not set — processing all payments");
    return true;
  }

  // Retrieve the full session with line items expanded
  const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items"],
  });

  const lineItems = fullSession.line_items?.data ?? [];

  return lineItems.some((item) => item.price?.id === targetPriceId);
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook signature failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // ✅ Only process if it's specifically a Compass payment
    const isCompass = await isCompassPayment(session);
    if (!isCompass) {
      console.log(`Skipping session ${session.id} — not a Compass payment`);
      return NextResponse.json({ received: true, skipped: true });
    }

    const email = session.customer_details?.email || session.customer_email;

    if (email) {
      await markAsPaid(email);
    } else {
      console.warn("No email found on session:", session.id);
    }
  }

  return NextResponse.json({ received: true });
}
