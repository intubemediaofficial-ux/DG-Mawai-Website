"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#music", label: "Music" },
  { href: "#videos", label: "Videos" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Book Show" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="text-2xl font-bold gradient-gold">
            DG Mawai
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-[#d4af37]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="rounded-full bg-gradient-gold px-7 py-3 text-sm font-bold text-black transition hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-5 px-[18px] py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 transition-colors hover:text-[#d4af37]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full bg-gradient-gold px-7 py-3.5 text-center text-sm font-bold text-black"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
