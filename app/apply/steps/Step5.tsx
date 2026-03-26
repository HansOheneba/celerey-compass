"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step5({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        Internship Preferences
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Tell us how you prefer to work and learn.
      </p>

      <div className="mt-6 grid gap-5">
        <label className="text-sm text-[#374151]">
          What type of workplace would you like to intern at? *
          <select {...register("workplace_type")} className={inputClass}>
            <option value="">Select...</option>
            <option value="Law firm">Law firm</option>
            <option value="Tech company">Tech company</option>
            <option value="Corporate office">Corporate office</option>
            <option value="Creative studio">Creative studio</option>
            <option value="Bank or finance firm">Bank or finance firm</option>
            <option value="NGO or social enterprise">
              NGO or social enterprise
            </option>
            <option value="Startup">Startup</option>
            <option value="Government office">Government office</option>
          </select>
          {errorText(errors.workplace_type?.message as string | undefined)}
        </label>

        <fieldset>
          <legend className="text-sm text-[#374151]">How would you prefer to work during your internship? *</legend>
          <div className="mt-3 flex flex-wrap gap-4">
            {["Mostly in-person", "Mostly virtual", "A mix of both"].map(
              (value) => (
                <label
                  key={value}
                  className="inline-flex items-center gap-2 text-sm text-[#374151]"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("work_style")}
                    className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                  />
                  {value}
                </label>
              ),
            )}
          </div>
          {errorText(errors.work_style?.message as string | undefined)}
        </fieldset>

        <fieldset>
          <legend className="text-sm text-[#374151]">
            When do you do your best work or studying? *
          </legend>
          <div className="mt-3 flex flex-wrap gap-4">
            {["Morning", "Afternoon", "Evening"].map((value) => (
              <label
                key={value}
                className="inline-flex items-center gap-2 text-sm text-[#374151]"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("productive_time")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
          {errorText(errors.productive_time?.message as string | undefined)}
        </fieldset>
      </div>
    </section>
  );
}
