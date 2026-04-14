"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LKMonogram } from "./ui/LKMonogram";

const navLinks: { label: string; href: string; kind: "hash" | "page" }[] = [
  { label: "Profil", href: "#joueur", kind: "hash" },
  { label: "Son jeu", href: "#jeu", kind: "hash" },
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
    if (!isHome) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.kind === "page") return pathname === link.href;
    return isHome && activeSection === link.href.replace("#", "");
  };

  const linkBase =
    "relative text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 px-3 py-2";

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-black/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-lk">
          <div className="flex h-[var(--nav-height)] items-center justify-between">
            <Link
              href="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-4"
              aria-label="Accueil Lenart Kadriu"
            >
              <LKMonogram size="md" />
              <span className="hidden text-xs tracking-[0.2em] uppercase text-pearl sm:block">
                Lenart Kadriu
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const active = isActive(link);
                const cls = `${linkBase} ${
                  active ? "text-gold" : "text-pearl hover:text-bone"
                }`;
                if (link.kind === "page") {
                  return (
                    <Link key={link.href} href={link.href} className={cls}>
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-x-3 bottom-1 block h-px bg-gold"
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
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-x-3 bottom-1 block h-px bg-gold"
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

            <div className="flex items-center gap-4">
              <Link
                href="/sponsoring"
                className="hidden border border-gold bg-gold px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-all hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-px md:inline-flex"
              >
                Soutenir
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-bone md:hidden"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X size={22} strokeWidth={1.3} />
                ) : (
                  <Menu size={22} strokeWidth={1.3} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24"
          >
            <div className="container-lk flex flex-col items-center gap-1">
              {navLinks.map((link, i) => {
                const cls =
                  "block w-full border-b border-border py-5 text-center text-lg tracking-[0.15em] uppercase font-medium text-bone transition-colors hover:text-gold";
                if (link.kind === "page") {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.04 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cls}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                }
                return isHome ? (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                    onClick={() => handleHashClick(link.href)}
                    className={cls}
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                    className="w-full"
                  >
                    <Link
                      href={hashHref(link.href)}
                      onClick={() => setMobileOpen(false)}
                      className={cls}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Link
                  href="/sponsoring"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 border border-gold bg-gold px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-black"
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
