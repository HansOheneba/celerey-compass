"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step12({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl text-[#111827]">
        Commitment and Readiness
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Final acknowledgements before submission.
      </p>

      <div className="mt-6 grid gap-6">
        <fieldset>
          <legend className="text-sm text-[#374151]">
            I understand that Compass is a real learning experience and I commit
            to showing up fully *
          </legend>
          <div className="mt-3 flex gap-5">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="inline-flex items-center gap-2 text-sm text-[#374151]"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("commitment_agree")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
          {errorText(errors.commitment_agree?.message as string | undefined)}
        </fieldset>

        <fieldset>
          <legend className="text-sm text-[#374151]">
            I understand the weekly schedule: Monday learning sessions, Tuesday
            to Thursday internship work, and Friday reflections *
          </legend>
          <div className="mt-3 flex gap-5">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="inline-flex items-center gap-2 text-sm text-[#374151]"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("schedule_acknowledgement")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
          {errorText(
            errors.schedule_acknowledgement?.message as string | undefined,
          )}
        </fieldset>
      </div>
    </section>
  );
}
