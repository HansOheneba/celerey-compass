"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";


export default function PaymentSuccessPage() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Subtle confetti palette
    const colors = ["#ff4400", "#0000ff", "#0000ff", "#f0f9ff", "#f8fafc"];

    const burst = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 50,
        spread: 60,
        origin,
        colors,
        scalar: 0.9,
        ticks: 200,
      });

    burst({ x: 0.5, y: 0.55 });
    setTimeout(() => burst({ x: 0.3, y: 0.6 }), 300);
    setTimeout(() => burst({ x: 0.7, y: 0.6 }), 500);
  }, []);

  return (
    <>

      <div className=" bg-white min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <div
          className="card-shimmer relative w-full max-w-xl rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.1), 0 32px 64px rgba(0,0,0,0.05)",
          }}
        >
      

          <div className="px-8 py-12 sm:px-12 text-center">
            
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full mb-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(203,213,225,0.2), rgba(240,249,255,0.05))",
                border: "2px solid rgba(203,213,225,0.3)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
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
              style={{ color: "#94a3b8" }}
            >
              Payment confirmed
            </p>

            <h1 className="font-display text-4xl sm:text-5xl leading-tight text-gray-900 mb-4">
              You&apos;re in.
              <br />
              <span style={{ color: "#3b82f6" }}>Welcome to Compass.</span>
            </h1>

            <p
              className="text-base leading-relaxed mb-10 max-w-sm mx-auto"
              style={{ color: "#64748b" }}
            >
              Your spot on the 2026 programme is secured. Check your inbox; 
              we&apos;ll be in touch shortly with everything you need to get
              started.
            </p>

            <div
              className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden mb-10"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {[
                { label: "Programme", value: "5 weeks" },
                { label: "Starts", value: "Jul 6" },
                { label: "Format", value: "Hybrid" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="py-4 px-3"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <p className="text-gray-900 font-semibold text-lg">
                    {s.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition hover:brightness-105"
              style={{
                backgroundColor: "#3b82f6",
                color: "#f8fafc",
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
