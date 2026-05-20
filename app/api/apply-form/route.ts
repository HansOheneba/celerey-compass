import { NextResponse } from "next/server";
import { Resend } from "resend";
import { applyFormSchema } from "@/lib/applyValidation";
import { appendToSheet } from "@/lib/sheets";
import { ApplicationReceivedEmail } from "@/emails/ApplicationReceived";
import { ScholarshipApplicationReceivedEmail } from "@/emails/ScholarshipApplicationReceived";
import { ApplicationNotificationEmail } from "@/emails/ApplicationNotification";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1dykrFMQp0uy95BOnqttMA_nt8fyn0v1NaiDlMiOfsQo/edit?gid=0#gid=0";

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

    const { email, firstName, seekingScholarship } = parsed.data;

    // Send confirmation email. Non-blocking, don't fail submission if email fails.
    const emailSubject = seekingScholarship
      ? "We've received your Compass scholarship application"
      : "We've received your Compass application 🎉";
    const emailReact = seekingScholarship
      ? ScholarshipApplicationReceivedEmail({
          preferredName: firstName,
          email,
        })
      : ApplicationReceivedEmail({
          preferredName: firstName,
          email,
        });

    resend.emails
      .send({
        from: "Compass by Celerey <compass@no-reply.celerey.co>",
        to: email,
        subject: emailSubject,
        react: emailReact,
      })
      .then(({ error }) => {
        if (error) console.error("⚠️ Resend error:", error);
      })
      .catch((err) => {
        console.error("⚠️ Failed to send confirmation email:", err);
      });
    // Send internal notification to the team
    const rawNotificationEmails = process.env.NOTIFICATION_EMAILS ?? "";
    const notificationRecipients = rawNotificationEmails
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (notificationRecipients.length > 0) {
      const applicantName = `${parsed.data.firstName} ${parsed.data.lastName}`;
      const isScholarship = Boolean(parsed.data.seekingScholarship);
      resend.emails
        .send({
          from: "Compass by Celerey <compass@no-reply.celerey.co>",
          to: notificationRecipients,
          subject: `New application: ${applicantName}${isScholarship ? " (scholarship)" : ""}`,
          react: ApplicationNotificationEmail({
            data: parsed.data,
            sheetUrl: SHEET_URL,
          }),
        })
        .then(({ error }) => {
          if (error)
            console.error("\u26a0\ufe0f Notification email error:", error);
        })
        .catch((err) => {
          console.error("\u26a0\ufe0f Failed to send notification email:", err);
        });
    }
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
