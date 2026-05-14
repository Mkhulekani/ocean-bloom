import React, { useState, useEffect, useCallback } from 'react';

/* DATA */
const PRODUCTS = [
  { id: 1, title: 'School Desks', description: 'Durable, ergonomically designed wooden desks built to withstand years of classroom use.', images: [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1562774053-701939374585?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=600&fit=crop',
  ]},
  { id: 2, title: 'Wooden Windows', description: 'Premium quality timber window frames crafted for insulation, security, and elegance.', images: [
    'https://images.unsplash.com/photo-1595521624992-48a59aef95b7?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1584450150056-4953d3ca6a7e?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506809112755-6fdb8af5303f?w=900&h=600&fit=crop',
  ]},
  { id: 3, title: 'Wooden Doors', description: 'Solid hardwood doors handcrafted for residential, commercial, and institutional projects.', images: [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop',
  ]},
  { id: 4, title: 'Custom Tables', description: 'Bespoke tables tailored to your dimensions, finish, and style — from boardroom to home.', images: [
    'https://images.unsplash.com/photo-1617098900591-3d9095b9ff66?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&h=600&fit=crop',
    'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=900&h=600&fit=crop',
  ]},
];

const GOVERNMENT_PROJECTS = [
  { title: 'Limpopo Department of Education', description: 'Supplied over 12,000 combination desks to schools across the province.' },
  { title: 'Gauteng Department of Education', description: 'Delivered more than 14,000 chairs for classroom and administrative use.' },
];
const CLIENT_TYPES = [
  { title: 'Local Businesses', description: 'Custom carpentry and workspace furniture solutions.' },
  { title: 'Office Renovations', description: 'Bespoke office fittings and premium joinery installations.' },
  { title: 'Residential Clients', description: 'Built-in cupboards, doors, tables, and luxury wood interiors.' },
];
const PROCESS_STEPS = [
  { step: '01', title: 'Choose Your Product', description: 'Select from our custom furniture and carpentry solutions.' },
  { step: '02', title: 'Customise the Design', description: 'Choose dimensions, finishes, and wood materials.' },
  { step: '03', title: 'Delivery & Installation', description: 'Professional delivery and installation across South Africa.' },
];

const palette = { bg: '#fff', bgSoft: '#f9f7f4', bgWarm: '#f5ede4', ink: '#2c1810', inkSoft: '#666', accent: '#8b5a3c', whatsapp: '#25D366' };

const grid = (min = 260): React.CSSProperties => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: '2rem' });
const container: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' };
const sectionTitle: React.CSSProperties = { color: palette.ink, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.2, margin: 0 };
const sectionSubtitle: React.CSSProperties = { color: palette.inkSoft, fontSize: '1.05rem' };
const cardTitle: React.CSSProperties = { color: palette.ink, fontSize: '1.25rem', marginBottom: '0.6rem', fontWeight: 600 };
const cardText: React.CSSProperties = { color: palette.inkSoft, lineHeight: 1.7, fontSize: '0.95rem' };

const Hero = () => (
  <section style={{ background: `linear-gradient(135deg, ${palette.bgWarm}, ${palette.bgSoft})`, padding: '7rem 0 5rem', textAlign: 'center' }}>
    <div style={container}>
      <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#fff', borderRadius: 999, color: palette.accent, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>MB Wood & Paper (Pty) Ltd</div>
      <h1 style={{ color: palette.ink, fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, margin: 0 }}>Crafted With Precision.<br/>Built For Excellence.</h1>
      <p style={{ ...sectionSubtitle, maxWidth: 720, margin: '1.5rem auto 2rem' }}>Premium carpentry, joinery, and custom furniture solutions trusted by government, schools, and businesses across South Africa.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#products" style={{ background: palette.accent, color: '#fff', padding: '0.9rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Explore Products</a>
        <a href="#contact" style={{ background: 'transparent', color: palette.ink, border: `2px solid ${palette.ink}`, padding: '0.9rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Get a Quote</a>
      </div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { num: '15+', label: 'Years Experience' },
    { num: '26K+', label: 'Units Delivered' },
    { num: '100+', label: 'Projects Completed' },
    { num: '9', label: 'Provinces Served' },
  ];
  return (
    <section style={{ background: palette.ink, padding: '3rem 0' }}>
      <div style={container}>
        <div style={grid(180)}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: palette.bgWarm }}>{s.num}</div>
              <div style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: typeof PRODUCTS[number] }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = product.images.length;
  const next = useCallback(() => setIndex(p => (p + 1) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <article
      style={{ background: palette.bg, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.08)', transition: 'transform 0.3s, box-shadow 0.3s' }}
      onMouseEnter={(e) => { setPaused(true); e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 14px 35px rgba(0,0,0,0.12)'; }}
      onMouseLeave={(e) => { setPaused(false); e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'; }}
    >
      <div style={{ height: 260, overflow: 'hidden', position: 'relative', background: palette.bgWarm }}>
        <div style={{ display: 'flex', width: `${total * 100}%`, transform: `translateX(-${index * (100 / total)}%)`, transition: 'transform 0.6s ease-in-out', height: '100%' }}>
          {product.images.map((img, i) => (
            <img key={i} src={img} alt={`${product.title} – view ${i + 1}`} loading="lazy" style={{ width: `${100 / total}%`, height: '100%', objectFit: 'cover', flexShrink: 0 }} />
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, background: 'rgba(0,0,0,0.45)', padding: '6px 12px', borderRadius: 20 }}>
          {product.images.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setIndex(i)} style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: i === index ? '#fff' : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>
      </div>
      <div style={{ padding: '1.75rem' }}>
        <h3 style={cardTitle}>{product.title}</h3>
        <p style={cardText}>{product.description}</p>
      </div>
    </article>
  );
};

const SectionHeader = ({ title, subtitle, maxWidth = 900 }: { title: React.ReactNode; subtitle?: string; maxWidth?: number }) => (
  <header style={{ textAlign: 'center' }}>
    <h2 style={sectionTitle}>{title}</h2>
    {subtitle && <p style={{ ...sectionSubtitle, maxWidth, margin: '1.5rem auto 0', lineHeight: 1.9 }}>{subtitle}</p>}
  </header>
);

const MBWoodHome = () => (
  <>
    <Hero />
    <Stats />

    <section id="products" style={{ padding: '6rem 0', background: palette.bgSoft }}>
      <div style={container}>
        <SectionHeader title={<>Our Products</>} subtitle="MB Wood & Paper (Pty) Ltd specialises in premium carpentry, joinery, custom furniture, school desks, office fittings, and interior wood solutions." maxWidth={950} />
        <div style={{ ...grid(260), marginTop: '4rem' }}>
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>

    <section style={{ padding: '6rem 0', background: palette.bg }}>
      <div style={container}>
        <SectionHeader title="Government & Educational Institutions" subtitle="We proudly supply furniture and carpentry solutions to government departments, schools, offices, and businesses across South Africa." />
        <div style={{ ...grid(320), marginTop: '4rem' }}>
          {GOVERNMENT_PROJECTS.map(p => (
            <div key={p.title} style={{ background: palette.bgSoft, padding: '2rem', borderRadius: 16, borderLeft: `4px solid ${palette.accent}` }}>
              <h3 style={cardTitle}>{p.title}</h3>
              <p style={cardText}>{p.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '5rem' }}>
          <SectionHeader title="Private Clients & Businesses" />
          <div style={{ ...grid(260), marginTop: '3rem' }}>
            {CLIENT_TYPES.map(c => (
              <div key={c.title} style={{ background: palette.bgWarm, padding: '2rem', borderRadius: 16 }}>
                <h3 style={cardTitle}>{c.title}</h3>
                <p style={cardText}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: '6rem 0', background: palette.bgSoft }}>
      <div style={container}>
        <SectionHeader title="How It Works" subtitle="A simple and professional process from consultation to delivery." maxWidth={800} />
        <div style={{ ...grid(260), marginTop: '4rem' }}>
          {PROCESS_STEPS.map(s => (
            <div key={s.step} style={{ background: palette.bg, padding: '2.25rem', borderRadius: 16, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: palette.accent, lineHeight: 1, marginBottom: '0.75rem' }}>{s.step}</div>
              <h3 style={{ ...cardTitle, fontSize: '1.2rem' }}>{s.title}</h3>
              <p style={cardText}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" style={{ padding: '6rem 0', background: palette.bg, textAlign: 'center' }}>
      <div style={container}>
        <SectionHeader title="Transform Your Space With MB Wood" subtitle="Premium carpentry, custom furniture, and joinery solutions designed for durability and elegance." maxWidth={700} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="https://wa.me/27712118916" style={{ background: palette.accent, color: '#fff', padding: '0.9rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Request A Quote</a>
        </div>
      </div>
    </section>

    <a href="https://wa.me/27712118916" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      style={{ position: 'fixed', bottom: 24, right: 24, background: palette.whatsapp, color: '#fff', width: 60, height: 60, borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 28, textDecoration: 'none', boxShadow: '0 6px 20px rgba(0,0,0,0.25)', zIndex: 999 }}>
      💬
    </a>
  </>
);

export default MBWoodHome;
