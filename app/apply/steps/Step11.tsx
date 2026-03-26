"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step11({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        Message to Your Future Self
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Write honestly. This is for future-you.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          Write a message to yourself five years from now. What do you want to say? *
          <textarea
            rows={8}
            {...register("future_message")}
            className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30"
            placeholder="e.g. Hey, I hope you stayed true to yourself. I hope you went after that big dream even when it scared you. Be proud of how far you've come..."
          />
          {errorText(errors.future_message?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
