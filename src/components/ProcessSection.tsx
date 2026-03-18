import { SectionLabel, SectionTitle } from "./SectionParts";

const steps = [
  { n: "1", t: "Consultation", txt: "We assess your team's wellness needs and design a tailored program." },
  { n: "2", t: "Planning", txt: "Scheduling, logistics, and therapist assignment for seamless delivery." },
  { n: "3", t: "Execution", txt: "On-site professional treatments delivered with precision and care." },
  { n: "4", t: "Follow-Up", txt: "Continuous improvement through feedback and wellness tracking." },
];

const ProcessSection = () => (
  <section className="bg-background py-[90px] px-6 md:px-[55px] text-center">
    <SectionLabel>How It Works</SectionLabel>
    <SectionTitle>Our Process</SectionTitle>
    <div className="w-[55px] h-[2px] bg-primary mx-auto mb-7" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-[60px] relative">
      <div className="absolute top-[34px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
      {steps.map((s) => (
        <div key={s.n} className="px-5 flex flex-col items-center gap-[18px] group">
          <div className="w-[68px] h-[68px] border-2 border-primary rounded-full flex items-center justify-center font-display text-2xl text-primary bg-background relative z-10 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
            {s.n}
          </div>
          <h3 className="font-display text-[1.15rem] text-foreground">{s.t}</h3>
          <p className="text-[0.73rem] leading-[1.7] text-muted-foreground">{s.txt}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProcessSection;
