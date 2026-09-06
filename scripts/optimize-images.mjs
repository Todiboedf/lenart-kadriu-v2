// Optimise les JPG du site : côté long 2 000 px max, qualité 82, profil sRGB,
// métadonnées EXIF retirées, mozjpeg progressif. Vérifie qu'aucun fichier ne
// dépasse 450 Ko (la qualité descend par paliers si nécessaire).
//
// Usage : node scripts/optimize-images.mjs [fichiers...]
// Sans argument : tous les JPG de public/assets (et public/assets/stills).

import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MAX_SIDE = 2000;
const MAX_BYTES = 450 * 1024;
const START_QUALITY = 82;
const ROOTS = ["public/assets", "public/assets/stills"];

async function listJpgs() {
  const files = [];
  for (const root of ROOTS) {
    let entries = [];
    try {
      entries = await readdir(root, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.isFile() && /\.jpe?g$/i.test(entry.name)) {
        files.push(path.join(root, entry.name));
      }
    }
  }
  return files;
}

async function encode(file, quality) {
  return sharp(file)
    .rotate()
    .resize({
      width: MAX_SIDE,
      height: MAX_SIDE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .toColourspace("srgb")
    .jpeg({ quality, mozjpeg: true, progressive: true, chromaSubsampling: "4:2:0" })
    .toBuffer();
}

async function optimize(file) {
  const before = (await stat(file)).size;
  let quality = START_QUALITY;
  let buffer = await encode(file, quality);
  while (buffer.length > MAX_BYTES && quality > 60) {
    quality -= 4;
    buffer = await encode(file, quality);
  }
  await writeFile(file, buffer);
  const meta = await sharp(buffer).metadata();
  const flag = buffer.length > MAX_BYTES ? "  (toujours > 450 Ko)" : "";
  console.log(
    `${file}: ${meta.width}x${meta.height}, q${quality}, ${Math.round(before / 1024)} Ko -> ${Math.round(buffer.length / 1024)} Ko${flag}`,
  );
  return buffer.length <= MAX_BYTES;
}

const targets = process.argv.slice(2);
const files = targets.length > 0 ? targets : await listJpgs();
let allOk = true;
for (const file of files) {
  const ok = await optimize(file);
  allOk = allOk && ok;
}
if (!allOk) {
  console.error("Au moins une image dépasse 450 Ko.");
  process.exit(1);
}
