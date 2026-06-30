"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://img.youtube.com/vi/-aI_8bTTJBE/maxresdefault.jpg",
    alt: "DG Mawai & PS Queen - Latest Gangster Rasiya 2025",
  },
  {
    image: "https://img.youtube.com/vi/ML5N5Fw3RD0/maxresdefault.jpg",
    alt: "DG Mawai - Felling Beer Ki Aave | New Viral Rasiya 2026",
  },
  {
    image: "https://img.youtube.com/vi/gRRbkEbGSWU/maxresdefault.jpg",
    alt: "DG Mawai - Live Performance",
  },
  {
    image: "https://img.youtube.com/vi/XqZsoesa55w/maxresdefault.jpg",
    alt: "DG Mawai - Kabutar Bole Gutar Gu",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl border border-[#2a2a2a]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              if (target.parentElement) {
                target.parentElement.classList.add(
                  "bg-gradient-to-br",
                  "from-[#1a1a2e]",
                  "to-[#0a0a0a]"
                );
              }
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#d4af37] w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="absolute bottom-12 left-6 z-20">
        <p className="text-white font-semibold text-lg drop-shadow-lg">
          {slides[currentSlide].alt}
        </p>
      </div>
    </div>
  );
}
