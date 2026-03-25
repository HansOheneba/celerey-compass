"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

export default function Step6({ register }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">Your Mindset</h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Share what motivates you right now.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          What makes you excited about joining Compass
          <textarea
            rows={4}
            {...register("excitement")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          What are you hoping to discover about yourself
          <textarea
            rows={4}
            {...register("self_discovery_goal")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          One challenge you are currently facing about your future
          <textarea
            rows={4}
            {...register("current_challenge")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          How do you react to difficulty?
          <select
            {...register("reaction_to_difficulty")}
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="Keep trying">Keep trying</option>
            <option value="Ask for help">Ask for help</option>
            <option value="Take a break">Take a break</option>
            <option value="Avoid it">Avoid it</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
      </div>
    </section>
  );
}
