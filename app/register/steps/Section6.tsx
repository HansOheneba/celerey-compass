"use client";

import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { InstitutionFormData } from "@/lib/institutionValidation";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  register: UseFormRegister<InstitutionFormData>;
  errors: FieldErrors<InstitutionFormData>;
}

export function Section6({ register }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="additionalNotes">
          Is there anything you&apos;d like Compass to know when matching a
          student to your company?{" "}
          <span className="ml-1 font-normal text-[#9ca3af]">Optional</span>
        </Label>
        <p className="mb-1 mt-0.5 text-xs text-[#9ca3af]">
          e.g. specific interests, language preferences, accessibility needs
        </p>
        <Textarea
          id="additionalNotes"
          rows={4}
          placeholder="Anything that would help us find the right match..."
          className="mt-1"
          {...register("additionalNotes")}
        />
      </div>
    </div>
  );
}
