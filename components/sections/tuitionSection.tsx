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

            <div className="mt-6 pt-6 border-t border-white/10 text-sm opacity-70">
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
            <div className="flex items-center gap-3 mb-6">
              <Tag className="w-5 h-5" />
              <p className="text-xs tracking-widest uppercase ">
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
                <h4 className="font-display text-xl mb-2">
                  {item.title}
                </h4>
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
