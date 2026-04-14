"use client";

import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left: Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-[var(--text-muted)]">
              <span>
                &copy; 2026 Lenart Kadriu — Géré par{" "}
                <a
                  href="https://www.ghaasmanagement.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
                >
                  GHaas Management
                </a>
              </span>
            </div>

            {/* Center: monogram */}
            <div className="font-[var(--font-heading)] text-4xl font-800 tracking-[-0.05em] text-white/[0.04] select-none">
              LK
            </div>

            {/* Right: email */}
            <a
              href="mailto:ghaasmanagement@gmail.com"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-lime)] transition-colors"
            >
              ghaasmanagement@gmail.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
