"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { label: string; href: string; kind: "hash" | "page" }[] = [
  { label: "Profil", href: "#joueur", kind: "hash" },
  { label: "Son Jeu", href: "#jeu", kind: "hash" },
  { label: "Palmarès", href: "#palmares", kind: "hash" },
  { label: "Galerie", href: "#galerie", kind: "hash" },
  { label: "Sponsoring", href: "/sponsoring", kind: "page" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (!isHome) return;
      const sections = navLinks
        .filter((l) => l.kind === "hash")
        .map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const hashHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleHashClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) return; // let the <Link> do page nav + hash scroll
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.kind === "page") return pathname === link.href;
    return isHome && activeSection === link.href.replace("#", "");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[#050810]/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-3"
              aria-label="Accueil Lenart Kadriu"
            >
              <span className="font-[var(--font-heading)] text-2xl font-800 tracking-tight text-[var(--text-primary)]">
                L
                <span className="text-[var(--accent-lime)]">K</span>
              </span>
              <span className="hidden sm:block text-xs font-500 tracking-[0.15em] uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                Lenart Kadriu
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link);
                const base =
                  "relative px-4 py-2 text-sm font-500 transition-colors duration-300";
                const cls = `${base} ${
                  active
                    ? "text-[var(--accent-lime)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`;
                if (link.kind === "page") {
                  return (
                    <Link key={link.href} href={link.href} className={cls}>
                      {link.label}
                      {active && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent-lime)]"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  );
                }
                return isHome ? (
                  <button
                    key={link.href}
                    onClick={() => handleHashClick(link.href)}
                    className={cls}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--accent-lime)]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={hashHref(link.href)}
                    className={cls}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/sponsoring"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent-lime)] text-[var(--bg-deep)] text-sm font-600 rounded-full hover:brightness-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,238,68,0.3)]"
              >
                Soutenir
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-[var(--text-primary)]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050810]/95 backdrop-blur-2xl pt-24"
          >
            <div className="flex flex-col items-center gap-2 px-6">
              {navLinks.map((link, i) => {
                const commonCls =
                  "w-full py-4 text-center text-xl font-600 text-[var(--text-primary)] hover:text-[var(--accent-lime)] transition-colors border-b border-white/[0.04]";
                if (link.kind === "page") {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block ${commonCls}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                }
                return isHome ? (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => handleHashClick(link.href)}
                    className={commonCls}
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={hashHref(link.href)}
                      onClick={() => setMobileOpen(false)}
                      className={`block ${commonCls}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/sponsoring"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--accent-lime)] text-[var(--bg-deep)] text-base font-600 rounded-full"
                >
                  Soutenir Lenart
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
