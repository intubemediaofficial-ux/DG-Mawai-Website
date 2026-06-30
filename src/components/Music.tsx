"use client";

import { TrendingUp, ExternalLink } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function Music() {
  const { content } = useSiteContent();

  return (
    <section id="music" className="bg-[#080808]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-[18px] py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:mb-4 sm:text-sm">
            Music
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Trending <span className="gradient-gold">Songs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.75] text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            Viral Rasiya songs, fan favourites, and upcoming releases by DG Mawai.
          </p>
        </div>

        {/* Song List Header */}
        <div className="mb-4 hidden grid-cols-[3rem_1fr_8rem_4rem_4rem] items-center gap-4 px-5 text-xs font-medium uppercase tracking-wider text-gray-500 sm:grid sm:gap-5 sm:px-6">
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
              className="group grid grid-cols-[2rem_1fr] items-center gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-[#141414] sm:grid-cols-[3rem_1fr_8rem_4rem_4rem] sm:gap-5 sm:px-6 sm:py-5"
            >
              <span className="text-base font-bold text-gray-500 group-hover:text-[#d4af37] sm:text-lg">
                {index + 1}
              </span>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold leading-relaxed text-white group-hover:text-[#d4af37] sm:text-base lg:text-lg">
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
        <div className="mt-10 sm:mt-14">
          <h3 className="mb-6 text-lg font-black leading-tight text-white sm:mb-8 sm:text-2xl lg:text-3xl">
            Upcoming &amp; Latest Releases
          </h3>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {content.releases.map((release) => (
              <div
                key={release.title}
                className="rounded-xl border border-[#2a2a2a] bg-[#111] p-5 sm:rounded-2xl sm:p-6"
              >
                <span className="inline-block rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-bold text-[#d4af37] sm:px-4 sm:py-1.5">
                  {release.status}
                  {release.year}
                </span>
                <h4 className="mt-3 text-base font-bold leading-relaxed text-white sm:mt-4 sm:text-lg">
                  {release.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-14">
          <a
            href="https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-bold text-black transition hover:scale-105 sm:min-h-14 sm:px-10 sm:py-4 sm:text-base"
          >
            <ExternalLink size={18} />
            Listen on All Platforms
          </a>
        </div>
      </div>
    </section>
  );
}
