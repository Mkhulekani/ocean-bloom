import { useRef, useEffect } from "react";

interface OceanOverlayProps {
  active: boolean;
  onToggle: () => void;
}

const OceanOverlay = ({ active, onToggle }: OceanOverlayProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (active) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [active]);

  const unlockAudio = () => {
    const audio = audioRef.current;
    if (!audio || unlockedRef.current) return;
    audio.muted = true;
    audio.play().then(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
      unlockedRef.current = true;
    }).catch(() => { audio.muted = false; });
  };

  return (
    <>
      <audio ref={audioRef} src="/ocean.wav" preload="auto" loop className="hidden" />
      <button
        onPointerDown={unlockAudio}
        onClick={onToggle}
        aria-pressed={active}
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
