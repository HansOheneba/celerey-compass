"use client";

import {
  X,
  Check,
  Compass,
  BookOpen,
  Mic2,
  Layers,
  Award,
  MessageSquare,
  Briefcase,
} from "lucide-react";
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
                className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-5"
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
                Compass is different. It&apos;s a{" "}
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
          <MotionStaggerItem
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              backgroundColor: "var(--color-atomic-tangerine-50)",
              border: "1px solid var(--color-atomic-tangerine-200)",
            }}
          >
            <div
              className="absolute top-4 right-4 text-[80px] font-black leading-none"
              style={{
                color: "var(--color-atomic-tangerine-200)",
              }}
            >
              ✗
            </div>
            <p className="text-xs uppercase mb-3 font-medium text-atomic-tangerine-600">
              The old way
            </p>
            <h3
              className="font-display text-2xl font-bold mb-6"
              style={{ color: "var(--color-atomic-tangerine-700)" }}
            >
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
          </MotionStaggerItem>

          {/* Compass */}
          <MotionStaggerItem
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--color-deep-navy-900), var(--color-deep-navy-700))",
            }}
          >
            <div
              className="absolute top-4 right-4 text-[80px] font-black leading-none"
              style={{ color: "rgba(255,255,255,0.05)" }}
            >
              ✦
            </div>
            <p className="text-xs uppercase mb-3 font-medium text-bright-sky-300">
              The Compass way
            </p>
            <h3 className="font-display text-2xl font-bold mb-6 text-white">
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
          </MotionStaggerItem>
        </MotionStagger>

        {/* Self-discovery block */}
        <MotionInView className="mb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase mb-4 font-semibold text-bright-sky-600">
                Why it matters
              </p>

              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-deep-navy-900">
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

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[520px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1655720348616-184ae7fad7e3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-900/40 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 hidden md:block">
                <p className="text-sm font-semibold text-deep-navy-900">
                  Real-world exposure
                </p>
                <p className="text-xs text-deep-navy-600">Not just theory</p>
              </div>
            </div>
          </div>
        </MotionInView>

        {/* HOW IT WORKS */}
        <div
          className="mb-24 py-20 px-6 md:px-12 rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, var(--color-bright-sky-50), var(--color-bright-sky-100))",
          }}
        >
          <MotionInView className="mb-12">
            <h3 className="text-4xl font-extrabold text-deep-navy-900 mb-2">
              How the program works
            </h3>
            <p className="text-deep-navy-700">Three pillars, one big shift.</p>
          </MotionInView>

          <MotionStagger className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Learning",
                icon: BookOpen,
                color: "var(--color-bright-sky-600)",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
                description: "Workshops on communication and technology.",
              },
              {
                number: "02",
                title: "Experience",
                icon: Briefcase,
                color: "var(--color-atomic-tangerine-500)",
                image:
                  "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070",
                description: "Real internship placements.",
              },
              {
                number: "03",
                title: "Reflection",
                icon: Mic2,
                color: "var(--color-deep-navy-700)",
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070",
                description: "Coaching sessions for clarity.",
              },
            ].map((pillar) => (
              <MotionStaggerItem
                key={pillar.number}
                className="rounded-3xl overflow-hidden bg-white border border-bright-sky-200 shadow-sm"
              >
                <div className="relative h-44">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-900/40 to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <pillar.icon className="text-white w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-deep-navy-500">{pillar.number}</p>
                  <h4 className="font-bold text-deep-navy-900 text-lg mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-deep-navy-700 text-sm">
                    {pillar.description}
                  </p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>

        {/* OUTCOMES */}
        <MotionInView>
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--color-deep-navy-900), var(--color-deep-navy-700))",
            }}
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-bright-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-atomic-tangerine-500/20 blur-3xl" />

            <h3 className="text-4xl font-extrabold text-white text-center mb-4">
              What you walk away with
            </h3>
            <p className="text-center text-bright-sky-200 mb-10">
              Tangible things. Real results.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: Compass, title: "Profile" },
                { icon: Briefcase, title: "Experience" },
                { icon: Layers, title: "Project" },
                { icon: Award, title: "Certificate" },
                { icon: MessageSquare, title: "Feedback" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-bright-sky-500 to-ghost-white-400 flex items-center justify-center">
                    <item.icon className="text-white w-5 h-5" />
                  </div>
                  <p className="text-white text-sm font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
