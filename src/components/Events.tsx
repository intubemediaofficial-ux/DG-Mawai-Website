"use client";

import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

const pastEvents = [
  "Jaipur - Rajasthan Folk Festival 2025",
  "Delhi - Gurjar Sammelan 2025",
  "Agra - New Year Celebration 2025",
  "Bharatpur - Republic Day Show 2025",
  "Mathura - Holi Special 2025",
  "Gwalior - Chambal Mahotsav 2024",
];

export default function Events() {
  const { content } = useSiteContent();

  return (
    <section id="events" className="bg-[#080808]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-28 sm:px-12 sm:py-36 lg:px-16 lg:py-44">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Live Shows
          </p>
          <h2 className="text-4xl font-black leading-snug text-white sm:text-5xl lg:text-6xl">
            Upcoming <span className="gradient-gold">Events</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Catch DG Mawai live at upcoming shows and events across India.
          </p>
        </div>

        {/* Events List */}
        <div className="grid gap-8">
          {content.events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-3xl border border-[#2a2a2a] bg-[#111] p-8 sm:p-10"
            >
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black leading-relaxed text-white sm:text-3xl">
                      {event.title}
                    </h3>
                    <span
                      className={`rounded-full px-4 py-1.5 text-xs font-bold ${
                        event.status === "Tickets Available"
                          ? "bg-green-500/15 text-green-400"
                          : "bg-[#d4af37]/15 text-[#d4af37]"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <p className="mb-8 text-base font-medium text-gray-400">
                    {event.venue}
                  </p>

                  <div className="flex flex-wrap gap-x-8 gap-y-5">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Calendar size={16} className="text-[#d4af37]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <Clock size={16} className="text-[#d4af37]" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <MapPin size={16} className="text-[#d4af37]" />
                      <span className="font-medium">{event.city}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-left lg:text-right">
                  <p className="mb-4 text-2xl font-black text-[#d4af37]">
                    {event.price}
                  </p>
                  {event.status === "Tickets Available" ? (
                    <a
                      href="#booking"
                      className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-gold px-8 py-3 text-sm font-bold text-black transition hover:scale-105"
                    >
                      <Ticket size={16} />
                      Get Tickets
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-gray-400">
                      Booking opens soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Performances */}
        <div className="mt-20">
          <h3 className="mb-8 text-2xl font-black leading-snug text-white">
            Past Performances
          </h3>
          <div className="flex flex-wrap gap-4">
            {pastEvents.map((event) => (
              <span
                key={event}
                className="rounded-full border border-[#2a2a2a] bg-[#111] px-6 py-3 text-sm font-medium text-gray-300"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
