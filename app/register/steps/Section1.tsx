"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { InstitutionFormData } from "@/lib/institutionValidation";
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

const HEARD_ABOUT_OPTIONS = [
  "School or teacher recommendation",
  "Social media",
  "Friend or family",
  "Celerey website",
  "Email / newsletter",
  "Partner organisation",
  "Other",
];

interface Props {
  register: UseFormRegister<InstitutionFormData>;
  control: Control<InstitutionFormData>;
  errors: FieldErrors<InstitutionFormData>;
}

export function Section1({ register, control, errors }: Props) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="companyName">Company name</Label>
          <Input
            id="companyName"
            placeholder="e.g. Acme Ltd"
            className="mt-1"
            {...register("companyName")}
          />
          <FieldError message={errors.companyName?.message} />
        </div>

        <div>
          <Label htmlFor="industrySector">Industry / sector</Label>
          <Input
            id="industrySector"
            placeholder="e.g. Fintech, Healthcare"
            className="mt-1"
            {...register("industrySector")}
          />
          <FieldError message={errors.industrySector?.message} />
        </div>

        <div>
          <Label htmlFor="companyWebsite">
            Company website{" "}
            <span className="ml-1 font-normal text-[#9ca3af]">Optional</span>
          </Label>
          <Input
            id="companyWebsite"
            placeholder="https://yourcompany.com"
            className="mt-1"
            {...register("companyWebsite")}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="companyAddress">
            Company address (where the student will be based)
          </Label>
          <Input
            id="companyAddress"
            placeholder="Street, City, Country"
            className="mt-1"
            {...register("companyAddress")}
          />
          <FieldError message={errors.companyAddress?.message} />
        </div>

        <div>
          <Label htmlFor="employeeCount">Number of full-time employees</Label>
          <Controller
            control={control}
            name="employeeCount"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="employeeCount" className="mt-1">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1–10">1–10</SelectItem>
                  <SelectItem value="11–50">11–50</SelectItem>
                  <SelectItem value="51–200">51–200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.employeeCount?.message} />
        </div>

        <div>
          <Label htmlFor="heardAbout">How did you hear about Compass?</Label>
          <Controller
            control={control}
            name="heardAbout"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="heardAbout" className="mt-1">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  {HEARD_ABOUT_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.heardAbout?.message} />
        </div>
      </div>
    </div>
  );
}
