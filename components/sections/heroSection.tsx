"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { MotionInView } from "@/components/sections/scrollAnimator";

export default function HeroSection() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Let video breathe first, then slowly bring in the overlay
    const overlayTimer = setTimeout(() => {
      setOverlayVisible(true);
    }, 1000);

    // Text arrives after overlay has had time to settle
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 1500);

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section
      className="pt-30 pb-10"

    >
      <div className="max-w-full mx-auto px-6 md:px-20">
        <div className="relative rounded-3xl overflow-hidden h-[70vh]">
          {/* VIDEO BACKGROUND */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* OVERLAY — fades in slowly like a curtain drawing */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.50), rgba(0,0,0,0.40), rgba(0,0,0,0.82))",
              opacity: overlayVisible ? 1 : 0,
              transition: "opacity 2200ms cubic-bezier(0.4, 0, 0.2, 1)",
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

          {/* CONTENT — drifts up after the overlay settles */}
          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
            <div className="w-full max-w-4xl text-center">
              <div
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(28px)",
                  transition:
                    "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1), transform 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* HEADLINE */}
                <h1
                  className="text-6xl text-white md:text-7xl leading-none mb-8"
              
                >
                  Find Your Direction.
                </h1>

                {/* SUBTEXT */}
                <p
                  className="text-lg  leading-relaxed mb-10 max-w-xl mx-auto"
                  style={{
                    color: "var(--bright-sky-300)",
                    opacity: textVisible ? 1 : 0,
                    transform: textVisible
                      ? "translateY(0)"
                      : "translateY(16px)",
                    transition:
                      "opacity 1400ms 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 1400ms 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Spend 5 weeks figuring out what you actually enjoy, what
                  you&apos;re good at, and where you could go next.
                </p>

                {/* CTA */}
                <div
                  className="flex flex-wrap items-center justify-center gap-4"
                  style={{
                    opacity: textVisible ? 1 : 0,
                    transform: textVisible
                      ? "translateY(0)"
                      : "translateY(12px)",
                    transition:
                      "opacity 1400ms 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 1400ms 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <a
                    href="/apply"
                    className="px-8 py-4 text-base font-bold rounded-2xl hover:-rotate-1 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
                    style={{
                      backgroundColor: "var(--atomic-tangerine-500)",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--atomic-tangerine-400)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--atomic-tangerine-500)")
                    }
                  >
                    Apply now
                  </a>

                  <a
                    href="#parents"
                    className="px-7 py-4 text-base font-medium rounded-2xl backdrop-blur-sm hover:rotate-1 hover:scale-105 active:scale-95 transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(1, 199, 254, 0.08)",
                      color: "var(--bright-sky-200)",
                      border:
                        "1px solid color-mix(in srgb, var(--bright-sky-500) 45%, transparent)",
                    }}
                  >
                    For Parents
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SCROLL INDICATOR — fades in last alongside buttons */}
          <div
            className="absolute bottom-8 right-6 flex flex-col items-center gap-2"
            style={{
              color: "var(--bright-sky-600)",
              opacity: textVisible ? 1 : 0,
              transition: "opacity 1400ms 900ms cubic-bezier(0.4, 0, 0.2, 1)",
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
        </div>
      </div>
    </section>
  );
}
