"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = Date.now();
          const end = start + duration * 1000;
          const step = () => {
            const now = Date.now();
            const progress = Math.min((now - start) / (end - start), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = [
    { value: 4, suffix: "", label: "ans à la 1ère raquette" },
    { value: null, display: "U14", label: "Catégorie" },
    { value: 7, suffix: "+", label: "Titres européens" },
    { value: null, display: "🏅", label: "JO Juniors 2026" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/assets/photo_9.jpg"
          alt="Lenart Kadriu en action"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          quality={90}
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#050810]/20" />
      </motion.div>

      {/* Stadium light effects */}
      <div className="stadium-light w-[600px] h-[600px] bg-[var(--accent-lime)] top-[-200px] right-[-100px]" />
      <div className="stadium-light w-[400px] h-[400px] bg-blue-500 bottom-[100px] left-[-200px] opacity-[0.05]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full pb-12 sm:pb-20 px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08]">
              <span className="text-sm">🇨🇭</span>
              <span className="text-xs sm:text-sm font-500 text-[var(--text-secondary)]">
                Suisse
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
              <span className="text-xs sm:text-sm font-500 text-[var(--text-secondary)]">
                U14
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
              <span className="text-xs sm:text-sm font-500 text-[var(--text-secondary)]">
                Team Vaud
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] pulse-dot" />
            </div>
          </motion.div>

          {/* Name - massive typography */}
          <div className="mb-6 sm:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-[var(--font-heading)] text-[clamp(4rem,15vw,12rem)] font-800 leading-[0.85] tracking-[-0.03em] text-[var(--text-primary)]"
            >
              LENART
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-[var(--font-heading)] text-[clamp(4rem,15vw,12rem)] font-800 leading-[0.85] tracking-[-0.03em]"
              style={{
                WebkitTextStroke: "2px var(--accent-lime)",
                WebkitTextFillColor: "transparent",
              }}
            >
              KADRIU
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] font-400 mb-10 sm:mb-14 max-w-lg"
          >
            Jeune espoir suisse du tennis &middot; Né le 16 janvier 2012 à
            Vevey
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl px-4 py-4 sm:px-5 sm:py-5"
              >
                <div className="font-[var(--font-heading)] text-3xl sm:text-4xl font-800 text-[var(--accent-lime)] mb-1">
                  {stat.value !== null ? (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    stat.display
                  )}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] font-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-500">
          Scroll
        </span>
        <ChevronDown size={16} className="text-[var(--accent-lime)]" />
      </motion.div>
    </section>
  );
}
