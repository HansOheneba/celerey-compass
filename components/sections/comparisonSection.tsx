"use client";

import { X, Check } from "lucide-react";
import Image from "next/image";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

export default function ComparisonSection() {
  return (
    <section
      id="program"
      className="py-24"
      style={{ backgroundColor: "var(--color-ghost-white-50)" }}
    >
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}
        <MotionInView className="mb-20">
          <div className="flex items-start gap-6">
            <div
              className="hidden md:block w-1 self-stretch rounded-full mt-1 shrink-0"
              style={{ backgroundColor: "var(--color-bright-sky-400)" }}
            />
            <div>
              <h2
                className="font-display text-4xl md:text-6xl leading-tight mb-5"
                style={{ color: "var(--color-deep-navy-900)" }}
              >
                This is{" "}
                <span
                  className="italic"
                  style={{ color: "var(--color-atomic-tangerine-500)" }}
                >
                  not
                </span>{" "}
                your
                <br /> typical internship.
              </h2>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "var(--color-deep-navy-700)" }}
              >
                Most programs throw you into a workplace and hope for the best.
                Compass is different. It’s a{" "}
                <strong style={{ color: "var(--color-deep-navy-900)" }}>
                  guided, structured experience
                </strong>{" "}
                that helps you understand <em>yourself</em> before deciding
                where you want to go.
              </p>
            </div>
          </div>
        </MotionInView>

        {/* Comparison Cards */}
        <MotionStagger className="grid md:grid-cols-2 gap-6 mb-24">
          {/* Traditional */}
          <MotionStaggerItem className="rounded-3xl overflow-hidden border border-atomic-tangerine-200 bg-atomic-tangerine-50">
            {/* Image */}
            <div className="relative h-40">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-atomic-tangerine-500/70" />
            </div>

            <div className="p-8 relative">
              <div className="absolute top-4 right-6 text-[60px] opacity-20">
                ✗
              </div>

              <p className="text-xs uppercase mb-3 font-medium text-atomic-tangerine-600">
                The old way
              </p>

              <h3 className="font-display text-2xl mb-6 text-atomic-tangerine-700">
                Traditional Internships
              </h3>

              <ul className="space-y-4">
                {[
                  "Assumes you already know what you want",
                  "Focuses mainly on work output",
                  "Little to no guidance or reflection",
                  "Sink or swim environment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-atomic-tangerine-200">
                      <X className="w-3 h-3 text-atomic-tangerine-700" />
                    </span>
                    <span className="text-deep-navy-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionStaggerItem>

          {/* Compass */}
          <MotionStaggerItem className="rounded-3xl overflow-hidden">
            {/* Image */}
            <div className="relative h-40">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-deep-navy-900/70" />
            </div>

            <div
              className="p-8 relative"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-deep-navy-900), var(--color-deep-navy-700))",
              }}
            >
              <div className="absolute top-4 right-6 text-[60px] opacity-10 text-white">
                ✦
              </div>

              <p className="text-xs uppercase mb-3 font-medium text-bright-sky-300">
                The Compass way
              </p>

              <h3 className="font-display text-2xl mb-6 text-white">
                Compass Experience
              </h3>

              <ul className="space-y-4">
                {[
                  "Helps you discover what actually excites you",
                  "Balances learning, doing, and reflecting",
                  "Structured coaching the whole way through",
                  "A supported space to grow and experiment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-bright-sky-500/20">
                      <Check className="w-3 h-3 text-bright-sky-300" />
                    </span>
                    <span className="text-bright-sky-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionStaggerItem>
        </MotionStagger>

        {/* Self-discovery block */}
        <MotionInView className="mb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text */}
            <div className="max-w-xl">
              <p className="text-xs uppercase mb-4 font-semibold text-bright-sky-600">
                Why it matters
              </p>

              <h3 className="text-3xl md:text-5xl mb-6 text-deep-navy-900">
                Know yourself first.
                <br />
                <span className="italic text-deep-navy-500">
                  Then choose your path.
                </span>
              </h3>

              <p className="text-lg text-deep-navy-700 mb-5">
                Most students are asked to pick a direction before they even
                know who they are. Compass flips that.
              </p>

              <p className="text-lg text-deep-navy-700 mb-5">
                <strong className="text-deep-navy-900">
                  You figure out your strengths, values, and interests first
                </strong>
                , then explore where those could take you.
              </p>

              <p className="text-lg text-deep-navy-700">
                You don’t just leave with experience. You leave with{" "}
                <strong className="text-deep-navy-900">clarity.</strong>
              </p>
            </div>

            {/* Visual Stack */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1655720348616-184ae7fad7e3"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                <p className="text-sm text-deep-navy-900 font-medium">
                  Guided self-discovery
                </p>
                <p className="text-xs text-deep-navy-600">
                  Not just thrown into work
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-10 right-6 bg-deep-navy-900 text-white rounded-2xl shadow-lg p-4 max-w-[200px]">
                <p className="text-sm font-medium">Real-world experience</p>
                <p className="text-xs text-white/70">
                  With support at every step
                </p>
              </div>
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
