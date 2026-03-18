import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const stats = [
  { n: "500+", l: "Corporate Clients" },
  { n: "12K+", l: "Sessions Delivered" },
  { n: "98%", l: "Client Retention" },
  { n: "15+", l: "Years Experience" },
];

const AboutSection = ({ img }: { img: string }) => (
  <section id="about" className="bg-card py-[90px] px-6 md:px-[55px]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center">
      <div>
        <SectionLabel>About Us</SectionLabel>
        <SectionTitle>Elevating Corporate Wellness to an Art Form</SectionTitle>
        <SectionDivider />
        <p className="text-[0.88rem] leading-[1.9] text-muted-foreground mb-[18px]">
          The Black Liquid (PTY) LTD is South Africa's premier corporate wellness provider,
          delivering transformative on-site massage and holistic health solutions since 2009.
        </p>
        <p className="text-[0.88rem] leading-[1.9] text-muted-foreground mb-[18px]">
          We believe that employee wellness is the foundation of organizational excellence.
          Our certified therapists bring luxury-grade treatments directly to your workplace.
        </p>
        <div className="grid grid-cols-2 gap-[22px] mt-9">
          {stats.map((s) => (
            <div key={s.l} className="border-l-2 border-primary pl-[18px]">
              <div className="font-display text-[2.2rem] font-semibold text-primary leading-none">{s.n}</div>
              <div className="text-[0.62rem] tracking-[0.14em] uppercase text-muted-foreground mt-[5px]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-[480px] overflow-hidden">
        <img src={img} alt="About The Black Liquid" className="w-full h-full object-cover" />
        <div className="absolute -inset-[10px] border border-primary/25 -z-10" />
      </div>
    </div>
  </section>
);

export default AboutSection;
