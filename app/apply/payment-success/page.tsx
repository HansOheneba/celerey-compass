import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex min-h-[65vh] w-full max-w-2xl flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white px-8 py-14 text-center shadow-xl sm:px-12">
        <CheckCircle2 className="h-20 w-20 text-[#c9a84c]" />
        <h1 className="mt-8 text-3xl font-semibold text-[#111827] sm:text-4xl">
          You&apos;re in. Welcome to Compass.
        </h1>
        <p className="mt-4 max-w-xl text-base text-[#6b7280]">
          Payment confirmed. Your spot in the programme is secured. Check your
          email for next steps.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-[#c9a84c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
