const CtaSection = () => (
  <section className="relative py-[110px] px-6 md:px-[55px] text-center overflow-hidden gradient-cta">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(141,184,0,0.07)_0%,transparent_70%)]" />
    <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.2] relative z-10 max-w-[660px] mx-auto mb-3.5 text-foreground">
      Ready to Transform Your Workplace?
    </h2>
    <p className="text-muted-foreground text-[0.88rem] mb-9 relative z-10">
      Join hundreds of South African companies investing in employee well-being.
    </p>
    <div className="flex gap-3.5 justify-center flex-wrap relative z-10">
      <a href="#booking" className="bg-primary text-primary-foreground px-[38px] py-[15px] font-bold text-[0.68rem] tracking-[0.22em] uppercase no-underline hover:brightness-110 hover:-translate-y-0.5 transition-all">
        Get Started Today
      </a>
      <a href="#services" className="border border-foreground/30 text-foreground px-[38px] py-[15px] text-[0.68rem] tracking-[0.22em] uppercase no-underline hover:border-primary hover:text-primary transition-all">
        Learn More
      </a>
    </div>
  </section>
);

export default CtaSection;
