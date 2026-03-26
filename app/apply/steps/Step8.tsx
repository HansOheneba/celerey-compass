"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step8({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        Parent or Guardian Information
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        We need a responsible adult contact before onboarding.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          Parent or guardian full name *
          <input
            type="text"
            {...register("parent_name")}
            className={inputClass}
            placeholder="e.g. Abena Mensah"
          />
          {errorText(errors.parent_name?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          Parent or guardian phone number *
          <input
            type="tel"
            {...register("parent_phone")}
            className={inputClass}
            placeholder="e.g. +233 24 000 0000"
            onKeyDown={(e) => {
              if (e.ctrlKey || e.metaKey || e.altKey) return;
              if (e.key.length > 1) return;
              if (!/[0-9+ ()-]/.test(e.key)) e.preventDefault();
            }}
          />
          {errorText(errors.parent_phone?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          Parent or guardian email address *
          <input
            type="email"
            {...register("parent_email")}
            className={inputClass}
            placeholder="e.g. parent@example.com"
          />
          {errorText(errors.parent_email?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          Relationship *
          <select {...register("relationship")} className={inputClass}>
            <option value="">Select...</option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Guardian">Guardian</option>
            <option value="Other">Other</option>
          </select>
          {errorText(errors.relationship?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What is their occupation? *
          <input
            type="text"
            {...register("occupation")}
            className={inputClass}
            placeholder="e.g. Nurse, Teacher, Business owner, Engineer"
          />
          {errorText(errors.occupation?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          How would they prefer to be contacted? *
          <select {...register("preferred_contact")} className={inputClass}>
            <option value="">Select...</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
          {errorText(errors.preferred_contact?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
