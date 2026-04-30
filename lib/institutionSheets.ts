import { google } from "googleapis";
import type { InstitutionFormData } from "@/lib/institutionValidation";

const SHEET_NAME = "Institutions";

const FIELD_ORDER: Array<keyof InstitutionFormData> = [
  // Section 1
  "companyName",
  "industrySector",
  "companyWebsite",
  "companyAddress",
  "employeeCount",
  "heardAbout",
  // Section 2
  "primaryContactName",
  "primaryContactTitle",
  "primaryContactEmail",
  "primaryContactPhone",
  // Section 3
  "supervisorSameAsPrimary",
  "supervisorName",
  "supervisorTitle",
  "supervisorEmail",
  "supervisorPhone",
  "supervisorExperience",
  "supervisorHasMentored",
  // Section 4
  "studentsToHost",
  "workArea",
  "workDescription",
  // Section 5
  "confirmedReadProposal",
  "confirmedMentor",
  "confirmedFeedbackForm",
  "confirmedDates",
  "confirmedCodeOfConduct",
  // Section 6
  "additionalNotes",
];

const HEADERS: Record<keyof InstitutionFormData, string> = {
  companyName: "Company Name",
  industrySector: "Industry / Sector",
  companyWebsite: "Company Website",
  companyAddress: "Company Address",
  employeeCount: "Employee Count",
  heardAbout: "How They Heard About Compass",
  primaryContactName: "Primary Contact Name",
  primaryContactTitle: "Primary Contact Job Title",
  primaryContactEmail: "Primary Contact Email",
  primaryContactPhone: "Primary Contact Phone",
  supervisorSameAsPrimary: "Supervisor Same As Primary Contact",
  supervisorName: "Supervisor Name",
  supervisorTitle: "Supervisor Job Title",
  supervisorEmail: "Supervisor Email",
  supervisorPhone: "Supervisor Phone",
  supervisorExperience: "Supervisor Experience",
  supervisorHasMentored: "Supervisor Has Mentored Before",
  studentsToHost: "Students to Host",
  workArea: "Work Area(s)",
  workDescription: "Work Description",
  confirmedReadProposal: "Confirmed: Read Proposal",
  confirmedMentor: "Confirmed: Mentor Commitment",
  confirmedFeedbackForm: "Confirmed: Feedback Form",
  confirmedDates: "Confirmed: Dates",
  confirmedCodeOfConduct: "Confirmed: Code of Conduct",
  additionalNotes: "Additional Notes",
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

function formatValue(value: InstitutionFormData[keyof InstitutionFormData]) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(" | ");
  return value ?? "";
}

export async function appendInstitutionToSheet(
  data: InstitutionFormData,
): Promise<void> {
  const { sheets, spreadsheetId } = getSheetsClient();

  const headerResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A1:ZZ1`,
  });

  const headerValues = headerResponse.data.values?.[0] ?? [];

  if (headerValues.length === 0) {
    const headerRow = FIELD_ORDER.map((field) => HEADERS[field]);
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [headerRow] },
    });
  }

  const row = FIELD_ORDER.map((field) => formatValue(data[field]));

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:ZZ`,
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  });
}
