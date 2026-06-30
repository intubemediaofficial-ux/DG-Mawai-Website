"use client";

import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function Videos() {
  const { content } = useSiteContent();

  return (
    <section id="videos" className="bg-[#0a0a0a]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-[18px] py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:mb-4 sm:text-sm">
            Videos
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Music <span className="gradient-gold">Videos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.75] text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            Watch DG Mawai songs, live performances, and new Rasiya releases on
            the official YouTube channel.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {content.videos.map((video) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111] transition hover:border-[#d4af37]/40"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37] text-black">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-3 py-1 text-sm font-bold text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-sm font-bold leading-relaxed text-white group-hover:text-[#d4af37] sm:text-base lg:text-lg">
                  {video.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-gray-400 sm:mt-3 sm:text-sm">
                  {video.views}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-10 text-center sm:mt-14">
          <a
            href="https://www.youtube.com/@DGMawaiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white transition hover:scale-105 hover:bg-red-500 sm:min-h-14 sm:px-10 sm:py-4 sm:text-base"
          >
            <ExternalLink size={20} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
