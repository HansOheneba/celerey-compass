"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

const options = [
  "Law",
  "Medicine",
  "Engineering",
  "Technology",
  "Finance",
  "Business",
  "Creative Arts",
  "Media",
  "Architecture",
  "Design",
  "Public Service",
  "Entrepreneurship",
  "Environmental Science",
  "Other",
] as const;

const inputClass =
  "mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/30";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step4({
  register,
  errors,
  watch,
  setValue,
}: StepComponentProps) {
  const selected = watch("career_interests") ?? [];
  const prior = watch("prior_experience");

  const toggleInterest = (value: string) => {
    const hasValue = selected.includes(value);
    if (hasValue) {
      setValue(
        "career_interests",
        selected.filter((item) => item !== value),
        { shouldValidate: true },
      );
      return;
    }

    if (selected.length >= 3) return;

    setValue("career_interests", [...selected, value], {
      shouldValidate: true,
    });
  };

  return (
    <section>
      <h2 className="text-2xl text-[#111827]">
        Career Exploration
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        Pick up to 3 areas that interest you most.
      </p>

      <div className="mt-6 grid gap-5">
        <fieldset>
          <legend className="text-sm text-[#374151]">
            Career interests (choose 1-3) *
          </legend>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {options.map((option) => {
              const checked = selected.includes(option);
              const disabled = !checked && selected.length >= 3;

              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm ${
                    checked
                      ? "border-[#c9a84c] bg-[#c9a84c]/10"
                      : "border-gray-200"
                  } ${disabled ? "opacity-50" : "cursor-pointer"}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={() => toggleInterest(option)}
                    className="h-4 w-4 rounded border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                  />
                  {option}
                </label>
              );
            })}
          </div>
          {errorText(errors.career_interests?.message as string | undefined)}
        </fieldset>

        <label className="text-sm text-[#374151]">
          Why do these career areas interest you? *
          <textarea
            rows={4}
            {...register("reason")}
            className={`${inputClass} resize-y`}
            placeholder="e.g. I've always been curious about technology and I'd love to see how it actually works in real life"
          />
          {errorText(errors.reason?.message as string | undefined)}
        </label>

        <fieldset>
          <legend className="text-sm text-[#374151]">
            Do you have prior experience? *
          </legend>
          <div className="mt-3 flex flex-wrap gap-4">
            {["Yes", "No"].map((value) => (
              <label
                key={value}
                className="inline-flex items-center gap-2 text-sm text-[#374151]"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("prior_experience")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
          {errorText(errors.prior_experience?.message as string | undefined)}
        </fieldset>

        {prior === "Yes" ? (
          <label className="text-sm text-[#374151]">
            Briefly describe what you did
            <textarea
              rows={4}
              {...register("experience_details")}
              className={`${inputClass} resize-y`}
              placeholder="e.g. I helped manage social media for a school event, or I did an attachment at a family business for two weeks"
            />
          </label>
        ) : null}
      </div>
    </section>
  );
}
