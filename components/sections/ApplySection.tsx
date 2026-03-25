import Link from "next/link";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

export default function ApplySection() {
  return (
    <section id="apply" className="py-24 bg-[#0f1f1e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <MotionInView>
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
        </MotionInView>

        <MotionStagger className="space-y-6 text-left mb-16">
          {[
            {
              n: "1",
              title: "Apply",
              desc: "Complete our online application. Tell us about yourself, your interests, and why you're curious about Compass.",
            },
            {
              n: "2",
              title: "Payment",
              desc: "After submitting, you'll go straight to our secure payment page to confirm your spot.",
            },
            {
              n: "3",
              title: "Confirmation",
              desc: "Once payment is complete you'll receive a receipt and everything you need to prepare.",
            },
            {
              n: "4",
              title: "Onboarding",
              desc: "Meet your cohort and get ready for an experience that could change your direction.",
            },
          ].map((s) => (
            <MotionStaggerItem key={s.n} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-sm font-semibold shrink-0">
                {s.n}
              </div>
              <div>
                <p className="text-white font-semibold mb-1">{s.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionInView delay={0.08}>
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#d4b560] active:bg-[#b8963e] text-[#0f1f1e] font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30 hover:scale-[1.02]"
          >
            Start your application
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="#0f1f1e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="text-white/30 text-xs mt-3">
            Takes less than 2 minutes
          </p>
        </MotionInView>
      </div>
    </section>
  );
}
