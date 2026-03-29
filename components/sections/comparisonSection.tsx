"use client";

import { MotionInView } from "@/components/sections/scrollAnimator";

export default function ComparisonSection() {
  return (
    <section
      id="program"
      className="py-24"
      style={{ backgroundColor: "var(--color-ghost-white-50)" }}
    >
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}

        {/* Comparison Cards */}
        <MotionInView className="max-w-6xl mx-auto mb-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* LEFT — Old Way */}
            <div>
              <p className="text-xs uppercase mb-4 font-semibold text-atomic-tangerine-500 tracking-wider">
                The old way
              </p>

              <h3 className="font-display text-3xl mb-6 text-deep-navy-900 leading-snug">
                You’re expected to figure it out as you go.
              </h3>

              <ul className="space-y-4">
                {[
                  "You’re supposed to already know what you want",
                  "Most of the focus is on output, not growth",
                  "Little guidance, even less reflection",
                  "You either keep up or get left behind",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-atomic-tangerine-500 text-lg">
                      ✗
                    </span>
                    <span className="text-deep-navy-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Compass */}
            <div className="relative">
              {/* subtle background glow */}
              <div className="absolute -inset-6 bg-bright-sky-400/10 blur-2xl rounded-3xl -z-10" />

              <p className="text-xs uppercase mb-4 font-semibold text-bright-sky-600 tracking-wider">
                The Compass way
              </p>

              <h3 className="font-display text-3xl mb-6 text-deep-navy-900 leading-snug">
                You’re guided while you figure it out.
              </h3>

              <ul className="space-y-4">
                {[
                  "You explore different paths before committing",
                  "Learning, doing, and reflecting all matter",
                  "You’re supported with real mentorship",
                  "You grow with clarity, not pressure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-bright-sky-500 text-lg">✓</span>
                    <span className="text-deep-navy-800 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionInView>
    
      </div>
    </section>
  );
}
