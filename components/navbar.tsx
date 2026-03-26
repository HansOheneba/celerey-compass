"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "The Program", href: "#program" },
  { label: "Tuition & Dates", href: "#tracks" },
  { label: "Journey", href: "#journey" },
  { label: "For Parents", href: "#parents" },
  { label: "Partners", href: "#partners" },
];

const getSectionHref = (pathname: string, href: string) =>
  pathname === "/" ? href : `/${href}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#faf8f4]/95 backdrop-blur-md shadow-sm shadow-pale-oak/30"
          : "bg-[#faf8f4]/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="Compass Logo" width={80} height={32} />
            <span className="text-[#0b1d51] font-semibold">Compass</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getSectionHref(pathname, link.href)}
              className="text-sm text-[#797596] hover:text-[#0b1d51] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/apply"
            className="px-8 py-4 text-base text-white font-bold rounded-2xl hover:-rotate-1 hover:scale-105 active:scale-95 transition-all duration-200 bg-deep-navy hover:text-pale-oak shadow-lg"
     
          
          >
            Apply now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#0b1d51]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#faf8f4] border-t border-[#d1c6ad]/50 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getSectionHref(pathname, link.href)}
              onClick={() => setOpen(false)}
              className="block text-[#797596] hover:text-[#0b1d51] py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href={getSectionHref(pathname, "#apply")}
              onClick={() => setOpen(false)}
              className="text-center py-2.5 border border-[#bbada0] text-[#0b1d51] hover:border-[#0b1d51] hover:bg-[#0b1d51] hover:text-[#d1c6ad] transition-all duration-200 rounded-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
