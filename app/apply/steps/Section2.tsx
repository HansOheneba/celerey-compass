"use client";

import type { FieldErrors } from "react-hook-form";
import type { ApplyFormData } from "@/lib/applyValidation";
import { FieldError } from "./shared";

const INDUSTRY_OPTIONS = [
  "Fintech",
  "Agritech",
  "Creative industries",
  "Healthcare",
  "Education",
  "Media & journalism",
  "Social enterprise",
  "Technology",
  "Business & strategy",
  "Not sure yet",
];

const WORK_OPTIONS = [
  "Building things",
  "Solving problems",
  "Working with people",
  "Creating and designing",
  "Analysing and researching",
  "Leading and organising",
  "Writing and communicating",
  "Trying new things",
];

interface Props {
  industries: string[];
  workEnergisers: string[];
  toggleIndustry: (item: string) => void;
  toggleWork: (item: string) => void;
  errors: FieldErrors<ApplyFormData>;
}

export function Section2({
  industries,
  workEnergisers,
  toggleIndustry,
  toggleWork,
  errors,
}: Props) {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-semibold text-[#0f1f1e]">
          Which industries genuinely interest you?
        </p>
        <p className="mb-3 text-xs text-[#9ca3af]">Pick up to three.</p>
        <div className="flex flex-wrap gap-2">
          {INDUSTRY_OPTIONS.map((opt) => {
            const selected = industries.includes(opt);
            const maxed = industries.length >= 3 && !selected;
            return (
              <button
                key={opt}
                type="button"
                disabled={maxed}
                onClick={() => toggleIndustry(opt)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  selected
                    ? "border-teal-600 bg-teal-600 text-white"
                    : maxed
                      ? "cursor-not-allowed border-gray-200 text-[#9ca3af]"
                      : "border-gray-300 text-[#374151] hover:border-teal-400 hover:text-teal-600"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <FieldError message={errors.industries?.message} />
      </div>

      <div>
        <p className="mb-1 text-sm font-semibold text-[#0f1f1e]">
          What kind of work energises you?
        </p>
        <p className="mb-3 text-xs text-[#9ca3af]">Pick all that feel true.</p>
        <div className="flex flex-wrap gap-2">
          {WORK_OPTIONS.map((opt) => {
            const selected = workEnergisers.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => toggleWork(opt)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  selected
                    ? "border-teal-600 bg-teal-600 text-white"
                    : "border-gray-300 text-[#374151] hover:border-teal-400 hover:text-teal-600"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <FieldError message={errors.workEnergisers?.message} />
      </div>
    </div>
  );
}
