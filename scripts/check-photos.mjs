// Vérifie que chaque fichier image de public/assets n'est référencé qu'une seule
// fois dans src/ (galerie, portrait, posters, images OG) et qu'il existe bien.
//
// Usage : node scripts/check-photos.mjs   (npm run check:photos)

import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = "src";
const PUBLIC_DIR = "public";
const PATTERN = /["'`](\/assets\/[^"'`]+\.(?:jpe?g|png|webp|avif))["'`]/g;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(ts|tsx|css|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const occurrences = new Map();
for (const file of await walk(SRC_DIR)) {
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(PATTERN)) {
    const src = match[1];
    const list = occurrences.get(src) ?? [];
    list.push(file);
    occurrences.set(src, list);
  }
}

let errors = 0;
for (const [src, files] of occurrences) {
  if (files.length > 1) {
    console.error(`Doublon : ${src} référencé ${files.length} fois (${files.join(", ")})`);
    errors += 1;
  }
  try {
    await stat(path.join(PUBLIC_DIR, src));
  } catch {
    console.error(`Fichier absent : ${src} (référencé dans ${files.join(", ")})`);
    errors += 1;
  }
}

if (errors > 0) {
  console.error(`${errors} problème(s) sur ${occurrences.size} image(s).`);
  process.exit(1);
}
console.log(`${occurrences.size} images référencées, aucune en double, toutes présentes.`);
