"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";
import { Monogram } from "./ui/Monogram";
import { buttonClasses } from "./ui/Button";

const linkClasses =
  "relative px-3 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of site.nav.links) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const close = () => setOpen(false);
  const solid = scrolled || !isHome || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
          solid
            ? "border-line bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            aria-label={site.nav.homeLabel}
            className="flex items-center gap-3"
          >
            <Monogram />
            <span className="t-small hidden font-medium text-fg sm:block">
              {site.name}
            </span>
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 lg:flex"
          >
            {site.nav.links.map((link) => {
              const isActive = isHome && active === link.id;
              return (
                <Link
                  key={link.id}
                  href={hrefFor(link.id)}
                  className={cn(
                    linkClasses,
                    isActive ? "text-fg" : "text-fg-muted hover:text-fg",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 bottom-0 h-px bg-accent"
                    />
                  ) : null}
                </Link>
              );
            })}
            <Link
              href={site.nav.cta.href}
              className={cn(buttonClasses("primary"), "ml-4 px-5 py-2.5")}
            >
              {site.nav.cta.label}
            </Link>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 p-2 text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? site.nav.closeMenu : site.nav.openMenu}
          >
            {open ? (
              <X size={20} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </Container>
      </header>

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-bg pt-24 pb-10 lg:hidden"
      >
        <Container>
          <nav aria-label="Menu mobile">
            <ul className="divide-y divide-line border-y border-line">
              {site.nav.links.map((link, index) => (
                <li key={link.id}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={hrefFor(link.id)}
                    onClick={close}
                    className="t-h3 block py-5 text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={site.nav.cta.href}
              onClick={close}
              className={cn(buttonClasses("primary"), "mt-8 w-full")}
            >
              {site.nav.cta.label}
            </Link>
          </nav>
        </Container>
      </div>
    </>
  );
}
