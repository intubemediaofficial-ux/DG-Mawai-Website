import { Play } from "lucide-react";

const videos = [
  {
    title: "DG Mawai Nonstop Rasiya Jukebox",
    thumbnail: "https://img.youtube.com/vi/-aI_8bTTJBE/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=-aI_8bTTJBE",
    views: "Trending",
    duration: "26:39",
  },
  {
    title: "Chhori Teri Chal Morni Ki Dhal - DG Mawai",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@DGMawaiofficial",
    views: "500K+ Views",
    duration: "5:22",
  },
  {
    title: "Kabutar Bole Gutar Gu - New Dj Dance",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@DGMawaiofficial",
    views: "300K+ Views",
    duration: "4:15",
  },
  {
    title: "Camper Mein Baithe Gunde - DG Mawai",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@DGMawaiofficial",
    views: "360K+ Views",
    duration: "4:31",
  },
  {
    title: "Surme Paida Hote H Yha Chambal Ke Pani Me",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@DGMawaiofficial",
    views: "160K+ Views",
    duration: "3:23",
  },
  {
    title: "Tum Badal Gaye Raja - Latest Rasiya 2025",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    url: "https://www.youtube.com/@DGMawaiofficial",
    views: "800K+ Views",
    duration: "4:49",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 px-4">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Music <span className="gradient-gold">Videos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch the latest music videos, live performances, and behind-the-scenes content
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover"
            >
              <div className="relative aspect-video bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden">
                {/* Gradient overlay placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-[#d4af37] ml-1" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-medium text-sm text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{video.views}</p>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@DGMawaiofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-red-500 text-red-400 px-6 py-3 rounded-full font-semibold hover:bg-red-500/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
