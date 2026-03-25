"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

const studentFAQs = [
  {
    q: "Do I need any experience?",
    a: "Not at all! Compass is designed for people with zero experience. We're looking for curiosity and willingness to learn—not a resume. You'll learn everything you need during the program.",
  },
  {
    q: "What if I'm not sure what I want to do?",
    a: "That's literally why Compass exists! We're here to help you discover what you might enjoy. Being unsure is the perfect starting point—it means you're open to possibilities.",
  },
  {
    q: "Will I get enough support?",
    a: "Absolutely. You'll have a personal coach, access to facilitators, and your cohort peers. Friday reflection sessions are dedicated to processing your experiences. We've got you.",
  },
  {
    q: "What happens after Compass?",
    a: "You'll have your Personal Compass Profile to guide future decisions, connections with mentors who may support your journey, and the confidence that comes from real-world experience. Many alumni stay connected through our community.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#0f1f1e]/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-medium text-[#0f1f1e] pr-6 group-hover:text-[#1a7f7a] transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-[#2d4a47]/40 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-[#2d4a47]/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <MotionStagger className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionStaggerItem>
            <p className="text-[#1a7f7a] text-sm font-semibold uppercase tracking-widest mb-4">
              For Students
            </p>
            <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl mb-6 leading-tight">
              This is your moment
            </h2>
            <p className="text-[#2d4a47]/70 text-lg mb-10 leading-relaxed">
              Feeling unsure about your future? That&apos;s exactly why Compass
              exists. You don&apos;t need to have it all figured out—you just
              need to be curious enough to explore.
            </p>

            <MotionStagger className="space-y-6">
              {[
                {
                  emoji: "🙌",
                  title: "You don't need experience",
                  desc: "Compass is designed for beginners. We'll teach you everything you need to know—your job is just to show up with an open mind.",
                },
                {
                  emoji: "💭",
                  title: "Being unsure is okay",
                  desc: "Most people your age feel the same way. That's not a weakness—it's an opportunity to explore before you have to commit.",
                },
                {
                  emoji: "🤝",
                  title: "You'll be supported",
                  desc: "You'll have coaches, mentors, and peers walking alongside you. This isn't a test—it's a journey we take together.",
                },
                {
                  emoji: "🧭",
                  title: "After Compass, you'll have direction",
                  desc: "You'll leave with a Personal Compass Profile, real experience, new skills, and most importantly—clarity about your next steps.",
                },
              ].map((item) => (
                <MotionStaggerItem key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {item.emoji}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0f1f1e] mb-1">
                      {item.title}
                    </p>
                    <p className="text-[#2d4a47]/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>

            <a
              href="#apply"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-[#1a7f7a] text-white font-semibold hover:bg-[#0d5c58] transition-all hover:scale-105"
            >
              Start Your Application
            </a>
          </MotionStaggerItem>

          <MotionStaggerItem>
            <h3 className="font-display text-[#0f1f1e] text-2xl mb-6">
              Your Questions Answered
            </h3>
            <div>
              {studentFAQs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  );
}

export function SchoolsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const schoolFAQs = [
    {
      q: "Which students are eligible?",
      a: "High school students in Years 10-12 and university students are eligible. We look for curious, motivated students open to self-discovery—academic achievement is not the primary criterion.",
    },
    {
      q: "How does Compass align with curriculum?",
      a: "Our workshops cover transferable skills including communication, design thinking, technology literacy, and presentation skills—all valuable regardless of subject focus. The program runs during school holidays.",
    },
    {
      q: "Can schools partner with Compass?",
      a: "Yes! We offer school partnership programs including custom cohorts, referral arrangements, and integration with career guidance programs. Contact us to discuss options for your school.",
    },
  ];

  return (
    <section id="schools" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6">
        <MotionInView className="text-center mb-16">
          <p className="text-[#1a7f7a] text-sm font-semibold uppercase tracking-widest mb-4">
            For Schools
          </p>
          <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl mb-4">
            Complementing classroom learning
          </h2>
          <p className="text-[#2d4a47]/60 max-w-xl mx-auto">
            Compass bridges the gap between academic learning and real-world
            application. We help students develop skills that complement their
            formal education while exploring future pathways.
          </p>
        </MotionInView>

        <MotionStagger className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: "🎯",
              title: "Career Readiness",
              desc: "Students return with clearer goals and practical workplace skills",
            },
            {
              icon: "🌱",
              title: "Personal Development",
              desc: "Self-awareness and confidence that enhances classroom engagement",
            },
            {
              icon: "📐",
              title: "Subject Alignment",
              desc: "Workshops cover design thinking, communication, and technology",
            },
            {
              icon: "🤝",
              title: "Partnership Options",
              desc: "Custom programs and referral partnerships available",
            },
          ].map((item) => (
            <MotionStaggerItem
              key={item.title}
              className="bg-white border border-[#0f1f1e]/8 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-[#0f1f1e] mb-2">
                {item.title}
              </h4>
              <p className="text-[#2d4a47]/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionStagger className="grid lg:grid-cols-2 gap-12">
          <MotionStaggerItem>
            <h3 className="font-display text-[#0f1f1e] text-2xl mb-2">
              School FAQ
            </h3>
            <div>
              {schoolFAQs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-[#0f1f1e]/10 last:border-0"
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="w-full flex justify-between items-center py-5 text-left group"
                  >
                    <span className="font-medium text-[#0f1f1e] pr-6 group-hover:text-[#1a7f7a] transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`flex-shrink-0 w-5 h-5 text-[#2d4a47]/40 transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIdx === i && (
                    <div className="pb-5">
                      <p className="text-[#2d4a47]/70 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </MotionStaggerItem>
          <MotionStaggerItem className="bg-[#0f1f1e] rounded-2xl p-8 self-start">
            <h4 className="font-display text-white text-2xl mb-3">
              Interested in a school partnership?
            </h4>
            <p className="text-white/60 mb-6">
              We offer custom cohorts, referral arrangements, and career
              guidance integration.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-[#c9a84c] text-[#0f1f1e] font-semibold hover:bg-[#b8943e] transition-colors"
            >
              Contact our partnerships team
            </a>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  );
}
