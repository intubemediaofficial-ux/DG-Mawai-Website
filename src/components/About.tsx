"use client";

import Image from "next/image";
import { Mic2, Disc3, TrendingUp, Theater } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function About() {
  const { content } = useSiteContent();

  const achievements = [
    { icon: Mic2, text: "120K+ Spotify Listeners" },
    { icon: Disc3, text: "50+ Songs Released" },
    { icon: TrendingUp, text: "Viral Trending Hits" },
    { icon: Theater, text: "500+ Live Shows" },
  ];

  return (
    <section id="about" className="bg-[#0a0a0a]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-28 sm:px-12 sm:py-36 lg:px-16 lg:py-44">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            {content.about.eyebrow}
          </p>
          <h2 className="text-4xl font-black leading-snug text-white sm:text-5xl lg:text-6xl">
            {content.about.title}{" "}
            <span className="gradient-gold">{content.about.highlight}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            {content.about.intro}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Photo */}
          <div className="relative overflow-hidden rounded-3xl border border-[#2a2a2a] shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/5]">
              <Image
                src={content.about.image}
                alt="DG Mawai"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-black leading-snug text-white sm:text-4xl">
              {content.about.heading}
            </h3>

            <div className="mt-10 space-y-7">
              {content.about.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="mt-14 grid grid-cols-2 gap-5">
              {achievements.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-4 rounded-2xl border border-[#2a2a2a] bg-[#141414] p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/15">
                    <Icon size={22} className="text-[#d4af37]" />
                  </div>
                  <p className="text-sm font-semibold leading-relaxed text-white">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
