"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step9({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        Parent Confirmation
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Please confirm consent and support for participation.
      </p>

      <div className="mt-6 grid gap-5">
        <fieldset>
          <legend className="text-sm text-[#374151]">
            Has your parent or guardian agreed to let you join Compass? *
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
                  {...register("permission")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
          {errorText(errors.permission?.message as string | undefined)}
        </fieldset>

        <fieldset>
          <legend className="text-sm text-[#374151]">
            Does your parent or guardian commit to supporting you throughout the
            programme? *
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
                  {...register("support_commitment")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
          {errorText(errors.support_commitment?.message as string | undefined)}
        </fieldset>

        <label className="text-sm text-[#374151]">
          What is your parent or guardian&apos;s top priority for you in this
          programme? *
          <select
            {...register("parent_priority")}
            className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30"
          >
            <option value="">Select...</option>
            <option value="Safety">Safety</option>
            <option value="Structure">Structure</option>
            <option value="Career exposure">Career exposure</option>
            <option value="Confidence building">Confidence building</option>
            <option value="Mentorship">Mentorship</option>
          </select>
          {errorText(errors.parent_priority?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
