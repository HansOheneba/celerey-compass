"use client";

import Script from "next/script";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1a7f7a] text-sm font-semibold uppercase tracking-widest mb-4">
            For Partners
          </p>
          <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl mb-4">
            Shape the next generation
          </h2>
          <p className="text-[#2d4a47]/60 max-w-xl mx-auto">
            Partner with Compass to provide meaningful experiences for young
            people while developing your mentorship culture and connecting with
            emerging talent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Company Partners */}
          <div className="bg-[#f5f0e8] rounded-3xl p-8">
            <div className="w-12 h-12 rounded-2xl bg-[#1a7f7a]/10 flex items-center justify-center mb-6 text-2xl">
              🏢
            </div>
            <h3 className="font-display text-[#0f1f1e] text-2xl mb-3">
              Company Partners
            </h3>
            <p className="text-[#2d4a47]/60 mb-6 leading-relaxed">
              Host interns and provide real-world exposure to students while
              developing your team&apos;s mentorship capabilities.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Structured 3-day/week commitment (from Week 2)",
                "We handle all training and preparation",
                "Access to emerging talent pipeline",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-[#2d4a47]/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a7f7a]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-[#0f1f1e] text-white text-sm font-medium hover:bg-[#2d4a47] transition-colors"
            >
              Become a Partner
            </a>
          </div>

          {/* Facilitators */}
          <div className="bg-[#0f1f1e] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#c9a84c]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/15 flex items-center justify-center mb-6 text-2xl">
                🎓
              </div>
              <h3 className="font-display text-white text-2xl mb-3">
                Facilitators & Coaches
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Join our facilitation team and help guide young people through
                their discovery journey.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Lead workshops and reflection sessions",
                  "Coach individual students through their journey",
                  "Training and resources provided",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-[#c9a84c] text-[#0f1f1e] text-sm font-semibold hover:bg-[#b8943e] transition-colors"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Typeform Section */}
        <div id="contact" className="text-center">
          <h3 className="font-display text-[#0f1f1e] text-3xl mb-4">
            Get in Touch
          </h3>
          <p className="text-[#2d4a47]/60 max-w-xl mx-auto mb-10">
            Whether you&apos;re a company, school, or individual, fill out the
            form below and we&apos;ll get back to you.
          </p>

          <div className="max-w-3xl mx-auto">
            <div data-tf-live="01KM2FKX13ZQ1AE9JVG2SBD4SY"></div>
          </div>

          <Script src="//embed.typeform.com/next/embed.js" />
        </div>
      </div>
    </section>
  );
}
