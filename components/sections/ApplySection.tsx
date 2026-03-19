"use client";

import Script from "next/script";

export default function ApplySection() {
  return (
    <section id="apply" className="py-24 bg-[#0f1f1e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">
          Apply & Registration
        </p>

        <h2 className="font-display text-white text-4xl md:text-5xl mb-6 leading-tight">
          Your journey starts with a simple step
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-12">
          We&apos;re looking for curious, open-minded young people ready to
          invest in themselves. No experience required—just willingness to
          explore and grow.
        </p>

        {/* Optional: Keep steps OR remove completely */}
        <div className="space-y-6 text-left mb-16">
          {[
            {
              n: "1",
              title: "Apply",
              desc: "Complete our online application. Tell us about yourself, your interests, and why you&apos;re curious about Compass.",
            },
            {
              n: "2",
              title: "Review",
              desc: "Our team reviews applications. We may reach out for a brief conversation to understand your goals better.",
            },
            {
              n: "3",
              title: "Confirmation",
              desc: "Accepted students receive confirmation with next steps, including registration details and preparation materials.",
            },
            {
              n: "4",
              title: "Onboarding",
              desc: "Complete onboarding, meet your cohort, and get ready for an experience that could change your direction.",
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-sm font-semibold">
                {step.n}
              </div>
              <div>
                <p className="text-white font-semibold mb-1">{step.title}</p>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.desc }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Typeform Embed */}
        <div className="w-full flex justify-center">
          <div
            data-tf-live="01KM2EBM30DKG5JG4340R309XR"
            className="w-full"
          ></div>
        </div>

        <Script src="//embed.typeform.com/next/embed.js" />
      </div>
    </section>
  );
}
