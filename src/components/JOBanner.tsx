"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { fadeUp, viewInProps } from "@/lib/motion";
import JOJCountdown from "./JOJCountdown";

export default function JOBanner() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_auto] md:items-end md:gap-12"
        >
          <div className="flex flex-col gap-5">
            <span className="eyebrow flex items-center gap-2">
              <MapPin size={12} strokeWidth={1.5} />
              Événement majeur
            </span>
            <h2 className="font-display text-3xl font-400 leading-[1.05] tracking-tight text-bone sm:text-4xl md:text-5xl">
              Jeux Olympiques de la Jeunesse&nbsp;— Hualien&nbsp;2026
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-pearl sm:text-base">
              Lenart représente officiellement la Ville de Vevey du 29 juillet
              au 8 août 2026 à Hualien, Taïwan.
            </p>
          </div>
          <JOJCountdown align="end" size="md" />
        </motion.div>
      </div>
    </section>
  );
}
