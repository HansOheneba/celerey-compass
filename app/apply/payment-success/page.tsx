"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Burst of confetti using our palette
    const colors = ["#01c7fe", "#ff4400", "#06102d", "#c9a84c", "#ffffff"];

    const burst = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 80,
        spread: 80,
        origin,
        colors,
        scalar: 1.1,
        ticks: 200,
      });

    // Multiple waves
    burst({ x: 0.5, y: 0.55 });
    setTimeout(() => burst({ x: 0.3, y: 0.6 }), 200);
    setTimeout(() => burst({ x: 0.7, y: 0.6 }), 350);
    setTimeout(
      () =>
        confetti({
          particleCount: 40,
          spread: 120,
          origin: { x: 0.5, y: 0.5 },
          colors,
          startVelocity: 20,
          ticks: 250,
        }),
      600,
    );
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .success-bg {
          background: linear-gradient(
            135deg,
            #06102d 0%,
            #012240 20%,
            #015065 40%,
            #01c7fe 60%,
            #017798 75%,
            #06102d 100%
          );
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
        @keyframes shimmer {
          0%   { opacity: 0.4; transform: translateX(-100%) rotate(20deg); }
          100% { opacity: 0;   transform: translateX(200%) rotate(20deg); }
        }
        .card-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.07) 50%,
            transparent 60%
          );
          animation: shimmer 3.5s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="success-bg min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <div
          className="card-shimmer relative w-full max-w-xl rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 0 0 1px rgba(1,199,254,0.2), 0 32px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg, #01c7fe, #ff4400, #c9a84c)",
            }}
          />

          <div className="px-8 py-12 sm:px-12 text-center">
            {/* Animated tick */}
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full mb-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(1,199,254,0.2), rgba(1,199,254,0.05))",
                border: "2px solid rgba(1,199,254,0.4)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01c7fe"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#01c7fe" }}
            >
              Payment confirmed
            </p>

            <h1
              className="font-display text-4xl sm:text-5xl leading-tight text-white mb-4"
            >
              You&apos;re in.
              <br />
              <span style={{ color: "#01c7fe" }}>Welcome to Compass.</span>
            </h1>

            <p
              className="text-base leading-relaxed mb-10 max-w-sm mx-auto"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Your spot on the 2026 programme is secured. Check your inbox —
              we&apos;ll be in touch shortly with everything you need to get
              started.
            </p>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden mb-10"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {[
                { label: "Programme", value: "5 weeks" },
                { label: "Starts", value: "Jul 6" },
                { label: "Format", value: "Hybrid" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="py-4 px-3"
                  style={{ background: "rgba(6,16,45,0.5)" }}
                >
                  <p className="text-white font-semibold text-lg">{s.value}</p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition hover:brightness-110"
              style={{
                backgroundColor: "#01c7fe",
                color: "#06102d",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
