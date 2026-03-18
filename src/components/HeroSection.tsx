const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
    <div className="absolute inset-0 grid-overlay pointer-events-none" />
    <div className="absolute w-[280px] h-[280px] bg-primary hex-clip opacity-5 top-[8%] -right-[60px]" />
    <div className="absolute w-[160px] h-[160px] bg-primary hex-clip opacity-5 bottom-[18%] -left-[30px]" />
    <div className="relative z-10 text-center px-10 pt-[120px] pb-20 max-w-[860px]">
      <span className="inline-block border border-primary text-primary text-[0.58rem] font-bold tracking-[0.32em] uppercase px-5 py-2 mb-[30px]">
        Corporate Wellness Redefined
      </span>
      <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.2rem)] font-light leading-[1.1] mb-4">
        The <em className="text-primary italic">Black Liquid</em>
      </h1>
      <p className="font-display text-[clamp(1rem,2.2vw,1.5rem)] font-light text-muted-foreground tracking-[0.05em] mb-9">
        Premium On-Site Massage & Wellness Solutions
      </p>
      <p className="font-display text-[clamp(0.95rem,1.8vw,1.25rem)] italic text-primary tracking-[0.07em] mb-11 flex items-center justify-center gap-3.5">
        <span className="inline-block w-9 h-px bg-primary opacity-60" />
        Where Wellness Meets the Workplace
        <span className="inline-block w-9 h-px bg-primary opacity-60" />
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <a href="#booking" className="bg-primary text-primary-foreground px-[38px] py-[15px] font-bold text-[0.68rem] tracking-[0.22em] uppercase no-underline hover:brightness-110 hover:-translate-y-0.5 transition-all">
          Book a Session
        </a>
        <a href="#services" className="border border-foreground/30 text-foreground px-[38px] py-[15px] text-[0.68rem] tracking-[0.22em] uppercase no-underline hover:border-primary hover:text-primary transition-all">
          Our Services
        </a>
      </div>
    </div>
    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-[0.52rem] tracking-[0.28em] text-muted-foreground uppercase">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse-line" />
    </div>
  </section>
);

export default HeroSection;
