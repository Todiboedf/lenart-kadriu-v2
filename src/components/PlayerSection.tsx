"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "4", label: "Ans à la première raquette" },
  { value: "U14", label: "Catégorie actuelle" },
  { value: "7+", label: "Titres européens remportés" },
  { value: "🏅", label: "JO Juniors · Taiwan 2026" },
];

const tags = [
  "🇨🇭 Swiss Tennis",
  "Team Vaud",
  "Vevey",
  "Français · Anglais",
  "HEAD Tennis",
];

export default function PlayerSection() {
  return (
    <section id="joueur" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="stadium-light w-[500px] h-[500px] bg-[var(--accent-lime)] top-[10%] right-[-200px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Le Joueur</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-16 tracking-[-0.02em]">
            Profil d&apos;Athlète
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Portrait + Team photo */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="relative group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/photo_identite.jpg"
                    alt="Lenart Kadriu — Tennisman Suisse U14"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-[var(--text-secondary)] font-500">
                      Lenart Kadriu &middot; Tennisman Suisse U14
                    </p>
                  </div>
                </div>
                {/* Accent corner */}
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[var(--accent-lime)]/30 rounded-tr-2xl" />
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
                <Image
                  src="/assets/photo_vaud.jpg"
                  alt="Team Vaud"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/60 to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Bio + Stats */}
          <div>
            <AnimatedSection delay={0.2}>
              <div className="space-y-5 mb-10">
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Lenart Kadriu est un jeune espoir suisse du tennis. Classé
                  parmi les meilleurs joueurs nationaux de sa génération, il
                  incarne une relève prometteuse pour le tennis suisse et
                  brille régulièrement sur la scène européenne. Né le 16
                  janvier 2012 à Vevey, il pratique le tennis à haut niveau
                  depuis l&apos;âge de 4 ans.
                </p>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Membre du Team Vaud, cadre vaudois et suprarégional de Swiss
                  Tennis, et du Tennis Nestlé Club de Mont-Pèlerin, Lenart est
                  reconnu pour sa capacité à imposer son rythme, son calme
                  dans les moments clés et son intelligence tactique
                  remarquable pour son âge. Son ambition : représenter la
                  Suisse aux plus grands rendez-vous internationaux.
                </p>
              </div>
            </AnimatedSection>

            {/* Tags */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-2 mb-10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-500 rounded-full bg-white/[0.04] border border-white/[0.06] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Stats grid */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, borderColor: "rgba(200,238,68,0.2)" }}
                    transition={{ duration: 0.3 }}
                    className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all"
                  >
                    <div className="font-[var(--font-heading)] text-2xl sm:text-3xl font-800 text-[var(--accent-lime)] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[var(--text-secondary)]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
