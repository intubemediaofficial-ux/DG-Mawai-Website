"use client";

import { Music, Play, Users } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const { content } = useSiteContent();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#121224] to-[#050505]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-28 h-96 w-96 rounded-full bg-[#d4af37] blur-[160px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#d4af37] blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pb-24 pt-32 sm:px-12 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2.5 text-sm font-semibold text-[#d4af37]">
              <Music size={16} />
              {content.hero.badge}
            </div>

            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              {content.hero.title}{" "}
              <span className="gradient-gold">{content.hero.highlight}</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl sm:leading-9 lg:mx-0">
              {content.hero.tagline}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:max-w-xl">
              {content.hero.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-black leading-none text-[#d4af37] sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-3 text-xs font-medium leading-snug text-gray-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">
              <a
                href="#music"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-gold px-10 py-4 text-base font-bold text-black transition hover:scale-105"
              >
                <Play size={18} />
                Listen Now
              </a>
              <a
                href="#booking"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-[#d4af37] px-10 py-4 text-base font-bold text-[#d4af37] transition hover:bg-[#d4af37]/10"
              >
                <Users size={18} />
                Book a Show
              </a>
            </div>

            {/* Platform Links */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:justify-start">
              <a href="https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 transition hover:text-green-400">Spotify</a>
              <a href="https://www.youtube.com/@DGMawaiofficial" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 transition hover:text-red-400">YouTube</a>
              <a href="https://music.apple.com/us/artist/dg-mawai/1576320122" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 transition hover:text-pink-400">Apple Music</a>
              <a href="https://www.jiosaavn.com/artist/singer-dg-mawai-songs/EvakEmixp8U_" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 transition hover:text-teal-400">JioSaavn</a>
            </div>
          </div>

          {/* Hero Slider */}
          <div className="order-1 lg:order-2">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
