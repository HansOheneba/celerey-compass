"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { ApplyFormData } from "@/lib/applyValidation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./shared";

interface Props {
  register: UseFormRegister<ApplyFormData>;
  control: Control<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
}

export function Section5({ register, control, errors }: Props) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="guardianFirstName">Parent / guardian first name</Label>
          <Input
            id="guardianFirstName"
            placeholder="First name"
            className="mt-1"
            {...register("guardianFirstName")}
          />
          <FieldError message={errors.guardianFirstName?.message} />
        </div>
        <div>
          <Label htmlFor="guardianLastName">Parent / guardian last name</Label>
          <Input
            id="guardianLastName"
            placeholder="Last name"
            className="mt-1"
            {...register("guardianLastName")}
          />
          <FieldError message={errors.guardianLastName?.message} />
        </div>
        <div>
          <Label htmlFor="guardianEmail">Their email address</Label>
          <Input
            id="guardianEmail"
            type="email"
            placeholder="parent@email.com"
            className="mt-1"
            {...register("guardianEmail")}
          />
          <FieldError message={errors.guardianEmail?.message} />
        </div>
        <div>
          <Label htmlFor="guardianWhatsapp">Their WhatsApp number</Label>
          <Input
            id="guardianWhatsapp"
            type="tel"
            placeholder="+1 234 567 8900"
            className="mt-1"
            {...register("guardianWhatsapp")}
          />
          <FieldError message={errors.guardianWhatsapp?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="additionalNotes">
          Anything else you want us to know before we review your application?
          <span className="ml-1 font-normal text-[#9ca3af]">Optional</span>
        </Label>
        <p className="mb-1 mt-0.5 text-xs text-[#9ca3af]">
          Completely optional. But we read everything.
        </p>
        <Textarea
          id="additionalNotes"
          rows={3}
          placeholder="One more thing..."
          className="mt-1"
          {...register("additionalNotes")}
        />
      </div>

      <Controller
        control={control}
        name="agreedToTerms"
        render={({ field }) => (
          <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
            <Checkbox
              id="agreedToTerms"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="mt-0.5 data-[state=checked]:border-teal-600 data-[state=checked]:bg-teal-600"
            />
            <Label
              htmlFor="agreedToTerms"
              className="cursor-pointer text-sm leading-relaxed text-[#374151]"
            >
              I confirm I meet the eligibility criteria (Years 10&ndash;12) and agree to the{" "}
              <a href="/terms" className="text-teal-600 underline underline-offset-2">
                programme terms
              </a>
              .
            </Label>
          </div>
        )}
      />
      <FieldError message={errors.agreedToTerms?.message} />
    </div>
  );
}
