"use client";

import { MessageCircle, Phone, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionInView } from "@/components/sections/scrollAnimator";

const navLinks = [
  { label: "The Program", href: "#program" },
  { label: "Tuition & Dates", href: "#tracks" },
  { label: "Journey", href: "#journey" },
  { label: "For Parents", href: "#parents" },
  { label: "Partners", href: "#partners" },
];

const getSectionHref = (pathname: string, href: string) =>
  pathname === "/" ? href : `/${href}`;

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-deep-navy relative overflow-hidden">
      {/* ── TOP BAR ── */}
      <div className="border-b border-pale-oak/15 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <p className="hidden md:block text-pale-oak/60 text-xs tracking-widest uppercase">
            Find your direction before life decides for you
          </p>

          <Link
            href="/apply"
            className="px-8 py-4 text-base font-bold bg-pale-oak rounded-2xl hover:-rotate-1 hover:scale-105 active:scale-95 transition-all duration-200 text-deep-navy hover:text-deep-navy/70 shadow-lg"
          >
            Apply now
          </Link>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Contact */}
          <MotionInView className="md:col-span-3" distance={20} delay={0}>
            <h6 className="text-pale-oak/80 text-md font-thin uppercase tracking-[0.2em] mb-4">
              Contact Us
            </h6>

            <div className="space-y-3">
              <a
                href="mailto:compass@celerey.co"
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5 w-7 h-7 rounded-full bg-pale-oak/10 flex items-center justify-center group-hover:bg-pale-oak/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-pale-oak/80" />
                </span>
                <div>
                  <p className="text-pale-oak/60 text-[10px] uppercase tracking-widest mb-0.5">
                    Email
                  </p>
                  <p className="text-pale-oak text-sm">compass@celerey.co</p>
                </div>
              </a>

              <a
                href="tel:+233535805227"
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5 w-7 h-7 rounded-full bg-pale-oak/10 flex items-center justify-center group-hover:bg-pale-oak/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-pale-oak/80" />
                </span>
                <div>
                  <p className="text-pale-oak/60 text-[10px] uppercase tracking-widest mb-0.5">
                    Phone
                  </p>
                  <p className="text-pale-oak text-sm">+233 (0)535 805 227</p>
                </div>
              </a>

              <a
                href="https://wa.me/233535805227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5 w-7 h-7 rounded-full bg-pale-oak/10 flex items-center justify-center group-hover:bg-pale-oak/20 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-pale-oak/80" />
                </span>
                <div>
                  <p className="text-pale-oak/60 text-[10px] uppercase tracking-widest mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-pale-oak text-sm">Chat with us</p>
                </div>
              </a>
            </div>
          </MotionInView>

          {/* Explore */}
          <MotionInView className="md:col-span-3" distance={20} delay={0.1}>
            <h6 className="text-pale-oak/80 text-md font-thin uppercase tracking-[0.2em] mb-4">
              Explore
            </h6>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={getSectionHref(pathname, link.href)}
                    className="text-pale-oak/85 hover:text-pale-oak text-sm transition-colors hover:translate-x-0.5 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-pale-oak/50 group-hover:bg-pale-oak transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionInView>

          {/* About */}
          <MotionInView className="md:col-span-3" distance={20} delay={0.2}>
            <h6 className="text-pale-oak/80 text-md font-thin uppercase tracking-[0.2em] mb-4">
              About the Program
            </h6>
            <p className="text-pale-oak/75 text-sm leading-relaxed">
              A discovery and apprenticeship program helping young people find
              direction through learning, real-world experience, and reflection.
            </p>
          </MotionInView>

          {/* Socials */}
          <MotionInView className="md:col-span-3" distance={20} delay={0.3}>
            <h6 className="text-pale-oak/80 text-md font-thin uppercase tracking-[0.2em] mb-4">
              Socials
            </h6>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/compassexperience?igsh=cHZ5Mzc0aHMyeWxp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 rounded-full bg-pale-oak/10 flex items-center justify-center group-hover:bg-pale-oak/20 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pale-oak/80" />
                </span>
                <p className="text-pale-oak text-sm">Instagram</p>
              </a>

              <a
                href="https://www.tiktok.com/@compassexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 rounded-full bg-pale-oak/10 flex items-center justify-center group-hover:bg-pale-oak/20 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-pale-oak/80" />
                </span>
                <p className="text-pale-oak text-sm">TikTok</p>
              </a>
            </div>
          </MotionInView>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-pale-oak/55 text-xs">
          <p>
            © {new Date().getFullYear()} Compass Experience. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-pale-oak/85 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pale-oak/85 transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
