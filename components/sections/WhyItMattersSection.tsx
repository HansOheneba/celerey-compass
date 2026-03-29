"use client";

import { MotionInView } from "@/components/sections/scrollAnimator";

export default function WhyItMattersSection() {
  return (
    <MotionInView
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--atomic-tangerine-50)" }}
    >
      {/* Decorative bg shapes */}
      <div
        className="absolute -top-16 -right-20 w-80 h-80 rounded-full -z-10 pointer-events-none"
        style={{ background: "var(--bright-sky-400)", opacity: 0.12 }}
      />
      <div
        className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full -z-10 pointer-events-none"
        style={{ background: "var(--atomic-tangerine-500)", opacity: 0.08 }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT — TEXT */}
        <div className="max-w-xl space-y-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
           
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--atomic-tangerine-500)" }}
            >
              This is your why
            </p>
          </div>

          {/* Headline */}
          <h3
            className="font-display text-4xl md:text-5xl leading-tight"
            style={{ color: "var(--deep-navy-900)", letterSpacing: "-0.02em" }}
          >
            You can&apos;t pick a direction <br />
            <span className="relative inline-block">
              <span className="relative z-10">without a</span>
              <span
                className="absolute z-0"
                style={{
                  bottom: 2,
                  left: -3,
                  right: -3,
                  height: 10,
                  background: "var(--bright-sky-400)",
                }}
              />
            </span>{" "}
            <span className="italic" style={{ color: "var(--deep-navy-500)" }}>
              starting point.
            </span>
          </h3>

          {/* Body */}
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--deep-navy-700)" }}
          >
            Nobody tells you that choosing a career when you barely know
            yourself is a setup for regret.{" "}
            <strong style={{ color: "var(--deep-navy-900)" }}>
              Compass starts somewhere different.
            </strong>
          </p>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--deep-navy-700)" }}
          >
            You&apos;ll spend real time inside a field —{" "}
            <span className="relative inline">
              <span
                className="relative z-10 font-semibold"
                style={{ color: "var(--deep-navy-900)" }}
              >
                doing the work, feeling the pace, noticing what lights you up
              </span>
              <span
                className="absolute z-0"
                style={{
                  bottom: 0,
                  left: -2,
                  right: -2,
                  height: 8,
                  background: "var(--atomic-tangerine-500)",
                  opacity: 0.25,
                }}
              />
            </span>{" "}
            and what doesn&apos;t.
          </p>

          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--deep-navy-700)" }}
          >
            That feeling?{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 font-bold"
                style={{ color: "var(--deep-navy-900)" }}
              >
                That&apos;s your why.
              </span>
              <span
                className="absolute z-0"
                style={{
                  bottom: 2,
                  left: -2,
                  right: -2,
                  height: 8,
                  background: "var(--bright-sky-400)",
                  opacity: 0.5,
                }}
              />
            </span>{" "}
            And once you have it, everything else gets easier.
          </p>

 
        </div>

        {/* RIGHT — VIDEO */}
        <div className="relative flex justify-center md:justify-end">
          {/* Offset border behind phone */}
          <div
            className="absolute rounded-[2rem] z-0"
            style={{
              bottom: -12,
              right: -12,
              width: 320,
              height: 580,
              border: "2px solid var(--deep-navy-900)",
            }}
          />

          {/* Phone frame */}
          <div
            className="relative w-[320px] h-[580px] rounded-[2rem] overflow-hidden z-10"
            style={{
              background: "#000",
              boxShadow: "0 32px 80px rgba(6,16,45,0.35)",
            }}
          >
            <video
              src="/claire.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-[1.05]"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
              }}
            />

        

            {/* Bottom card */}
            <div
              className="absolute bottom-5 right-4 px-3.5 py-3 max-w-[170px]"
              style={{
                background: "var(--deep-navy-900)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--atomic-tangerine-500)" }}
                />
                <p
                  className="text-[11px] font-bold"
                  style={{ color: "var(--bright-sky-50)" }}
                >
                  Your why, found
                </p>
              </div>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--bright-sky-200)" }}
              >
                before you commit to anything
              </p>
            </div>

            {/* Corner stamp */}
          
          </div>
        </div>
      </div>
    </MotionInView>
  );
}
