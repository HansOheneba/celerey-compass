"use client";

import { Compass } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MotionInView,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/sections/scrollAnimator";

const footerLinks = {
  "Quick Links": [
    { label: "The Program", href: "#program" },
    { label: "Track Structure", href: "#tracks" },
    { label: "Weekly Journey", href: "#journey" },
    { label: "Apply Now", href: "#apply" },
  ],
  Information: [
    { label: "For Parents", href: "#parents" },
    { label: "For Schools", href: "#schools" },
    { label: "For Students", href: "#students" },
    { label: "Partner With Us", href: "#partners" },
  ],
};

const getSectionHref = (pathname: string, href: string) =>
  pathname === "/" ? href : `/${href}`;

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#0f1f1e]">
      {/* Compact CTA */}
      <div className="border-b border-white/10">
        <MotionInView className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="font-display text-white text-3xl md:text-4xl mb-3 leading-tight">
            Find your direction.
            <span className="block italic text-[#c9a84c] text-lg md:text-xl mt-1">
              Before pressure makes the choice for you
            </span>
          </h2>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link
              href={getSectionHref(pathname, "#apply")}
              className="px-6 py-3 rounded-full bg-[#c9a84c] text-[#0f1f1e] text-sm font-semibold hover:bg-[#b8943e] transition-all"
            >
              Apply Now
            </Link>
            <Link
              href={getSectionHref(pathname, "#partners")}
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-all"
            >
              Register Interest
            </Link>
          </div>

          {/* Dates */}
          <div className="mt-6 text-xs text-white/40 flex flex-wrap justify-center gap-4">
            <span>Program runs Monday, July 6 – Friday, August 7, 2026</span>
          </div>
        </MotionInView>
      </div>

      {/* Footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <MotionStagger className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <MotionStaggerItem>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#0f1f1e]" />
              </div>
              <span className="font-display text-white text-lg">
                Compass Experience
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A discovery and apprenticeship program helping young people find
              direction through learning, experience, and reflection.
            </p>
          </MotionStaggerItem>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <MotionStaggerItem key={group}>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={getSectionHref(pathname, link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Bottom bar */}
        <MotionInView className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>
            © {new Date().getFullYear()} Compass Experience. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Use
            </a>
          </div>
        </MotionInView>
      </div>
    </footer>
  );
}
