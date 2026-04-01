import { useState } from "react";

import aboutImg from "@/assets/about.jpg";
import svc1 from "@/assets/svc1.jpg";
import svc2 from "@/assets/svc2.jpg";
import svc3 from "@/assets/svc3.jpg";
import gal1 from "@/assets/gal1.jpeg";
import gal2 from "@/assets/gal2.jpeg";
import gal3 from "@/assets/gal3.mp4";
import gal4 from "@/assets/gal4.mp4";
import gal5 from "@/assets/gal5.mp4";
import gal6 from "@/assets/gal6.mp4";
import gal7 from "@/assets/gal7.mp4";
import corp1 from "@/assets/corp1.jpeg";
import corp2 from "@/assets/corp2.jpeg";
import ev1 from "@/assets/ev1.jpg";
import ev2 from "@/assets/ev2.jpg";
import ev3 from "@/assets/ev3.jpg";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CorporateSection from "@/components/CorporateSection";
import EventsSection from "@/components/EventsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";
import OceanOverlay from "@/components/OceanOverlay";

const Index = () => {
  const [oceanActive, setOceanActive] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection oceanActive={oceanActive} />
      <AboutSection img={aboutImg} />
      <ServicesSection images={[svc1, svc2, svc3]} />
      <GallerySection items={[
        { src: gal1, type: "image" },
        { src: gal2, type: "image" },
        { src: gal3, type: "video" },
        { src: gal4, type: "video" },
        { src: gal5, type: "video" },
        { src: gal6, type: "video" },
        { src: gal7, type: "video" },
      ]} />
      <ProcessSection />
      <TestimonialsSection />
      <CorporateSection images={[corp1, corp2]} />
      <EventsSection images={[ev1, ev2, ev3]} />
      <BlogSection />
      <FaqSection />
      <CtaSection />
      <BookingSection />
      <FooterSection />
      <OceanOverlay active={oceanActive} onToggle={() => setOceanActive(prev => !prev)} />
    </div>
  );
};

export default Index;

