import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Évite que Next choisisse un autre lockfile plus haut dans l'arborescence.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
