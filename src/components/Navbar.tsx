import { useState } from "react";
import logoSlogan from "@/assets/logo-slogan.jpeg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Corporate", href: "#corporate" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#booking" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-[50px] py-[18px] flex justify-between items-center bg-background/95 backdrop-blur-sm border-b border-primary/10">
        <div className="flex items-center gap-3">
          <img src={logoSlogan} alt="The Black Liquid (PTY) LTD" className="h-10 w-auto object-contain rounded" />
          <span className="font-display text-xl font-semibold tracking-wider text-foreground">THE BLACK LIQUID</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-muted-foreground text-[0.7rem] font-medium tracking-[0.18em] uppercase no-underline hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer z-[101] p-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-[26px] h-[2px] bg-primary transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-[26px] h-[2px] bg-primary transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[26px] h-[2px] bg-primary transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="fixed top-[78px] left-0 right-0 bg-card/98 backdrop-blur-lg border-b border-primary/15 z-[99] flex flex-col p-5 pb-7 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground text-[0.78rem] font-medium tracking-[0.18em] uppercase py-3.5 border-b border-primary/10 no-underline hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground py-3 px-5 font-bold text-center mt-3.5 no-underline tracking-[0.18em] uppercase text-[0.78rem]"
          >
            Book Now
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
