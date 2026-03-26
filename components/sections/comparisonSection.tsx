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
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}
        <MotionInView className="mb-20">
          <div className="flex items-start gap-6">
            <div
              className="hidden md:block w-1 self-stretch rounded-full mt-1 shrink-0"
              style={{ backgroundColor: "var(--lavender-grey)" }}
            />
            <div>
              <h2
                className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-5"
                style={{ color: "var(--deep-navy)" }}
              >
                This is{" "}
                <span
                  className="italic"
                  style={{ color: "var(--dusty-mauve)" }}
                >
                  not
                </span>{" "}
                your
                <br /> typical internship.
              </h2>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "var(--lavender-grey)" }}
              >
                Most programs throw you into a workplace and hope for the best.
                Compass is different. It&apos;s a{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--deep-navy)" }}
                >
                  guided, structured experience
                </strong>{" "}
                that helps you understand <em>yourself</em> before deciding
                where you want to go.
              </p>
            </div>
          </div>
        </MotionInView>

        {/* Comparison Cards */}
        <MotionStagger className="grid md:grid-cols-2 gap-5 mb-24">
          {/* Traditional */}
          <MotionStaggerItem
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              backgroundColor: "var(--pale-oak)",
              border:
                "1px solid color-mix(in srgb, var(--khaki-beige) 30%, transparent)",
            }}
          >
            <div
              className="absolute top-4 right-4 text-[80px] font-black leading-none select-none pointer-events-none"
              style={{
                color:
                  "color-mix(in srgb, var(--khaki-beige) 20%, transparent)",
              }}
            >
              ✗
            </div>
            <p
              className="text-xs text-muted tracking-widest uppercase mb-3 font-medium"
    
            >
              The old way
            </p>
            <h3
              className="font-display text-2xl font-bold mb-6"
              style={{ color: "var(--deep-navy)" }}
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
                  <span className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-red-100 shrink-0">
                    <X className="w-3 h-3 text-red-400" />
                  </span>
                  <span
                    className="leading-snug"
                    style={{ color: "var(--lavender-grey)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </MotionStaggerItem>

          {/* Compass */}
          <MotionStaggerItem
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{ backgroundColor: "var(--deep-navy)" }}
          >
            <div
              className="absolute top-4 right-4 text-[80px] font-black leading-none select-none pointer-events-none"
              style={{
                color: "color-mix(in srgb, var(--pale-oak) 5%, transparent)",
              }}
            >
              ✦
            </div>
            <p
              className="text-xs tracking-widest uppercase mb-3 font-medium"
              style={{ color: "var(--dusty-mauve)" }}
            >
              The Compass way
            </p>
            <h3
              className="font-display text-2xl font-bold mb-6"
              style={{ color: "var(--pale-oak)" }}
            >
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
                  <span
                    className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full shrink-0"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--dusty-mauve) 20%, transparent)",
                    }}
                  >
                    <Check
                      className="w-3 h-3"
                      style={{ color: "var(--pale-oak)" }}
                    />
                  </span>
                  <span
                    className="leading-snug"
                    style={{
                      color:
                        "color-mix(in srgb, var(--pale-oak) 75%, transparent)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </MotionStaggerItem>
        </MotionStagger>
        {/* Self-discovery block */}
        <MotionInView className="mb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* TEXT */}
            <div className="max-w-xl">
              <p
                className="text-xs tracking-[0.25em] uppercase font-semibold mb-4"
                style={{ color: "var(--dusty-mauve)" }}
              >
                Why it matters
              </p>

              <h3
                className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-6"
                style={{ color: "var(--deep-navy)" }}
              >
                Know yourself first.
                <br />
                <span
                  className="italic font-medium"
                  style={{ color: "var(--lavender-grey)" }}
                >
                  Then choose your path.
                </span>
              </h3>

              <p
                className="text-base md:text-lg leading-relaxed mb-5"
                style={{ color: "var(--lavender-grey)" }}
              >
                Most students are asked to pick a direction before they even
                know who they are. Compass flips that.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed mb-5"
                style={{ color: "var(--lavender-grey)" }}
              >
                <strong style={{ color: "var(--deep-navy)" }}>
                  You figure out your strengths, values, and interests first
                </strong>
                , then explore where those could take you.
              </p>

              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--lavender-grey)" }}
              >
                You don’t just leave with experience. You leave with{" "}
                <strong style={{ color: "var(--deep-navy)" }}>clarity.</strong>
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[520px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1694175271713-a6e2cc378980?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional in a meeting"
                  fill
                  className="object-cover object-top"
                />

                {/* subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in srgb, var(--deep-navy) 40%, transparent), transparent)",
                  }}
                />
              </div>

              {/* floating accent card (optional but 🔥) */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 hidden md:block"
                style={{ color: "var(--deep-navy)" }}
              >
                <p className="text-sm font-semibold">Real-world exposure</p>
                <p className="text-xs text-gray-500">Not just theory</p>
              </div>
            </div>
          </div>
        </MotionInView>
        {/* Three Pillars */}
        <div className="mb-24">
          <MotionInView className="mb-12">
            <h3
              className="font-display text-3xl md:text-4xl font-extrabold mb-2"
              style={{ color: "var(--deep-navy)" }}
            >
              How the program works
            </h3>
            <p style={{ color: "var(--lavender-grey)" }}>
              Three pillars, one big shift.
            </p>
          </MotionInView>

          <MotionStagger className="grid md:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                title: "Learning",
                icon: BookOpen,
                accentVar: "var(--deep-navy)",
                bgVar: "var(--pale-oak)",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                description:
                  "Workshops on communication, design thinking, technology, and storytelling. The stuff no classroom teaches.",
              },
              {
                number: "02",
                title: "Experience",
                icon: Briefcase,
                accentVar: "var(--dusty-mauve)",
                bgVar: "var(--background)",
                image:
                  "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop",
                description:
                  "Real internship placements where you actually contribute, not just observe.",
              },
              {
                number: "03",
                title: "Reflection",
                icon: Mic2,
                accentVar: "var(--lavender-grey)",
                bgVar: "#f0eff5",
                image:
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
                description:
                  "Coaching sessions that turn experiences into personal insight you can actually use.",
              },
            ].map((pillar) => (
              <MotionStaggerItem
                key={pillar.number}
                className="rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: pillar.bgVar,
                  border:
                    "1px solid color-mix(in srgb, var(--khaki-beige) 20%, transparent)",
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, color-mix(in srgb, var(--deep-navy) 40%, transparent), transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-4 left-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: pillar.accentVar }}
                  >
                    <pillar.icon
                      className="w-4 h-4"
                      style={{ color: "var(--pale-oak)" }}
                    />
                  </div>
                </div>
                <div className="p-7">
                  <p
                    className="text-xs mb-1 font-medium"
                    style={{ color: "var(--khaki-beige)" }}
                  >
                    {pillar.number}
                  </p>
                  <h4
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: pillar.accentVar }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: "var(--lavender-grey)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>

        {/* Outcomes */}
        <MotionInView>
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{ backgroundColor: "var(--deep-navy)" }}
          >
            <div
              className="absolute -right-10 -top-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--dusty-mauve) 10%, transparent)",
              }}
            />
            <div
              className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--lavender-grey) 10%, transparent)",
              }}
            />

            <h3
              className="font-display text-3xl md:text-4xl font-extrabold mb-3 text-center relative z-10"
              style={{ color: "var(--pale-oak)" }}
            >
              What you walk away with
            </h3>
            <p
              className="text-center mb-12 relative z-10"
              style={{
                color:
                  "color-mix(in srgb, var(--khaki-beige) 60%, transparent)",
              }}
            >
              Tangible things. Real results.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {[
                {
                  icon: Compass,
                  title: "Personal Compass Profile",
                  sub: "Your strengths, values and interests mapped",
                },
                {
                  icon: Briefcase,
                  title: "Internship Experience",
                  sub: "Real workplace exposure and hands-on skills",
                },
                {
                  icon: Layers,
                  title: "Capstone Project",
                  sub: "A tangible reflection of your growth",
                },
                {
                  icon: Award,
                  title: "Certificate",
                  sub: "Official program completion credential",
                },
                {
                  icon: MessageSquare,
                  title: "Feedback Summary",
                  sub: "Mentor insights and actionable direction",
                },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-colors duration-200"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--pale-oak) 8%, transparent)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--dusty-mauve) 30%, transparent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--pale-oak) 8%, transparent)")
                    }
                  >
                    <item.icon
                      className="w-4 h-4 transition-colors duration-200"
                      style={{
                        color:
                          "color-mix(in srgb, var(--pale-oak) 60%, transparent)",
                      }}
                    />
                  </div>
                  <p
                    className="font-semibold text-sm mb-1 leading-snug"
                    style={{ color: "var(--pale-oak)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color:
                        "color-mix(in srgb, var(--khaki-beige) 50%, transparent)",
                    }}
                  >
                    {item.sub}
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
