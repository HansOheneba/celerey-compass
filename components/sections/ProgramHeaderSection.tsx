"use client";

import Image from "next/image";
import { MotionInView } from "@/components/sections/scrollAnimator";

export default function ProgramHeaderSection() {
  return (
    <MotionInView className="bg-background rounded-lg py-20 px-6 md:px-12">
      {/* Headline */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2
          className="font-display text-4xl md:text-6xl leading-tight mb-4"
          style={{ color: "var(--deep-navy-900)", letterSpacing: "-0.02em" }}
        >
          Your first real taste of
          <br />
          <span className="relative inline-block mt-1.5">
            <span className="relative z-10">the field.</span>
            <span
              className="absolute inset-0 z-0"
              style={{
                background: "var(--bright-sky-400)",
                inset: "2px -6px",
                transform: "skew(-1deg)",
              }}
            />
          </span>
        </h2>

        {/* <p
          className="text-lg mt-4"
          style={{ color: "var(--deep-navy-500)", letterSpacing: "0.01em" }}
        >
          Structured. Mentored. Built around where you want to go.
        </p> */}
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image (now BIG and dominant) */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src="/students.jpg"
            alt="Students collaborating"
            fill
            className="object-cover"
          />

          {/* Tag */}
          {/* <div
            className="absolute bottom-5 left-5 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider"
            style={{ background: "var(--atomic-tangerine-500)" }}
          >
            Career discovery
          </div> */}
        </div>

        {/* Content (no cards, more fluid) */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--bright-sky-500)" }}
            >
              From day one
            </p>

            <h3
              className="font-display text-xl md:text-2xl leading-snug mb-3"
              style={{ color: "var(--deep-navy-900)" }}
            >
              You&apos;ll know exactly what you&apos;re doing and{" "}
              <span className="relative inline">
                <span className="relative z-10">why.</span>
                <span
                  className="absolute z-0"
                  style={{
                    bottom: 2,
                    left: -2,
                    right: -2,
                    height: 8,
                    background: "var(--atomic-tangerine-500)",
                    opacity: 0.7,
                  }}
                />
              </span>
            </h3>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--deep-navy-600)" }}
            >
              A dedicated mentor, a clear path, and real work that ships. An opportunity to make real impact while you figure out what excites you.
            </p>
          </div>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--deep-navy-900)" }}
          >
            You don’t need to have it all figured out yet.{" "}
            <span className="relative inline">
              <span className="relative z-10">
                You just need a starting point.
              </span>
              <span
                className="absolute z-0"
                style={{
                  bottom: 1,
                  left: -1,
                  right: -1,
                  height: 7,
                  background: "var(--bright-sky-400)",
                  opacity: 0.55,
                }}
              />
            </span>{" "}
            Compass helps you explore different paths, understand what fits, and
            move forward with clarity.
          </p>

          {/* Outcomes */}
          <div className="flex flex-col gap-3 pt-2 ">
            {[
              "A clearer sense of your field",
              "Work you can actually show",
              "A mentor who knows your name",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="text-xs font-bold mt-1 px-1"
                  style={{
                    background: [
                      "var(--atomic-tangerine-500)",
                      "var(--bright-sky-500)",
                      "var(--deep-navy-900)",
                    ][i],
                    color: "#fff",
                    padding: "2px 6px",
                  }}
                >
                  0{i + 1}
                </span>

                <p
                  className="text-sm"
                  style={{ color: "var(--deep-navy-800)" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/apply"
            className=" inline-flex items-center gap-2 font-bold text-sm hover:bg-accent/30 p-2 rounded-lg w-fit transition-all"
            style={{ color: "var(--atomic-tangerine-500)" }}
          >
            Find your fit <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </MotionInView>
  );
}
