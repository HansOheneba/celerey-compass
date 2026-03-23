"use client";

import { useState } from "react";
import { ChevronDown, Shield, MessageSquare, Clock, Users } from "lucide-react";

const parentFAQs = [
  {
    q: "Is the program safe?",
    a: "Absolutely. All partner companies are vetted, all facilitators are trained, and we maintain appropriate supervision ratios. High school students have additional check-ins, and parents receive regular updates throughout the program.",
  },
  {
    q: "How are partner companies selected?",
    a: "We carefully vet all partner organizations for their commitment to mentorship, appropriate work environment, and alignment with our program values. Partners must agree to our guidelines and participate in orientation.",
  },
  {
    q: "What support do students receive?",
    a: "Each student has a dedicated coach, access to facilitators throughout the program, and peer support from their cohort. Friday reflection sessions ensure ongoing emotional and developmental support.",
  },
  {
    q: "What's the time commitment?",
    a: "The program runs Monday through Friday from Monday, July 6 to Friday, August 7, 2026. Mondays are workshop days, Tuesdays through Thursdays are internship days (from Week 2), and Fridays are reflection days. Typical hours are 9am–4pm.",
  },
  {
    q: "What happens at the end?",
    a: "Students complete a capstone project and present at a showcase event where parents and partners are invited. Each student receives their Personal Compass Profile, certificate, and a feedback summary from their mentors.",
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-white font-medium pr-8 group-hover:text-[#c9a84c] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-white/40 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-white/60 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ParentsSection() {
  return (
    <section id="parents" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1a7f7a] text-sm font-semibold uppercase tracking-widest mb-4">
            For Parents
          </p>
          <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl mb-4">
            We take care of them like you would
          </h2>
          <p className="text-[#2d4a47]/60 max-w-xl mx-auto">
            We understand trusting someone with your child&apos;s development is
            a big decision. Compass is designed with structure, supervision, and
            safety at its core—while giving young people room to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "Supervised Throughout",
              desc: "Dedicated facilitators, vetted company partners, and constant oversight",
            },
            {
              icon: MessageSquare,
              title: "Regular Communication",
              desc: "Weekly updates, parent portal access, and open lines of communication",
            },
            {
              icon: Clock,
              title: "Structured Schedule",
              desc: "Clear daily schedule, defined hours, and balanced workload",
            },
            {
              icon: Users,
              title: "Community Support",
              desc: "Peers, coaches, and mentors walking alongside your child every step",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#0f1f1e]/8 rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a7f7a]/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#1a7f7a]" />
              </div>
              <h4 className="font-semibold text-[#0f1f1e] mb-2">
                {item.title}
              </h4>
              <p className="text-[#2d4a47]/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-[#0f1f1e] text-3xl mb-4">
              Common Questions from Parents
            </h3>
            <p className="text-[#2d4a47]/60">
              Everything you need to know before trusting us with your young
              person&apos;s development.
            </p>
          </div>
          <div className="bg-[#0f1f1e] rounded-2xl px-8 py-2">
            {parentFAQs.map((faq) => (
              <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
