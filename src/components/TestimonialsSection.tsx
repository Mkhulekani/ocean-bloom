import { SectionLabel, SectionTitle } from "./SectionParts";

const testimonials = [
  { txt: "The Black Liquid transformed our office culture. Employee satisfaction scores increased by 40% within the first quarter of implementing their wellness program.", name: "Sarah M.", role: "HR Director, TechCorp SA", init: "SM" },
  { txt: "Professional, punctual, and absolutely exceptional. The team at The Black Liquid understands corporate wellness at a level that goes beyond traditional spa services.", name: "James K.", role: "CEO, FinanceHub", init: "JK" },
  { txt: "Our annual wellness day organized by The Black Liquid was the highlight of the year. Over 200 employees participated and the feedback was overwhelmingly positive.", name: "Linda R.", role: "Events Manager, MediaGroup", init: "LR" },
];

const TestimonialsSection = () => (
  <section className="bg-card py-[90px] px-6 md:px-[55px] text-center">
    <div className="max-w-[560px] mx-auto mb-[50px]">
      <SectionLabel>Testimonials</SectionLabel>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <div className="w-[55px] h-[2px] bg-primary mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-[50px]">
      {testimonials.map((t) => (
        <div key={t.name} className="bg-green-subtle border border-primary/10 p-9 text-left hover:border-primary/40 transition-colors">
          <div className="font-display text-[3.5rem] text-primary leading-[0.5] mb-[22px] opacity-60">"</div>
          <p className="font-display text-[1.02rem] italic leading-[1.8] text-foreground/95 mb-6">{t.txt}</p>
          <div className="flex items-center gap-2.5">
            <div className="w-[34px] h-[34px] rounded-full bg-primary flex items-center justify-center font-bold text-[0.72rem] text-primary-foreground shrink-0">{t.init}</div>
            <div>
              <div className="font-semibold text-[0.78rem] text-foreground">{t.name}</div>
              <div className="text-[0.62rem] tracking-[0.1em] text-muted-foreground uppercase">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
