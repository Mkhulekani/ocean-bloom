import { useState, useRef, useEffect } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const labels = ["Event Massage", "Outdoor Spa", "Mobile Therapy", "Relaxation Session", "Wellness Setup", "Deep Tissue", "Hot Stone"];

type GalleryItem = {
  src: string;
  type: "image" | "video";
};

const GallerySection = ({ items }: { items: GalleryItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openItem = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const goPrev = () => setActiveIndex(prev => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
  const goNext = () => setActiveIndex(prev => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section id="gallery" className="bg-card py-[90px]">
      <div className="px-6 md:px-[55px] mb-11">
        <SectionLabel>Our Work</SectionLabel>
        <SectionTitle>Experience Gallery</SectionTitle>
        <SectionDivider />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] auto-rows-[270px] gap-[3px] px-6 md:px-[55px]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`overflow-hidden relative group cursor-pointer ${i === 0 ? "row-span-2" : ""}`}
            onClick={() => openItem(i)}
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </>
            ) : (
              <img
                src={item.src}
                alt={labels[i]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-[18px] gal-gradient text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {labels[i]}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button onClick={close} className="absolute top-5 left-5 flex items-center gap-2 text-white/80 hover:text-white z-50 transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <ChevronLeft className="w-5 h-5" />
            Back to Gallery
          </button>
          <button onClick={close} className="absolute top-5 right-5 text-white/80 hover:text-white z-50 transition-colors">
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-50"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-50"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {active.type === "video" ? (
              <video
                ref={videoRef}
                key={activeIndex}
                src={active.src}
                className="w-full max-h-[85vh] object-contain rounded-lg"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={active.src}
                alt={labels[activeIndex]}
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
