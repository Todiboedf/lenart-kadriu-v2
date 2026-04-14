"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/assets/photo_9.jpg"
          alt="Lenart Kadriu en action"
          fill
          priority
          quality={92}
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-end pb-20 pt-36 sm:pb-24 sm:pt-40"
      >
        <div className="container-lk flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-gold"
          >
            <span className="block h-px w-8 bg-gold/70" />
            <span>Tennis · Suisse · U14</span>
          </motion.div>

          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(3.5rem,13vw,11rem)] font-300 leading-[0.9] tracking-[-0.02em] text-bone"
            >
              Lenart
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(3.5rem,13vw,11rem)] font-300 italic leading-[0.9] tracking-[-0.02em] text-gold"
            >
              Kadriu
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9 }}
            className="max-w-2xl text-base leading-relaxed text-bone/80 sm:text-lg"
          >
            Jeune espoir suisse du tennis, qualifié aux Jeux Olympiques de la
            Jeunesse de Hualien 2026. Représentant officiel de la Ville de
            Vevey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/sponsoring"
              className="group inline-flex items-center justify-center gap-2 border border-gold bg-gold px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-black transition-all duration-200 hover:border-gold-dark hover:bg-gold-dark hover:-translate-y-px"
            >
              <span>Dossier sponsors</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="#joueur"
              className="group inline-flex items-center justify-center gap-2 border border-gold/50 bg-transparent px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-bone transition-all duration-200 hover:border-gold hover:bg-gold/5"
            >
              <span>Découvrir le parcours</span>
              <ArrowDown
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-500 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-bone/60">
          Scroller
        </span>
        <span className="block h-px w-10 bg-bone/40" />
      </motion.div>
    </section>
  );
}
