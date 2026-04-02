import { useState, useEffect } from "react";
import { SectionLabel, SectionTitle } from "./SectionParts";

const services = [
  {
    num: "01",
    name: "Corporate Chair Massage",
    desc: "Professional on-site massage therapy designed for the workplace. Quick, effective sessions that boost productivity and morale.",
    icon: "💆",
  },
  {
    num: "02",
    name: "Reflexology Sessions",
    desc: "Targeted foot and hand reflexology treatments that relieve tension, improve circulation, and promote overall well-being.",
    icon: "🦶",
  },
  {
    num: "03",
    name: "Wellness Programs",
    desc: "Comprehensive corporate wellness programs including meditation, yoga, and stress management workshops.",
    icon: "🧘",
  },
];

const RotatingImage = ({ images, interval = 4000, alt }: { images: string[]; interval?: number; alt: string }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 600);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current && fade ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

const ServicesSection = ({ images }: { images: string[][] }) => (
  <section id="services" className="bg-background py-[90px] px-6 md:px-[55px] text-center">
    <div className="max-w-[580px] mx-auto mb-[50px]">
      <SectionLabel>What We Offer</SectionLabel>
      <SectionTitle>Premium Wellness Services</SectionTitle>
      <div className="w-[55px] h-[2px] bg-primary mx-auto mb-5" />
      <p className="text-muted-foreground text-[0.83rem] leading-[1.8]">
        Tailored wellness solutions designed to transform your workplace into a sanctuary of productivity and well-being.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-[50px]">
      {services.map((s, i) => (
        <div key={s.num} className="relative h-[400px] overflow-hidden group cursor-pointer">
          <RotatingImage
            images={images[i]}
            alt={s.name}
            interval={3500 + i * 800}
          />
          <div className="absolute inset-0 svc-gradient flex flex-col justify-end p-7">
            <span className="text-[2rem] mb-2 drop-shadow-lg">{s.icon}</span>
            <span className="text-[0.53rem] font-bold tracking-[0.28em] text-primary mb-2">{s.num}</span>
            <div className="w-0 h-[2px] bg-primary mb-3 transition-all duration-400 group-hover:w-9" />
            <h3 className="font-display text-[1.55rem] font-normal leading-[1.2] mb-2.5 text-foreground drop-shadow-md">{s.name}</h3>
            <p className="text-[0.73rem] leading-[1.7] text-muted-foreground max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-28 group-hover:opacity-100">
              {s.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
