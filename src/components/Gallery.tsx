import { Camera } from "lucide-react";

const galleryItems = [
  { label: "Live Performance", category: "Stage" },
  { label: "Studio Recording", category: "Studio" },
  { label: "Music Video Shoot", category: "BTS" },
  { label: "Fan Meetup", category: "Fans" },
  { label: "Award Function", category: "Awards" },
  { label: "Concert Night", category: "Stage" },
  { label: "Village Show", category: "Stage" },
  { label: "Collaboration", category: "Studio" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Photo <span className="gradient-gold">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Moments from live shows, studio sessions, and behind the scenes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl border border-[#2a2a2a] card-hover ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`${
                  index === 0 || index === 5
                    ? "aspect-square"
                    : "aspect-square"
                } bg-gradient-to-br from-[#1a1a2e] to-[#141414] flex items-center justify-center`}
              >
                <div className="text-center">
                  <Camera
                    size={index === 0 || index === 5 ? 48 : 32}
                    className="text-[#d4af37]/50 mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#d4af37] font-semibold text-sm">
                    {item.label}
                  </p>
                  <span className="text-xs text-gray-400 mt-1 inline-block">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/dg_mavi_gurjar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-400 px-6 py-3 rounded-full font-semibold hover:bg-pink-500/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
