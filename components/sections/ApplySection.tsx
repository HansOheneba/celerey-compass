"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

const TRACKS = ["High School (Years 10-12)", "University"];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  track: string;
  school: string;
  whyCompass: string;
};

type FieldError = Partial<Record<keyof FormData, string>>;

function validateStep(data: FormData, step: number): FieldError {
  const errors: FieldError = {};
  if (step === 0) {
    if (!data.firstName.trim()) errors.firstName = "Required";
    if (!data.lastName.trim()) errors.lastName = "Required";
    if (!data.email.trim()) errors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Enter a valid email";
  }
  if (step === 1) {
    if (!data.track) errors.track = "Please select a track";
    if (!data.school.trim()) errors.school = "Required";
  }
  if (step === 2) {
    if (!data.whyCompass.trim()) errors.whyCompass = "Required";
  }
  return errors;
}

const STEP_TITLES = ["About you", "Your programme", "Your motivation"];
const STEP_DESCS = [
  "Let's start with the basics.",
  "Tell us which track fits you.",
  "Last step — tell us why.",
];

export default function ApplySection() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    track: "",
    school: "",
    whyCompass: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const transition = (newStep: number, dir: "forward" | "back") => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setStep(newStep);
      setAnimating(false);
    }, 220);
  };

  const handleNext = () => {
    const stepErrors = validateStep(form, step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    if (step < 2) transition(step + 1, "forward");
  };

  const handleBack = () => {
    setErrors({});
    if (step > 0) transition(step - 1, "back");
  };

  const handleSubmit = async () => {
    const stepErrors = validateStep(form, step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      window.location.href = data.url;
    } catch {
      setServerError(
        "Network error. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setStep(0);
    setErrors({});
    setStatus("idle");
    setServerError("");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      track: "",
      school: "",
      whyCompass: "",
    });
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white border ${
      errors[field] ? "border-red-400" : "border-gray-300"
    } rounded-lg px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 
  focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-[#c9a84c] 
  transition-all duration-200`;
  const slideStyle: React.CSSProperties = animating
    ? {
        opacity: 0,
        transform:
          direction === "forward" ? "translateX(24px)" : "translateX(-24px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }
    : {
        opacity: 1,
        transform: "translateX(0)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      };

  return (
    <section id="apply" className="py-24 bg-[#0f1f1e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <MotionInView>
          {/* Heading */}
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
            Apply & Registration
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl mb-6 leading-tight">
            Your journey starts with a simple step
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            We&apos;re looking for curious, open-minded young people ready to
            invest in themselves. No experience required—just willingness to
            explore and grow.
          </p>
        </MotionInView>

        {/* Steps */}
        <MotionStagger className="space-y-6 text-left mb-16">
          {[
            {
              n: "1",
              title: "Apply",
              desc: "Complete our online application. Tell us about yourself, your interests, and why you're curious about Compass.",
            },
            {
              n: "2",
              title: "Payment",
              desc: "After submitting, you'll go straight to our secure payment page to confirm your spot.",
            },
            {
              n: "3",
              title: "Confirmation",
              desc: "Once payment is complete you'll receive a receipt and everything you need to prepare.",
            },
            {
              n: "4",
              title: "Onboarding",
              desc: "Meet your cohort and get ready for an experience that could change your direction.",
            },
          ].map((s) => (
            <MotionStaggerItem key={s.n} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-sm font-semibold shrink-0">
                {s.n}
              </div>
              <div>
                <p className="text-white font-semibold mb-1">{s.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* CTA button */}
        <MotionInView delay={0.08}>
          <button
            onClick={handleOpen}
            className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#d4b560] active:bg-[#b8963e] text-[#0f1f1e] font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30 hover:scale-[1.02]"
          >
            Start your application
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="#0f1f1e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-white/30 text-xs mt-3">
            Takes less than 2 minutes
          </p>
        </MotionInView>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white border border-gray-200 rounded-none sm:rounded-2xl w-full h-[100dvh] sm:h-auto sm:max-w-2xl p-0 overflow-hidden shadow-xl flex flex-col">
          {/* Progress bar */}
          <div className="h-1 bg-gray-100 w-full">
            <div
              className="h-full bg-[#c9a84c] transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-10 pt-8 pb-6">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step
                      ? "w-8 bg-[#c9a84c]"
                      : i < step
                        ? "w-4 bg-[#c9a84c]/50"
                        : "w-4 bg-gray-200"
                  }`}
                />
              ))}
              <span className="text-gray-400 text-xs ml-auto">
                {step + 1} / 3
              </span>
            </div>

            {/* Header */}
            <DialogHeader className="mb-10 text-left">
              <DialogTitle
                className="text-gray-900 font-display text-3xl sm:text-4xl leading-tight"
                style={slideStyle}
              >
                {STEP_TITLES[step]}
              </DialogTitle>
              <DialogDescription
                className="text-gray-500 text-base mt-3 max-w-md"
                style={slideStyle}
              >
                {STEP_DESCS[step]}
              </DialogDescription>
            </DialogHeader>

            {/* Form content */}
            <div style={slideStyle} className="space-y-6 max-w-xl">
              {/* Step 0 */}
              {step === 0 && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                        First name <span className="text-[#c9a84c]">*</span>
                      </label>
                      <input
                        autoFocus
                        type="text"
                        placeholder="Ada"
                        value={form.firstName}
                        onChange={set("firstName")}
                        className={inputClass("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                        Last name <span className="text-[#c9a84c]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Johnson"
                        value={form.lastName}
                        onChange={set("lastName")}
                        className={inputClass("lastName")}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                      Email address <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="ada@email.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass("phone")}
                    />
                  </div>
                </>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                      Track interest <span className="text-[#c9a84c]">*</span>
                    </label>
                    <select
                      value={form.track}
                      onChange={set("track")}
                      className={`${inputClass("track")} appearance-none bg-white`}
                    >
                      <option value="" disabled>
                        Select a track...
                      </option>
                      {TRACKS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.track && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.track}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                      School or institution{" "}
                      <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      autoFocus
                      type="text"
                      placeholder="University of Ghana, KNUST..."
                      value={form.school}
                      onChange={set("school")}
                      className={inputClass("school")}
                    />
                    {errors.school && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.school}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <label className="block text-gray-600 text-xs uppercase tracking-wider mb-2">
                    Why are you interested in Compass?{" "}
                    <span className="text-[#c9a84c]">*</span>
                  </label>
                  <textarea
                    autoFocus
                    rows={6}
                    placeholder="Tell us what draws you to this programme..."
                    value={form.whyCompass}
                    onChange={set("whyCompass")}
                    className={`${inputClass("whyCompass")} resize-none leading-relaxed`}
                  />
                  {errors.whyCompass && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.whyCompass}
                    </p>
                  )}
                </div>
              )}

              {/* Server error */}
              {serverError && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <p className="text-red-600 text-sm">{serverError}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sticky footer navigation */}
          <div className="border-t border-gray-200 px-6 sm:px-10 py-4 flex items-center justify-between bg-white">
            <button
              type="button"
              onClick={handleBack}
              className={`text-gray-400 hover:text-gray-600 text-sm transition flex items-center gap-1.5 ${
                step === 0 ? "invisible" : ""
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 8H3M3 8L7 4M3 8L7 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>

            {step < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b560] text-white font-semibold text-sm px-6 py-3 rounded-full transition hover:scale-[1.02] shadow-sm"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b560] text-white font-semibold text-sm px-6 py-3 rounded-full transition hover:scale-[1.02] shadow-sm disabled:opacity-50"
              >
                {status === "loading" ? "Saving..." : "Apply & pay"}
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
