import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const features = [
  { icon: "🏢", title: "On-Site Setup", desc: "We bring everything needed — chairs, tables, oils, and music." },
  { icon: "📊", title: "ROI Reports", desc: "Detailed wellness reports showing measurable impact on your team." },
  { icon: "🧘", title: "Flexible Plans", desc: "Weekly, monthly, or event-based packages tailored to your needs." },
  { icon: "⭐", title: "Certified Team", desc: "All therapists are fully certified and professionally insured." },
];

const CorporateSection = ({ img }: { img: string }) => (
  <section id="corporate" className="bg-background py-[90px] px-6 md:px-[55px]">
    <SectionLabel>Corporate Solutions</SectionLabel>
    <SectionTitle>Wellness for the Modern Workplace</SectionTitle>
    <SectionDivider />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] items-center mt-[50px]">
      <div className="relative h-[460px] overflow-hidden">
        <img src={img} alt="Corporate wellness" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
      <div>
        <p className="text-[0.88rem] leading-[1.9] text-muted-foreground mb-7">
          Transform your workplace into a hub of wellness and productivity. Our corporate programs
          are designed to reduce absenteeism, boost morale, and create a culture of care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-green-subtle border border-primary/15 p-5 hover:border-primary/40 transition-colors">
              <div className="text-2xl mb-2.5">{f.icon}</div>
              <h4 className="text-[0.78rem] font-bold tracking-[0.1em] text-primary mb-1.5">{f.title}</h4>
              <p className="text-[0.73rem] leading-[1.7] text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CorporateSection;
