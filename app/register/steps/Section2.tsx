"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { InstitutionFormData } from "@/lib/institutionValidation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "./shared";

interface Props {
  register: UseFormRegister<InstitutionFormData>;
  control: Control<InstitutionFormData>;
  errors: FieldErrors<InstitutionFormData>;
}

export function Section2({ register, control, errors }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label htmlFor="primaryContactName">Full name</Label>
        <Input
          id="primaryContactName"
          placeholder="e.g. Ama Mensah"
          className="mt-1"
          {...register("primaryContactName")}
        />
        <FieldError message={errors.primaryContactName?.message} />
      </div>

      <div>
        <Label htmlFor="primaryContactTitle">Job title</Label>
        <Input
          id="primaryContactTitle"
          placeholder="e.g. Head of Operations"
          className="mt-1"
          {...register("primaryContactTitle")}
        />
        <FieldError message={errors.primaryContactTitle?.message} />
      </div>

      <div>
        <Label htmlFor="primaryContactEmail">Email address</Label>
        <Input
          id="primaryContactEmail"
          type="email"
          placeholder="you@company.com"
          className="mt-1"
          {...register("primaryContactEmail")}
        />
        <FieldError message={errors.primaryContactEmail?.message} />
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="primaryContactPhone">Phone / WhatsApp number</Label>
        <Controller
          control={control}
          name="primaryContactPhone"
          render={({ field }) => (
            <Input
              id="primaryContactPhone"
              type="tel"
              placeholder="+233241234567"
              className="mt-1"
              value={field.value}
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
        <FieldError message={errors.primaryContactPhone?.message} />
      </div>
    </div>
  );
}
