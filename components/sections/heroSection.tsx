"use client";

import { ArrowDown } from "lucide-react";
import { MotionInView } from "@/components/sections/scrollAnimator";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="bg-var(--pale-oak)/30 pt-30 pb-10"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-full mx-auto px-6 md:px-20">
        <div className="relative rounded-3xl overflow-hidden h-[80vh]">
          {/* BACKGROUND IMAGE */}
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop"
            alt="Students learning"
            className="absolute inset-0 w-full h-full object-cover"
            height={1000}
            width={2942}
          />

          {/* OVERLAY */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in srgb, black 60%, transparent), color-mix(in srgb, black 55%, transparent), color-mix(in srgb, var(--deep-navy) 75%, transparent))",
            }}
          />

          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
            <MotionInView
              className="w-full max-w-4xl text-center"
              distance={30}
            >
              {/* HEADLINE */}
              <h1
                className="text-6xl md:text-8xl lg:text-9xl leading-none mb-8"
                style={{ color: "var(--pale-oak)" }}
              >
                Find Your Direction.
              </h1>

              {/* SUBTEXT */}
              <p
                className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
                style={{
                  color: "color-mix(in srgb, var(--pale-oak) 70%, transparent)",
                }}
              >
                Spend 5 weeks figuring out what you actually enjoy, what
                you&apos;re good at, and where you could go next.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* PRIMARY */}
                <a
                  href="/apply"
                  className="px-8 py-4 text-base font-bold rounded-2xl hover:-rotate-1 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                  style={{
                    backgroundColor: "var(--pale-oak)",
                    color: "var(--deep-navy)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--khaki-beige)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--pale-oak)")
                  }
                >
                  Apply now
                </a>

                {/* SECONDARY */}
                <a
                  href="#parents"
                  className="px-7 py-4 text-base font-medium rounded-2xl backdrop-blur-sm hover:rotate-1 hover:scale-105 active:scale-95 transition-all duration-200"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "var(--pale-oak)",
                    border:
                      "1px solid color-mix(in srgb, var(--lavender-grey) 50%, transparent)",
                  }}
                >
                  For Parents
                </a>
              </div>
            </MotionInView>
          </div>

          {/* SCROLL INDICATOR */}
          <div
            className="absolute bottom-8 right-6 flex flex-col items-center gap-2"
            style={{
              color: "color-mix(in srgb, var(--khaki-beige) 60%, transparent)",
            }}
          >
            <p
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </p>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          {/* Date badge */}
          <div
            className="absolute top-6 left-6 px-3 py-1.5 rounded-full backdrop-blur-sm text-[11px] tracking-widest uppercase"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--deep-navy) 40%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--lavender-grey) 30%, transparent)",
              color: "color-mix(in srgb, var(--pale-oak) 70%, transparent)",
            }}
          >
            July 6 to Aug 7, 2026
          </div>
        </div>
      </div>
    </section>
  );
}
