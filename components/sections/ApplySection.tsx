"use client";

import { useState } from "react";

const TRACKS = [
  "High School (Years 10-12)",
  "University",

];

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

function validate(data: FormData): FieldError {
  const errors: FieldError = {};
  if (!data.firstName.trim()) errors.firstName = "Required";
  if (!data.lastName.trim()) errors.lastName = "Required";
  if (!data.email.trim()) errors.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email";
  if (!data.track) errors.track = "Please select a track";
  if (!data.school.trim()) errors.school = "Required";
  if (!data.whyCompass.trim()) errors.whyCompass = "Required";
  return errors;
}

export default function ApplySection() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Scroll to first error
      const firstKey = Object.keys(fieldErrors)[0];
      document
        .getElementById(firstKey)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
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

      // Redirect straight to Stripe with prefilled details
      window.location.href = data.url;
    } catch {
      setServerError(
        "Network error. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/5 border ${
      errors[field] ? "border-red-400/60" : "border-white/10"
    } rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c]/60 focus:bg-white/8 transition-all duration-200`;

  return (
    <section id="apply" className="py-24 bg-[#0f1f1e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
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

        {/* Steps */}
        <div className="space-y-6 text-left mb-16">
          {[
            {
              n: "1",
              title: "Apply",
              desc: "Complete our online application below. Tell us about yourself, your interests, and why you're curious about Compass.",
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
          ].map((step) => (
            <div key={step.n} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-sm font-semibold shrink-0">
                {step.n}
              </div>
              <div>
                <p className="text-white font-semibold mb-1">{step.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="text-left space-y-5"
        >
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                First name <span className="text-[#c9a84c]">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Ada"
                value={form.firstName}
                onChange={set("firstName")}
                className={inputClass("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                Last name <span className="text-[#c9a84c]">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Johnson"
                value={form.lastName}
                onChange={set("lastName")}
                className={inputClass("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email + Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                Email address <span className="text-[#c9a84c]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="ada@email.com"
                value={form.email}
                onChange={set("email")}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+233 XX XXX XXXX"
                value={form.phone}
                onChange={set("phone")}
                className={inputClass("phone")}
              />
            </div>
          </div>

          {/* Track */}
          <div>
            <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              Track interest <span className="text-[#c9a84c]">*</span>
            </label>
            <select
              id="track"
              value={form.track}
              onChange={set("track")}
              className={`${inputClass("track")} appearance-none cursor-pointer`}
            >
              <option value="" disabled className="bg-[#0f1f1e]">
                Select a track...
              </option>
              {TRACKS.map((t) => (
                <option key={t} value={t} className="bg-[#0f1f1e]">
                  {t}
                </option>
              ))}
            </select>
            {errors.track && (
              <p className="text-red-400 text-xs mt-1">{errors.track}</p>
            )}
          </div>

          {/* School */}
          <div>
            <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              School or institution <span className="text-[#c9a84c]">*</span>
            </label>
            <input
              id="school"
              type="text"
              placeholder="University of Ghana, KNUST, Accra Academy..."
              value={form.school}
              onChange={set("school")}
              className={inputClass("school")}
            />
            {errors.school && (
              <p className="text-red-400 text-xs mt-1">{errors.school}</p>
            )}
          </div>

          {/* Why Compass */}
          <div>
            <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              Why are you interested in Compass?{" "}
              <span className="text-[#c9a84c]">*</span>
            </label>
            <textarea
              id="whyCompass"
              rows={4}
              placeholder="Tell us what draws you to this programme and what you hope to gain..."
              value={form.whyCompass}
              onChange={set("whyCompass")}
              className={`${inputClass("whyCompass")} resize-none`}
            />
            {errors.whyCompass && (
              <p className="text-red-400 text-xs mt-1">{errors.whyCompass}</p>
            )}
          </div>

          {/* Server error */}
          {serverError && (
            <div className="bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
              <p className="text-red-400 text-sm">{serverError}</p>
            </div>
          )}

          {/* Submit */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#d4b560] active:bg-[#b8963e] disabled:opacity-60 disabled:cursor-not-allowed text-[#0f1f1e] font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30 hover:scale-[1.02]"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#0f1f1e"
                      strokeWidth="3"
                      strokeOpacity="0.3"
                    />
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke="#0f1f1e"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Saving your application...
                </>
              ) : (
                <>
                  Apply & proceed to payment
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="#0f1f1e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
            <p className="text-white/30 text-xs mt-3">
              Secured by Stripe · SSL encrypted
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
