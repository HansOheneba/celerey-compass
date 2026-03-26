"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step2({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        School Information
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Help us understand your learning background.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          What school do you attend? *
          <input
            type="text"
            {...register("school_name")}
            className={inputClass}
            placeholder="e.g. Accra Academy, Achimota School"
          />
          {errorText(errors.school_name?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What type of school is it? *
          <select {...register("school_type")} className={inputClass}>
            <option value="">Select school type...</option>
            <option value="IB">IB</option>
            <option value="A Level">A Level</option>
            <option value="WASSCE">WASSCE</option>
            <option value="University">University</option>
            <option value="Other">Other</option>
          </select>
          {errorText(errors.school_type?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What class or year are you in? *
          <input
            type="text"
            {...register("current_year")}
            className={inputClass}
            placeholder="e.g. Year 2, Form 3, 100 Level"
          />
          {errorText(errors.current_year?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          List the subjects you are currently studying *
          <textarea
            rows={5}
            {...register("subjects")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. Maths, English, Physics, Economics, Business"
          />
          {errorText(errors.subjects?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
