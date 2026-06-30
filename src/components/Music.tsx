"use client";

import { Play, TrendingUp, Clock, ExternalLink } from "lucide-react";

const trendingSongs = [
  {
    title: "Tum Badal Gaye Raja Aa Gayi Kami Tere Pyar Me",
    plays: "799K+",
    year: "2024",
    duration: "4:49",
    trending: true,
    spotifyUrl: "https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s",
  },
  {
    title: "Chhori Teri Chal Morni Ki Dhal",
    plays: "583K+",
    year: "2024",
    duration: "5:22",
    trending: true,
    spotifyUrl: "https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s",
  },
  {
    title: "Camper Mein Baithe Gunde",
    plays: "364K+",
    year: "2024",
    duration: "4:31",
    trending: true,
    spotifyUrl: "https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s",
  },
  {
    title: "Surme Paida Hote H Yha Chambal Ke Pani Me",
    plays: "160K+",
    year: "2025",
    duration: "3:23",
    trending: false,
    spotifyUrl: "https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s",
  },
  {
    title: "Kabutar Bole Gutar Gu",
    plays: "150K+",
    year: "2024",
    duration: "4:15",
    trending: false,
    spotifyUrl: "https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s",
  },
  {
    title: "Gurjar Ke Pyar Tero Nas Nas Me",
    plays: "120K+",
    year: "2024",
    duration: "4:02",
    trending: false,
    spotifyUrl: "https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s",
  },
];

const upcomingSongs = [
  {
    title: "Mhari Tod De N Maal (EP)",
    status: "Latest Release",
    year: "2026",
  },
  {
    title: "New Rasiya 2026",
    status: "Coming Soon",
    year: "2026",
  },
  {
    title: "Jo Pike Redbull Ghume",
    status: "Released",
    year: "2025",
  },
];

export default function Music() {
  return (
    <section id="music" className="py-20 px-4 bg-[#080808]">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-gold">Trending</span> Music
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Viral hits and chart-topping Rasiya songs with millions of streams
          </p>
        </div>

        {/* Song List */}
        <div className="mb-12">
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-[#2a2a2a] text-xs text-gray-500 uppercase">
              <div className="col-span-1">#</div>
              <div className="col-span-5 sm:col-span-6">Title</div>
              <div className="col-span-3 sm:col-span-2 text-center">Plays</div>
              <div className="col-span-2 hidden sm:block">Year</div>
              <div className="col-span-3 sm:col-span-1 text-right">
                <Clock size={14} className="inline" />
              </div>
            </div>

            {/* Songs */}
            {trendingSongs.map((song, index) => (
              <a
                key={index}
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-[#1a1a1a] transition-colors items-center group"
              >
                <div className="col-span-1 text-gray-500 group-hover:text-[#d4af37]">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play
                    size={14}
                    className="hidden group-hover:block text-[#d4af37]"
                  />
                </div>
                <div className="col-span-5 sm:col-span-6">
                  <p className="text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors truncate">
                    {song.title}
                  </p>
                  {song.trending && (
                    <span className="inline-flex items-center gap-1 text-xs text-green-400 mt-1">
                      <TrendingUp size={10} />
                      Trending
                    </span>
                  )}
                </div>
                <div className="col-span-3 sm:col-span-2 text-center text-sm text-gray-400">
                  {song.plays}
                </div>
                <div className="col-span-2 hidden sm:block text-sm text-gray-500">
                  {song.year}
                </div>
                <div className="col-span-3 sm:col-span-1 text-right text-sm text-gray-500">
                  {song.duration}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Upcoming Releases */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">
            Upcoming & Latest <span className="gradient-gold">Releases</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {upcomingSongs.map((song, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-5 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      song.status === "Coming Soon"
                        ? "bg-[#d4af37]/20 text-[#d4af37]"
                        : song.status === "Latest Release"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {song.status}
                  </span>
                  <span className="text-xs text-gray-500">{song.year}</span>
                </div>
                <h4 className="font-semibold text-white">{song.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Listen on all platforms */}
        <div className="text-center mt-10">
          <a
            href="https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <ExternalLink size={18} />
            Listen on All Platforms
          </a>
        </div>
      </div>
    </section>
  );
}
