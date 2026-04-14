"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Trophy, Target, Globe, Award } from "lucide-react";

const results = [
  {
    flag: "🇨🇭",
    country: "Suisse",
    items: [
      "4× Champion Vaudois",
      "Vainqueur TC Gland 2025 (Road to Montreux · MS)",
      "Plusieurs victoires nationales",
    ],
  },
  {
    flag: "🌍",
    country: "Europe Simple",
    items: [
      "Vainqueur Split Croatie",
      "Finaliste Tirana Albanie",
      "Finaliste Shkodra Albanie",
      "Finaliste Poreč Croatie",
      "3ème Poreč Croatie",
      "4 victoires cat.1 Tournoi Europe France",
    ],
  },
  {
    flag: "🤝",
    country: "Double",
    items: [
      "Finaliste Podgorica Monténégro",
      "3ème Tirana Albanie",
      "Plusieurs victoires double Tournoi Europe France",
    ],
  },
];

const objectives = [
  {
    icon: <Target className="w-5 h-5" />,
    emoji: "🎯",
    title: "Court terme 2025–2026",
    desc: "Intégrer ITF Junior, renforcer présence tournois européens, développement physique et mental complet",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    emoji: "🌍",
    title: "Moyen terme 2027–2030",
    desc: "Leader suisse de sa génération, représenter la Suisse en compétitions internationales majeures",
  },
  {
    icon: <Award className="w-5 h-5" />,
    emoji: "🏆",
    title: "Long terme",
    desc: "Circuit ATP avec encadrement professionnel complet. Faire rayonner la Suisse sur la scène mondiale",
  },
];

export default function PalmaresSection() {
  return (
    <section id="palmares" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      {/* Background glow */}
      <div className="stadium-light w-[600px] h-[600px] bg-[var(--accent-lime)] top-[20%] left-[-300px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Achievements</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-16 tracking-[-0.02em]">
            Palmarès
          </h2>
        </AnimatedSection>

        {/* Trophy photo */}
        <AnimatedSection delay={0.1}>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16 group">
            <Image
              src="/assets/photo_trophy.jpg"
              alt="TC Gland 2025 — Vainqueur"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-[var(--accent-lime)]" />
                <span className="text-xs font-600 tracking-[0.1em] uppercase text-[var(--accent-lime)]">
                  Victoire
                </span>
              </div>
              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-700 text-[var(--text-primary)]">
                TC Gland 2025
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1">
                Vainqueur — Road to Montreux · MS
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Results by category */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {results.map((cat, i) => (
            <AnimatedSection key={i} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.flag}</span>
                  <h3 className="font-[var(--font-heading)] text-lg font-700 text-[var(--text-primary)]">
                    {cat.country}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Objectives */}
        <AnimatedSection>
          <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-700 mb-8">
            Objectifs
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "rgba(200,238,68,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20 flex items-center justify-center text-[var(--accent-lime)] mb-4">
                  {obj.icon}
                </div>
                <h4 className="font-[var(--font-heading)] text-lg font-700 text-[var(--text-primary)] mb-2">
                  {obj.emoji} {obj.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {obj.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
