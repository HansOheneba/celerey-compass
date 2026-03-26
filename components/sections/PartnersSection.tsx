"use client";

import Script from "next/script";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <MotionInView className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            For Partners
          </p>
          <h2 className="font-display text-deep-navy text-4xl md:text-5xl mb-4">
            Shape the next generation
          </h2>
          <p className="text-deep-navy/60 max-w-xl mx-auto">
            Partner with Compass to provide meaningful experiences for young
            people while developing your mentorship culture and connecting with
            emerging talent.
          </p>
        </MotionInView>

        {/* Cards */}
        <MotionStagger className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Company Partners */}
          <MotionStaggerItem className="bg-khaki-beige rounded-3xl p-8 shadow-md shadow-accent/10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-2xl">
              🏢
            </div>
            <h3 className="font-display text-deep-navy text-2xl mb-3">
              Company Partners
            </h3>
            <p className="text-deep-navy/60 mb-6 leading-relaxed">
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
                  className="flex items-center gap-3 text-sm text-deep-navy/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-deep-navy text-pale-oak text-sm font-medium hover:bg-dusty-mauve transition-colors"
            >
              Become a Partner
            </a>
          </MotionStaggerItem>

          {/* Facilitators */}
          <MotionStaggerItem className="bg-deep-navy rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-accent/20">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center mb-6 text-2xl">
                🎓
              </div>
              <h3 className="font-display text-pale-oak text-2xl mb-3">
                Facilitators & Coaches
              </h3>
              <p className="text-pale-oak/60 mb-6 leading-relaxed">
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
                    className="flex items-center gap-3 text-sm text-pale-oak/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-accent text-deep-navy text-sm font-semibold hover:bg-dusty-mauve transition-colors"
              >
                Join Our Team
              </a>
            </div>
          </MotionStaggerItem>
        </MotionStagger>

        {/* Typeform Section */}
        <MotionInView id="contact" className="text-center" delay={0.08}>
          <h3 className="font-display text-deep-navy text-3xl mb-4">
            Get in Touch
          </h3>
          <p className="text-deep-navy/60 max-w-xl mx-auto mb-10">
            Whether you&aposre a company, school, or individual, fill out the
            form below and we&apos;ll get back to you.
          </p>

          <div className="max-w-3xl mx-auto">
            <div data-tf-live="01KM2FKX13ZQ1AE9JVG2SBD4SY"></div>
          </div>

          <Script src="//embed.typeform.com/next/embed.js" />
        </MotionInView>
      </div>
    </section>
  );
}
