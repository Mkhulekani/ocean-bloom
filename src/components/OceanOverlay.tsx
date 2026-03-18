import { useState } from "react";

const OceanOverlay = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* Ocean overlay on hero */}
      <div
        className={`fixed inset-0 z-[50] pointer-events-none overflow-hidden transition-opacity duration-[1800ms] ${active ? "opacity-100" : "opacity-0"}`}
        style={{
          background: active
            ? "linear-gradient(180deg, #001a33 0%, #002a55 15%, #003d7a 30%, #0055a0 50%, #006bb5 65%, #0085c8 80%, #00a0d4 100%)"
            : "transparent",
        }}
      >
        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-1/2 animate-[shimmer_4s_ease-in-out_infinite]"
          style={{ background: "linear-gradient(to bottom, rgba(0,30,80,0.6) 0%, rgba(0,60,120,0.3) 60%, transparent 100%)" }}
        />

        {/* Wave layers */}
        <div className="absolute bottom-0 -left-1/2 w-[300%] h-[60%] animate-[waveMove_5s_ease-in-out_infinite]"
          style={{
            background: "linear-gradient(to bottom, rgba(0,180,255,0.25) 0%, rgba(0,120,200,0.5) 50%, rgba(0,60,140,0.8) 100%)",
            borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
          }}
        />
        <div className="absolute bottom-0 -left-[30%] w-[280%] h-1/2 animate-[waveMove2_7s_ease-in-out_infinite]"
          style={{
            background: "linear-gradient(to bottom, rgba(0,160,240,0.2) 0%, rgba(0,100,180,0.45) 50%, rgba(0,50,120,0.7) 100%)",
            borderRadius: "45% 55% 0 0 / 25% 25% 0 0",
          }}
        />
        <div className="absolute bottom-0 -left-[40%] w-[320%] h-[38%] animate-[waveMove3_9s_ease-in-out_infinite]"
          style={{
            background: "linear-gradient(to bottom, rgba(100,210,255,0.15) 0%, rgba(0,140,210,0.4) 100%)",
            borderRadius: "40% 60% 0 0 / 20% 20% 0 0",
          }}
        />

        {/* Caustics */}
        <div className="absolute inset-0 animate-[causticsMove_6s_ease-in-out_infinite]"
          style={{
            background: `
              radial-gradient(ellipse 120px 40px at 20% 30%, rgba(255,255,255,0.04) 0%, transparent 70%),
              radial-gradient(ellipse 80px 30px at 70% 20%, rgba(255,255,255,0.05) 0%, transparent 70%),
              radial-gradient(ellipse 100px 35px at 45% 60%, rgba(255,255,255,0.03) 0%, transparent 70%),
              radial-gradient(ellipse 90px 25px at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)
            `,
          }}
        />

        {/* Bubbles */}
        {active && (
          <>
            <div className="absolute w-2 h-2 rounded-full bottom-0 left-[20%] animate-[bubbleRise_6s_linear_infinite]" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }} />
            <div className="absolute w-3 h-3 rounded-full bottom-0 left-[45%] animate-[bubbleRise_8s_linear_infinite_1s]" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }} />
            <div className="absolute w-1.5 h-1.5 rounded-full bottom-0 left-[70%] animate-[bubbleRise_5s_linear_infinite_2s]" style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }} />
            <div className="absolute w-2.5 h-2.5 rounded-full bottom-0 left-[85%] animate-[bubbleRise_7s_linear_infinite_3s]" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }} />
            <div className="absolute w-1 h-1 rounded-full bottom-0 left-[35%] animate-[bubbleRise_9s_linear_infinite_0.5s]" style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)" }} />
          </>
        )}

        {/* Light rays */}
        <div className="absolute top-0 left-[20%] w-[2px] h-[70%] animate-[rayMove_4s_ease-in-out_infinite]"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)" }}
        />
        <div className="absolute top-0 left-[50%] w-[2px] h-[70%] animate-[rayMove_5s_ease-in-out_infinite_1s]"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)" }}
        />
        <div className="absolute top-0 left-[75%] w-[2px] h-[70%] animate-[rayMove_6s_ease-in-out_infinite_2s]"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)" }}
        />
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setActive(!active)}
        className="fixed bottom-[30px] right-[30px] z-[200] w-[52px] h-[52px] rounded-full bg-primary border-none cursor-pointer flex items-center justify-center text-2xl shadow-[0_4px_20px_rgba(141,184,0,0.4)] hover:scale-110 hover:brightness-110 transition-all"
        title={active ? "Disable Ocean Mode" : "Enable Ocean Mode"}
      >
        🌊
        <span className="absolute w-[52px] h-[52px] rounded-full border-2 border-primary animate-[ripple_2s_infinite]" />
      </button>
    </>
  );
};

export default OceanOverlay;
