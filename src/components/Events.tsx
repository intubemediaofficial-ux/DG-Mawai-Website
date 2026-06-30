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
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-[18px] py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:mb-4 sm:text-sm">
            Live Shows
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Upcoming <span className="gradient-gold">Events</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.75] text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            Catch DG Mawai live at upcoming shows and events across India.
          </p>
        </div>

        {/* Events List */}
        <div className="grid gap-5 sm:gap-6">
          {content.events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111] p-5 sm:rounded-3xl sm:p-6 lg:p-8"
            >
              <div className="flex flex-col justify-between gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-8">
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
                    <h3 className="text-lg font-black leading-tight text-white sm:text-xl lg:text-2xl">
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

                  <p className="mb-4 text-sm font-medium text-gray-400 sm:mb-5 sm:text-base">
                    {event.venue}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-4">
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
                  <p className="mb-3 text-xl font-black text-[#d4af37] sm:mb-4 sm:text-2xl">
                    {event.price}
                  </p>
                  {event.status === "Tickets Available" ? (
                    <a
                      href="#booking"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-bold text-black transition hover:scale-105 sm:min-h-12 sm:px-8 sm:py-3"
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
        <div className="mt-10 sm:mt-14">
          <h3 className="mb-5 text-lg font-black leading-tight text-white sm:mb-6 sm:text-xl lg:text-2xl">
            Past Performances
          </h3>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {pastEvents.map((event) => (
              <span
                key={event}
                className="rounded-full border border-[#2a2a2a] bg-[#111] px-4 py-2 text-xs font-medium text-gray-300 sm:px-5 sm:py-2.5 sm:text-sm"
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
