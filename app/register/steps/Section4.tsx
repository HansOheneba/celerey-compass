"use client";

import { Controller } from "react-hook-form";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { InstitutionFormData } from "@/lib/institutionValidation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError } from "./shared";

interface Props {
  register: UseFormRegister<InstitutionFormData>;
  control: Control<InstitutionFormData>;
  errors: FieldErrors<InstitutionFormData>;
}

export function Section4({ register, control, errors }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="studentsToHost">
          How many students are you able to host?
        </Label>
        <Controller
          control={control}
          name="studentsToHost"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="studentsToHost" className="mt-1">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 student">1 student</SelectItem>
                <SelectItem value="2 students">2 students</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.studentsToHost?.message} />
      </div>

      <div>
        <Label htmlFor="workArea">
          What area(s) of your business will the student work in?
        </Label>
        <p className="mb-1 mt-0.5 text-xs text-[#9ca3af]">
          e.g. marketing, finance, operations, design
        </p>
        <Input
          id="workArea"
          placeholder="e.g. Marketing and Communications"
          className="mt-1"
          {...register("workArea")}
        />
        <FieldError message={errors.workArea?.message} />
      </div>

      <div>
        <Label htmlFor="workDescription">
          Briefly describe the type of work or tasks you envision giving the
          student
        </Label>
        <Textarea
          id="workDescription"
          rows={4}
          placeholder="e.g. Helping with social media content, attending client meetings, supporting on a live project..."
          className="mt-1"
          {...register("workDescription")}
        />
        <FieldError message={errors.workDescription?.message} />
      </div>
    </div>
  );
}
