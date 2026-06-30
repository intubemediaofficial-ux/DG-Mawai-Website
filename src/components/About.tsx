import { Mic2, Award, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-gold">DG Mawai</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The journey from a small village to becoming one of the most loved
            Rasiya singers in Rajasthan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Bio Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#141414] border border-[#2a2a2a] overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <Mic2 size={80} className="text-[#d4af37] mx-auto mb-4" />
                <p className="text-[#d4af37] font-bold text-2xl">DG Mawai</p>
                <p className="text-gray-500 text-sm mt-2">
                  Rajasthani Rasiya King
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#d4af37]/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#d4af37]/30 rounded-2xl" />
          </div>

          {/* Bio Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-gold">
              The Voice of Chambal & Rajasthan
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              DG Mawai is a renowned Rajasthani Rasiya singer who has
              captivated millions with his powerful voice and authentic folk
              music. Born and raised in the heartland of Rajasthan, DG Mawai
              started his musical journey from a young age, inspired by the
              rich cultural heritage of Gurjar and Rajasthani folk traditions.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With hit songs like &quot;Tum Badal Gaye Raja&quot; (800K+ plays),
              &quot;Chhori Teri Chal Morni Ki Dhal&quot; (580K+ plays), and
              &quot;Camper Mein Baithe Gunde&quot; (360K+ plays), DG Mawai has
              established himself as one of the top Rasiya singers in the
              industry.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              His unique style blends traditional Rasiya melodies with modern
              production, creating a sound that resonates with audiences across
              Rajasthan, Haryana, UP, and beyond. From village celebrations to
              massive stage shows, DG Mawai brings the energy and soul of
              Rajasthani folk music to every performance.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-[#141414] border border-[#2a2a2a] rounded-xl p-3">
                <Award size={24} className="text-[#d4af37]" />
                <div>
                  <p className="text-sm font-semibold">120K+</p>
                  <p className="text-xs text-gray-500">Spotify Listeners</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#141414] border border-[#2a2a2a] rounded-xl p-3">
                <Heart size={24} className="text-[#d4af37]" />
                <div>
                  <p className="text-sm font-semibold">50+ Songs</p>
                  <p className="text-xs text-gray-500">Released</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#141414] border border-[#2a2a2a] rounded-xl p-3">
                <Star size={24} className="text-[#d4af37]" />
                <div>
                  <p className="text-sm font-semibold">Viral Hits</p>
                  <p className="text-xs text-gray-500">Multiple Trending</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#141414] border border-[#2a2a2a] rounded-xl p-3">
                <Mic2 size={24} className="text-[#d4af37]" />
                <div>
                  <p className="text-sm font-semibold">500+ Shows</p>
                  <p className="text-xs text-gray-500">Live Performances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
