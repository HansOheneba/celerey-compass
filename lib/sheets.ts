import { google } from "googleapis";
import type { ApplyFormData } from "@/lib/applyValidation";

const SHEET_NAME = "Applications";

const FIELD_ORDER: Array<keyof ApplyFormData> = [
  "firstName",
  "lastName",
  "email",
  "whatsapp",
  "country",
  "yearGroup",
  "schoolName",
  "birthday",
  "industries",
  "workEnergisers",
  "curiosity",
  "compassGoal",
  "futureWorries",
  "comfortInNewEnvs",
  "responseToSetbacks",
  "clarityOnFuture",
  "heardAbout",
  "guardianFirstName",
  "guardianLastName",
  "guardianEmail",
  "guardianWhatsapp",
  "additionalNotes",
  "agreedToTerms",
];

const PAYMENT_STATUS_HEADER = "Payment Status";
const PAYMENT_STATUS_DEFAULT = "Pending";
const PAYMENT_STATUS_OPTIONS = ["Pending", "Paid", "Failed", "Refunded"];

const HEADERS: Record<keyof ApplyFormData, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email Address",
  whatsapp: "WhatsApp Number",
  country: "Country",
  yearGroup: "Year Group",
  schoolName: "School Name",
  birthday: "Date of Birth",
  industries: "Industries of Interest",
  workEnergisers: "Work Energisers",
  curiosity: "Curiosity",
  compassGoal: "Compass Goal",
  futureWorries: "Future Worries",
  comfortInNewEnvs: "Comfort in New Environments (1–5)",
  responseToSetbacks: "Response to Setbacks (1–5)",
  clarityOnFuture: "Clarity on Future (1–5)",
  heardAbout: "How They Heard About Compass",
  guardianFirstName: "Guardian First Name",
  guardianLastName: "Guardian Last Name",
  guardianEmail: "Guardian Email",
  guardianWhatsapp: "Guardian WhatsApp",
  additionalNotes: "Additional Notes",
  agreedToTerms: "Agreed to Terms",
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
