import { google } from "googleapis";
import type { ApplyFormData } from "@/lib/applyValidation";

const FIELD_ORDER: Array<keyof ApplyFormData> = [
  "full_name",
  "preferred_name",
  "date_of_birth",
  "gender",
  "email",
  "phone",
  "location",
  "school_name",
  "school_type",
  "current_year",
  "subjects",
  "personality_genre",
  "description_type",
  "hobbies",
  "self_taught",
  "strengths",
  "improvement_area",
  "career_interests",
  "reason",
  "prior_experience",
  "experience_details",
  "workplace_type",
  "work_style",
  "productive_time",
  "excitement",
  "self_discovery_goal",
  "current_challenge",
  "reaction_to_difficulty",
  "devices",
  "internet_access",
  "parent_name",
  "parent_phone",
  "parent_email",
  "relationship",
  "occupation",
  "preferred_contact",
  "permission",
  "support_commitment",
  "parent_priority",
  "dream_workplace",
  "world_problem",
  "five_years",
  "expected_change",
  "future_message",
  "commitment_agree",
  "schedule_acknowledgement",
];

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error("Missing Google Sheets environment variables");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return {
    sheets: google.sheets({ version: "v4", auth }),
    spreadsheetId,
  };
}

function formatValue(value: ApplyFormData[keyof ApplyFormData]) {
  if (Array.isArray(value)) {
    return value.join(" | ");
  }
  return value ?? "";
}

export async function appendToSheet(data: ApplyFormData): Promise<void> {
  const { sheets, spreadsheetId } = getSheetsClient();

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "A1:ZZ1",
  });

  const headerValues = headerResponse.data.values?.[0] ?? [];

  if (headerValues.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [FIELD_ORDER],
      },
    });
  }

  const row = FIELD_ORDER.map((field) => formatValue(data[field]));

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A:ZZ",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });
}
