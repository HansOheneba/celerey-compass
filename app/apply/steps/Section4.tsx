"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import type { ApplyFormData } from "@/lib/applyValidation";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError } from "./shared";

const HEARD_OPTIONS = [
  "Instagram",
  "TikTok",
  "School / teacher",
  "Friend or family",
  "Google",
  "Other",
];

function RatingRow({
  label,
  leftLabel,
  rightLabel,
  value,
  onChange,
  error,
}: {
  label: string;
  leftLabel: string;
  rightLabel: string;
  value: number;
  onChange: (v: number) => void;
  error?: string;
}) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-sm font-medium text-[#0f1f1e]">{label}</p>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`rounded-lg border py-3 text-sm font-semibold transition-colors ${
              value === n
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-gray-200 bg-white text-[#6b7280] hover:border-teal-400 hover:text-teal-600"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-xs text-[#9ca3af]">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <FieldError message={error} />
    </div>
  );
}

interface Props {
  control: Control<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
}

export function Section4({ control, errors }: Props) {
  return (
    <div>
      <Controller
        control={control}
        name="comfortInNewEnvs"
        render={({ field }) => (
          <RatingRow
            label="How comfortable are you in new environments with people you don't know?"
            leftLabel="Takes me time"
            rightLabel="Completely at ease"
            value={field.value}
            onChange={field.onChange}
            error={errors.comfortInNewEnvs?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="responseToSetbacks"
        render={({ field }) => (
          <RatingRow
            label="How do you respond when something doesn't go as planned?"
            leftLabel="I find it difficult"
            rightLabel="I adapt quickly"
            value={field.value}
            onChange={field.onChange}
            error={errors.responseToSetbacks?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="clarityOnFuture"
        render={({ field }) => (
          <RatingRow
            label="How clear are you right now on what you want to do after school?"
            leftLabel="No idea"
            rightLabel="Completely clear"
            value={field.value}
            onChange={field.onChange}
            error={errors.clarityOnFuture?.message}
          />
        )}
      />
      <div className="mt-2">
        <Label htmlFor="heardAbout">How did you hear about Compass?</Label>
        <Controller
          control={control}
          name="heardAbout"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="heardAbout" className="mt-1 w-full">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                {HEARD_OPTIONS.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.heardAbout?.message} />
      </div>
    </div>
  );
}
