import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const labels = ["Hot Stone Therapy", "Office Stretching", "Aromatherapy", "Outdoor Yoga", "Scalp Massage"];

const GallerySection = ({ images }: { images: string[] }) => (
  <section id="gallery" className="bg-card py-[90px]">
    <div className="px-6 md:px-[55px] mb-11">
      <SectionLabel>Our Work</SectionLabel>
      <SectionTitle>Experience Gallery</SectionTitle>
      <SectionDivider />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] grid-rows-[270px_270px] gap-[3px] px-6 md:px-[55px]">
      {images.map((img, i) => (
        <div key={i} className={`overflow-hidden relative group ${i === 0 ? "row-span-2" : ""}`}>
          <img src={img} alt={labels[i]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 p-[18px] gal-gradient text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {labels[i]}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
