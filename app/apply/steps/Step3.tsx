"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

export default function Step3({ register }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        Tell Us About You
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        There are no wrong answers here. Share what feels true to you.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          If your personality were a movie genre
          <select {...register("personality_genre")} className={inputClass}>
            <option value="">Select...</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Mystery">Mystery</option>
            <option value="Documentary">Documentary</option>
            <option value="Something else">Something else</option>
          </select>
        </label>

        <label className="text-sm text-[#374151]">
          Which best describes you
          <select {...register("description_type")} className={inputClass}>
            <option value="">Select...</option>
            <option value="Curious explorer">Curious explorer</option>
            <option value="Creative thinker">Creative thinker</option>
            <option value="Quiet observer">Quiet observer</option>
            <option value="Problem solver">Problem solver</option>
            <option value="Future leader">Future leader</option>
            <option value="Still figuring it out">Still figuring it out</option>
          </select>
        </label>

        <label className="text-sm text-[#374151]">
          What do you enjoy doing most when nobody is forcing you
          <textarea
            rows={4}
            {...register("hobbies")}
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="text-sm text-[#374151]">
          Something you have taught yourself without being told
          <input
            type="text"
            {...register("self_taught")}
            className={inputClass}
          />
        </label>

        <label className="text-sm text-[#374151]">
          One thing people often say you are good at
          <input
            type="text"
            {...register("strengths")}
            className={inputClass}
          />
        </label>

        <label className="text-sm text-[#374151]">
          One thing you want to get better at
          <input
            type="text"
            {...register("improvement_area")}
            className={inputClass}
          />
        </label>
      </div>
    </section>
  );
}
