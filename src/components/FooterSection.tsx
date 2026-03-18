const FooterSection = () => (
  <footer className="bg-card py-16 px-6 md:px-[55px] border-t border-primary/10">
    <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-[55px] mb-[55px]">
      <div>
        <div className="font-display text-xl font-semibold tracking-wider mb-[18px] text-foreground">THE BLACK LIQUID</div>
        <p className="text-[0.78rem] leading-[1.8] text-muted-foreground max-w-[270px]">
          South Africa's premier corporate wellness provider, delivering transformative on-site massage and holistic health solutions.
        </p>
      </div>
      <div>
        <h4 className="text-[0.62rem] font-bold tracking-[0.24em] uppercase text-primary mb-[18px]">Services</h4>
        <ul className="list-none space-y-2">
          {["Chair Massage", "Reflexology", "Wellness Programs", "Event Wellness"].map((s) => (
            <li key={s}><a href="#services" className="text-[0.78rem] text-muted-foreground no-underline hover:text-foreground transition-colors">{s}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-[0.62rem] font-bold tracking-[0.24em] uppercase text-primary mb-[18px]">Company</h4>
        <ul className="list-none space-y-2">
          {["About Us", "Our Process", "Blog", "Careers"].map((s) => (
            <li key={s}><a href="#about" className="text-[0.78rem] text-muted-foreground no-underline hover:text-foreground transition-colors">{s}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-[0.62rem] font-bold tracking-[0.24em] uppercase text-primary mb-[18px]">Legal</h4>
        <ul className="list-none space-y-2">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((s) => (
            <li key={s}><a href="#" className="text-[0.78rem] text-muted-foreground no-underline hover:text-foreground transition-colors">{s}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-foreground/5 pt-7 flex justify-between items-center flex-wrap gap-4">
      <div className="flex gap-3">
        {["FB", "IG", "LI", "TW"].map((s) => (
          <a key={s} href="#" className="w-[38px] h-[38px] border border-primary/25 flex items-center justify-center text-muted-foreground no-underline text-[0.75rem] font-bold hover:bg-primary hover:border-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all">
            {s}
          </a>
        ))}
      </div>
      <p className="text-[0.68rem] text-muted-foreground tracking-[0.09em]">
        © 2024 The Black Liquid (PTY) LTD. All rights reserved.
      </p>
      <p className="font-display italic text-[0.95rem] text-primary">
        Where Wellness Meets the Workplace
      </p>
    </div>
  </footer>
);

export default FooterSection;
