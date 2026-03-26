import { XCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentCancelledPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex min-h-[65vh] w-full max-w-2xl flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white px-8 py-14 text-center shadow-xl sm:px-12">
        <XCircle className="h-20 w-20 text-gray-400" />
        <h1 className="mt-8 text-3xl font-semibold text-[#111827] sm:text-4xl">
          Payment cancelled
        </h1>
        <p className="mt-4 max-w-xl text-base text-[#6b7280]">
          No charge was made. Your application is still on file — you can
          complete payment whenever you&apos;re ready.
        </p>
        <Link
          href="/apply"
          className="mt-8 rounded-lg bg-[#c9a84c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
        >
          Return to Application
        </Link>
      </div>
    </div>
  );
}
