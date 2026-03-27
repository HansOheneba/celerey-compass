"use client";

import { MotionInView } from "@/components/sections/scrollAnimator";

type Outcome = {
  number: string;
  tag: string;
  tagColor: string;
  accentColor: string;
  headline: string;
  body: string;
};

const outcomes: Outcome[] = [
  {
    number: "01",
    tag: "Real Work",
    tagColor: "var(--color-atomic-tangerine-500)",
    accentColor: "var(--color-atomic-tangerine-500)",
    headline: "You will have worked inside a real company before anyone your age has.",
    body: "Three days a week embedded inside a host company: fintech, agritech, creative industries, and beyond. Real tasks, real deliverables, real feedback. The kind of experience most people don't get until their second year of university. You'll have it before you leave high school.",
  },
  {
    number: "02",
    tag: "Self-Knowledge",
    tagColor: "var(--color-bright-sky-500)",
    accentColor: "var(--color-bright-sky-500)",
    headline: "You will know exactly who you are and what you're built for.",
    body: "A full week of structured self-discovery before the internship begins: strengths mapping, values work, interests profiling. You leave with a Personal Compass Profile that tells you, clearly and specifically, where your edge is.",
  },
  {
    number: "03",
    tag: "Real Skills",
    tagColor: "var(--color-deep-navy-900)",
    accentColor: "var(--color-deep-navy-900)",
    headline: "You will think and communicate like someone twice your age.",
    body: "Weekly workshops in design thinking, communication, storytelling, and technology taught by practitioners, not lecturers.",
  },
  {
    number: "04",
    tag: "Real Mentors",
    tagColor: "#2A9D6A",
    accentColor: "#2A9D6A",
    headline: "You will have mentors who've actually done it.",
    body: "Weekly 1-on-1 coaching from professionals who have built things, led teams, and made hard calls.",
  },
  {
    number: "05",
    tag: "Yours Forever",
    tagColor: "#B07D4F",
    accentColor: "#B07D4F",
    headline: "You will leave with something no one can take from you.",
    body: "A capstone project. A certificate. A Personal Compass Profile. A global cohort and the certainty of knowing what you want, and why.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#a9cee3]">
      <div className="max-w-7xl mx-auto">
        <MotionInView>
          <div className="max-w-2xl mb-14 mx-auto">
            <h2 className="font-display text-3xl text-center md:text-5xl leading-tight text-deep-navy mb-5">
              What you walk away with
            </h2>
          </div>
        </MotionInView>

        <MotionInView>
          <div className="space-y-0.5">
            {outcomes.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl overflow-hidden grid grid-cols-[5px_1fr] hover:shadow-md transition-shadow duration-200"
              >
                {/* Color accent bar */}
                <div style={{ backgroundColor: item.accentColor }} />

                {/* Content */}
                <div className="p-6 md:p-7 grid grid-cols-1 md:grid-cols-[48px_220px_1fr] items-center gap-4 md:gap-6">
                  <span className="font-display text-2xl text-deep-navy opacity-20 hidden md:block">
                    {item.number}
                  </span>
                  <div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest mb-2 block"
                      style={{ color: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                    <h4 className="font-display text-deep-navy text-base md:text-lg leading-snug">
                      {item.headline}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-deep-navy/50 md:border-l md:border-deep-navy/10 md:pl-6">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionInView>
      </div>
    </section>
  );
}