"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

// Shared FAQ component for consistent accordion behavior
function FAQAccordion({ items }: { items: Array<{ q: string; a: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((faq, idx) => (
        <div key={idx} className="border-b border-[#0f1f1e]/10 last:border-0">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex justify-between items-center py-5 text-left group"
          >
            <span className="font-medium text-deep-navy pr-6 group-hover:text-accent transition-colors">
              {faq.q}
            </span>
            <ChevronDown
              className={`flex-shrink-0 w-5 h-5 text-deep-navy/50 transition-transform ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === idx && (
            <div className="pb-5">
              <p className="text-deep-navy/60 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}



export function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <MotionInView className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            For Students
          </p>
          <h2 className="font-display text-deep-navy text-4xl md:text-5xl mb-6 leading-tight">
            This is your moment
          </h2>
          <p className="text-deep-navy/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Feeling unsure about your future? That&apos;s exactly why Compass
            exists. You don&apos;t need to have it all figured out—you just need
            to be curious enough to explore.
          </p>
        </MotionInView>

        <MotionStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              emoji: "🙌",
              title: "You don't need experience",
              desc: "Compass is designed for beginners. We'll teach you everything you need to know—your job is just to show up with an open mind.",
            },
            {
              emoji: "💭",
              title: "Being unsure is okay",
              desc: "Most people your age feel the same way. That's not a weakness, it's an opportunity to explore before you have to commit.",
            },
            {
              emoji: "🤝",
              title: "You'll be supported",
              desc: "You'll have coaches, mentors, and peers walking alongside you. This isn't a test, it's a journey we take together.",
            },
            {
              emoji: "🧭",
              title: "After Compass, you'll have direction",
              desc: "You'll leave with a Personal Compass Profile, real experience, new skills, and most importantly, clarity about your next steps.",
            },
          ].map((item) => (
            <MotionStaggerItem
              key={item.title}
              className="bg-[#f5f0e8] rounded-2xl p-6"
            >
              <span className="text-3xl mb-4 block">{item.emoji}</span>
              <p className="font-semibold text-deep-navy mb-2">{item.title}</p>
              <p className="text-deep-navy/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionInView className="text-center">
          <a
            href="/apply"
            className="inline-block px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-dusty-mauve transition-all hover:scale-105"
          >
            Start Your Application
          </a>
        </MotionInView>
      </div>
    </section>
  );
}

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

export function SchoolsSection() {
  return (
    <section id="schools" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6">
        <MotionInView className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            For Schools
          </p>
          <h2 className="font-display text-deep-navy text-4xl md:text-5xl mb-4">
            Complementing classroom learning
          </h2>
          <p className="text-deep-navy/60 max-w-xl mx-auto">
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
              <div className="text-3xl mb-3 text-accent">{item.icon}</div>
              <h4 className="font-semibold text-deep-navy mb-2">
                {item.title}
              </h4>
              <p className="text-deep-navy/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <div className="grid lg:grid-cols-2 gap-12">
          <MotionInView>
            <h3 className="font-display text-deep-navy text-2xl mb-6">
              School FAQ
            </h3>
            <FAQAccordion items={schoolFAQs} />
          </MotionInView>
          <MotionInView className="bg-deep-navy rounded-2xl p-8 self-start">
            <h4 className="font-display text-pale-oak text-2xl mb-3">
              Interested in a school partnership?
            </h4>
            <p className="text-pale-oak/60 mb-6">
              We offer custom cohorts, referral arrangements, and career
              guidance integration.
            </p>
            <a
              href="#partners"
              className="inline-block px-6 py-3 rounded-full text-white bg-accent font-semibold hover:bg-dusty-mauve transition-colors"
            >
              Contact our partnerships team
            </a>
          </MotionInView>
        </div>
      </div>
    </section>
  );
}
