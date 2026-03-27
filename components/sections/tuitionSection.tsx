"use client";

import { Check, Calendar, Tag } from "lucide-react";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";
import Link from "next/link";

export default function ProgramDetailsSection() {
  return (
    <section
      id="tracks"
      className="py-24"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}
        <MotionInView className="mb-20">
          <div className="max-w-3xl">
            <h2
              className="font-display text-4xl md:text-6xl leading-tight mb-5"
              style={{ color: "var(--deep-navy-900)" }}
            >
              Everything you need <br />
              <span
                className="italic"
                style={{ color: "var(--bright-sky-500)" }}
              >
                to plan ahead.
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--deep-navy-600)" }}
            >
              A five-week experience designed for high school students to
              explore who they are, what they’re good at, and what paths they
              can take.
            </p>
          </div>
        </MotionInView>

        {/* Dates + Pricing (SIMPLIFIED) */}
        <MotionStagger className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Dates */}
          <MotionStaggerItem
            className="rounded-3xl p-8"
            style={{
              backgroundColor: "var(--deep-navy-800)",
              color: "var(--bright-sky-100)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5" />
              <p className="text-xs tracking-widest uppercase font-semibold">
                Program Dates
              </p>
            </div>

            <p className="font-display text-3xl font-bold mb-2">
              July 6 – Aug 7
            </p>
            <p className="text-sm opacity-70">2026 · 5 weeks</p>

            <div className=" pt-6 text-sm opacity-70">
              Applications close June 29, 2026
            </div>
          </MotionStaggerItem>

          {/* Pricing (MERGED) */}
          <MotionStaggerItem
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              backgroundColor: "var(--atomic-tangerine-500)",
              color: "#ffffff",
            }}
          >
            {/* SVG pattern layer */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 400 280"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Large compass rose — anchored bottom right */}
              <g
                transform="translate(360,210)"
                opacity="0.13"
                stroke="white"
                strokeWidth="1"
                fill="none"
              >
                <circle cx="0" cy="0" r="110" />
                <circle cx="0" cy="0" r="80" />
                <circle cx="0" cy="0" r="50" />
                <circle cx="0" cy="0" r="18" />
                <line x1="0" y1="-110" x2="0" y2="110" />
                <line x1="-110" y1="0" x2="110" y2="0" />
                <line x1="-78" y1="-78" x2="78" y2="78" />
                <line x1="78" y1="-78" x2="-78" y2="78" />
                {/* degree ticks */}
                {[
                  0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195,
                  210, 225, 240, 255, 270, 285, 300, 315, 330, 345,
                ].map((deg) => (
                  <line
                    key={deg}
                    x1={Math.sin((deg * Math.PI) / 180) * 110}
                    y1={-Math.cos((deg * Math.PI) / 180) * 110}
                    x2={Math.sin((deg * Math.PI) / 180) * 100}
                    y2={-Math.cos((deg * Math.PI) / 180) * 100}
                  />
                ))}
                <polygon
                  points="0,-110 -7,-80 0,-50 7,-80"
                  fill="white"
                  opacity="0.5"
                />
                <circle cx="0" cy="0" r="4" fill="white" opacity="0.4" />
              </g>

              {/* Small compass — top left */}
              <g
                transform="translate(38,42)"
                opacity="0.08"
                stroke="white"
                strokeWidth="0.8"
                fill="none"
              >
                <circle cx="0" cy="0" r="44" />
                <circle cx="0" cy="0" r="30" />
                <line x1="0" y1="-44" x2="0" y2="44" />
                <line x1="-44" y1="0" x2="44" y2="0" />
                <line x1="-31" y1="-31" x2="31" y2="31" />
                <line x1="31" y1="-31" x2="-31" y2="31" />
                <polygon
                  points="0,-44 -4,-28 0,-16 4,-28"
                  fill="white"
                  opacity="0.5"
                />
                <circle cx="0" cy="0" r="3" fill="white" opacity="0.4" />
              </g>

              {/* Celebration burst — top right */}
              <g
                transform="translate(385,22)"
                opacity="0.10"
                stroke="white"
                strokeWidth="0.8"
                fill="none"
              >
                {[
                  [-70, 50],
                  [-55, 75],
                  [-30, 85],
                  [-10, 88],
                  [-88, 22],
                  [-92, 0],
                  [-95, -18],
                  [-78, -42],
                  [-55, -65],
                ].map(([x, y], i) => (
                  <line key={i} x1="0" y1="0" x2={x} y2={y} />
                ))}
              </g>

              {/* Concentric arcs — bottom left */}
              <g opacity="0.09" stroke="white" strokeWidth="0.8" fill="none">
                <path d="M 0 280 A 70 70 0 0 1 70 210" />
                <path d="M 0 280 A 130 130 0 0 1 130 150" />
                <path d="M 0 280 A 190 190 0 0 1 190 90" />
                <path d="M 0 280 A 250 250 0 0 1 250 30" />
              </g>

              {/* Celebration sparks */}
              <g opacity="0.13" stroke="white" strokeWidth="0.8" fill="none">
                {[
                  [140, 65, 10],
                  [310, 38, 8],
                  [220, 160, 7],
                  [95, 185, 9],
                  [175, 230, 6],
                ].map(([cx, cy, r], i) => (
                  <g key={i} transform={`translate(${cx},${cy})`}>
                    <line x1="0" y1={-r} x2="0" y2={-r * 0.55} />
                    <line
                      x1={r * 0.707}
                      y1={-r * 0.707}
                      x2={r * 0.4}
                      y2={-r * 0.4}
                    />
                    <line x1={r} y1="0" x2={r * 0.55} y2="0" />
                    <line
                      x1={r * 0.707}
                      y1={r * 0.707}
                      x2={r * 0.4}
                      y2={r * 0.4}
                    />
                    <line x1="0" y1={r} x2="0" y2={r * 0.55} />
                    <line
                      x1={-r * 0.707}
                      y1={r * 0.707}
                      x2={-r * 0.4}
                      y2={r * 0.4}
                    />
                    <line x1={-r} y1="0" x2={-r * 0.55} y2="0" />
                    <line
                      x1={-r * 0.707}
                      y1={-r * 0.707}
                      x2={-r * 0.4}
                      y2={-r * 0.4}
                    />
                  </g>
                ))}
              </g>

              {/* Dashed curved paths */}
              <g
                opacity="0.10"
                stroke="white"
                strokeWidth="0.8"
                fill="none"
                strokeDasharray="2 8"
              >
                <path d="M 50 280 Q 200 60 380 170" />
                <path d="M 0 160 Q 160 30 360 90" />
              </g>
            </svg>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5" />
                <p className="text-xs tracking-widest uppercase">
                  Program Fees
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm line-through opacity-60">USD 700</p>
                <p className="font-display text-3xl">USD 500</p>
                <p className="text-sm opacity-80">Early bird pricing</p>
              </div>
              <div className="text-xs opacity-70">
                Apply before June 29 to secure discounted rate
              </div>
            </div>
          </MotionStaggerItem>
        </MotionStagger>

        {/* Weekly Rhythm */}
        <MotionInView className="mb-20">
          <h3
            className="font-display text-3xl md:text-4xl mb-3"
            style={{ color: "var(--deep-navy-900)" }}
          >
            Your weekly rhythm
          </h3>

          <p
            className="mb-10 leading-relaxed max-w-2xl"
            style={{ color: "var(--deep-navy-600)" }}
          >
            A consistent structure that balances learning, real-world exposure,
            and reflection.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                day: "Mondays",
                title: "Workshops",
                desc: "Interactive sessions on communication, design thinking, and storytelling.",
              },
              {
                day: "Tue – Thu",
                title: "Internship",
                desc: "Hands-on experience in real workplaces with guided support.",
              },
              {
                day: "Fridays",
                title: "Reflection",
                desc: "Coaching sessions to process experiences and build clarity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl p-8"
                style={{
                  backgroundColor: "var(--bright-sky-50)",
                  color: "var(--deep-navy-900)",
                  border: "1px solid var(--bright-sky-200)",
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-2 opacity-60">
                  {item.day}
                </p>
                <h4 className="font-display text-xl mb-2">{item.title}</h4>
                <p className="text-sm opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </MotionInView>

        {/* Single Track (FOCUSED) */}
        <MotionInView className="mb-20">
          <div
            className="rounded-3xl p-10 md:p-12"
            style={{
              backgroundColor: "var(--deep-navy-900)",
              color: "var(--bright-sky-100)",
            }}
          >
            <p className="text-xs uppercase tracking-widest mb-4 opacity-60">
              For High School Students
            </p>

            <h3 className="font-display text-3xl md:text-4xl mb-4">
              A focused experience for Years 10–12
            </h3>

            <p className="mb-8 max-w-2xl opacity-80">
              This program is designed to help students build confidence,
              discover their strengths, and explore future possibilities in a
              structured but supportive environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Exploratory internships with guidance",
                "Confidence and communication building",
                "Exposure to real career paths",
                "Reflective capstone project",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <Check className="w-4 h-4 mt-1" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionInView>

        {/* CTA */}
        <MotionInView>
          <div className="text-center">
            <Link
              href="/apply"
              className="inline-block px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--atomic-tangerine-500)",
                color: "#ffffff",
              }}
            >
              Apply Now
            </Link>

            <p
              className="mt-4 text-sm"
              style={{ color: "var(--deep-navy-400)" }}
            >
              Limited cohort · Early applications encouraged
            </p>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
