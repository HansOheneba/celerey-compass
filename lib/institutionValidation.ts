import { z } from "zod";

const phoneSchema = z
  .string()
  .min(1, "This field is required")
  .regex(
    /^\+[1-9]\d{10,15}$/,
    "Enter a valid number with country code (e.g. +233241234567)",
  );

// Base object — used for step-level .pick() calls
const institutionBaseSchema = z.object({
  // Section 1 — Company Details
  companyName: z.string().min(1, "This field is required"),
  industrySector: z.string().min(1, "This field is required"),
  companyWebsite: z.string().optional(),
  companyAddress: z.string().min(1, "This field is required"),
  employeeCount: z.string().min(1, "Please select one"),
  heardAbout: z.string().min(1, "This field is required"),

  // Section 2 — Primary Contact
  primaryContactName: z.string().min(1, "This field is required"),
  primaryContactTitle: z.string().min(1, "This field is required"),
  primaryContactEmail: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email"),
  primaryContactPhone: phoneSchema,

  // Section 3 — Supervisor / Mentor
  supervisorSameAsPrimary: z.boolean(),
  supervisorName: z.string().min(1, "This field is required"),
  supervisorTitle: z.string().min(1, "This field is required"),
  supervisorEmail: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email"),
  supervisorPhone: phoneSchema,
  supervisorExperience: z.string().min(1, "Please select one"),
  supervisorHasMentored: z.string().min(1, "Please select one"),

  // Section 4 — Placement Details
  studentsToHost: z.string().min(1, "Please select one"),
  workArea: z.string().min(1, "This field is required"),
  workDescription: z
    .string()
    .min(10, "Please give a brief description (at least 10 characters)"),

  // Section 5 — Confirmation
  confirmedReadProposal: z
    .boolean()
    .refine((v) => v === true, "You must confirm this"),
  confirmedMentor: z
    .boolean()
    .refine((v) => v === true, "You must confirm this"),
  confirmedFeedbackForm: z
    .boolean()
    .refine((v) => v === true, "You must confirm this"),
  confirmedDates: z
    .boolean()
    .refine((v) => v === true, "You must confirm this"),
  confirmedCodeOfConduct: z
    .boolean()
    .refine((v) => v === true, "You must confirm this"),

  // Section 6 — Anything Else
  additionalNotes: z.string().optional(),
});

// All fields always required — supervisor section uses auto-fill via UI
export const institutionFormSchema = institutionBaseSchema;

export type InstitutionFormData = z.infer<typeof institutionFormSchema>;

export const defaultInstitutionFormValues: InstitutionFormData = {
  companyName: "",
  industrySector: "",
  companyWebsite: "",
  companyAddress: "",
  employeeCount: "",
  heardAbout: "",
  primaryContactName: "",
  primaryContactTitle: "",
  primaryContactEmail: "",
  primaryContactPhone: "+",
  supervisorSameAsPrimary: false,
  supervisorName: "",
  supervisorTitle: "",
  supervisorEmail: "",
  supervisorPhone: "+",
  supervisorExperience: "",
  supervisorHasMentored: "",
  studentsToHost: "",
  workArea: "",
  workDescription: "",
  confirmedReadProposal: false,
  confirmedMentor: false,
  confirmedFeedbackForm: false,
  confirmedDates: false,
  confirmedCodeOfConduct: false,
  additionalNotes: "",
};

// ── Step-level schemas (used for isCurrentStepValid) ─────────────────────────

export const institutionStepSchemas = [
  // Step 0 — Company Details
  institutionBaseSchema.pick({
    companyName: true,
    industrySector: true,
    companyAddress: true,
    employeeCount: true,
    heardAbout: true,
  }),
  // Step 1 — Primary Contact
  institutionBaseSchema.pick({
    primaryContactName: true,
    primaryContactTitle: true,
    primaryContactEmail: true,
    primaryContactPhone: true,
  }),
  // Step 2 — Supervisor (all fields always required; UI auto-fills from primary contact)
  institutionBaseSchema.pick({
    supervisorSameAsPrimary: true,
    supervisorName: true,
    supervisorTitle: true,
    supervisorEmail: true,
    supervisorPhone: true,
    supervisorExperience: true,
    supervisorHasMentored: true,
  }),
  // Step 3 — Placement Details
  institutionBaseSchema.pick({
    studentsToHost: true,
    workArea: true,
    workDescription: true,
  }),
  // Step 4 — Confirmation
  institutionBaseSchema.pick({
    confirmedReadProposal: true,
    confirmedMentor: true,
    confirmedFeedbackForm: true,
    confirmedDates: true,
    confirmedCodeOfConduct: true,
  }),
  // Step 5 — Anything Else (all optional)
  z.object({ additionalNotes: z.string().optional() }),
] as const;

export const institutionStepFieldNames: Array<
  Array<keyof InstitutionFormData>
> = [
  [
    "companyName",
    "industrySector",
    "companyAddress",
    "employeeCount",
    "heardAbout",
  ],
  [
    "primaryContactName",
    "primaryContactTitle",
    "primaryContactEmail",
    "primaryContactPhone",
  ],
  [
    "supervisorSameAsPrimary",
    "supervisorName",
    "supervisorTitle",
    "supervisorEmail",
    "supervisorPhone",
    "supervisorExperience",
    "supervisorHasMentored",
  ],
  ["studentsToHost", "workArea", "workDescription"],
  [
    "confirmedReadProposal",
    "confirmedMentor",
    "confirmedFeedbackForm",
    "confirmedDates",
    "confirmedCodeOfConduct",
  ],
  [],
];
