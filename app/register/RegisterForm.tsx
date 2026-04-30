"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { Toaster } from "sonner";
import {
  institutionFormSchema,
  defaultInstitutionFormValues,
  institutionStepFieldNames,
  institutionStepSchemas,
  type InstitutionFormData,
} from "@/lib/institutionValidation";
import { Button } from "@/components/ui/button";
import { Section1 } from "./steps/Section1";
import { Section2 } from "./steps/Section2";
import { Section3 } from "./steps/Section3";
import { Section4 } from "./steps/Section4";
import { Section5 } from "./steps/Section5";
import { Section6 } from "./steps/Section6";

const STORAGE_KEY = "compass-register-form-v1";
const TOTAL_STEPS = 6;

const SECTION_TITLES = [
  "Tell us about your company.",
  "Who should we contact?",
  "Who will mentor the student?",
  "What will the student do?",
  "A few commitments.",
  "One last thing.",
];

const SECTION_SUBTITLES = [
  "A few details about the organisation hosting the student.",
  "The main person Compass will liaise with for all programme communications.",
  "The team member who will work with the student day-to-day.",
  "Help us understand what the student will experience with you.",
  "Please read and confirm each item below before submitting.",
  "Anything that would help us match the right student to your company. Completely optional.",
];

const slideVariants = {
  enter: (dir: 1 | -1) => ({ x: dir === 1 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: 1 | -1) => ({ x: dir === 1 ? -40 : 40, opacity: 0 }),
};

export default function RegisterForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InstitutionFormData>({
    resolver: zodResolver(institutionFormSchema),
    defaultValues: defaultInstitutionFormValues,
    mode: "onChange",
  });

  const values = useWatch({ control }) ?? defaultInstitutionFormValues;

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const saved = JSON.parse(raw) as Partial<InstitutionFormData>;
        reset({ ...defaultInstitutionFormValues, ...saved });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, [reset]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  const isCurrentStepValid = useMemo(() => {
    return institutionStepSchemas[step].safeParse(values).success;
  }, [step, values]);

  const handleNext = async () => {
    const fields = institutionStepFieldNames[step];
    const valid =
      fields.length > 0
        ? await trigger(fields as Parameters<typeof trigger>[0], {
            shouldFocus: true,
          })
        : true;
    if (!valid) return;
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: InstitutionFormData) => {
    setSubmitError("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setSubmitError(
          payload.error ?? "Something went wrong. Please try again.",
        );
        return;
      }
      window.localStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="flex items-start gap-4 px-8 py-10 sm:px-12">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                Registration received
              </p>
              <h2 className="mt-1 text-2xl font-display text-[#0f1f1e]">
                Thank you for registering.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                We&apos;ve received your company&apos;s registration for the
                Compass Experience 2026 cohort. A member of the Compass team
                will be in touch with next steps shortly.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-100 px-8 py-4 sm:px-12">
            <button
              type="button"
              onClick={() => {
                window.localStorage.removeItem(STORAGE_KEY);
                setSubmitted(false);
                setStep(0);
                reset(defaultInstitutionFormValues);
              }}
              className="text-xs text-gray-400 underline underline-offset-2 transition hover:text-gray-600"
            >
              Submit another registration
            </button>
          </div>
        </div>
        <Toaster richColors position="top-right" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Segmented progress */}
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-600">
            Section {String(step + 1).padStart(2, "0")} of{" "}
            {String(TOTAL_STEPS).padStart(2, "0")}
          </p>
          <div className="flex gap-1.5">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  i <= step ? "bg-[#0c205a]" : "bg-[#d2d4c4]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="px-8 py-10 sm:px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {/* Section header */}
                <h2 className="mb-2 font-display text-3xl text-[#0f1f1e] sm:text-4xl">
                  {SECTION_TITLES[step]}
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-[#6b7280]">
                  {SECTION_SUBTITLES[step]}
                </p>

                {step === 0 && (
                  <Section1
                    register={register}
                    control={control}
                    errors={errors}
                  />
                )}
                {step === 1 && (
                  <Section2
                    register={register}
                    control={control}
                    errors={errors}
                  />
                )}
                {step === 2 && (
                  <Section3
                    register={register}
                    control={control}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />
                )}
                {step === 3 && (
                  <Section4
                    register={register}
                    control={control}
                    errors={errors}
                  />
                )}
                {step === 4 && <Section5 control={control} errors={errors} />}
                {step === 5 && <Section6 register={register} errors={errors} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="sticky bottom-0 border-t border-gray-100 bg-white px-8 py-5 sm:px-12">
            {submitError && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {submitError}
              </div>
            )}
            <div className="flex items-center justify-between gap-4">
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                className={`text-[#6b7280] ${step === 0 ? "invisible" : ""}`}
              >
                &#8592; Back
              </Button>

              <span className="text-sm text-[#9ca3af]">&#8595;</span>

              {step < TOTAL_STEPS - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentStepValid}
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  Next &#8594;
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => void handleSubmit(onSubmit)()}
                  disabled={!isCurrentStepValid || isSubmitting}
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit registration \u2192"}
                </Button>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#9ca3af]">
          Compass Experience 2026 Cohort &middot; July 6 &ndash; August 7, 2026
        </p>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}
