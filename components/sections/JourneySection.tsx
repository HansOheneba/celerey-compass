"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const weeks = [
  {
    week: "Week 1",
    title: "Self-Discovery",
    subtitle: "Know Thyself",
    desc: "Deep dive into strengths, values, interests, and career exploration. Build your Personal Compass Profile.",
    tags: ["Strengths Assessment", "Values Mapping", "Career Exploration"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },
  {
    week: "Week 2",
    title: "Communication & Workplace Readiness",
    subtitle: "Step Into the Real World",
    desc: "Communication workshop, workplace etiquette, and your internship begins.",
    tags: [
      "Professional Communication",
      "Workplace Etiquette",
      "Internship Kickoff",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
  },
  {
    week: "Week 3",
    title: "Design Thinking",
    subtitle: "Think Like a Problem-Solver",
    desc: "Learn the creative process used by designers and innovators.",
    tags: ["Design Thinking", "Collaboration", "Problem-Solving"],
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200",
  },
  {
    week: "Week 4",
    title: "Technology & Future Skills",
    subtitle: "Embrace the Future",
    desc: "Digital tools, responsible AI, and future-ready skills.",
    tags: ["Digital Tools", "Responsible AI", "Capstone Planning"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    week: "Week 5",
    title: "Storytelling & Showcase",
    subtitle: "Share Your Story",
    desc: "Presentation workshop, capstone completion, and final showcase.",
    tags: ["Storytelling", "Presentation", "Celebration"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#1a7f7a] text-sm font-semibold uppercase tracking-widest mb-4">
            The Journey
          </p>
          <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl mb-4">
            Five Weeks That Change Everything
          </h2>
          <p className="text-[#2d4a47]/60 max-w-xl mx-auto">
            Each week builds on the last, combining learning, real-world
            experience, and reflection.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#0f1f1e]/10" />

          <div className="space-y-16">
            {weeks.map((week, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Dot */}
                <div className="relative z-10 mt-2 w-8 h-8 rounded-full bg-[#1a7f7a] flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={week.image}
                      alt={week.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-[#1a7f7a] font-semibold mb-2">
                      {week.week}
                    </p>

                    <h4 className="text-xl font-semibold text-[#0f1f1e] mb-1">
                      {week.title}
                    </h4>

                    <p className="text-sm italic text-[#2d4a47]/60 mb-3">
                      {week.subtitle}
                    </p>

                    <p className="text-sm text-[#2d4a47]/70 leading-relaxed mb-4">
                      {week.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {week.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#1a7f7a]/10 text-[#1a7f7a] text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
