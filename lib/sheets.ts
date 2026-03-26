import { google } from "googleapis";
import type { ApplyFormData } from "@/lib/applyValidation";

const SHEET_NAME = "Applications";

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

const PAYMENT_STATUS_HEADER = "Payment Status";
const PAYMENT_STATUS_DEFAULT = "Pending";
const PAYMENT_STATUS_OPTIONS = ["Pending", "Paid", "Failed", "Refunded"];

const HEADERS: Record<keyof ApplyFormData, string> = {
  full_name: "Full Name",
  preferred_name: "Preferred Name",
  date_of_birth: "Date of Birth",
  gender: "Gender",
  email: "Email Address",
  phone: "Phone Number",
  location: "Location",
  school_name: "School Name",
  school_type: "School Type",
  current_year: "Current Year / Grade",
  subjects: "Subjects Studied",
  personality_genre: "Personality Genre",
  description_type: "How Others Describe You",
  hobbies: "Hobbies & Interests",
  self_taught: "Something Self-Taught",
  strengths: "Key Strengths",
  improvement_area: "Area for Improvement",
  career_interests: "Career Interests",
  reason: "Reason for Applying",
  prior_experience: "Has Prior Experience",
  experience_details: "Experience Details",
  workplace_type: "Preferred Workplace Type",
  work_style: "Work Style",
  productive_time: "Most Productive Time of Day",
  excitement: "What Excites You",
  self_discovery_goal: "Self-Discovery Goal",
  current_challenge: "Current Challenge",
  reaction_to_difficulty: "Reaction to Difficulty",
  devices: "Available Devices",
  internet_access: "Internet Access",
  parent_name: "Parent / Guardian Name",
  parent_phone: "Parent / Guardian Phone",
  parent_email: "Parent / Guardian Email",
  relationship: "Relationship to Applicant",
  occupation: "Parent / Guardian Occupation",
  preferred_contact: "Preferred Contact Method",
  permission: "Parent Permission Granted",
  support_commitment: "Parent Support Commitment",
  parent_priority: "Parent's Priority for Child",
  dream_workplace: "Dream Workplace",
  world_problem: "World Problem They'd Solve",
  five_years: "Vision in 5 Years",
  expected_change: "Expected Change from Program",
  future_message: "Message to Future Self",
  commitment_agree: "Commitment Agreement",
  schedule_acknowledgement: "Schedule Acknowledgement",
};

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

  // Fetch the sheet metadata to get the numeric sheet ID for validation requests
  const spreadsheetMeta = await sheets.spreadsheets.get({ spreadsheetId });
  const sheetMeta = spreadsheetMeta.data.sheets?.find(
    (s) => s.properties?.title === SHEET_NAME,
  );
  const sheetId = sheetMeta?.properties?.sheetId ?? 0;

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A1:ZZ1`,
  });

  const headerValues = headerResponse.data.values?.[0] ?? [];

  if (headerValues.length === 0) {
    const headerRow = [
      ...FIELD_ORDER.map((field) => HEADERS[field]),
      PAYMENT_STATUS_HEADER,
    ];
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [headerRow] },
    });

    // Apply dropdown validation to the Payment Status column (0-indexed)
    const paymentColIndex = FIELD_ORDER.length;
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            setDataValidation: {
              range: {
                sheetId,
                startRowIndex: 1, // skip header row
                startColumnIndex: paymentColIndex,
                endColumnIndex: paymentColIndex + 1,
              },
              rule: {
                condition: {
                  type: "ONE_OF_LIST",
                  values: PAYMENT_STATUS_OPTIONS.map((opt) => ({
                    userEnteredValue: opt,
                  })),
                },
                showCustomUi: true,
                strict: true,
              },
            },
          },
        ],
      },
    });
  }

  const row = [
    ...FIELD_ORDER.map((field) => formatValue(data[field])),
    PAYMENT_STATUS_DEFAULT,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:ZZ`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });
}
