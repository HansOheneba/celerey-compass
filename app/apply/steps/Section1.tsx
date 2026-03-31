"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { ApplyFormData } from "@/lib/applyValidation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError } from "./shared";

const Y_GROUPS = ["Year 10", "Year 11", "Year 12"];

interface Props {
  register: UseFormRegister<ApplyFormData>;
  control: Control<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
}

export function Section1({ register, control, errors }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor="firstName">First name</Label>
        <Input
          id="firstName"
          placeholder="Your first name"
          className="mt-1"
          {...register("firstName")}
        />
        <FieldError message={errors.firstName?.message} />
      </div>
      <div>
        <Label htmlFor="lastName">Last name</Label>
        <Input
          id="lastName"
          placeholder="Your last name"
          className="mt-1"
          {...register("lastName")}
        />
        <FieldError message={errors.lastName?.message} />
      </div>
      <div>
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@email.com"
          className="mt-1"
          {...register("email")}
        />
        <FieldError message={errors.email?.message} />
      </div>
      <div>
        <Label htmlFor="whatsapp">WhatsApp number</Label>
        <Controller
          control={control}
          name="whatsapp"
          render={({ field }) => (
            <Input
              id="whatsapp"
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
        <FieldError message={errors.whatsapp?.message} />
      </div>
      <div>
        <Label htmlFor="birthday">Date of birth</Label>
        <Input
          id="birthday"
          type="date"
          className="mt-1"
          {...register("birthday")}
        />
        <FieldError message={errors.birthday?.message} />
      </div>
      <div>
        <Label htmlFor="country">Country you&apos;re based in</Label>
        <Input
          id="country"
          placeholder="e.g. Ghana, Nigeria, UK..."
          className="mt-1"
          {...register("country")}
        />
        <FieldError message={errors.country?.message} />
      </div>
      <div>
        <Label htmlFor="yearGroup">Year group</Label>
        <Controller
          control={control}
          name="yearGroup"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="yearGroup" className="mt-1 w-full">
                <SelectValue placeholder="Select your year" />
              </SelectTrigger>
              <SelectContent>
                {Y_GROUPS.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.yearGroup?.message} />
      </div>
      <div>
        <Label htmlFor="schoolName">School name</Label>
        <Input
          id="schoolName"
          placeholder="Your current school"
          className="mt-1"
          {...register("schoolName")}
        />
        <FieldError message={errors.schoolName?.message} />
      </div>
    </div>
  );
}
