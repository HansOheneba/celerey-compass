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
import { CheckCircle2, CreditCard } from "lucide-react";
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
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

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
      setSubmittedEmail(data.email);
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
    }
  };

  const handlePay = () => {
    const stripeUrl = new URL("https://buy.stripe.com/3cI3cv6ng9MB4yffeV9Ve07");
    if (submittedEmail)
      stripeUrl.searchParams.set("prefilled_email", submittedEmail);
    window.location.href = stripeUrl.toString();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="flex items-start gap-4 border-b border-gray-100 px-8 py-8 sm:px-10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b1e3d]/10">
              <CheckCircle2 className="h-5 w-5 text-[#0b1e3d]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0b1e3d]">
                Step 1 complete
              </p>
              <h2 className="mt-1 text-xl  text-[#0f1f1e]">
                Application received
              </h2>
              <p className="mt-1 text-sm text-[#6b7280]">
                Your application has been submitted. We&apos;ve recorded your
                details.
              </p>
            </div>
          </div>

          <div className="px-8 py-8 sm:px-10">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f1f1e]/5">
                <CreditCard className="h-5 w-5 text-[#0f1f1e]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                  Step 2
                </p>
                <h2 className="mt-1 text-xl text-[#0f1f1e]">
                  Secure your spot
                </h2>
                <p className="mt-1 text-sm text-[#6b7280]">
                  Complete the enrollment fee to confirm your place in the
                  Compass programme. Your spot is not guaranteed until payment
                  is received.
                </p>

                <button
                  type="button"
                  onClick={handlePay}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0b1e3d] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
                >
                  <CreditCard className="h-4 w-4" />
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster richColors position="top-right" />
      </div>
    );
  }

  const CurrentStep = STEP_COMPONENTS[step];

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg lg:flex-row">
        <aside className="border-b border-gray-100 bg-[#f8f7f3] px-6 py-7 sm:px-8 lg:w-[320px] lg:flex-none lg:border-b-0 lg:border-r lg:px-7 lg:py-8">
          <div className="lg:sticky lg:top-8">
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
                            ? "border-[#0b1e3d] bg-[#0b1e3d] text-white"
                            : isActive
                              ? "border-[#0b1e3d] bg-white text-[#0b1e3d]"
                              : "border-gray-300 bg-white text-[#6b7280]"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          String(index + 1).padStart(2, "0")
                        )}
                      </div>
                      {!isLast && (
                        <span
                          className={`absolute top-8 h-[calc(100%-0.5rem)] w-px ${
                            index < step ? "bg-[#0b1e3d]" : "bg-gray-300"
                          }`}
                        />
                      )}
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p
                        className={`text-sm font-medium leading-5 ${isActive ? "text-[#0f1f1e]" : "text-[#6b7280]"}`}
                      >
                        {title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="flex min-h-130 flex-1 flex-col">
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
                className="text-[#0f1f1e] [&_input]:text-[#0f1f1e] [&_textarea]:text-[#0f1f1e] [&_select]:text-[#0f1f1e] [&_input]:placeholder:text-[#2d4a47]/40 [&_textarea]:placeholder:text-[#2d4a47]/40"
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
            {submitError && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {submitError}
              </div>
            )}

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
                  className="rounded-lg bg-[#0b1e3d] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting || !isCurrentStepValid}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0b1e3d] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-45"
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
