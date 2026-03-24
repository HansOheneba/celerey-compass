// app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

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

export async function POST(req: NextRequest) {
  console.log("📋 /api/apply — request received");

  try {
    const body = await req.json();
    console.log("📋 Body parsed:", JSON.stringify(body));

    const { firstName, lastName, email, phone, track, school, whyCompass } =
      body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      console.log("❌ Validation failed — missing required fields");
      return NextResponse.json(
        { error: "First name, last name and email are required." },
        { status: 400 },
      );
    }

    console.log("📋 Connecting to Google Sheets...");
    const sheets = await getSheet();
    const sheetId = process.env.GOOGLE_SHEET_ID!;
    console.log("📋 Sheet ID:", sheetId);

    // Check if headers exist
    console.log("📋 Checking for headers...");
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Applications!A1:I1",
    });

    const headers = existing.data.values?.[0];
    console.log("📋 Existing headers:", headers);

    if (!headers || headers.length === 0) {
      console.log("📋 No headers found — writing headers...");
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Applications!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "First Name",
              "Last Name",
              "Email",
              "Phone",
              "Track Interest",
              "School / Institution",
              "Why Compass?",
              "Submitted At",
              "Payment Status",
            ],
          ],
        },
      });
      console.log("✅ Headers written");
    }

    // Write the application row
    console.log("📋 Appending application row...");
    const appendResult = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Applications!A:I",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            phone || "",
            track || "",
            school || "",
            whyCompass || "",
            new Date().toISOString(),
            "Pending",
          ],
        ],
      },
    });

    console.log(
      "✅ Row appended — updated range:",
      appendResult.data.updates?.updatedRange,
    );

    // Build Stripe URL with prefilled fields
    const stripeBase = process.env.STRIPE_PAYMENT_LINK;
    if (!stripeBase) {
      console.error("❌ STRIPE_PAYMENT_LINK env var is missing!");
      return NextResponse.json(
        { error: "Payment link not configured. Please contact support." },
        { status: 500 },
      );
    }

    const stripeUrl = new URL(stripeBase);
    stripeUrl.searchParams.set("prefilled_email", email);
    stripeUrl.searchParams.set("prefilled_name", `${firstName} ${lastName}`);

    console.log("✅ Redirecting to Stripe:", stripeUrl.toString());
    return NextResponse.json({ url: stripeUrl.toString() });
  } catch (err: unknown) {
    const error = err as Error & { code?: number; status?: number };
    console.error("❌ /api/apply error:", {
      message: error.message,
      code: error.code,
      status: error.status,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
