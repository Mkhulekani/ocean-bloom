

import aboutImg from "@/assets/about.jpg";
import svc1 from "@/assets/svc1.jpg";
import svc2 from "@/assets/svc2.jpg";
import svc3 from "@/assets/svc3.jpg";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import corpImg from "@/assets/corporate.jpg";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection img={aboutImg} />
      <ServicesSection images={[svc1, svc2, svc3]} />
      <GallerySection images={[gal1, gal2, gal3, gal4, gal5]} />
      <ProcessSection />
      <TestimonialsSection />
      <CorporateSection img={corpImg} />
      <EventsSection images={[ev1, ev2, ev3]} />
      <BlogSection />
      <FaqSection />
      <CtaSection />
      <BookingSection />
      <FooterSection />
      
    </div>
  );
};

export default Index;
