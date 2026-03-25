"use client";

import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

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
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 🔥 Gradient overlay (only when NOT scrolled) */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      )}

      <div
        className={cn(
          "relative transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#e6eceb]"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border",
                scrolled ? "border-[#0f1f1e]" : "border-white/70",
              )}
            >
              <Compass
                className={cn(
                  "w-4 h-4",
                  scrolled ? "text-[#0f1f1e]" : "text-white",
                )}
              />
            </div>

            <span
              className={cn(
                "font-display text-lg tracking-tight",
                scrolled ? "text-[#0f1f1e]" : "text-white",
              )}
            >
              Compass
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-[#5c6c6b] hover:text-[#0f1f1e]"
                    : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#apply"
              className={cn(
                "text-sm px-4 py-2 transition rounded-md",
                scrolled
                  ? "border border-[#d6dede] text-[#3e4d4c] hover:border-[#0f1f1e] hover:text-[#0f1f1e]"
                  : "bg-white text-black hover:bg-white/90",
              )}
            >
              Register Interest
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden",
              scrolled ? "text-[#0f1f1e]" : "text-white",
            )}
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
      </div>
    </header>
  );
}
