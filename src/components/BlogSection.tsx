import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const blogs = [
  { tag: "Workplace Wellness", title: "The ROI of Corporate Massage Programs", excerpt: "Discover how investing in employee wellness delivers measurable returns through reduced absenteeism and increased productivity.", read: "Read Article" },
  { tag: "Health & Science", title: "Stress Management in the Modern Office", excerpt: "Expert insights on managing workplace stress through holistic approaches and evidence-based wellness interventions.", read: "Read Article" },
  { tag: "Industry Trends", title: "The Future of Corporate Wellness", excerpt: "Exploring emerging trends in workplace wellness, from AI-driven health tracking to personalized on-demand therapy sessions.", read: "Read Article" },
];

const BlogSection = () => (
  <section id="blog" className="bg-background py-[90px] px-6 md:px-[55px]">
    <div className="max-w-[600px] mb-[50px]">
      <SectionLabel>Insights</SectionLabel>
      <SectionTitle>Latest from Our Blog</SectionTitle>
      <SectionDivider />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[50px]">
      {blogs.map((b) => (
        <div key={b.title} className="bg-green-subtle border border-primary/10 overflow-hidden hover:border-primary/40 hover:-translate-y-1 transition-all group">
          <div className="h-2.5 bg-primary" />
          <div className="p-7">
            <span className="text-[0.55rem] font-bold tracking-[0.28em] uppercase text-primary mb-3 block">{b.tag}</span>
            <h3 className="font-display text-[1.35rem] font-normal leading-[1.3] mb-3.5 text-foreground">{b.title}</h3>
            <p className="text-[0.73rem] leading-[1.8] text-muted-foreground mb-[22px]">{b.excerpt}</p>
            <span className="text-[0.63rem] font-bold tracking-[0.18em] uppercase text-primary flex items-center gap-2 cursor-pointer">
              {b.read}
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection;
