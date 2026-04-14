"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function PassionSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="stadium-light w-[500px] h-[500px] bg-[var(--accent-lime)] bottom-0 right-[-200px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="section-label">Motivation</span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-16 tracking-[-0.02em]">
            Une Passion{" "}
            <span className="text-[var(--accent-lime)]">
              Depuis Toujours
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/assets/photo_petit.jpg"
                alt="Lenart Kadriu — Premiers pas dans le tennis"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/50 to-transparent" />
            </div>
          </AnimatedSection>

          {/* Quote */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Big quotation mark */}
              <div className="absolute -top-6 -left-2 font-[var(--font-heading)] text-[120px] leading-none text-[var(--accent-lime)]/10 select-none pointer-events-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 pl-6 border-l-2 border-[var(--accent-lime)]/30">
                <p className="text-lg sm:text-xl text-[var(--text-primary)] leading-relaxed font-400 italic">
                  Depuis l&apos;âge de 4 ans, Lenart Kadriu est animé par une
                  véritable passion pour le tennis. Très tôt, il a pris la
                  raquette en main avec une détermination rare pour son âge.
                  Chaque jour, il travaille avec rigueur et dévouement afin de
                  perfectionner son jeu, dans le seul but de devenir le
                  meilleur.
                </p>
              </blockquote>

              <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
                <span className="text-xs sm:text-sm font-500 text-[var(--text-secondary)]">
                  Depuis 2016 &middot; Dédié au plus haut niveau
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
