"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function Booking() {
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
    window.open(`https://wa.me/919999999999?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 px-4 bg-[#080808]">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book a <span className="gradient-gold">Show</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Want DG Mawai to perform at your event? Fill out the form below or
            contact directly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 gradient-gold">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:Dgmawaiofficial@gmail.com"
                className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <Mail size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">
                    Dgmawaiofficial@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white font-medium">
                    Contact on WhatsApp
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <MapPin size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Based in</p>
                  <p className="text-white font-medium">Rajasthan, India</p>
                </div>
              </div>
            </div>

            {/* Booking Info */}
            <div className="bg-[#141414] border border-[#d4af37]/30 rounded-xl p-5">
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
              className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-6">
                Fill Booking <span className="gradient-gold">Enquiry</span>
              </h3>

              <div className="space-y-4">
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

                <div className="grid grid-cols-2 gap-4">
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

                <div className="grid grid-cols-2 gap-4">
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
