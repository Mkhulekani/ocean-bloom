import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const BookingSection = () => (
  <section id="booking" className="bg-card py-[90px] px-6 md:px-[55px]">
    <SectionLabel>Book a Session</SectionLabel>
    <SectionTitle>Get in Touch</SectionTitle>
    <SectionDivider />
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[70px] mt-[50px] items-start">
      <div>
        <h3 className="font-display text-[1.8rem] font-light mb-5 text-foreground">Let's Discuss Your Wellness Needs</h3>
        <p className="text-[0.82rem] leading-[1.9] text-muted-foreground mb-7">
          Whether you're looking for regular on-site massage, a one-time wellness event, or a comprehensive corporate wellness program, we're here to help.
        </p>
        <div className="flex flex-col gap-[18px]">
          {[
            { icon: "📍", label: "Location", value: "Johannesburg, South Africa" },
            { icon: "📞", label: "Phone", value: "+27 (0) 11 234 5678" },
            { icon: "✉️", label: "Email", value: "info@theblackliquid.co.za" },
            { icon: "🕐", label: "Hours", value: "Mon–Fri: 7:00 AM – 6:00 PM" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-[42px] h-[42px] bg-primary/10 border border-primary/20 flex items-center justify-center text-lg shrink-0">{c.icon}</div>
              <div>
                <strong className="block text-[0.7rem] font-bold tracking-[0.15em] uppercase text-primary mb-1">{c.label}</strong>
                <span className="text-[0.8rem] text-muted-foreground">{c.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-green-subtle border border-primary/10 p-10">
        <h3 className="font-display text-[1.6rem] font-light mb-7 text-foreground">Request a Quote</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-[7px]">
              <label className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary">First Name</label>
              <input className="bg-foreground/5 border border-primary/20 text-foreground px-4 py-3 font-body text-[0.78rem] outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary">Last Name</label>
              <input className="bg-foreground/5 border border-primary/20 text-foreground px-4 py-3 font-body text-[0.78rem] outline-none focus:border-primary transition-colors" />
            </div>
          </div>
          <div className="flex flex-col gap-[7px] mb-4">
            <label className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary">Company</label>
            <input className="bg-foreground/5 border border-primary/20 text-foreground px-4 py-3 font-body text-[0.78rem] outline-none focus:border-primary transition-colors" />
          </div>
          <div className="flex flex-col gap-[7px] mb-4">
            <label className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary">Email</label>
            <input type="email" className="bg-foreground/5 border border-primary/20 text-foreground px-4 py-3 font-body text-[0.78rem] outline-none focus:border-primary transition-colors" />
          </div>
          <div className="flex flex-col gap-[7px] mb-4">
            <label className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary">Service Interest</label>
            <select className="bg-foreground/5 border border-primary/20 text-foreground px-4 py-3 font-body text-[0.78rem] outline-none focus:border-primary transition-colors">
              <option>Corporate Chair Massage</option>
              <option>Reflexology</option>
              <option>Wellness Programs</option>
              <option>Wellness Events</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-[7px] mb-4">
            <label className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-primary">Message</label>
            <textarea rows={4} className="bg-foreground/5 border border-primary/20 text-foreground px-4 py-3 font-body text-[0.78rem] outline-none focus:border-primary transition-colors resize-y" />
          </div>
          <button type="submit" className="bg-primary text-primary-foreground border-none px-10 py-4 font-body font-bold text-[0.7rem] tracking-[0.22em] uppercase cursor-pointer w-full mt-2 hover:brightness-110 hover:-translate-y-0.5 transition-all">
            Send Request
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default BookingSection;
