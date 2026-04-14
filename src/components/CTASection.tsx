"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      {/* Background glow */}
      <div className="stadium-light w-[800px] h-[800px] bg-[var(--accent-lime)] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="section-label justify-center">
            Devenir Partenaire
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-800 mt-4 mb-6 tracking-[-0.02em]">
            Soutenez{" "}
            <span className="text-[var(--accent-lime)]">Lenart</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-12">
            Vous souhaitez soutenir un jeune talent du tennis suisse
            sélectionné aux Jeux Olympiques Juniors 2026 ? Rejoignez les
            partenaires de Lenart Kadriu et associez votre image à un futur
            champion. Les partenaires bénéficient d&apos;une visibilité sur
            les tournois nationaux, européens, et lors des Jeux à Hualien,
            Taïwan.
          </p>
        </AnimatedSection>

        {/* Contact info */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:ghaasmanagement@gmail.com"
              className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
            >
              <Mail size={16} />
              ghaasmanagement@gmail.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <a
              href="tel:+41795667410"
              className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
            >
              <Phone size={16} />
              +41 79 566 74 10
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <motion.a
            href="mailto:ghaasmanagement@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(200,238,68,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--accent-lime)] text-[var(--bg-deep)] font-[var(--font-heading)] text-lg font-700 rounded-full transition-all duration-300 hover:brightness-110"
          >
            Devenir partenaire
            <ArrowUpRight size={20} />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
