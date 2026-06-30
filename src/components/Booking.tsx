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
    <section id="booking" className="bg-[#080808] px-6 py-20 sm:px-8 sm:py-32">
      <div className="section-divider mb-14" />
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Booking
          </p>
          <h2 className="text-3xl font-black leading-snug text-white sm:text-5xl">
            Book a <span className="gradient-gold">Show</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
            Want DG Mawai to perform at your event? Fill out the form below or
            contact directly.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-2xl font-black leading-tight text-[#d4af37]">
              Contact Information
            </h3>

            <div className="space-y-5 mb-10">
              <a
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <Mail size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="break-all text-base font-semibold leading-6 text-white">
                    {content.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${content.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white font-medium">
                    Contact on WhatsApp
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] rounded-xl p-5">
                <div className="w-11 h-11 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <MapPin size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Based in</p>
                  <p className="text-white font-medium">{content.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-[#141414] border border-[#d4af37]/30 rounded-xl p-6">
              <h4 className="font-semibold text-[#d4af37] mb-3">
                Booking Info
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#d4af37]" />
                  Available for weddings, corporate events, and concerts
                </li>
                <li className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#d4af37]" />
                  Advance booking recommended (2-4 weeks)
                </li>
                <li className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#d4af37]" />
                  Pan-India availability for shows
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-[#2a2a2a] bg-[#141414] p-6 sm:p-8"
            >
              <h3 className="mb-6 text-xl font-black leading-tight text-white">
                Fill Booking <span className="gradient-gold">Enquiry</span>
              </h3>

              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
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
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder="Event City / Location"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
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
