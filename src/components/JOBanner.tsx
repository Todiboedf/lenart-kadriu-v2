"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function JOBanner() {
  return (
    <section className="relative py-6 overflow-hidden">
      {/* Accent glow behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-lime)]/[0.03] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--border-accent)] bg-gradient-to-r from-[var(--bg-card)] via-[var(--bg-card-2)] to-[var(--bg-card)]"
          >
            {/* Diagonal accent stripe */}
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[var(--accent-lime)]/[0.05] to-transparent" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20">
                  <span className="text-2xl">🏅</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-600 tracking-[0.15em] uppercase text-[var(--accent-lime)] px-2 py-0.5 rounded-full bg-[var(--accent-lime)]/10">
                      Événement majeur
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-700 text-[var(--text-primary)]">
                    Jeux Olympiques Juniors 2026
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Hualien, Taïwan &middot; 29 juillet – 8 août 2026 &middot;
                    Représentant officiel de la Ville de Vevey
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-4xl">🇹🇼</span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
