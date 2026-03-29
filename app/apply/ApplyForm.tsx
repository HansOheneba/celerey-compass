"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { CheckCircle2, CreditCard } from "lucide-react";
import { Toaster } from "sonner";
import {
  applyFormSchema,
  defaultApplyFormValues,
  stepFieldNames,
  stepSchemas,
  type ApplyFormData,
} from "@/lib/applyValidation";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Section1 } from "./steps/Section1";
import { Section2 } from "./steps/Section2";
import { Section3 } from "./steps/Section3";
import { Section4 } from "./steps/Section4";
import { Section5 } from "./steps/Section5";

const STORAGE_KEY = "compass-apply-form-v2";
const TOTAL_STEPS = 5;

const SECTION_TITLES = [
  "Let\u2019s start with you.",
  "What makes you tick?",
  "Tell us something real.",
  "How do you show up?",
  "Almost there. One last thing.",
];

const SECTION_SUBTITLES = [
  "The basics. Takes about two minutes.",
  "No right answers here. We use this to match you with the right internship placement \u2014 so be honest, not impressive.",
  "This is the part that actually matters. Write like a person, not a personal statement.",
  "We\u2019re not looking for perfect. We\u2019re looking for self-aware. Rate yourself honestly \u2014 this helps us coach you better.",
  "For the person who helped make this happen \u2014 usually a parent. We\u2019ll send them the programme details and payment information.",
];

const slideVariants = {
  enter: (dir: 1 | -1) => ({ x: dir === 1 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: 1 | -1) => ({ x: dir === 1 ? -40 : 40, opacity: 0 }),
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

  const handleNext = async () => {
    const fields = stepFieldNames[step];
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

  const onSubmit = async (data: ApplyFormData) => {
    setSubmitError("");
    try {
      const response = await fetch("/api/apply-form", {
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

  const industries = (values.industries ?? []) as string[];
  const workEnergisers = (values.workEnergisers ?? []) as string[];

  const toggleIndustry = (item: string) => {
    if (industries.includes(item)) {
      setValue(
        "industries",
        industries.filter((i) => i !== item),
        { shouldValidate: true },
      );
    } else if (industries.length < 3) {
      setValue("industries", [...industries, item], { shouldValidate: true });
    }
  };

  const toggleWork = (item: string) => {
    if (workEnergisers.includes(item)) {
      setValue(
        "workEnergisers",
        workEnergisers.filter((i) => i !== item),
        { shouldValidate: true },
      );
    } else {
      setValue("workEnergisers", [...workEnergisers, item], {
        shouldValidate: true,
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="flex items-start gap-4 border-b border-gray-100 px-8 py-8 sm:px-10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50">
              <CheckCircle2 className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                Step 1 complete
              </p>
              <h2 className="mt-1 text-xl text-[#0f1f1e]">
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
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
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

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-600">
            Section {String(step + 1).padStart(2, "0")} of 05
          </p>
          <Progress value={progress} className="h-1.5" />
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
                <h2 className="mb-2 font-display text-3xl font-bold text-[#0f1f1e] sm:text-4xl">
                  {SECTION_TITLES[step]}
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-[#6b7280]">
                  {SECTION_SUBTITLES[step]}
                </p>

                {/* ── SECTION 01 ────────────────────────────────────── */}
                {step === 0 && (
                  <Section1
                    register={register}
                    control={control}
                    errors={errors}
                  />
                )}

                {/* ── SECTION 02 ────────────────────────────────────── */}
                {step === 1 && (
                  <Section2
                    industries={industries}
                    workEnergisers={workEnergisers}
                    toggleIndustry={toggleIndustry}
                    toggleWork={toggleWork}
                    errors={errors}
                  />
                )}

                {/* ── SECTION 03 ────────────────────────────────────── */}
                {step === 2 && <Section3 register={register} errors={errors} />}

                {/* ── SECTION 04 ────────────────────────────────────── */}
                {step === 3 && <Section4 control={control} errors={errors} />}

                {/* ── SECTION 05 ────────────────────────────────────── */}
                {step === 4 && (
                  <Section5
                    register={register}
                    control={control}
                    errors={errors}
                  />
                )}
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
                  disabled={
                    !isCurrentStepValid || isSubmitting || !values.agreedToTerms
                  }
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  {isSubmitting ? "Submitting..." : "Submit application \u2192"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  );
}
