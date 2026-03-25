"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

export default function Step10({ register }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        The Big Thinking Questions
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Think broadly and share your vision.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          If you could spend one day working anywhere in the world, where would
          it be and why
          <textarea
            rows={4}
            {...register("dream_workplace")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          What problem in the world would you love to help solve
          <textarea
            rows={4}
            {...register("world_problem")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          Imagine yourself five years from now. What are you doing
          <textarea
            rows={4}
            {...register("five_years")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          If Compass works perfectly for you, what would change
          <textarea
            rows={4}
            {...register("expected_change")}
            className={`${inputClass} resize-y`}
          />
        </label>
      </div>
    </section>
  );
}
