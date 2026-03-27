"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   Step data — real Unsplash images, no icons
───────────────────────────────────────────── */
const steps = [
  {
    n: "01",
    title: "Apply",
    desc: "Complete our short online application. Tell us about yourself, your interests, and what draws you to Compass.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    alt: "Student writing an application",
   
    accent: "#60a5fa",
  },
  {
    n: "02",
    title: "Payment",
    desc: "Secure your spot instantly. After submitting you're taken straight to our safe payment page.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    alt: "Secure online payment",
  
    accent: "#a78bfa",
  },
  {
    n: "03",
    title: "Confirmation",
    desc: "Receive your receipt and a welcome pack with everything you need to prepare for the programme.",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80",
    alt: "Email confirmation on phone",
   
    accent: "#34d399",
  },
  {
    n: "04",
    title: "Onboarding",
    desc: "Meet your cohort, discover your track, and get ready for an experience that could change your direction.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    alt: "Young people meeting in a group",

    accent: "#fb923c",
  },
];

/* ─────────────────────────────────────────────
   Fade-up helper
───────────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Step card
───────────────────────────────────────────── */
function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300"
      style={{ boxShadow: `0 0 0 1px ${step.accent}18` }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={step.img}
          alt={step.alt}
          fill
          className="object-cover transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/40 to-transparent" />

        {/* Step number — bottom-left over image */}
        <div className="absolute bottom-4 left-5 flex items-end gap-3">
          <span
            className="font-mono text-4xl font-bold leading-none"
            style={{ color: step.accent }}
          >
            {step.n}
          </span>
        </div>

  
      </div>

      {/* Text */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="text-pale-oak font-display text-xl">
          {step.title}
        </h3>
        <p className="text-pale-oak/55 text-sm leading-relaxed">{step.desc}</p>

    
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
export default function ApplySection() {
  return (
    <section id="apply" className="relative py-28 bg-deep-navy overflow-hidden">
      {/* ── Background atmosphere ── */}
      {/* Large radial glow — top left */}
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Smaller glow — bottom right */}
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.09) 0%, transparent 70%)",
        }}
      />
      {/* Horizontal rule lines texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Header ── */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <FadeUp>
           
            <h2 className="font-display text-pale-oak text-4xl md:text-5xl leading-[1.1]">
              Your journey
              <span className="italic text-accent">starts here.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15} className="md:text-right">
            <p className="text-pale-oak/60 text-base leading-relaxed max-w-md md:ml-auto">
              This experience is designed to help young people build confidence,
              gain real-world exposure, and better understand their strengths
              and direction.
            </p>
          </FadeUp>
        </div>

        {/* ── Step cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((s, i) => (
            <StepCard key={s.n} step={s} index={i} />
          ))}
        </div>

        {/* ── CTA strip ── */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-7">
            {/* Left copy */}
            <div>
              <p className="text-pale-oak font-display text-xl mb-1">
                Ready to find your direction?
              </p>
              <p className="text-pale-oak/45 text-sm">
                Applications open · Programme runs July 6 – August 7, 2026
              </p>
            </div>

            {/* Right CTA */}
            <Link
              href="/apply"
              className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm text-white overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-accent/25 shrink-0"
              style={{ backgroundColor: "var(--accent, #f97316)" }}
            >
              {/* Shine sweep */}
              <span className="absolute text-white inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              Start your application
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
