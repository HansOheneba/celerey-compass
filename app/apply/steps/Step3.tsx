"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step3({ register, errors }: StepComponentProps) {
  return (
    <section>
      <h2 className="text-2xl text-[#111827]">
        Tell Us About You
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        There are no wrong answers here. Share what feels true to you.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm text-[#374151]">
          If your personality were a movie genre, what movie would it be? *
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
          {errorText(errors.personality_genre?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          Which best describes you *
          <select {...register("description_type")} className={inputClass}>
            <option value="">Select...</option>
            <option value="Curious explorer">Curious explorer</option>
            <option value="Creative thinker">Creative thinker</option>
            <option value="Quiet observer">Quiet observer</option>
            <option value="Problem solver">Problem solver</option>
            <option value="Future leader">Future leader</option>
            <option value="Still figuring it out">Still figuring it out</option>
          </select>
          {errorText(errors.description_type?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What do you love doing in your free time? *
          <textarea
            rows={4}
            {...register("hobbies")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I love drawing, playing football, making music, and watching documentaries"
          />
          {errorText(errors.hobbies?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          Name something you taught yourself — without anyone telling you to *
          <input
            type="text"
            {...register("self_taught")}
            className={inputClass}
            placeholder="e.g. I taught myself how to edit videos"
          />
          {errorText(errors.self_taught?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What is one thing people often say you are good at? *
          <input
            type="text"
            {...register("strengths")}
            className={inputClass}
            placeholder="e.g. I'm good at organising things and leading group work"
          />
          {errorText(errors.strengths?.message as string | undefined)}
        </label>

        <label className="text-sm text-[#374151]">
          What is one area you would like to improve in? *
          <input
            type="text"
            {...register("improvement_area")}
            className={inputClass}
            placeholder="e.g. I want to get better at speaking in front of people"
          />
          {errorText(errors.improvement_area?.message as string | undefined)}
        </label>
      </div>
    </section>
  );
}
