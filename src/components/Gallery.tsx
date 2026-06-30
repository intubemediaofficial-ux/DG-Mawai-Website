"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function Gallery() {
  const { content } = useSiteContent();

  return (
    <section id="gallery" className="bg-[#0a0a0a]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-28 sm:px-12 sm:py-36 lg:px-16 lg:py-44">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Photo Gallery
          </p>
          <h2 className="text-4xl font-black leading-snug text-white sm:text-5xl lg:text-6xl">
            DG Mawai <span className="gradient-gold">Official Photos</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Singer portraits, traditional looks, live show moments, and artist
            photos shared for the official website.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {content.photos.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#141414] shadow-xl shadow-black/20 ${
                item.large ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${item.large ? "aspect-square" : "aspect-[3/4]"}`}>
                <Image
                  src={item.src}
                  alt={`DG Mawai ${item.label}`}
                  fill
                  sizes={item.large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <span className="mb-2 inline-block rounded-full bg-[#d4af37] px-3 py-1.5 text-xs font-bold text-black">
                  {item.category}
                </span>
                <p className="text-base font-semibold leading-relaxed text-white">
                  {item.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/dg_mavi_gurjar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-10 py-4 text-base font-bold text-white transition hover:scale-105"
          >
            <ExternalLink size={20} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
