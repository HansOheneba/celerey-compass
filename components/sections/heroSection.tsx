import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-[#0f1f1e]">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: TEXT */}
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6b7c7b] mb-6">
            Program runs Monday, July 6 – Friday, August 7, 2026
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
            Find Your Direction
          </h1>

          <p className="text-base md:text-lg text-[#3e4d4c] leading-relaxed mb-10">
            A five-week discovery and apprenticeship program helping high school
            and university students understand who they are, what they value,
            and where they are going.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="px-6 py-3 border border-[#0f1f1e] text-[#0f1f1e] text-sm hover:bg-[#0f1f1e] hover:text-white transition"
            >
              Register Interest
            </a>

            <a
              href="#parents"
              className="text-sm text-[#6b7c7b] hover:text-[#0f1f1e] transition"
            >
              For Parents
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-[#e6eceb]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace later
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating card (subtle, not loud) */}
          <div className="absolute top-4 right-4 bg-white border border-[#e6eceb] px-4 py-2 text-xs text-[#3e4d4c] shadow-sm">
            Monday, July 6 – Friday, August 7, 2026
          </div>
        </div>
      </div>

      {/* WEEKLY RHYTHM (styled like stats strip) */}
      <div className="border-t border-[#e6eceb]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Label */}
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#8a9a99] mb-10">
            Weekly Rhythm
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e6eceb] text-center">
            {[
              {
                day: "Mondays",
                title: "Learning",
                desc: "Workshops & guided sessions",
              },
              {
                day: "Tue – Thu",
                title: "Internship",
                desc: "Hands-on company experience",
              },
              {
                day: "Fridays",
                title: "Reflection",
                desc: "Coaching & personal growth",
              },
            ].map((item) => (
              <div key={item.day} className="py-6 md:py-0 md:px-6">
                {/* Top (like stat number) */}
                <p className="text-lg md:text-xl font-medium mb-1">
                  {item.day}
                </p>

                {/* Middle (main emphasis) */}
                <p className="text-sm uppercase tracking-wide text-[#0f1f1e] mb-2">
                  {item.title}
                </p>

                {/* Bottom (support text) */}
                <p className="text-xs text-[#7b8a89]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-[#9aa9a8]">
        <p
          className="text-[10px] tracking-[0.2em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </p>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
