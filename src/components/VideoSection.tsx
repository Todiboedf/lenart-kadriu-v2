"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

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
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
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
    <section id={id} className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">{label}</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-3 tracking-[-0.02em]">
            {title}{" "}
            <span className="text-[var(--accent-lime)]">{titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-10 max-w-2xl">
            {subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden group">
            {/* Video */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/70 via-transparent to-[#050810]/20 pointer-events-none" />
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div className="flex items-center gap-3">
                {showPlayPause && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMute}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label={isMuted ? "Activer le son" : "Couper le son"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </motion.button>
              </div>

              {/* Accent corner */}
              <div className="hidden sm:block">
                <div className="w-3 h-3 border-b-2 border-r-2 border-[var(--accent-lime)]/40" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
