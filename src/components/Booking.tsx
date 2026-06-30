"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useSiteContent } from "@/lib/useSiteContent";

export default function Booking() {
  const { content } = useSiteContent();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello DG Mawai Team!%0A%0AI want to book a show.%0A%0AName: ${formData.name}%0AEvent: ${formData.eventType}%0ADate: ${formData.eventDate}%0ACity: ${formData.city}%0ADetails: ${formData.message}`;
    window.open(`https://wa.me/${content.contact.whatsapp}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="booking" className="bg-[#080808]">
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-28 sm:px-12 sm:py-36 lg:px-16 lg:py-44">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Booking
          </p>
          <h2 className="text-4xl font-black leading-snug text-white sm:text-5xl lg:text-6xl">
            Book a <span className="gradient-gold">Show</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Want DG Mawai to perform at your event? Fill out the form below or
            contact directly.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="mb-8 text-2xl font-black leading-snug text-[#d4af37]">
              Contact Information
            </h3>

            <div className="mb-12 space-y-5">
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-5 rounded-2xl border border-[#2a2a2a] bg-[#111] p-6 transition hover:border-[#d4af37]/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20">
                  <Mail size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="mt-1 break-all text-base font-semibold leading-relaxed text-white">
                    {content.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${content.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-2xl border border-[#2a2a2a] bg-[#111] p-6 transition hover:border-[#d4af37]/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="mt-1 text-base font-medium text-white">
                    Contact on WhatsApp
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 rounded-2xl border border-[#2a2a2a] bg-[#111] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20">
                  <MapPin size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Based in</p>
                  <p className="mt-1 text-base font-medium text-white">{content.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
              <h4 className="mb-5 text-lg font-semibold text-[#d4af37]">
                Booking Info
              </h4>
              <ul className="space-y-4 text-sm leading-relaxed text-gray-300">
                <li className="flex items-start gap-3">
                  <Calendar size={16} className="mt-0.5 shrink-0 text-[#d4af37]" />
                  Available for weddings, corporate events, and concerts
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={16} className="mt-0.5 shrink-0 text-[#d4af37]" />
                  Advance booking recommended (2-4 weeks)
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={16} className="mt-0.5 shrink-0 text-[#d4af37]" />
                  Pan-India availability for shows
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[#2a2a2a] bg-[#111] p-8 sm:p-10"
            >
              <h3 className="mb-8 text-xl font-black leading-snug text-white">
                Fill Booking <span className="gradient-gold">Enquiry</span>
              </h3>

              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white transition focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="">Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="concert">Concert</option>
                    <option value="festival">Festival</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white transition focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder="Event City / Location"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-5 py-4 text-base text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none"
                />

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-gold py-4 text-base font-bold text-black transition hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Send Booking Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
