"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  useWatch,
  type FieldErrors,
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormWatch,
} from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { Toaster } from "sonner";
import {
  applyFormSchema,
  defaultApplyFormValues,
  stepFieldNames,
  stepSchemas,
  type ApplyFormData,
} from "@/lib/applyValidation";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";
import Step11 from "./steps/Step11";
import Step12 from "./steps/Step12";

const STORAGE_KEY = "compass-apply-form";
const TOTAL_STEPS = 12;

const STEP_TITLES = [
  "The Basics",
  "School Information",
  "Tell Us About You",
  "Career Exploration",
  "Internship Preferences",
  "Your Mindset",
  "Technology and Access",
  "Parent or Guardian Information",
  "Parent Confirmation",
  "The Big Thinking Questions",
  "Message to Your Future Self",
  "Commitment and Readiness",
] as const;

const STEP_DESCRIPTIONS = [
  "Start with your personal details.",
  "Tell us about your school context.",
  "Help us understand your personality and interests.",
  "Select career paths you want to explore.",
  "Share your preferred work environment.",
  "Describe what motivates and challenges you.",
  "Tell us about your device and internet access.",
  "Add a parent or guardian contact.",
  "Confirm parent support for this experience.",
  "Answer a few bigger vision questions.",
  "Write a note to your future self.",
  "Confirm your commitment and readiness.",
] as const;

const STEP_COMPONENTS = [
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
  Step11,
  Step12,
] as const;

const slideVariants = {
  enter: (dir: 1 | -1) => ({
    x: dir === 1 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: 1 | -1) => ({
    x: dir === 1 ? -40 : 40,
    opacity: 0,
  }),
};

export type StepComponentProps = {
  register: UseFormRegister<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
  watch: UseFormWatch<ApplyFormData>;
  setValue: UseFormSetValue<ApplyFormData>;
};

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: defaultApplyFormValues,
    mode: "onChange",
  });

  const values = useWatch({ control }) ?? defaultApplyFormValues;

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const saved = JSON.parse(raw) as Partial<ApplyFormData>;
      reset({ ...defaultApplyFormValues, ...saved });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, [reset]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  const isCurrentStepValid = useMemo(() => {
    return stepSchemas[step].safeParse(values).success;
  }, [step, values]);

  const validateCurrentStep = async () => {
    const fields = stepFieldNames[step];
    if (fields.length === 0) return true;
    return trigger(fields, { shouldFocus: true });
  };

  const handleNext = async () => {
    const valid = await validateCurrentStep();
    if (!valid) return;

    setDirection(1);
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: ApplyFormData) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/apply-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      <div className="min-h-screen bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto flex min-h-[65vh] w-full max-w-5xl flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white px-8 py-14 text-center shadow-xl sm:px-12">
          <CheckCircle2 className="h-20 w-20 text-[#c9a84c]" />
          <h1 className="mt-8 text-3xl font-semibold text-[#111827] sm:text-4xl">
            You&apos;re in. Welcome to Compass.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#6b7280]">
            We&apos;ll be in touch soon. Check your email for next steps.
          </p>
        </div>
        <Toaster richColors position="top-right" />
      </div>
    );
  }

  const CurrentStep = STEP_COMPONENTS[step];

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl lg:flex-row">
        <aside className="border-b border-gray-100 bg-[#f8f7f3] px-6 py-7 sm:px-8 lg:w-[320px] lg:flex-none lg:border-b-0 lg:border-r lg:px-7 lg:py-8">
          <div className="lg:sticky lg:top-8">
            {/* <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">
              Step {step + 1} of {TOTAL_STEPS}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#111827]">
              {STEP_TITLES[step]}
            </h2>
            <p className="mt-1 text-sm text-[#6b7280]">
              {STEP_DESCRIPTIONS[step]}
            </p> */}

            <div className="mt-7">
              {STEP_TITLES.map((title, index) => {
                const isCompleted = index < step;
                const isActive = index === step;
                const isLast = index === TOTAL_STEPS - 1;

                return (
                  <div
                    key={title}
                    className={`relative flex gap-3 ${isLast ? "" : "pb-5"}`}
                  >
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                          isCompleted
                            ? "border-[#c9a84c] bg-[#c9a84c] text-white"
                            : isActive
                              ? "border-[#c9a84c] bg-white text-[#c9a84c]"
                              : "border-gray-300 bg-white text-[#9ca3af]"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          String(index + 1).padStart(2, "0")
                        )}
                      </div>
                      {!isLast ? (
                        <span
                          className={`absolute top-8 h-[calc(100%-0.5rem)] w-px ${
                            index < step ? "bg-[#c9a84c]" : "bg-gray-300"
                          }`}
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <p
                        className={`text-sm font-medium leading-5 ${
                          isActive ? "text-[#111827]" : "text-[#6b7280]"
                        }`}
                      >
                        {title}
                      </p>
                      {/* <p
                        className={`mt-0.5 text-xs leading-5 text-[#9ca3af] ${
                          isActive ? "block" : "hidden sm:block"
                        }`}
                      >
                        {STEP_DESCRIPTIONS[index]}
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="flex min-h-130 flex-1 flex-col">
          {/* <div className="border-b border-gray-100 bg-white px-6 py-5 sm:px-10 lg:px-12">
            <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">
              Step {step + 1} of {TOTAL_STEPS}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[#111827] sm:text-xl">
              {STEP_TITLES[step]}
            </h3> 
          </div> */}

          <div className="flex-1 overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="text-[#111827] [&_input]:text-[#111827] [&_textarea]:text-[#111827] [&_select]:text-[#111827] [&_input]:placeholder:text-gray-400 [&_textarea]:placeholder:text-gray-400"
              >
                <CurrentStep
                  register={register}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="sticky bottom-0 border-t border-gray-100 bg-white px-6 py-4 sm:px-10 lg:px-12">
            {submitError ? (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {submitError}
              </div>
            ) : null}

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                className={`rounded-lg px-7 py-3 text-sm font-medium text-[#6b7280] shadow-sm transition hover:bg-gray-100 ${
                  step === 0 ? "invisible" : ""
                }`}
              >
                Back
              </button>

              {step < TOTAL_STEPS - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentStepValid}
                  className="rounded-lg bg-[#c9a84c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting || !isCurrentStepValid}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#c9a84c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}
