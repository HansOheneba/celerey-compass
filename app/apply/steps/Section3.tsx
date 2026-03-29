"use client";

import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ApplyFormData } from "@/lib/applyValidation";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldError } from "./shared";

interface Props {
  register: UseFormRegister<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
}

export function Section3({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="curiosity">
          What&apos;s one thing you&apos;re genuinely curious about right now — in work, life, or
          the world?
        </Label>
        <p className="mb-1 mt-0.5 text-xs text-[#9ca3af]">
          There&apos;s no impressive answer. Just an honest one.
        </p>
        <Textarea
          id="curiosity"
          rows={3}
          placeholder="I've been thinking a lot about..."
          className="mt-1"
          {...register("curiosity")}
        />
        <FieldError message={errors.curiosity?.message} />
      </div>
      <div>
        <Label htmlFor="compassGoal">What do you hope Compass will do for you?</Label>
        <p className="mb-1 mt-0.5 text-xs text-[#9ca3af]">
          Be specific. &ldquo;Gain experience&rdquo; is not specific.
        </p>
        <Textarea
          id="compassGoal"
          rows={3}
          placeholder="By the end of five weeks, I want to..."
          className="mt-1"
          {...register("compassGoal")}
        />
        <FieldError message={errors.compassGoal?.message} />
      </div>
      <div>
        <Label htmlFor="futureWorries">
          Is there anything about your future you&apos;re genuinely unsure or worried about?
          <span className="ml-1 font-normal text-[#9ca3af]">Optional</span>
        </Label>
        <p className="mb-1 mt-0.5 text-xs text-[#9ca3af]">
          The students who answer this honestly get the most out of the programme.
        </p>
        <Textarea
          id="futureWorries"
          rows={3}
          placeholder="If I'm honest..."
          className="mt-1"
          {...register("futureWorries")}
        />
      </div>
    </div>
  );
}
