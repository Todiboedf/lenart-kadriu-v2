"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewInProps } from "@/lib/motion";
import { GoldDivider } from "./ui/GoldDivider";

export default function PassionSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-lk">
        <motion.div
          {...viewInProps}
          variants={fadeUp}
          className="mb-14 flex flex-col items-start gap-4"
        >
          <span className="eyebrow">Motivation</span>
          <h2 className="font-display text-4xl font-400 leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
            Une passion <em className="font-400 text-gold">depuis toujours</em>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            {...viewInProps}
            variants={fadeUp}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/assets/photo_1.jpg"
              alt="Lenart Kadriu : Les premiers pas dans le tennis"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            {...viewInProps}
            variants={fadeUp}
            className="flex flex-col gap-8"
          >
            <GoldDivider align="left" width="sm" />
            <blockquote className="font-display text-2xl font-300 italic leading-[1.35] text-bone sm:text-3xl">
              « Depuis l&apos;âge de 4 ans, Lenart est animé par une véritable
              passion pour le tennis. Chaque jour, il travaille avec rigueur et
              dévouement pour perfectionner son jeu : avec un seul objectif :
              devenir le meilleur. »
            </blockquote>
            <p className="text-sm tracking-[0.2em] uppercase text-pearl/80">
              Depuis 2016 · Dédié au plus haut niveau
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
