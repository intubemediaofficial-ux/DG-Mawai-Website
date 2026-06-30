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
      <div className="mx-auto max-w-7xl px-[18px] sm:px-8 lg:px-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-[18px] py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:mb-4 sm:text-sm">
            Booking
          </p>
          <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Book a <span className="gradient-gold">Show</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.75] text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            Want DG Mawai to perform at your event? Fill out the form below or
            contact directly.
          </p>
        </div>

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-black leading-tight text-[#d4af37] sm:mb-8 sm:text-2xl">
              Contact Information
            </h3>

            <div className="mb-8 space-y-4 sm:mb-10 sm:space-y-5">
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-[#2a2a2a] bg-[#111] p-4 transition hover:border-[#d4af37]/50 sm:gap-5 sm:rounded-2xl sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 sm:h-12 sm:w-12">
                  <Mail size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 sm:text-sm">Email</p>
                  <p className="mt-1 break-all text-sm font-semibold leading-relaxed text-white sm:text-base">
                    {content.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${content.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-[#2a2a2a] bg-[#111] p-4 transition hover:border-[#d4af37]/50 sm:gap-5 sm:rounded-2xl sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 sm:h-12 sm:w-12">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 sm:text-sm">WhatsApp</p>
                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Contact on WhatsApp
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-[#2a2a2a] bg-[#111] p-4 sm:gap-5 sm:rounded-2xl sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 sm:h-12 sm:w-12">
                  <MapPin size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 sm:text-sm">Based in</p>
                  <p className="mt-1 text-sm font-medium text-white sm:text-base">{content.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="rounded-xl border border-[#d4af37]/30 bg-[#111] p-5 sm:rounded-2xl sm:p-6">
              <h4 className="mb-4 text-base font-semibold text-[#d4af37] sm:text-lg">
                Booking Info
              </h4>
              <ul className="space-y-3 text-sm leading-[1.7] text-gray-300">
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
              className="rounded-2xl border border-[#2a2a2a] bg-[#111] p-5 sm:rounded-3xl sm:p-6 lg:p-8"
            >
              <h3 className="mb-6 text-lg font-black leading-tight text-white sm:mb-8 sm:text-xl">
                Fill Booking <span className="gradient-gold">Enquiry</span>
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="min-h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="min-h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="min-h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
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
                    className="min-h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
                  />
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder="Event City / Location"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="min-h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="min-h-[140px] w-full resize-none rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-[#d4af37] focus:outline-none sm:px-5 sm:py-3.5 sm:text-base"
                />

                <button
                  type="submit"
                  className="mt-4 flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-gold py-3.5 text-sm font-bold text-black transition hover:scale-[1.02] sm:text-base"
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
