"use client";

import { Check, Calendar, Clock, Tag } from "lucide-react";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

export default function ProgramDetailsSection() {
  return (
    <section
      id="tracks"
      className="py-24"
      style={{ backgroundColor: "var(--deep-navy)" }}
    >
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}
        <MotionInView className="mb-20">
          <div className="flex items-start gap-6">
            <div
              className="hidden md:block w-1 self-stretch rounded-full mt-1 shrink-0"
              style={{ backgroundColor: "var(--dusty-mauve)" }}
            />
            <div>
              <p
                className="text-xs tracking-widest uppercase font-medium mb-4"
                style={{ color: "var(--dusty-mauve)" }}
              >
                Dates, Tuition and Rhythm
              </p>
              <h2
                className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-5"
                style={{ color: "var(--pale-oak)" }}
              >
                Everything you need <br />
                <span
                  className="italic"
                  style={{ color: "var(--lavender-grey)" }}
                >
                  to plan ahead.
                </span>
              </h2>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{
                  color: "color-mix(in srgb, var(--pale-oak) 55%, transparent)",
                }}
              >
                Five weeks. Two tracks. One cohort. Here is exactly what to
                expect before you apply.
              </p>
            </div>
          </div>
        </MotionInView>

        {/* Date + Tuition Row */}
        <MotionStagger className="grid md:grid-cols-3 gap-5 mb-16">
          {/* Dates */}
          <MotionStaggerItem
            className="rounded-3xl p-8 flex flex-col gap-4"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--pale-oak) 8%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--pale-oak) 12%, transparent)",
            }}
          >
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--pale-oak) 15%, transparent)",
              }}
            >
              <Calendar
                className="w-4 h-4"
                style={{ color: "var(--pale-oak)" }}
              />
            </div>
            <div>
              <p
                className="text-xs tracking-widest uppercase font-medium mb-1"
                style={{ color: "var(--lavender-grey)" }}
              >
                Program Dates
              </p>
              <p
                className="font-display text-2xl font-bold"
                style={{ color: "var(--pale-oak)" }}
              >
                July 6 to Aug 7
              </p>
              <p
                className="text-sm mt-1"
                style={{
                  color: "color-mix(in srgb, var(--pale-oak) 50%, transparent)",
                }}
              >
                2026 · 5 weeks
              </p>
            </div>
            <div
              className="mt-auto pt-4 text-xs"
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--pale-oak) 10%, transparent)",
                color: "color-mix(in srgb, var(--pale-oak) 40%, transparent)",
              }}
            >
              Applications close June 29, 2026
            </div>
          </MotionStaggerItem>

          {/* Standard Tuition */}
          <MotionStaggerItem
            className="rounded-3xl p-8 flex flex-col gap-4"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--lavender-grey) 10%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--lavender-grey) 20%, transparent)",
            }}
          >
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--lavender-grey) 20%, transparent)",
              }}
            >
              <Clock
                className="w-4 h-4"
                style={{ color: "var(--lavender-grey)" }}
              />
            </div>
            <div>
              <p
                className="text-xs tracking-widest uppercase font-medium mb-1"
                style={{ color: "var(--lavender-grey)" }}
              >
                Standard Tuition
              </p>
              <p
                className="font-display text-2xl font-bold line-through"
                style={{
                  color: "color-mix(in srgb, var(--pale-oak) 40%, transparent)",
                }}
              >
                GHS 7,679.99
              </p>
              <p
                className="text-sm mt-0.5 line-through"
                style={{
                  color:
                    "color-mix(in srgb, var(--lavender-grey) 60%, transparent)",
                }}
              >
                USD 700
              </p>
            </div>
            <div
              className="mt-auto pt-4 text-xs"
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--lavender-grey) 15%, transparent)",
                color:
                  "color-mix(in srgb, var(--lavender-grey) 50%, transparent)",
              }}
            >
              After June 29, 2026
            </div>
          </MotionStaggerItem>

          {/* Early Bird */}
          <MotionStaggerItem
            className="rounded-3xl p-8 flex flex-col gap-4 relative overflow-hidden"
            style={{
              backgroundColor: "var(--pale-oak)",
            }}
          >
            <div
              className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--deep-navy) 12%, transparent)",
                color: "var(--deep-navy)",
              }}
            >
              Early Bird
            </div>
            <div
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl pointer-events-none"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--khaki-beige) 40%, transparent)",
              }}
            />
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--deep-navy) 10%, transparent)",
              }}
            >
              <Tag className="w-4 h-4" style={{ color: "var(--deep-navy)" }} />
            </div>
            <div className="relative z-10">
              <p
                className="text-xs tracking-widest uppercase font-medium mb-1"
                style={{ color: "var(--khaki-beige)" }}
              >
                Apply before June 29
              </p>
              <p
                className="font-display text-2xl font-bold"
                style={{ color: "var(--deep-navy)" }}
              >
                GHS 5,485.71
              </p>
              <p
                className="text-sm mt-0.5"
                style={{ color: "var(--lavender-grey)" }}
              >
                USD 500 · Save GHS 2,194
              </p>
            </div>
            <div
              className="mt-auto pt-4 text-xs relative z-10"
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--deep-navy) 12%, transparent)",
                color: "var(--lavender-grey)",
              }}
            >
              One week before program starts
            </div>
          </MotionStaggerItem>
        </MotionStagger>

        {/* Weekly Rhythm */}
        <MotionInView className="mb-20">
          <h3
            className="font-display text-3xl md:text-4xl font-extrabold mb-2"
            style={{ color: "var(--pale-oak)" }}
          >
            Your weekly rhythm
          </h3>
          <p
            className="mb-10"
            style={{
              color: "color-mix(in srgb, var(--pale-oak) 50%, transparent)",
            }}
          >
            Every week follows the same reliable structure.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                day: "Mondays",
                title: "Learning and Workshops",
                description:
                  "Structured sessions on communication, design thinking, technology, and storytelling. The foundations that make everything else click.",
                num: "1",
                cardBg: "color-mix(in srgb, var(--pale-oak) 8%, transparent)",
                cardBorder:
                  "color-mix(in srgb, var(--pale-oak) 12%, transparent)",
                numBg: "var(--pale-oak)",
                numColor: "var(--deep-navy)",
                labelColor: "var(--lavender-grey)",
                titleColor: "var(--pale-oak)",
                descColor:
                  "color-mix(in srgb, var(--pale-oak) 55%, transparent)",
              },
              {
                day: "Tue to Thu",
                title: "Internship Experience",
                description:
                  "Three days in a real workplace. You contribute, ask questions, and build the kind of experience no classroom can replicate.",
                num: "2",
                cardBg:
                  "color-mix(in srgb, var(--dusty-mauve) 12%, transparent)",
                cardBorder:
                  "color-mix(in srgb, var(--dusty-mauve) 20%, transparent)",
                numBg: "var(--dusty-mauve)",
                numColor: "var(--pale-oak)",
                labelColor: "var(--dusty-mauve)",
                titleColor: "var(--pale-oak)",
                descColor:
                  "color-mix(in srgb, var(--pale-oak) 55%, transparent)",
              },
              {
                day: "Fridays",
                title: "Reflection and Coaching",
                description:
                  "Guided sessions that help you process what you experienced, extract the insights, and figure out what it means for your direction.",
                num: "3",
                cardBg:
                  "color-mix(in srgb, var(--lavender-grey) 12%, transparent)",
                cardBorder:
                  "color-mix(in srgb, var(--lavender-grey) 20%, transparent)",
                numBg: "var(--lavender-grey)",
                numColor: "var(--pale-oak)",
                labelColor: "var(--lavender-grey)",
                titleColor: "var(--pale-oak)",
                descColor:
                  "color-mix(in srgb, var(--pale-oak) 55%, transparent)",
              },
            ].map((block) => (
              <div
                key={block.day}
                className="rounded-3xl p-8 flex flex-col gap-5"
                style={{
                  backgroundColor: block.cardBg,
                  border: `1px solid ${block.cardBorder}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black"
                    style={{
                      backgroundColor: block.numBg,
                      color: block.numColor,
                    }}
                  >
                    {block.num}
                  </div>
                  <p
                    className="text-xs tracking-widest uppercase font-medium"
                    style={{ color: block.labelColor }}
                  >
                    {block.day}
                  </p>
                </div>
                <div>
                  <h4
                    className="font-display text-xl font-bold mb-2"
                    style={{ color: block.titleColor }}
                  >
                    {block.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: block.descColor }}
                  >
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionInView>

        {/* Two Tracks */}
        <MotionInView className="mb-12">
          <h3
            className="font-display text-3xl md:text-4xl font-extrabold mb-2"
            style={{ color: "var(--pale-oak)" }}
          >
            Two tracks, one cohort
          </h3>
          <p
            style={{
              color: "color-mix(in srgb, var(--pale-oak) 50%, transparent)",
            }}
          >
            Age-appropriate paths with shared experiences.
          </p>
        </MotionInView>

        <MotionStagger className="grid md:grid-cols-2 gap-8">
          {/* High School Track */}
          <MotionStaggerItem
            className="relative rounded-3xl overflow-hidden p-8 md:p-10"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--pale-oak) 8%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--pale-oak) 14%, transparent)",
            }}
          >
            <div
              className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--pale-oak) 12%, transparent)",
                color: "var(--pale-oak)",
              }}
            >
              Years 10 to 12
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--pale-oak) 12%, transparent)",
              }}
            >
              <span
                className="font-black text-lg"
                style={{ color: "var(--pale-oak)" }}
              >
                HS
              </span>
            </div>
            <h3
              className="font-display text-3xl mb-2"
              style={{ color: "var(--pale-oak)" }}
            >
              High School Track
            </h3>
            <p
              className="mb-8 leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--pale-oak) 55%, transparent)",
              }}
            >
              Focused on identity discovery, confidence building, and career
              exposure. A supportive environment to explore possibilities
              without pressure.
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Exploratory Internships",
                  desc: "Lighter workload, highly supported, focused on observation and participation",
                },
                {
                  title: "Parent Communication",
                  desc: "Regular updates, parental consent, and involvement in key moments",
                },
                {
                  title: "Reflective Capstone",
                  desc: "Exploratory project showcasing self-discovery and growth journey",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--pale-oak) 12%, transparent)",
                    }}
                  >
                    <Check
                      className="w-3 h-3"
                      style={{ color: "var(--pale-oak)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--pale-oak)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{
                        color:
                          "color-mix(in srgb, var(--pale-oak) 50%, transparent)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-8 pt-8"
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--pale-oak) 10%, transparent)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "color-mix(in srgb, var(--pale-oak) 35%, transparent)",
                }}
              >
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Who am I?",
                  "What are my strengths?",
                  "What possibilities exist?",
                  "Am I ready to decide?",
                ].map((q) => (
                  <span
                    key={q}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--pale-oak) 10%, transparent)",
                      color: "var(--pale-oak)",
                    }}
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </MotionStaggerItem>

          {/* University Track */}
          <MotionStaggerItem
            className="relative rounded-3xl overflow-hidden p-8 md:p-10"
            style={{
              backgroundColor: "var(--pale-oak)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--dusty-mauve) 20%, transparent)",
              }}
            />
            <div
              className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold z-10"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--deep-navy) 10%, transparent)",
                color: "var(--deep-navy)",
              }}
            >
              University Students
            </div>
            <div className="relative z-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--deep-navy) 10%, transparent)",
                }}
              >
                <span
                  className="font-black text-lg"
                  style={{ color: "var(--deep-navy)" }}
                >
                  UNI
                </span>
              </div>
              <h3
                className="font-display text-3xl mb-2"
                style={{ color: "var(--deep-navy)" }}
              >
                University Track
              </h3>
              <p
                className="mb-8 leading-relaxed"
                style={{ color: "var(--lavender-grey)" }}
              >
                Focused on career clarity, skill building, and professional
                exposure. More responsibility and real-world application of
                learning.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Project-Based Internships",
                    desc: "Higher ownership, real deliverables, meaningful contribution",
                  },
                  {
                    title: "Professional Development",
                    desc: "Career mentoring, network building, industry connections",
                  },
                  {
                    title: "Applied Capstone",
                    desc: "Problem-solving project demonstrating applied learning and impact",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div
                      className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--deep-navy) 10%, transparent)",
                      }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: "var(--deep-navy)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--deep-navy)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "var(--lavender-grey)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="mt-8 pt-8"
                style={{
                  borderTop:
                    "1px solid color-mix(in srgb, var(--deep-navy) 10%, transparent)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "var(--khaki-beige)" }}
                >
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "What direction fits me?",
                    "How do I build relevant skills?",
                    "What value can I create?",
                  ].map((q) => (
                    <span
                      key={q}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--deep-navy) 8%, transparent)",
                        color: "var(--deep-navy)",
                      }}
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  );
}
