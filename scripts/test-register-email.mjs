/**
 * Test script for the institution registration email.
 * Run while the dev server is running:
 *   node scripts/test-register-email.mjs
 *
 * Optionally override the recipient:
 *   EMAIL=you@example.com node scripts/test-register-email.mjs
 */

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

const testPayload = {
  // Section 1 — Company details
  companyName: "Acme Capital Ltd",
  industrySector: "Finance",
  companyWebsite: "https://acmecapital.example.com",
  companyAddress: "123 Business Ave, London, EC1A 1BB",
  employeeCount: "51-200",
  heardAbout: "LinkedIn",

  // Section 2 — Primary contact
  primaryContactName: "Jane Smith",
  primaryContactTitle: "HR Manager",
  primaryContactEmail: "tech@celerey.co",
  primaryContactPhone: "+447911123456",

  // Section 3 — Supervisor / mentor
  sameAsPrimary: false,
  supervisorName: "John Doe",
  supervisorTitle: "Senior Manager",
  supervisorEmail: "jdoe@acmecapital.example.com",
  supervisorPhone: "+447922654321",
  supervisorExperience: "5+ years",
  supervisorHasMentored: "Yes",

  // Section 4 — Placement details
  studentsToHost: "2",
  workArea: "Investment Analysis",
  workDescription:
    "Students will support the investment analysis team by conducting market research, building financial models, and preparing client-facing presentations.",

  // Section 5 — Confirmations
  confirmWorkplace: true,
  confirmMentor: true,
  confirmDates: true,
  confirmEngagement: true,
  confirmCode: true,

  // Section 6 — Additional notes
  additionalNotes: "We are happy to host students from any background.",
};

async function main() {
  // Quick connectivity check before sending
  try {
    await fetch(BASE_URL, { signal: AbortSignal.timeout(3000) });
  } catch {
    console.error(
      `❌ Could not reach ${BASE_URL}. Is the dev server running?\n   Start it with: npm run dev`,
    );
    process.exit(1);
  }

  console.log(`Sending test registration to ${BASE_URL}/api/register …`);
  console.log(`Email will go to: ${testPayload.primaryContactEmail}\n`);

  const res = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testPayload),
  });

  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    console.error(
      `❌ Server returned non-JSON (${res.status} ${res.statusText}):`,
    );
    console.error(text.slice(0, 500));
    process.exit(1);
  }

  const data = await res.json();

  if (!res.ok) {
    console.error(`❌ Request failed (${res.status} ${res.statusText}):`);
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  console.log("✅ Success:", data.message);
  console.log("Check your inbox (and the Institutions tab in Google Sheets).");
}

main().catch((err) => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
