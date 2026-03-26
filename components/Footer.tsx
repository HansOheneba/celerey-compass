"use client";

import { Compass, MessageCircle, Phone } from "lucide-react";
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
    <footer className="bg-deep-navy relative overflow-hidden">
      {/* subtle background shapes for playfulness */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-16 w-60 h-60 bg-pale-oak/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* CTA Section */}
      <div className="border-b border-pale-oak/20 relative z-10">
        <MotionInView className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="font-display text-pale-oak text-3xl md:text-4xl mb-3 leading-tight">
            Find your direction.
            <span className="block italic text-accent text-lg md:text-xl mt-1">
              Before life decides for you.
            </span>
          </h2>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link
              href={getSectionHref(pathname, "#apply")}
              className="px-6 py-3 rounded-full bg-accent text-deep-navy text-sm font-semibold hover:bg-dusty-mauve transition-all shadow-md shadow-accent/30 hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href={getSectionHref(pathname, "#partners")}
              className="px-6 py-3 rounded-full border border-pale-oak/30 text-pale-oak text-sm hover:bg-pale-oak/10 transition-all"
            >
              Register Interest
            </Link>
          </div>

          <div className="mt-6 text-xs text-pale-oak/40 flex flex-wrap justify-center gap-4">
            <span>Program runs Monday, July 6 – Friday, August 7, 2026</span>
          </div>
        </MotionInView>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <MotionStagger className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <MotionStaggerItem>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-md shadow-accent/30">
                <Compass className="w-5 h-5 text-deep-navy" />
              </div>
              <span className="font-display text-pale-oak text-lg">
                Compass Experience
              </span>
            </Link>
            <p className="text-pale-oak/60 text-sm leading-relaxed max-w-xs">
              A discovery and apprenticeship program helping young people find
              direction through learning, experience, and reflection.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="tel:+233535805227"
                className="flex items-center gap-2 text-pale-oak/70 hover:text-pale-oak text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +233 (0)535 805 227
              </a>
              <a
                href="https://wa.me/233535805227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pale-oak/70 hover:text-pale-oak text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                Chat on WhatsApp
              </a>
            </div>
          </MotionStaggerItem>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <MotionStaggerItem key={group}>
              <p className="text-accent text-xs uppercase tracking-widest mb-3">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={getSectionHref(pathname, link.href)}
                      className="text-pale-oak/70 hover:text-pale-oak text-sm transition-colors hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Bottom Bar */}
        <MotionInView className="mt-10 pt-6 border-t border-pale-oak/20 flex flex-col md:flex-row justify-between items-center gap-3 text-pale-oak/40 text-xs">
          <p>
            © {new Date().getFullYear()} Compass Experience. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pale-oak/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pale-oak/70 transition-colors">
              Terms of Use
            </a>
          </div>
        </MotionInView>
      </div>
    </footer>
  );
}
