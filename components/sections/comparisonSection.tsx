import { X, Check } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section id="program" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-[#1a7f7a] mb-4">
            Important to Know
          </p>

          <h2 className="font-display text-[#0f1f1e] text-4xl md:text-5xl leading-tight mb-6">
            Compass is not a traditional internship
          </h2>

          <p className="text-[#2d4a47]/80 text-lg leading-relaxed">
            It is a guided experience designed to help young people understand
            themselves first, then explore career paths through a balance of
            learning, reflection, and structured work experience.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Traditional */}
          <div className="bg-white/70 border border-[#0f1f1e]/10 rounded-2xl p-8">
            <h3 className="font-display text-[#0f1f1e] text-2xl mb-6">
              Traditional Internships
            </h3>

            <ul className="space-y-4">
              {[
                "Assume you already know what you want",
                "Focus mainly on work output",
                "Limited guidance and reflection",
                "Sink or swim environment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100">
                    <X className="w-3 h-3 text-red-500" />
                  </span>
                  <span className="text-[#2d4a47]/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compass */}
          <div className="bg-[#0f1f1e] rounded-2xl p-8">
            <h3 className="font-display text-white text-2xl mb-6">
              Compass Experience
            </h3>

            <ul className="space-y-4">
              {[
                "Helps you discover what you want",
                "Balances learning, doing, and reflecting",
                "Structured coaching throughout",
                "Supported environment for growth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#c9a84c]/20">
                    <Check className="w-3 h-3 text-[#c9a84c]" />
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <h3 className="font-display text-[#0f1f1e] text-3xl md:text-4xl mb-4">
              Why self-discovery comes before career choice
            </h3>

            <p className="text-[#2d4a47]/80 leading-relaxed">
              Most young people are asked to choose a path before they
              understand themselves. Compass helps students identify their
              strengths, values, and interests first, then explore where those
              might lead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Learning",
                color: "text-[#1a7f7a]",
                description:
                  "Workshops on communication, design thinking, technology, and storytelling.",
              },
              {
                number: "02",
                title: "Experience",
                color: "text-[#c9a84c]",
                description:
                  "Structured internships where students actively participate and contribute.",
              },
              {
                number: "03",
                title: "Reflection",
                color: "text-[#2d4a47]",
                description:
                  "Coaching sessions that turn experiences into real personal insight.",
              },
            ].map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white border border-[#0f1f1e]/10 rounded-2xl p-8 hover:shadow-md transition"
              >
                <p className="text-sm text-[#8a9a99] mb-3">{pillar.number}</p>

                <h4 className={`font-display text-xl mb-3 ${pillar.color}`}>
                  {pillar.title}
                </h4>

                <p className="text-[#2d4a47]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-20 bg-[#0f1f1e] rounded-3xl p-10 md:p-14">
          <h3 className="font-display text-white text-3xl md:text-4xl mb-10 text-center">
            What You Will Walk Away With
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              {
                title: "Personal Compass Profile",
                sub: "Your strengths, values and interests mapped",
              },
              {
                title: "Internship Experience",
                sub: "Real workplace exposure and skills",
              },
              {
                title: "Capstone Project",
                sub: "A reflection of your growth",
              },
              {
                title: "Certificate",
                sub: "Official program completion",
              },
              {
                title: "Feedback Summary",
                sub: "Mentor insights and direction",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-white font-medium text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-white/50 text-xs leading-relaxed">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
