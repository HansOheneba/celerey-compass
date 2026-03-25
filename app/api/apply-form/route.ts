import { NextResponse } from "next/server";
import { applyFormSchema } from "@/lib/applyValidation";
import { appendToSheet } from "@/lib/sheets";

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
