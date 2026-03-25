"use client";

import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-10">
      {/* CONTAINER (this creates the spacing from navbar) */}
      <div className="max-w-full mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden h-[85vh] min-h-[650px]">
          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop"
            alt="Students learning"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* SOFT OVERLAY (less aggressive) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center px-8 md:px-16">
            <div className="max-w-xl text-white">
              {/* Small label */}
              <p className="text-xs tracking-[0.25em] uppercase text-white/70 mb-6">
                July 6 – August 7, 2026
              </p>

              {/* HEADLINE */}
              <h1 className="text-5xl md:text-7xl leading-[1.05] font-semibold mb-6">
                Find Your Direction
                <span className="block w-16 h-1 bg-blue-500 mt-4 rounded-full" />
              </h1>

              {/* SUBTEXT */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10">
                A five-week discovery and apprenticeship program helping
                students understand who they are, what they value, and where
                they are going.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <a
                  href="#apply"
                  className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition rounded-md"
                >
                  Register Interest
                </a>

                <a
                  href="#parents"
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  For Parents
                </a>
              </div>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/70">
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
