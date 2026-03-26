"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step6({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl text-[#111827]">Your Mindset</h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Share what motivates you right now.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          What excites you most about joining Compass? *
          <textarea
            rows={4}
            {...register("excitement")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I'm excited to finally experience what a real workplace feels like and meet professionals in my field"
          />
          {errorText(errors.excitement?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What do you hope to discover about yourself through this programme? *
          <textarea
            rows={4}
            {...register("self_discovery_goal")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I want to find out whether I'm actually suited for a career in law or if I should explore something else"
          />
          {errorText(errors.self_discovery_goal?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What is one challenge you are currently facing about your future? *
          <textarea
            rows={4}
            {...register("current_challenge")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I have no idea which career path is right for me and it stresses me out"
          />
          {errorText(errors.current_challenge?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          How do you react to difficulty? *
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
          {errorText(
            errors.reaction_to_difficulty?.message as string | undefined,
          )}
        </label>
      </div>
    </section>
  );
}
