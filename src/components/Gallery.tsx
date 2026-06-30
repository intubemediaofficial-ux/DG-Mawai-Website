"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function Gallery() {
  const { content } = useSiteContent();

  return (
    <section id="gallery" className="bg-[#0a0a0a]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-[18px] py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:mb-4 sm:text-sm">
            Photo Gallery
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            DG Mawai <span className="gradient-gold">Official Photos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.75] text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            Singer portraits, traditional looks, live show moments, and artist
            photos shared for the official website.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
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
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3 sm:p-4 lg:p-5">
                <span className="mb-1.5 inline-block rounded-full bg-[#d4af37] px-2.5 py-1 text-[10px] font-bold text-black sm:mb-2 sm:px-3 sm:py-1.5 sm:text-xs">
                  {item.category}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-white sm:text-sm lg:text-base">
                  {item.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center sm:mt-14">
          <a
            href="https://www.instagram.com/dg_mavi_gurjar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-8 py-3.5 text-sm font-bold text-white transition hover:scale-105 sm:min-h-14 sm:px-10 sm:py-4 sm:text-base"
          >
            <ExternalLink size={20} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
