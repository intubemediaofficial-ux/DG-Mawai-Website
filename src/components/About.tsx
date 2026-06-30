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
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-[18px] py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:mb-4 sm:text-sm">
            {content.about.eyebrow}
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            {content.about.title}{" "}
            <span className="gradient-gold">{content.about.highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.75] text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            {content.about.intro}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
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
            <h3 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">
              {content.about.heading}
            </h3>

            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {content.about.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-sm leading-[1.75] text-gray-300 sm:text-base sm:leading-[1.8]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
              {achievements.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#141414] p-4 sm:gap-4 sm:rounded-2xl sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/15 sm:h-12 sm:w-12 sm:rounded-xl">
                    <Icon size={18} className="text-[#d4af37] sm:h-[22px] sm:w-[22px]" />
                  </div>
                  <p className="text-xs font-semibold leading-relaxed text-white sm:text-sm">
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
