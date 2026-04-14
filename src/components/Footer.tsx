"use client";

import { LKMonogram } from "./ui/LKMonogram";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border">
      <div className="container-lk py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <LKMonogram size="sm" />
            <span className="text-sm text-pearl">
              Tennisman suisse · JOJ Hualien 2026
            </span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-pearl sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:ghaasmanagement@gmail.com"
              className="transition-colors hover:text-gold"
            >
              ghaasmanagement@gmail.com
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-pearl/40 sm:block" />
            <a
              href="https://www.ghaasmanagement.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              GHaas Management SA
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-pearl/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Lenart Kadriu — Tous droits réservés.</span>
          <span className="tracking-[0.18em] uppercase">Vevey · Suisse</span>
        </div>
      </div>
    </footer>
  );
}
