import { NextResponse } from "next/server";
import { Resend } from "resend";
import { institutionFormSchema } from "@/lib/institutionValidation";
import { appendInstitutionToSheet } from "@/lib/institutionSheets";
import { InstitutionRegistrationReceivedEmail } from "@/emails/InstitutionRegistrationReceived";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = institutionFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    await appendInstitutionToSheet(parsed.data);

    const { primaryContactEmail, primaryContactName, companyName } =
      parsed.data;

    resend.emails
      .send({
        from: "Compass by Celerey <compass@no-reply.celerey.co>",
        to: primaryContactEmail,
        subject: `${companyName} — Compass Experience registration confirmed`,
        react: InstitutionRegistrationReceivedEmail({
          contactName: primaryContactName,
          companyName,
        }),
      })
      .then(({ error }) => {
        if (error) console.error("⚠️ Resend error:", error);
      })
      .catch((err) => {
        console.error("⚠️ Failed to send confirmation email:", err);
      });

    return NextResponse.json(
      { message: "Registration received" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to save registration" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
