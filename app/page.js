import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItGrows from "@/components/HowItGrows";
import Process from "@/components/Process";
import Market from "@/components/Market";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItGrows />
      <Process />
      <Market />
      <Benefits />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
