"use client";

import { useEffect } from "react";
import { Controller } from "react-hook-form";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import type { InstitutionFormData } from "@/lib/institutionValidation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError } from "./shared";

const EXPERIENCE_OPTIONS = [
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
];

interface Props {
  register: UseFormRegister<InstitutionFormData>;
  control: Control<InstitutionFormData>;
  errors: FieldErrors<InstitutionFormData>;
  watch: UseFormWatch<InstitutionFormData>;
  setValue: UseFormSetValue<InstitutionFormData>;
}

export function Section3({
  register,
  control,
  errors,
  watch,
  setValue,
}: Props) {
  const sameAsPrimary = watch("supervisorSameAsPrimary");
  const primaryContactName = watch("primaryContactName");
  const primaryContactTitle = watch("primaryContactTitle");
  const primaryContactEmail = watch("primaryContactEmail");
  const primaryContactPhone = watch("primaryContactPhone");

  // When the checkbox is ticked, copy primary contact details into supervisor fields
  useEffect(() => {
    if (sameAsPrimary) {
      setValue("supervisorName", primaryContactName, { shouldValidate: true });
      setValue("supervisorTitle", primaryContactTitle, {
        shouldValidate: true,
      });
      setValue("supervisorEmail", primaryContactEmail, {
        shouldValidate: true,
      });
      setValue("supervisorPhone", primaryContactPhone, {
        shouldValidate: true,
      });
    }
  }, [
    sameAsPrimary,
    primaryContactName,
    primaryContactTitle,
    primaryContactEmail,
    primaryContactPhone,
    setValue,
  ]);

  return (
    <div className="space-y-5">
      <Controller
        control={control}
        name="supervisorSameAsPrimary"
        render={({ field }) => (
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
            <Checkbox
              id="supervisorSameAsPrimary"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:border-teal-600 data-[state=checked]:bg-teal-600"
            />
            <Label
              htmlFor="supervisorSameAsPrimary"
              className="cursor-pointer text-sm text-[#374151]"
            >
              The supervisor / mentor is the same person as the primary contact
            </Label>
          </div>
        )}
      />

      {sameAsPrimary && (
        <p className="rounded-lg bg-teal-50 px-4 py-2.5 text-xs text-teal-700">
          We&apos;ve pre-filled the details from the previous section. Please
          still complete the two fields below before continuing.
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="supervisorName">Full name</Label>
          <Input
            id="supervisorName"
            placeholder="e.g. Kofi Boateng"
            className="mt-1 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={sameAsPrimary}
            {...register("supervisorName")}
          />
          <FieldError message={errors.supervisorName?.message} />
        </div>

        <div>
          <Label htmlFor="supervisorTitle">Job title</Label>
          <Input
            id="supervisorTitle"
            placeholder="e.g. Senior Manager"
            className="mt-1 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={sameAsPrimary}
            {...register("supervisorTitle")}
          />
          <FieldError message={errors.supervisorTitle?.message} />
        </div>

        <div>
          <Label htmlFor="supervisorEmail">Email address</Label>
          <Input
            id="supervisorEmail"
            type="email"
            placeholder="supervisor@company.com"
            className="mt-1 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={sameAsPrimary}
            {...register("supervisorEmail")}
          />
          <FieldError message={errors.supervisorEmail?.message} />
        </div>

        <div>
          <Label htmlFor="supervisorPhone">Phone / WhatsApp number</Label>
          <Controller
            control={control}
            name="supervisorPhone"
            render={({ field }) => (
              <Input
                id="supervisorPhone"
                type="tel"
                placeholder="+233241234567"
                className="mt-1 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={sameAsPrimary}
                value={field.value ?? ""}
                onChange={(e) => {
                  const digits = e.target.value.replace(/[^\d]/g, "");
                  field.onChange("+" + digits);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && field.value === "+") {
                    e.preventDefault();
                  }
                }}
              />
            )}
          />
          <FieldError message={errors.supervisorPhone?.message} />
        </div>

        <div>
          <Label htmlFor="supervisorExperience">
            Years of professional experience
          </Label>
          <Controller
            control={control}
            name="supervisorExperience"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="supervisorExperience" className="mt-1">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  {EXPERIENCE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.supervisorExperience?.message} />
        </div>

        <div>
          <Label htmlFor="supervisorHasMentored">
            Has this person managed or mentored others before?
          </Label>
          <Controller
            control={control}
            name="supervisorHasMentored"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="supervisorHasMentored" className="mt-1">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.supervisorHasMentored?.message} />
        </div>
      </div>
    </div>
  );
}
