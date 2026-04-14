"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { fadeUp, viewInProps } from "@/lib/motion";

interface VideoSectionProps {
  id?: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  videoSrc: string;
  showPlayPause?: boolean;
}

export default function VideoSection({
  id,
  label,
  title,
  titleAccent,
  subtitle,
  videoSrc,
  showPlayPause = true,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id={id} className="relative border-t border-border py-24 sm:py-32">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-12 flex flex-col gap-4"
        >
          <span className="eyebrow">{label}</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            {title} <em className="font-400 text-gold">{titleAccent}</em>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-pearl sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="relative overflow-hidden border border-border"
        >
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
            <div className="flex items-center gap-3">
              {showPlayPause && (
                <button
                  onClick={togglePlay}
                  className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-bone backdrop-blur-md transition-colors hover:border-gold/50 hover:text-gold"
                  aria-label={isPlaying ? "Pause" : "Lecture"}
                >
                  {isPlaying ? <Pause size={16} strokeWidth={1.5} /> : <Play size={16} strokeWidth={1.5} />}
                </button>
              )}
              <button
                onClick={toggleMute}
                className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-bone backdrop-blur-md transition-colors hover:border-gold/50 hover:text-gold"
                aria-label={isMuted ? "Activer le son" : "Couper le son"}
              >
                {isMuted ? <VolumeX size={16} strokeWidth={1.5} /> : <Volume2 size={16} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
