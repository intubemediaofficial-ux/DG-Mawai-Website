import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

const upcomingEvents = [
  {
    title: "Live Rasiya Night",
    date: "15 July 2026",
    time: "8:00 PM",
    venue: "Rajasthan Cultural Center",
    city: "Jaipur, Rajasthan",
    status: "Tickets Available",
    price: "From \u20b9499",
  },
  {
    title: "Gurjar Mahotsav 2026",
    date: "22 July 2026",
    time: "7:00 PM",
    venue: "Community Ground",
    city: "Bharatpur, Rajasthan",
    status: "Tickets Available",
    price: "From \u20b9299",
  },
  {
    title: "Independence Day Special Show",
    date: "15 August 2026",
    time: "6:00 PM",
    venue: "Stadium Ground",
    city: "Agra, UP",
    status: "Coming Soon",
    price: "TBA",
  },
  {
    title: "Navratri Rasiya Utsav",
    date: "October 2026",
    time: "7:30 PM",
    venue: "Main Stage",
    city: "Mathura, UP",
    status: "Coming Soon",
    price: "TBA",
  },
];

const pastEvents = [
  { city: "Jaipur", event: "Rajasthan Folk Festival 2025" },
  { city: "Delhi", event: "Gurjar Sammelan 2025" },
  { city: "Agra", event: "New Year Celebration 2025" },
  { city: "Bharatpur", event: "Republic Day Show 2025" },
  { city: "Mathura", event: "Holi Special 2025" },
  { city: "Gwalior", event: "Chambal Mahotsav 2024" },
];

export default function Events() {
  return (
    <section id="events" className="py-20 px-4 bg-[#080808]">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Upcoming <span className="gradient-gold">Events</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Catch DG Mawai live at upcoming shows and events across India
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-400">{event.venue}</p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
                    event.status === "Tickets Available"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-[#d4af37]/20 text-[#d4af37]"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-[#d4af37]" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-[#d4af37]" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#d4af37]" />
                  {event.city}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#d4af37] font-semibold">
                  {event.price}
                </span>
                {event.status === "Tickets Available" ? (
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 bg-gradient-gold text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    <Ticket size={14} />
                    Book Tickets
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">
                    Booking opens soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">
            Past <span className="gradient-gold">Performances</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm"
              >
                <span className="text-[#d4af37]">{event.city}</span>
                <span className="text-gray-500 ml-2">- {event.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
