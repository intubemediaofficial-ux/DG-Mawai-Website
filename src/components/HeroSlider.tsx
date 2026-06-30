"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function HeroSlider() {
  const { content } = useSiteContent();
  const slides = content.photos.filter((photo) => photo.hero).slice(0, 5);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(slides.length, 1));
    }, 4500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const safeSlide = slides.length > 0 ? currentSlide % slides.length : 0;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % Math.max(slides.length, 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % Math.max(slides.length, 1));

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#d4af37]/20 bg-[#111] shadow-2xl shadow-black/40">
      <div className="relative aspect-[3/4] sm:aspect-[4/5]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === safeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={`DG Mawai ${slide.label}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={index === 0}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/40 bg-black/55 text-[#d4af37] backdrop-blur transition hover:bg-[#d4af37] hover:text-black"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/40 bg-black/55 text-[#d4af37] backdrop-blur transition hover:bg-[#d4af37] hover:text-black"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to photo ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              index === safeSlide ? "w-10 bg-[#d4af37]" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
