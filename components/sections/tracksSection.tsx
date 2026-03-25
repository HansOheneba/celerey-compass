"use client";

import { Check } from "lucide-react";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

export default function TracksSection() {
  return (
    <section id="tracks" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <MotionInView className="text-center mb-16">
          <p className="text-[#1a7f7a] text-sm font-semibold uppercase tracking-widest mb-4">
            Two Tracks, One Cohort
          </p>
          <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl mb-4">
            Age-appropriate paths with shared experiences
          </h2>
          <p className="text-[#2d4a47]/60 max-w-xl mx-auto">
            Both tracks run within the same cohort, with shared learning
            sessions but age-appropriate expectations, internship intensity, and
            capstone outcomes.
          </p>
        </MotionInView>

        <MotionStagger className="grid md:grid-cols-2 gap-8">
          {/* High School Track */}
          <MotionStaggerItem className="relative rounded-3xl overflow-hidden border border-[#1a7f7a]/20 bg-gradient-to-br from-[#1a7f7a]/5 to-transparent p-8 md:p-10">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#1a7f7a]/10 text-[#1a7f7a] text-xs font-semibold">
              Years 10–12
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#1a7f7a]/10 flex items-center justify-center mb-6">
              <span className="text-2xl">🏫</span>
            </div>
            <h3 className="font-display text-[#0f1f1e] text-3xl mb-2">
              High School Track
            </h3>
            <p className="text-[#2d4a47]/60 mb-8 leading-relaxed">
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
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#1a7f7a]/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#1a7f7a]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1f1e] text-sm">
                      {item.title}
                    </p>
                    <p className="text-[#2d4a47]/60 text-sm mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[#1a7f7a]/10">
              <p className="text-xs text-[#2d4a47]/40 uppercase tracking-widest mb-3">
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
                    className="px-3 py-1 rounded-full bg-[#1a7f7a]/8 text-[#1a7f7a] text-xs"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </MotionStaggerItem>

          {/* University Track */}
          <MotionStaggerItem className="relative rounded-3xl overflow-hidden bg-[#0f1f1e] p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold z-10">
              University Students
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/15 flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-display text-white text-3xl mb-2">
                University Track
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed">
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
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {item.title}
                      </p>
                      <p className="text-white/50 text-sm mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-3">
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
                      className="px-3 py-1 rounded-full bg-[#c9a84c]/15 text-[#c9a84c] text-xs"
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
