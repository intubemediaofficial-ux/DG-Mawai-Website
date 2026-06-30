import { Play, Music, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#d4af37] rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6">
          <Music size={16} className="text-[#d4af37]" />
          <span className="text-sm text-[#d4af37]">
            Rajasthani Rasiya Singer
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 tracking-tight">
          <span className="gradient-gold">DG MAWAI</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          The Voice of Rajasthan - Rasiya King | 120K+ Monthly Listeners on
          Spotify | Viral Hits | Live Shows Across India
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold gradient-gold">
              120K+
            </p>
            <p className="text-xs text-gray-500">Monthly Listeners</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold gradient-gold">50+</p>
            <p className="text-xs text-gray-500">Songs Released</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold gradient-gold">
              10M+
            </p>
            <p className="text-xs text-gray-500">Total Streams</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold gradient-gold">
              500+
            </p>
            <p className="text-xs text-gray-500">Live Shows</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#music"
            className="inline-flex items-center gap-2 bg-gradient-gold text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform animate-pulse-gold"
          >
            <Play size={18} />
            Listen Now
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-semibold hover:bg-[#d4af37]/10 transition-colors"
          >
            <Users size={18} />
            Book a Show
          </a>
        </div>

        {/* Streaming Platforms */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://open.spotify.com/artist/4uLGJavHBsutDtDOzNG18s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transition-colors text-sm flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
          </a>
          <a
            href="https://www.youtube.com/@DGMawaiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-400 transition-colors text-sm flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
          <a
            href="https://music.apple.com/us/artist/dg-mawai/1576320122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-400 transition-colors text-sm flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.298.228.468.043.937.065 1.407.066 3.966.004 7.932.004 11.898 0 .472 0 .942-.02 1.414-.058.492-.04.98-.11 1.453-.272 1.527-.52 2.662-1.49 3.294-2.958.18-.42.282-.862.342-1.314.07-.51.102-1.024.11-1.538.004-.165.006-12.2.004-12.25zM17.994 12c0 3.312-2.686 5.997-5.998 5.997-3.31-.002-5.996-2.687-5.996-5.998 0-3.31 2.686-5.996 5.996-5.996 3.313-.001 5.998 2.686 5.998 5.997zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            Apple Music
          </a>
          <a
            href="https://www.jiosaavn.com/artist/singer-dg-mawai-songs/EvakEmixp8U_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            JioSaavn
          </a>
        </div>
      </div>
    </section>
  );
}
