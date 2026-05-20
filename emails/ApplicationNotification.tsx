import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import type { ApplyFormData } from "@/lib/applyValidation";

interface ApplicationNotificationEmailProps {
  data: ApplyFormData;
  sheetUrl: string;
}

const FIELD_LABELS: Partial<Record<keyof ApplyFormData, string>> = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  whatsapp: "WhatsApp",
  country: "Country",
  yearGroup: "Year Group",
  schoolName: "School",
  birthday: "Date of Birth",
  industries: "Industries of Interest",
  workEnergisers: "Work Energisers",
  seekingScholarship: "Seeking Scholarship",
  guardianFirstName: "Guardian First Name",
  guardianLastName: "Guardian Last Name",
  guardianEmail: "Guardian Email",
  guardianWhatsapp: "Guardian WhatsApp",
};

function formatFieldValue(value: ApplyFormData[keyof ApplyFormData]): string {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (value === null || value === undefined || value === "") return "-";
  return String(value);
}

export function ApplicationNotificationEmail({
  data,
  sheetUrl,
}: ApplicationNotificationEmailProps) {
  const applicantName = `${data.firstName} ${data.lastName}`;
  const isScholarship = Boolean(data.seekingScholarship);

  const summaryFields: Array<keyof ApplyFormData> = [
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
    "seekingScholarship",
    "guardianFirstName",
    "guardianLastName",
    "guardianEmail",
    "guardianWhatsapp",
  ];

  return (
    <Html lang="en">
      <Head />
      <Preview>
        New Compass application from {applicantName}
        {isScholarship ? " (scholarship)" : ""}
      </Preview>

      <Tailwind>
        <Body className="bg-slate-100 font-sans">
          <Container className="mx-auto py-12 px-4 max-w-xl">
            {/* Brand label */}
            <Text className="text-xs font-bold tracking-widest uppercase text-slate-400 text-center m-0 mb-2">
              Compass • A Celerey Program
            </Text>

            {/* Hero */}
            <Section className="bg-slate-900 rounded-2xl px-8 py-10 text-center mt-2">
              <Text className="text-4xl m-0">{isScholarship ? "🎓" : "📋"}</Text>
              <Text className="text-white text-2xl font-bold mt-4 mb-2 leading-snug m-0">
                New Application Received
              </Text>
              <Text className="text-slate-400 text-base m-0 leading-relaxed">
                {applicantName} just applied to Compass
                {isScholarship ? " and is seeking a scholarship." : "."}
              </Text>
            </Section>

            {/* Summary card */}
            <Section className="bg-white rounded-2xl px-8 py-8 mt-4">
              <Text className="text-xs font-bold tracking-widest uppercase text-slate-400 m-0 mb-4">
                Applicant Summary
              </Text>

              {summaryFields.map((key) => (
                <Section key={key} className="mb-1">
                  <Text className="text-xs text-slate-400 m-0">
                    {FIELD_LABELS[key] ?? key}
                  </Text>
                  <Text className="text-sm text-slate-800 font-medium m-0 mb-3">
                    {formatFieldValue(data[key])}
                  </Text>
                </Section>
              ))}

              <Hr className="border-slate-200 my-6" />

              <Text className="text-slate-600 text-sm leading-relaxed m-0 mb-6">
                The full submission has been written to the Applications sheet.
                Click below to view all responses and update the payment status.
              </Text>

              <Button
                href={sheetUrl}
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold text-sm inline-block box-border"
              >
                Open Applications Sheet
              </Button>
            </Section>

            <Section className="mt-6 text-center">
              <Text className="text-xs text-slate-400 leading-relaxed m-0">
                This is an internal notification sent by the Compass application
                system.
                <br />
                © {new Date().getFullYear()} Celerey. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ApplicationNotificationEmail.PreviewProps = {
  data: {
    firstName: "Alex",
    lastName: "Mensah",
    email: "alex@example.com",
    whatsapp: "+233241234567",
    country: "Ghana",
    yearGroup: "Year 11",
    schoolName: "Accra Academy",
    birthday: "2008-03-15",
    industries: ["Finance", "Technology"],
    workEnergisers: ["Problem solving", "Research"],
    curiosity: "I am endlessly curious about how financial systems work.",
    compassGoal: "I want to discover whether a career in finance suits me.",
    futureWorries: "",
    comfortInNewEnvs: 4,
    responseToSetbacks: 3,
    clarityOnFuture: 2,
    heardAbout: "Instagram",
    guardianFirstName: "Kwame",
    guardianLastName: "Mensah",
    guardianEmail: "kwame@example.com",
    guardianWhatsapp: "+233241234568",
    additionalNotes: "",
    seekingScholarship: true,
    agreedToTerms: true,
  },
  sheetUrl:
    "https://docs.google.com/spreadsheets/d/1dykrFMQp0uy95BOnqttMA_nt8fyn0v1NaiDlMiOfsQo/edit?gid=0#gid=0",
} satisfies ApplicationNotificationEmailProps;

export default ApplicationNotificationEmail;
