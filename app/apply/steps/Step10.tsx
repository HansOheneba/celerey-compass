"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step10({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl text-[#111827]">
        The Big Thinking Questions
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Think broadly and share your vision.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          If you could spend one day working anywhere in the world, where would
          it be and why? *
          <textarea
            rows={4}
            {...register("dream_workplace")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. A tech company in Silicon Valley — I'd love to see how engineers build products that millions of people use every day"
          />
          {errorText(errors.dream_workplace?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What is one problem in the world you would love to help solve? *
          <textarea
            rows={4}
            {...register("world_problem")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I'd love to help improve access to good healthcare in rural communities"
          />
          {errorText(errors.world_problem?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          Imagine yourself five years from now. What are you doing? *
          <textarea
            rows={4}
            {...register("five_years")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I see myself in university studying computer science and working on a side project I'm passionate about"
          />
          {errorText(errors.five_years?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          If Compass works perfectly for you, what would change in your life? *
          <textarea
            rows={4}
            {...register("expected_change")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I'd have a clear career direction, real experience on my CV, and the confidence to go after what I want"
          />
          {errorText(errors.expected_change?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
