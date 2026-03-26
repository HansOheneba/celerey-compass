"use client";

import Link from "next/link";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

const ApplyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
      stroke="#60a5fa"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
      stroke="#60a5fa"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaymentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="5"
      width="20"
      height="14"
      rx="2"
      stroke="#a78bfa"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 10h20"
      stroke="#a78bfa"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M6 15h2M10 15h4"
      stroke="#a78bfa"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ConfirmationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#34d399" strokeWidth="1.8" />
    <path
      d="M8 12l3 3 5-5"
      stroke="#34d399"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OnboardingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      stroke="#fb923c"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="7"
      r="4"
      stroke="#fb923c"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      stroke="#fb923c"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ApplySection() {
  const steps = [
    {
      n: "1",
      title: "Apply",
      desc: "Complete our online application. Tell us about yourself, your interests, and why you're curious about Compass.",
      icon: <ApplyIcon />,
      color: "bg-blue-500/15 border-blue-400/40",
    },
    {
      n: "2",
      title: "Payment",
      desc: "After submitting, you'll go straight to our secure payment page to confirm your spot.",
      icon: <PaymentIcon />,
      color: "bg-violet-500/15 border-violet-400/40",
    },
    {
      n: "3",
      title: "Confirmation",
      desc: "Once payment is complete you'll receive a receipt and everything you need to prepare.",
      icon: <ConfirmationIcon />,
      color: "bg-emerald-500/15 border-emerald-400/40",
    },
    {
      n: "4",
      title: "Onboarding",
      desc: "Meet your cohort and get ready for an experience that could change your direction.",
      icon: <OnboardingIcon />,
      color: "bg-orange-500/15 border-orange-400/40",
    },
  ];

  return (
    <section id="apply" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/images/noise.png')" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <MotionInView>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Apply & Registration
          </p>
          <h2 className="font-display text-pale-oak text-4xl md:text-5xl mb-6 leading-tight">
            Your journey starts with a simple step
          </h2>
          <p className="text-pale-oak/70 text-lg leading-relaxed mb-12">
            We&apos;re looking for curious, open-minded young people ready to
            invest in themselves. No experience required—just willingness to
            explore and grow.
          </p>
        </MotionInView>

        <MotionStagger className="grid gap-10 md:grid-cols-2 mb-16">
          {steps.map((s) => (
            <MotionStaggerItem
              key={s.n}
              className="flex flex-col md:flex-row gap-4 items-center bg-pale-oak/5 rounded-xl p-6 border border-pale-oak/20 transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full border ${s.color}`}
              >
                {s.icon}
              </div>
              <div className="text-left">
                <p className="text-pale-oak font-semibold mb-1 text-lg">
                  {s.title}
                </p>
                <p className="text-pale-oak/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionInView delay={0.08}>
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 bg-accent text-deep-navy hover:bg-dusty-mauve active:bg-lavender-grey font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02]"
          >
            Start your application
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="text-pale-oak/30 text-xs mt-3">
            Takes less than 10 minutes
          </p>
        </MotionInView>
      </div>
    </section>
  );
}
