import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  oceanActive?: boolean;
}

const HeroSection = ({ oceanActive = false }: HeroSectionProps) => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(1);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    const handleV1End = () => {
      setActiveVideo(2);
      v2.currentTime = 0;
      v2.play().catch(() => {});
    };
    const handleV2End = () => {
      setActiveVideo(1);
      v1.currentTime = 0;
      v1.play().catch(() => {});
    };

    v1.addEventListener("ended", handleV1End);
    v2.addEventListener("ended", handleV2End);

    // Start first video
    v1.play().catch(() => {});

    return () => {
      v1.removeEventListener("ended", handleV1End);
      v2.removeEventListener("ended", handleV2End);
    };
  }, []);

  return (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Video backgrounds */}
    <video
      ref={video1Ref}
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeVideo === 1 ? "opacity-100" : "opacity-0"}`}
      src="/videos/bg1.mp4"
    />
    <video
      ref={video2Ref}
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeVideo === 2 ? "opacity-100" : "opacity-0"}`}
      src="/videos/bg2.mp4"
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/50 z-[1]" />
    <div className="absolute inset-0 grid-overlay pointer-events-none z-[2]" />
    <div className="absolute w-[280px] h-[280px] bg-primary hex-clip opacity-5 top-[8%] -right-[60px]" />
    <div className="absolute w-[160px] h-[160px] bg-primary hex-clip opacity-5 bottom-[18%] -left-[30px]" />

    {/* Ocean overlay - only covers hero */}
    <div
      className={`absolute inset-0 z-[5] overflow-hidden transition-opacity duration-[1800ms] ${oceanActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{
        background: "linear-gradient(180deg, #001a33 0%, #002a55 15%, #003d7a 30%, #0055a0 50%, #006bb5 65%, #0085c8 80%, #00a0d4 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1/2"
        style={{
          background: "linear-gradient(to bottom, rgba(0,30,80,0.6) 0%, rgba(0,60,120,0.3) 60%, transparent 100%)",
          animation: "shimmer 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 -left-1/2 w-[300%] h-[60%]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,180,255,0.25) 0%, rgba(0,120,200,0.5) 50%, rgba(0,60,140,0.8) 100%)",
          borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
          animation: "waveMove 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 -left-[30%] w-[280%] h-1/2"
        style={{
          background: "linear-gradient(to bottom, rgba(0,160,240,0.2) 0%, rgba(0,100,180,0.45) 50%, rgba(0,50,120,0.7) 100%)",
          borderRadius: "45% 55% 0 0 / 25% 25% 0 0",
          animation: "waveMove2 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 -left-[40%] w-[320%] h-[38%]"
        style={{
          background: "linear-gradient(to bottom, rgba(100,210,255,0.15) 0%, rgba(0,140,210,0.4) 100%)",
          borderRadius: "40% 60% 0 0 / 20% 20% 0 0",
          animation: "waveMove3 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120px 40px at 20% 30%, rgba(255,255,255,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 80px 30px at 70% 20%, rgba(255,255,255,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 100px 35px at 45% 60%, rgba(255,255,255,0.03) 0%, transparent 70%),
            radial-gradient(ellipse 90px 25px at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)
          `,
          animation: "causticsMove 6s ease-in-out infinite",
        }}
      />
      {[
        { size: 8, left: "20%", dur: "6s", delay: "0s" },
        { size: 12, left: "45%", dur: "8s", delay: "1s" },
        { size: 6, left: "70%", dur: "5s", delay: "2s" },
        { size: 10, left: "85%", dur: "7s", delay: "3s" },
        { size: 4, left: "35%", dur: "9s", delay: "0.5s" },
        { size: 14, left: "55%", dur: "10s", delay: "1.5s" },
        { size: 5, left: "10%", dur: "6.5s", delay: "2.5s" },
        { size: 9, left: "90%", dur: "7.5s", delay: "0.8s" },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: 0,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            animation: `bubbleRise ${b.dur} linear infinite ${b.delay}`,
          }}
        />
      ))}
      {[
        { left: "15%", dur: "4s", delay: "0s" },
        { left: "35%", dur: "5s", delay: "1s" },
        { left: "55%", dur: "6s", delay: "2s" },
        { left: "75%", dur: "4.5s", delay: "0.5s" },
        { left: "90%", dur: "5.5s", delay: "1.5s" },
      ].map((r, i) => (
        <div
          key={i}
          className="absolute top-0 w-[2px] h-[70%]"
          style={{
            left: r.left,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
            animation: `rayMove ${r.dur} ease-in-out infinite ${r.delay}`,
          }}
        />
      ))}
      {[
        { left: "25%", bottom: "35%", size: 3, dur: "3s", delay: "0s" },
        { left: "60%", bottom: "40%", size: 2, dur: "2.5s", delay: "0.5s" },
        { left: "80%", bottom: "30%", size: 4, dur: "3.5s", delay: "1s" },
        { left: "40%", bottom: "45%", size: 2, dur: "2s", delay: "1.5s" },
      ].map((f, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: f.left,
            bottom: f.bottom,
            width: f.size,
            height: f.size,
            background: "rgba(255,255,255,0.6)",
            animation: `foamFloat ${f.dur} linear infinite ${f.delay}`,
          }}
        />
      ))}
    </div>

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
};

export default HeroSection;
