import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const priceId = process.env.STRIPE_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "Payment not configured" },
        { status: 500 },
      );
    }

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_BASE_URL ??
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { email },
      allow_promotion_codes: true,
      success_url: `${origin}/apply/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/apply/payment-cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout session error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
