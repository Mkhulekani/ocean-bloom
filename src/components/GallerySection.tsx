import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const labels = ["Event Massage", "Outdoor Spa", "Mobile Therapy", "Relaxation Session", "Wellness Setup", "Deep Tissue", "Hot Stone"];

type GalleryItem = {
  src: string;
  type: "image" | "video";
};

const GallerySection = ({ items }: { items: GalleryItem[] }) => (
  <section id="gallery" className="bg-card py-[90px]">
    <div className="px-6 md:px-[55px] mb-11">
      <SectionLabel>Our Work</SectionLabel>
      <SectionTitle>Experience Gallery</SectionTitle>
      <SectionDivider />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] auto-rows-[270px] gap-[3px] px-6 md:px-[55px]">
      {items.map((item, i) => (
        <div key={i} className={`overflow-hidden relative group ${i === 0 ? "row-span-2" : ""}`}>
          {item.type === "video" ? (
            <video
              src={item.src}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            />
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
  </section>
);

export default GallerySection;
