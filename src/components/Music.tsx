"use client";

import { TrendingUp, ExternalLink } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function Music() {
  const { content } = useSiteContent();

  return (
    <section id="music" className="bg-[#080808]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-28 sm:px-12 sm:py-36 lg:px-16 lg:py-44">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Music
          </p>
          <h2 className="text-4xl font-black leading-snug text-white sm:text-5xl lg:text-6xl">
            Trending <span className="gradient-gold">Songs</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Viral Rasiya songs, fan favourites, and upcoming releases by DG Mawai.
          </p>
        </div>

        {/* Song List Header */}
        <div className="mb-6 hidden grid-cols-[3rem_1fr_8rem_4rem_4rem] items-center gap-6 px-6 text-xs font-medium uppercase tracking-wider text-gray-500 sm:grid">
          <span>#</span>
          <span>Title</span>
          <span>Plays</span>
          <span>Year</span>
          <span />
        </div>

        {/* Songs */}
        <div className="divide-y divide-[#1e1e1e]">
          {content.songs.map((song, index) => (
            <a
              key={song.title}
              href="https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s"
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[2.5rem_1fr] items-center gap-6 rounded-xl px-6 py-7 transition-colors hover:bg-[#141414] sm:grid-cols-[3rem_1fr_8rem_4rem_4rem]"
            >
              <span className="text-lg font-bold text-gray-500 group-hover:text-[#d4af37]">
                {index + 1}
              </span>

              <div className="min-w-0">
                <h3 className="truncate text-base font-bold leading-relaxed text-white group-hover:text-[#d4af37] sm:text-lg">
                  {song.title}
                </h3>
                {song.trending && (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-green-400">
                    <TrendingUp size={12} />
                    Trending
                  </span>
                )}
              </div>

              <span className="hidden text-sm font-medium text-gray-400 sm:block">
                {song.plays}
              </span>
              <span className="hidden text-sm text-gray-500 sm:block">
                {song.year}
              </span>
              <span className="hidden text-sm text-gray-500 sm:block">
                {song.duration}
              </span>
            </a>
          ))}
        </div>

        {/* Upcoming Releases */}
        <div className="mt-20">
          <h3 className="mb-10 text-2xl font-black leading-snug text-white sm:text-3xl">
            Upcoming &amp; Latest Releases
          </h3>

          <div className="grid gap-6 sm:grid-cols-3">
            {content.releases.map((release) => (
              <div
                key={release.title}
                className="rounded-2xl border border-[#2a2a2a] bg-[#111] p-7"
              >
                <span className="inline-block rounded-full bg-[#d4af37]/15 px-4 py-1.5 text-xs font-bold text-[#d4af37]">
                  {release.status}
                  {release.year}
                </span>
                <h4 className="mt-5 text-lg font-bold leading-relaxed text-white">
                  {release.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center gap-3 rounded-full bg-gradient-gold px-10 py-4 text-base font-bold text-black transition hover:scale-105"
          >
            <ExternalLink size={18} />
            Listen on All Platforms
          </a>
        </div>
      </div>
    </section>
  );
}
