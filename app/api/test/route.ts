// app/api/test-sheets/route.ts
// DIAGNOSTIC ONLY — delete this file after debugging is complete

import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  const results: Record<string, unknown> = {};

  // Step 1 — check env vars are present
  results.env = {
    hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    emailValue: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "MISSING",
    hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    privateKeyStart: process.env.GOOGLE_PRIVATE_KEY?.slice(0, 40) ?? "MISSING",
    hasSheetId: !!process.env.GOOGLE_SHEET_ID,
    sheetId: process.env.GOOGLE_SHEET_ID ?? "MISSING",
  };

  // Step 2 — try to authenticate
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    results.auth = { success: true, type: client.constructor.name };

    // Step 3 — try to read the sheet
    const sheets = google.sheets({ version: "v4", auth });
    const read = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A1:C3",
    });

    results.read = {
      success: true,
      rows: read.data.values ?? "empty — no data yet",
    };

    // Step 4 — try to write a test row
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A:I",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            "TEST",
            "ROW",
            "test@test.com",
            "123",
            "Track",
            "School",
            "Why",
            new Date().toISOString(),
            "Pending",
          ],
        ],
      },
    });

    results.write = {
      success: true,
      message: "Test row written — check your sheet!",
    };
  } catch (err: unknown) {
    const error = err as Error & { code?: number; status?: number };
    results.error = {
      message: error.message,
      code: error.code,
      status: error.status,
      // Common causes:
      // 403 → service account not added as editor to the sheet
      // 400 → sheet name wrong (not "Sheet1") or bad range
      // invalid_grant → private key malformed
    };
  }

  return NextResponse.json(results, { status: 200 });
}
