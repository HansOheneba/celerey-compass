import { NextResponse } from "next/server";
import { Resend } from "resend";
import { applyFormSchema } from "@/lib/applyValidation";
import { appendToSheet } from "@/lib/sheets";
import { ApplicationReceivedEmail } from "@/emails/ApplicationReceived";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = applyFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    await appendToSheet(parsed.data);

    const { email, firstName } = parsed.data;

    // Send confirmation email — non-blocking, don't fail submission if email fails
    resend.emails
      .send({
        from: "Compass by Celerey <compass@no-reply.celerey.co>",
        to: email,
        subject: "We've received your Compass application 🎉",
        react: ApplicationReceivedEmail({
          preferredName: firstName,
          email,
        }),
      })
      .then(({ error }) => {
        if (error) console.error("⚠️ Resend error:", error);
      })
      .catch((err) => {
        console.error("⚠️ Failed to send confirmation email:", err);
      });

    return NextResponse.json(
      { message: "Submission received" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
