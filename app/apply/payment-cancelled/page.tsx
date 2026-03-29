"use client";

import { useState, useEffect } from "react";
import { XCircle, CheckCircle2, CreditCard } from "lucide-react";
import Link from "next/link";

const SUBMITTED_KEY = "compass-apply-submitted-v2";

const losses = [
  "Your accepted application won't convert into a confirmed place.",
  "You won't be matched with an internship host company.",
  "You'll miss out on five weeks of real-world work experience before university.",
  "Your Personal Compass Profile — and the clarity that comes with it — stays out of reach.",
];

const gains = [
  "A confirmed internship inside a real company for three days a week.",
  "Your Personal Compass Profile — who you are, what you're built for.",
  "Weekly workshops in communication, design thinking & storytelling.",
  "1-on-1 coaching from professionals who've actually done it.",
  "A capstone project, certificate, and a global cohort behind you.",
];

export default function PaymentCancelledPage() {
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState("");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(SUBMITTED_KEY);
    if (raw) {
      try {
        const { email: saved } = JSON.parse(raw) as { email: string };
        setEmail(saved);
      } catch {
        /* ignore */
      }
    }
  }, []);

  const handlePay = async () => {
    setIsPaying(true);
    setPayError("");
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setPayError(data.error ?? "Failed to start checkout. Please try again.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setPayError("Network error. Please check your connection and try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div
      className="min-h-screen px-4 pt-28 pb-16 sm:px-6 sm:pt-32"
      style={{ backgroundColor: "var(--dry-sage-50)" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <h1
            className="font-display text-4xl sm:text-5xl leading-tight mb-3"
            style={{ color: "var(--deep-navy-900)" }}
          >
            Don&apos;t lose your spot.
          </h1>
          <p className="text-base" style={{ color: "var(--deep-navy-600)" }}>
            No charge was made — but your application is still waiting. Complete
            payment to lock in your place on the 2026 programme.
          </p>
        </div>

        {/* Two-card layout */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* LEFT — what they lose */}
          <div className="rounded-3xl border border-[var(--dry-sage-200)] bg-white p-8 flex flex-col">
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--deep-navy-900)" }}
            >
              Skip for now
            </p>
            <p className="text-sm mb-6" style={{ color: "var(--deep-navy-500)" }}>
              Here&apos;s what you walk away from.
            </p>

            <ul className="space-y-3 flex-1">
              {losses.map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <XCircle
                    className="mt-0.5 shrink-0 h-4 w-4"
                    style={{ color: "var(--atomic-tangerine-500)" }}
                  />
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "var(--deep-navy-700)" }}
                  >
                    {l}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 pt-6 border-t"
              style={{ borderColor: "var(--dry-sage-200)" }}
            >
              <Link
                href="/"
                className="text-sm underline underline-offset-2 transition"
                style={{ color: "var(--deep-navy-400)" }}
              >
                Never mind, take me back home
              </Link>
            </div>
          </div>

          {/* RIGHT — what they get */}
          <div
            className="rounded-3xl p-8 flex flex-col relative overflow-hidden"
            style={{
              backgroundColor: "var(--deep-navy-900)",
              color: "white",
              boxShadow: "0 0 0 2px var(--bright-sky-500)",
            }}
          >
            {/* subtle top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{
                background:
                  "linear-gradient(90deg, var(--bright-sky-500), var(--atomic-tangerine-400))",
              }}
            />

            <div className="flex items-center gap-3 mb-1">
              <p className="text-sm font-semibold text-white">
                Compass Programme 2026
              </p>
              <span
                className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "var(--atomic-tangerine-500)",
                  color: "white",
                }}
              >
                Early bird
              </span>
            </div>

            <div className="mb-6">
              <p className="font-display text-4xl font-bold text-white">
                USD 500
              </p>
              <p
                className="text-sm mt-0.5"
                style={{ color: "var(--bright-sky-300)" }}
              >
                One-time enrolment fee · July 6 – Aug 7
              </p>
            </div>

            <ul className="space-y-2.5 flex-1">
              {gains.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 h-4 w-4"
                    style={{ color: "var(--bright-sky-400)" }}
                  />
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "var(--deep-navy-100)" }}
                  >
                    {g}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handlePay}
              disabled={isPaying || !email}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "var(--bright-sky-500)",
                color: "var(--deep-navy-900)",
              }}
            >
              <CreditCard className="h-4 w-4" />
              {isPaying ? "Redirecting…" : "Secure My Spot"}
            </button>
            {payError && (
              <p className="mt-3 text-sm text-red-300">{payError}</p>
            )}
            {!email && (
              <p className="mt-3 text-xs" style={{ color: "var(--bright-sky-300)" }}>
                <Link href="/apply" className="underline">
                  Go back to your application
                </Link>{" "}
                to complete payment.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
