"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  mp4: string;
  webm: string;
  poster: string;
};

/** Boucle muette du hero : lancée après montage, jamais si l'utilisateur préfère moins d'animations. */
export function HeroVideo({ mp4, webm, poster }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.muted = true;
    const playing = video.play();
    if (playing) playing.catch(() => undefined);
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video absolute inset-0 h-full w-full object-cover"
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
