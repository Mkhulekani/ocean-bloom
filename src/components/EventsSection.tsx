import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const events = [
  { num: "01", title: "Wellness Days", desc: "Full-day on-site wellness events with multiple treatment stations, health screenings, and interactive workshops." },
  { num: "02", title: "Executive Retreats", desc: "Exclusive stress management and leadership wellness retreats designed for C-suite executives and senior management." },
  { num: "03", title: "Health Fairs", desc: "Comprehensive health and wellness expos featuring our therapists alongside nutrition and fitness professionals." },
];

const EventsSection = ({ images }: { images: string[] }) => (
  <section id="events" className="bg-card py-[90px] px-6 md:px-[55px]">
    <div className="max-w-[700px] mb-[50px]">
      <SectionLabel>Event Wellness</SectionLabel>
      <SectionTitle>Unforgettable Wellness Events</SectionTitle>
      <SectionDivider />
      <p className="text-[0.88rem] leading-[1.9] text-muted-foreground mt-4">
        From intimate team retreats to large-scale corporate wellness days, we create memorable experiences that leave lasting impressions.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[50px]">
      {events.map((ev, i) => (
        <div key={ev.num} className="bg-green-subtle border border-primary/10 overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all group">
          <div className="h-[200px] overflow-hidden">
            <img src={images[i]} alt={ev.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]" />
          </div>
          <div className="p-7">
            <span className="text-[0.55rem] font-bold tracking-[0.28em] text-primary mb-2 block">{ev.num}</span>
            <h3 className="font-display text-[1.35rem] font-normal mb-3 text-foreground">{ev.title}</h3>
            <p className="text-[0.73rem] leading-[1.7] text-muted-foreground">{ev.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
