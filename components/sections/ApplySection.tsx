"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function ApplySection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      try {
        // Typeform fires a postMessage when the form is submitted
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (
          data?.type === "form-submit" ||
          data?.["tf-submit"] ||
          data?.eventName === "form-submit"
        ) {
          setFormSubmitted(true);
          setTimeout(() => {
            document
              .getElementById("payment-step")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 400);
        }
      } catch {
        // ignore non-JSON messages from other iframes
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

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
              desc: "Complete our online application. Tell us about yourself, your interests, and why you're curious about Compass.",
            },
            {
              n: "2",
              title: "Review",
              desc: "Our team reviews applications. We may reach out for a brief conversation to understand your goals better.",
            },
            {
              n: "3",
              title: "Confirmation",
              desc: "Accepted students receive confirmation with next steps, including registration details and preparation materials.",
            },
            {
              n: "4",
              title: "Payment",
              desc: "Secure your spot by completing registration payment. Your place is confirmed once payment is received.",
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-4 items-start">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all duration-500 ${
                  step.n === "4" && formSubmitted
                    ? "bg-[#c9a84c] border border-[#c9a84c] text-[#0f1f1e]"
                    : "bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c]"
                }`}
              >
                {step.n === "4" && formSubmitted ? (
                  // Checkmark when active
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7L5.5 10.5L12 3"
                      stroke="#0f1f1e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step.n
                )}
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

        {/* Typeform — hidden after submit so the page doesn't look broken */}
        <div
          className={`w-full transition-all duration-500 ${
            formSubmitted ? "hidden" : "block"
          }`}
        >
          <div
            data-tf-live="01KM2EBM30DKG5JG4340R309XR"
            className="w-full"
          ></div>
        </div>

        {/* Payment step — revealed after Typeform submit */}
        {formSubmitted && (
          <div
            id="payment-step"
            className="w-full mt-4"
            style={{ animation: "fadeSlideUp 0.6s ease forwards" }}
          >
            {/* Divider with confirmation badge */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-[#c9a84c]/20" />
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#c9a84c] flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#0f1f1e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest whitespace-nowrap">
                  Application received
                </p>
              </div>
              <div className="flex-1 h-px bg-[#c9a84c]/20" />
            </div>

            <h3 className="font-display text-white text-3xl mb-3">
              One last step; secure your place
            </h3>
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              Complete your payment to confirm your spot in the programme.
              You&apos;ll receive a receipt and onboarding details by email.
            </p>

            {/* Payment button — replace href with your Stripe Payment Link */}
            <a
              href="https://buy.stripe.com/3cI3cv6ng9MB4yffeV9Ve07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#d4b560] active:bg-[#b8963e] text-[#0f1f1e] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30 hover:scale-[1.02]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="5"
                  width="20"
                  height="14"
                  rx="3"
                  stroke="#0f1f1e"
                  strokeWidth="2"
                />
                <path
                  d="M2 10H22"
                  stroke="#0f1f1e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 15H10"
                  stroke="#0f1f1e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Proceed to payment
            </a>

            <p className="text-white/30 text-xs mt-4">
              Secured by Stripe · SSL encrypted
            </p>
          </div>
        )}

        {/* Inline animation keyframe */}
        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <Script src="//embed.typeform.com/next/embed.js" />
      </div>
    </section>
  );
}
