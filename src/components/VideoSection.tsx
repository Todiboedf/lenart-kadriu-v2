"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import type { Photo } from "@/content/photos";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { buttonClasses } from "./ui/Button";

type VideoSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  src: string;
  poster: Photo;
  playLabel: string;
};

export default function VideoSection({
  id,
  eyebrow,
  title,
  description,
  src,
  poster,
  playLabel,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.muted = false;
    const promise = video.play();
    if (promise) promise.catch(() => setPlaying(false));
  };

  return (
    <section id={id} className="section">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} intro={description} />
        <div className="relative mt-12 aspect-video overflow-hidden bg-bg-elev">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={src}
            poster={poster.src}
            preload="none"
            playsInline
            controls={playing}
            onEnded={() => setPlaying(false)}
          />
          {playing ? null : (
            <button
              type="button"
              onClick={start}
              aria-label={playLabel}
              className="absolute inset-0 flex items-end p-5 text-left sm:p-8"
            >
              <span className={buttonClasses("primary")}>
                <Play size={16} strokeWidth={1.5} aria-hidden="true" />
                {playLabel}
              </span>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
