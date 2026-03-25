"use client";

import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "The Program", href: "#program" },
  { label: "Tracks", href: "#tracks" },
  { label: "Journey", href: "#journey" },
  { label: "For Parents", href: "#parents" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "bg-white/90 backdrop-blur-md border-b border-[#e6eceb]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="Compass Logo" width={80} height={32} />
            <span className="text-blue-900">Compass</span>
          </div>
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#5c6c6b] hover:text-[#0f1f1e] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#apply">
            <Button
              variant="outline"
              size="sm"
              className="text-sm border-[#d6dede] text-[#3e4d4c] hover:border-[#0f1f1e] hover:text-[#0f1f1e] transition"
            >
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#0f1f1e]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e6eceb] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[#5c6c6b] hover:text-[#0f1f1e] py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="text-center py-2.5 border border-[#d6dede] text-[#3e4d4c] hover:border-[#0f1f1e] transition"
            >
              Register Interest
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
