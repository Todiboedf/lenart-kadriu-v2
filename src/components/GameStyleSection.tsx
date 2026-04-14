"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Zap, Brain, Target } from "lucide-react";

const qualities = [
  {
    icon: <Zap className="w-5 h-5" />,
    emoji: "⚡",
    title: "Offensif",
    desc: "Initiative, intensité, pression constante",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    emoji: "🧠",
    title: "Tactique",
    desc: "Intelligence de jeu, lecture des adversaires",
  },
  {
    icon: <Target className="w-5 h-5" />,
    emoji: "🎾",
    title: "Polyvalent",
    desc: "Compétitif sur toutes les surfaces",
  },
];

export default function GameStyleSection() {
  return (
    <section id="jeu" className="relative py-24 sm:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <AnimatedSection>
              <span className="section-label">Style de jeu</span>
              <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-10 tracking-[-0.02em]">
                Un Jeu{" "}
                <span className="text-[var(--accent-lime)]">Offensif</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5 mb-12">
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Lenart possède un style de jeu résolument offensif, fondé
                  sur une intensité constante et une pression permanente sur
                  l&apos;adversaire. Il ne laisse aucun répit à ses opposants,
                  les poussant à la faute par son rythme soutenu et son
                  agressivité maîtrisée.
                </p>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Sa grande force réside dans sa capacité à s&apos;adapter à
                  toutes les surfaces — dur, terre battue ou gazon. Son
                  intelligence tactique lui permet de s&apos;ajuster à tout
                  type d&apos;adversaire, et son calme dans les moments
                  décisifs fait de lui un compétiteur redoutable à son niveau.
                </p>
              </div>
            </AnimatedSection>

            {/* Quality cards */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {qualities.map((q, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      x: 8,
                      borderColor: "rgba(200,238,68,0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20 flex items-center justify-center text-[var(--accent-lime)]">
                      {q.icon}
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-lg font-700 text-[var(--text-primary)] mb-0.5">
                        {q.emoji} {q.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {q.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Action photo */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
                <Image
                  src="/assets/photo_4.jpg"
                  alt="Lenart Kadriu en match"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/60 via-transparent to-transparent" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[var(--accent-lime)]/20 rounded-bl-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[var(--accent-lime)]/20 rounded-tr-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
