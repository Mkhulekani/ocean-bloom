import { useState } from "react";
import { SectionLabel, SectionTitle, SectionDivider } from "./SectionParts";

const faqs = [
  { q: "How does on-site corporate massage work?", a: "We bring all necessary equipment — ergonomic massage chairs, tables, linens, and essential oils — directly to your office. Sessions typically run 15-30 minutes per employee, and we set up in any quiet space you designate." },
  { q: "What areas do you service?", a: "We operate primarily in the Gauteng region, including Johannesburg, Pretoria, and surrounding areas. For larger events, we can arrange national coverage across South Africa." },
  { q: "How many therapists will be on-site?", a: "The number of therapists depends on your group size and time constraints. We typically assign 1 therapist per 8-10 employees per hour to ensure everyone receives quality treatment." },
  { q: "What are your pricing packages?", a: "We offer flexible pricing based on frequency, number of employees, and service type. Contact us for a customized quote tailored to your organization's needs and budget." },
  { q: "Are your therapists certified?", a: "Absolutely. All our therapists hold nationally recognized certifications, carry professional liability insurance, and undergo continuous training in corporate wellness best practices." },
  { q: "Can we customize the wellness program?", a: "Yes! Every program is tailored to your company's specific needs. We work with your HR team to design a wellness strategy that aligns with your organizational goals." },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-[90px] px-6 md:px-[55px]">
      <SectionLabel>FAQ</SectionLabel>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <SectionDivider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mt-[50px]">
        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-primary/10">
              <button
                className="w-full bg-transparent border-none text-foreground text-left py-[22px] font-body text-[0.82rem] font-semibold tracking-[0.05em] cursor-pointer flex justify-between items-center gap-4 hover:text-primary transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {f.q}
                <span className={`text-primary text-xl font-light shrink-0 transition-transform ${openIdx === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${openIdx === i ? "max-h-[200px]" : "max-h-0"}`}>
                <p className="text-[0.78rem] leading-[1.8] text-muted-foreground pb-5">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-subtle border border-primary/15 p-10 self-start">
          <h3 className="font-display text-[1.6rem] font-light mb-4 text-foreground">Still Have Questions?</h3>
          <p className="text-[0.78rem] leading-[1.8] text-muted-foreground mb-7">
            Our team is ready to answer any questions about our corporate wellness solutions. Reach out and let's discuss how we can transform your workplace.
          </p>
          <a href="#booking" className="bg-primary text-primary-foreground px-[38px] py-[15px] font-bold text-[0.68rem] tracking-[0.22em] uppercase no-underline inline-block hover:brightness-110 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
