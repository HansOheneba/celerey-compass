"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { InstitutionFormData } from "@/lib/institutionValidation";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./shared";

const CONFIRMATIONS: {
  name: keyof Pick<
    InstitutionFormData,
    | "confirmedReadProposal"
    | "confirmedMentor"
    | "confirmedFeedbackForm"
    | "confirmedDates"
    | "confirmedCodeOfConduct"
  >;
  label: string;
}[] = [
  {
    name: "confirmedReadProposal",
    label:
      "We have read the Compass Experience Partnership Proposal and understand what is required of us as a host company.",
  },
  {
    name: "confirmedMentor",
    label:
      "We commit to providing a designated mentor / supervisor who will spend approximately 2–3 hours per week with the student.",
  },
  {
    name: "confirmedFeedbackForm",
    label:
      "We agree to complete the end-of-programme mentor feedback form by Friday, August 7, 2026.",
  },
  {
    name: "confirmedDates",
    label:
      "We understand that students are engaged from July 6 – August 7, 2026.",
  },
  {
    name: "confirmedCodeOfConduct",
    label:
      "We agree to uphold the Compass student code of conduct within our workplace.",
  },
];

interface Props {
  control: Control<InstitutionFormData>;
  errors: FieldErrors<InstitutionFormData>;
}

export function Section5({ control, errors }: Props) {
  return (
    <div className="space-y-3">
      {CONFIRMATIONS.map(({ name, label }) => (
        <Controller
          key={name}
          control={control}
          name={name}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4 transition-colors hover:border-teal-200">
                <Checkbox
                  id={name}
                  checked={field.value as boolean}
                  onCheckedChange={field.onChange}
                  className="mt-0.5 shrink-0 data-[state=checked]:border-teal-600 data-[state=checked]:bg-teal-600"
                />
                <label
                  htmlFor={name}
                  className="cursor-pointer text-sm leading-relaxed text-[#374151]"
                >
                  {label}
                </label>
              </div>
              <FieldError
                message={(errors[name] as { message?: string })?.message}
              />
            </div>
          )}
        />
      ))}
    </div>
  );
}
