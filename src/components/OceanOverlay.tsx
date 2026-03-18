import { useState, useRef, useEffect } from "react";

const OceanOverlay = () => {
  const [active, setActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for ocean sound
    const audio = new Audio("https://cdn.freesound.org/previews/467/467539_5765668-lq.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const next = !active;
    setActive(next);
    if (next) {
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
    }
  };

  return (
    <>
      {/* Ocean overlay - only on hero (position absolute inside hero won't work since it's fixed, so we cover full screen but only show on home) */}
      <div
        className={`fixed inset-0 z-[50] overflow-hidden transition-opacity duration-[1800ms] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{
          background: "linear-gradient(180deg, #001a33 0%, #002a55 15%, #003d7a 30%, #0055a0 50%, #006bb5 65%, #0085c8 80%, #00a0d4 100%)",
        }}
      >
        {/* Top shimmer */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background: "linear-gradient(to bottom, rgba(0,30,80,0.6) 0%, rgba(0,60,120,0.3) 60%, transparent 100%)",
            animation: "shimmer 4s ease-in-out infinite",
          }}
        />

        {/* Wave layers */}
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

        {/* Caustics */}
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

        {/* Bubbles */}
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

        {/* Light rays */}
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

        {/* Foam sparkles near bottom */}
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

      {/* Toggle button */}
      <button
        onClick={toggle}
        className="fixed bottom-[30px] right-[30px] z-[200] w-[52px] h-[52px] rounded-full bg-primary border-none cursor-pointer flex items-center justify-center text-2xl shadow-[0_4px_20px_rgba(141,184,0,0.4)] hover:scale-110 hover:brightness-110 transition-all"
        title={active ? "Disable Ocean Mode" : "Enable Ocean Mode"}
      >
        🌊
        <span
          className="absolute w-[52px] h-[52px] rounded-full border-2 border-primary"
          style={{ animation: "ripple 2s infinite" }}
        />
      </button>
    </>
  );
};

export default OceanOverlay;
