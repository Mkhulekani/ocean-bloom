import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const services = [
  { num: "01", name: "Corporate Chair Massage", desc: "Professional on-site massage therapy designed for the workplace. Quick, effective sessions that boost productivity and morale." },
  { num: "02", name: "Reflexology Sessions", desc: "Targeted foot and hand reflexology treatments that relieve tension, improve circulation, and promote overall well-being." },
  { num: "03", name: "Wellness Programs", desc: "Comprehensive corporate wellness programs including meditation, yoga, and stress management workshops." },
];

const ServicesSection = ({ images }: { images: string[] }) => (
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
          <img src={images[i]} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]" />
          <div className="absolute inset-0 svc-gradient flex flex-col justify-end p-7">
            <span className="text-[0.53rem] font-bold tracking-[0.28em] text-primary mb-2">{s.num}</span>
            <div className="w-0 h-[2px] bg-primary mb-3 transition-all duration-400 group-hover:w-9" />
            <h3 className="font-display text-[1.55rem] font-normal leading-[1.2] mb-2.5 text-foreground">{s.name}</h3>
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
