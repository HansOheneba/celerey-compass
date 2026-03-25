import { z } from "zod";

export const applyFormSchema = z.object({
  full_name: z.string().min(1, "This field is required"),
  preferred_name: z.string().min(1, "This field is required"),
  date_of_birth: z.string().min(1, "This field is required"),
  gender: z.string().optional(),
  email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email"),
  phone: z.string().min(1, "This field is required"),
  location: z.string().min(1, "This field is required"),

  school_name: z.string().min(1, "This field is required"),
  school_type: z.string().min(1, "This field is required"),
  current_year: z.string().min(1, "This field is required"),
  subjects: z.string().min(1, "This field is required"),

  personality_genre: z.string().optional(),
  description_type: z.string().optional(),
  hobbies: z.string().optional(),
  self_taught: z.string().optional(),
  strengths: z.string().optional(),
  improvement_area: z.string().optional(),

  career_interests: z.array(z.string()).min(1).max(3),
  reason: z.string().min(1, "This field is required"),
  prior_experience: z.string().min(1, "This field is required"),
  experience_details: z.string().optional(),

  workplace_type: z.string().optional(),
  work_style: z.string().optional(),
  productive_time: z.string().optional(),

  excitement: z.string().optional(),
  self_discovery_goal: z.string().optional(),
  current_challenge: z.string().optional(),
  reaction_to_difficulty: z.string().optional(),

  devices: z.array(z.string()).min(1),
  internet_access: z.string().optional(),

  parent_name: z.string().min(1, "This field is required"),
  parent_phone: z.string().min(1, "This field is required"),
  parent_email: z
    .string()
    .min(1, "This field is required")
    .email("Enter a valid email"),
  relationship: z.string().min(1, "This field is required"),
  occupation: z.string().min(1, "This field is required"),
  preferred_contact: z.string().optional(),

  permission: z.string().min(1, "This field is required"),
  support_commitment: z.string().min(1, "This field is required"),
  parent_priority: z.string().optional(),

  dream_workplace: z.string().optional(),
  world_problem: z.string().optional(),
  five_years: z.string().optional(),
  expected_change: z.string().optional(),

  future_message: z.string().min(1, "This field is required"),

  commitment_agree: z.string().min(1, "This field is required"),
  schedule_acknowledgement: z.string().min(1, "This field is required"),
});

export type ApplyFormData = z.infer<typeof applyFormSchema>;

export const defaultApplyFormValues: ApplyFormData = {
  full_name: "",
  preferred_name: "",
  date_of_birth: "",
  gender: "",
  email: "",
  phone: "",
  location: "",

  school_name: "",
  school_type: "",
  current_year: "",
  subjects: "",

  personality_genre: "",
  description_type: "",
  hobbies: "",
  self_taught: "",
  strengths: "",
  improvement_area: "",

  career_interests: [],
  reason: "",
  prior_experience: "",
  experience_details: "",

  workplace_type: "",
  work_style: "",
  productive_time: "",

  excitement: "",
  self_discovery_goal: "",
  current_challenge: "",
  reaction_to_difficulty: "",

  devices: [],
  internet_access: "",

  parent_name: "",
  parent_phone: "",
  parent_email: "",
  relationship: "",
  occupation: "",
  preferred_contact: "",

  permission: "",
  support_commitment: "",
  parent_priority: "",

  dream_workplace: "",
  world_problem: "",
  five_years: "",
  expected_change: "",

  future_message: "",

  commitment_agree: "",
  schedule_acknowledgement: "",
};

export const stepSchemas = [
  applyFormSchema.pick({
    full_name: true,
    preferred_name: true,
    date_of_birth: true,
    gender: true,
    email: true,
    phone: true,
    location: true,
  }),
  applyFormSchema.pick({
    school_name: true,
    school_type: true,
    current_year: true,
    subjects: true,
  }),
  applyFormSchema.pick({
    personality_genre: true,
    description_type: true,
    hobbies: true,
    self_taught: true,
    strengths: true,
    improvement_area: true,
  }),
  applyFormSchema.pick({
    career_interests: true,
    reason: true,
    prior_experience: true,
    experience_details: true,
  }),
  applyFormSchema.pick({
    workplace_type: true,
    work_style: true,
    productive_time: true,
  }),
  applyFormSchema.pick({
    excitement: true,
    self_discovery_goal: true,
    current_challenge: true,
    reaction_to_difficulty: true,
  }),
  applyFormSchema.pick({
    devices: true,
    internet_access: true,
  }),
  applyFormSchema.pick({
    parent_name: true,
    parent_phone: true,
    parent_email: true,
    relationship: true,
    occupation: true,
    preferred_contact: true,
  }),
  applyFormSchema.pick({
    permission: true,
    support_commitment: true,
    parent_priority: true,
  }),
  applyFormSchema.pick({
    dream_workplace: true,
    world_problem: true,
    five_years: true,
    expected_change: true,
  }),
  applyFormSchema.pick({
    future_message: true,
  }),
  applyFormSchema.pick({
    commitment_agree: true,
    schedule_acknowledgement: true,
  }),
] as const;

export const stepFieldNames: Array<Array<keyof ApplyFormData>> = [
  [
    "full_name",
    "preferred_name",
    "date_of_birth",
    "email",
    "phone",
    "location",
  ],
  ["school_name", "school_type", "current_year", "subjects"],
  [],
  ["career_interests", "reason", "prior_experience"],
  [],
  [],
  ["devices"],
  ["parent_name", "parent_phone", "parent_email", "relationship", "occupation"],
  ["permission", "support_commitment"],
  [],
  ["future_message"],
  ["commitment_agree", "schedule_acknowledgement"],
];
