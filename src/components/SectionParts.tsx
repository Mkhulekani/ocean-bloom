const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[0.58rem] font-bold tracking-[0.33em] uppercase text-primary mb-3.5 block">
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-light leading-[1.2] mb-[18px] text-foreground">
    {children}
  </h2>
);

const SectionDivider = () => (
  <div className="w-[55px] h-[2px] bg-primary mb-7" />
);

export { SectionLabel, SectionTitle, SectionDivider };
