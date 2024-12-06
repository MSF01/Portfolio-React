import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AppShowcase from "./components/AppShowcase";
import About from "./components/About";
import Footer from "./components/Footer";

import "./globals.css";

export default function App() {
  const appsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header
        scrollToSection={scrollToSection}
        appsRef={appsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <main>
        <Hero scrollToSection={scrollToSection} appsRef={appsRef} />
        <AppShowcase ref={appsRef} />
        <About ref={aboutRef} contactRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
