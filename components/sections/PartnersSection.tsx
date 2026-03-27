"use client";

import Script from "next/script";
import { MotionInView } from "@/components/sections/scrollAnimator";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-white overflow-hidden min-h-[70vh]">
      <div className="mx-auto h-full">
        {/* SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[70vh]">
          {/* LEFT — Image */}
          <MotionInView
            className="relative h-72 lg:h-full min-h-[60vh]"
            distance={40}
            delay={0}
          >
            <Image
              height={600}
              width={1000}
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
              alt="Partners collaborating in a modern workspace"
              className="absolute inset-0 w-full h-full object-cover"
            />
       
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/20" />
            {/* Bottom label */}
            <div className="absolute bottom-6 left-6">
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Company Partners
              </span>
            </div>
          </MotionInView>

          {/* RIGHT — Content */}
          <MotionInView
            className="flex flex-col justify-center my-auto px-10 md:px-14 py-14 bg-white"
            distance={40}
            delay={0.15}
          >
   

            {/* Headline */}
            <h2 className="font-display text-deep-navy text-4xl md:text-5xl leading-tight mb-6">
              Partner with
  
              Compass
            </h2>

            {/* Body */}
            <p className="text-deep-navy/60 text-base leading-relaxed mb-8 max-w-lg">
              Host students, contribute to their growth, and connect with a
              pipeline of prepared, high-potential talent. We handle all the
              training, you just show up.
            </p>

            {/* Perks list */}
            <ul className="space-y-3 mb-10">
              {[
                "3-day/week structured placement",
                "We handle all training and preparation",
                "Access to vetted emerging talent",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-deep-navy/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <a
                href="https://form.typeform.com/to/yCFNFU7W"
                target="_blank"
                className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                style={{
                  backgroundColor: "var(--atomic-tangerine-500, #f97316)",
                  color: "#fff",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--atomic-tangerine-400, #fb923c)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--atomic-tangerine-500, #f97316)")
                }
              >
                Apply to Partner →
              </a>
            </div>
          </MotionInView>
        </div>
      </div>
    </section>
  );
}
