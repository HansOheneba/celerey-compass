import { z } from "zod";

export const applyFormSchema = z.object({
  // Section 1
  firstName: z.string().min(1, "This field is required"),
  lastName: z.string().min(1, "This field is required"),
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email"),
  whatsapp: z.string().min(1, "This field is required"),
  country: z.string().min(1, "This field is required"),
  yearGroup: z.string().min(1, "This field is required"),
  schoolName: z.string().min(1, "This field is required"),
  birthday: z.string().min(1, "This field is required"),

  // Section 2
  industries: z
    .array(z.string())
    .min(1, "Select at least one")
    .max(3, "Pick up to three"),
  workEnergisers: z.array(z.string()).min(1, "Select at least one"),

  // Section 3
  curiosity: z.string().min(1, "This field is required"),
  compassGoal: z.string().min(1, "This field is required"),
  futureWorries: z.string().optional(),

  // Section 4
  comfortInNewEnvs: z.number().min(1, "Please rate this").max(5),
  responseToSetbacks: z.number().min(1, "Please rate this").max(5),
  clarityOnFuture: z.number().min(1, "Please rate this").max(5),
  heardAbout: z.string().min(1, "This field is required"),

  // Section 5
  guardianFirstName: z.string().min(1, "This field is required"),
  guardianLastName: z.string().min(1, "This field is required"),
  guardianEmail: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email"),
  guardianWhatsapp: z.string().min(1, "This field is required"),
  additionalNotes: z.string().optional(),
  agreedToTerms: z
    .boolean()
    .refine((v) => v === true, "You must agree to the terms"),
});

export type ApplyFormData = z.infer<typeof applyFormSchema>;

export const defaultApplyFormValues: ApplyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  whatsapp: "",
  country: "",
  yearGroup: "",
  schoolName: "",
  birthday: "",
  industries: [],
  workEnergisers: [],
  curiosity: "",
  compassGoal: "",
  futureWorries: "",
  comfortInNewEnvs: 0,
  responseToSetbacks: 0,
  clarityOnFuture: 0,
  heardAbout: "",
  guardianFirstName: "",
  guardianLastName: "",
  guardianEmail: "",
  guardianWhatsapp: "",
  additionalNotes: "",
  agreedToTerms: false,
};

export const stepSchemas = [
  applyFormSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    whatsapp: true,
    country: true,
    yearGroup: true,
    schoolName: true,
    birthday: true,
  }),
  applyFormSchema.pick({
    industries: true,
    workEnergisers: true,
  }),
  applyFormSchema.pick({
    curiosity: true,
    compassGoal: true,
  }),
  applyFormSchema.pick({
    comfortInNewEnvs: true,
    responseToSetbacks: true,
    clarityOnFuture: true,
    heardAbout: true,
  }),
  applyFormSchema.pick({
    guardianFirstName: true,
    guardianLastName: true,
    guardianEmail: true,
    guardianWhatsapp: true,
    agreedToTerms: true,
  }),
] as const;

export const stepFieldNames: Array<Array<keyof ApplyFormData>> = [
  [
    "firstName",
    "lastName",
    "email",
    "whatsapp",
    "country",
    "yearGroup",
    "schoolName",
    "birthday",
  ],
  ["industries", "workEnergisers"],
  ["curiosity", "compassGoal"],
  ["comfortInNewEnvs", "responseToSetbacks", "clarityOnFuture", "heardAbout"],
  [
    "guardianFirstName",
    "guardianLastName",
    "guardianEmail",
    "guardianWhatsapp",
    "agreedToTerms",
  ],
];
