import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Videos from "@/components/Videos";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Videos />
      <Events />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}
