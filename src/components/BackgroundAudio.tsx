import { useEffect, useRef } from "react";
import PlayStationIntro from "../audio/PlayStationIntro.mp3";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Delay para garantir que o áudio está pronto
    const timer = setTimeout(() => {
      audio.volume = 0.25; // 25% volume
      audio.play().catch((error) => {
        console.log("Autoplay bloqueado. Clique na página para tocar.", error);
        
        // Se falhar, tocar ao primeiro clique
        const handleUserInteraction = () => {
          audio.volume = 0.25;
          audio.play().catch(e => console.log("Erro ao tocar áudio:", e));
          document.removeEventListener("click", handleUserInteraction);
          document.removeEventListener("touchstart", handleUserInteraction);
        };

        document.addEventListener("click", handleUserInteraction);
        document.addEventListener("touchstart", handleUserInteraction);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={PlayStationIntro}
      style={{ display: "none" }}
    />
  );
}
