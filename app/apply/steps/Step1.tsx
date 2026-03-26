"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const labelClass = "mb-2 block text-sm font-medium text-[#111827]";
const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]";
const fieldClass = "space-y-2";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="text-sm text-red-500">{message}</p>;
}

export default function Step1({ register, errors }: StepComponentProps) {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">
          Section 1
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#111827] sm:text-3xl">
          The Basics
        </h2>
      </div>

      <p className="mt-2 text-sm text-[#6b7280]">
        Tell us who you are and how we can reach you.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className={fieldClass}>
          <span className={labelClass}>Full name *</span>
          <input
            type="text"
            {...register("full_name")}
            className={inputClass}
            placeholder="e.g. Ama Serwaa Mensah"
          />
          {errorText(errors.full_name?.message as string | undefined)}
        </label>

        <label className={fieldClass}>
          <span className={labelClass}>Preferred name *</span>
          <input
            type="text"
            {...register("preferred_name")}
            className={inputClass}
            placeholder="e.g. Ama"
          />
          {errorText(errors.preferred_name?.message as string | undefined)}
        </label>

        <label className={fieldClass}>
          <span className={labelClass}>Date of birth *</span>
          <input
            type="date"
            {...register("date_of_birth")}
            className={inputClass}
            placeholder="Select date"
          />
          {errorText(errors.date_of_birth?.message as string | undefined)}
        </label>

        <label className={fieldClass}>
          <span className={labelClass}>Gender *</span>
          <select {...register("gender")} className={inputClass}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
          {errorText(errors.gender?.message as string | undefined)}
        </label>

        <label className={`${fieldClass} md:col-span-2`}>
          <span className={labelClass}>Email *</span>
          <input
            type="email"
            {...register("email")}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errorText(errors.email?.message as string | undefined)}
        </label>

        <label className={fieldClass}>
          <span className={labelClass}>Contact (WhatsApp preferred) *</span>
          <input
            type="tel"
            {...register("phone")}
            className={inputClass}
            placeholder="e.g. +233 24 000 0000"
            onKeyDown={(e) => {
              if (e.ctrlKey || e.metaKey || e.altKey) return;
              if (e.key.length > 1) return;
              if (!/[0-9+ ()-]/.test(e.key)) e.preventDefault();
            }}
          />
          {errorText(errors.phone?.message as string | undefined)}
        </label>

        <label className={fieldClass}>
          <span className={labelClass}>City and area where you live *</span>
          <input
            type="text"
            {...register("location")}
            className={inputClass}
            placeholder="e.g. East Legon, Accra"
          />
          {errorText(errors.location?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
