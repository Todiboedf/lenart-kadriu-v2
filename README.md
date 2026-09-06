# lenartkadriu.com

> Photo pro à prévoir : portrait studio + 5 photos d'action en match. Le site ne dispose aujourd'hui que d'une seule photo d'action (Gradignan) et d'aucun portrait professionnel.

Site officiel de Lenart Kadriu, joueur de tennis suisse né en 2012 à Vevey, membre du Team Vaud, représenté par GHaas Management SA. Le site sert avant tout à convaincre des sponsors.

## Stack

- Next.js 16 (App Router, composants serveur par défaut), React 19, TypeScript strict
- Tailwind CSS v4 (tokens dans `src/app/globals.css` via `@theme`)
- framer-motion uniquement dans les feuilles client qui animent réellement (hero, navbar)
- lucide-react pour les rares icônes porteuses de sens (mail, téléphone, lecture, flèche)
- Polices : Archivo (titres, chiffres) et Inter (texte), chargées via `next/font/google`

## Commandes

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de production
npm run lint         # eslint
npx tsc --noEmit     # vérification des types
npm run check:photos # unicité des photos dans src/content/photos.ts
```

Scripts d'assets (à lancer uniquement quand on ajoute des médias) :

```bash
node scripts/optimize-images.mjs   # JPG : 2000 px max, qualité 82, sRGB, sans EXIF
bash scripts/encode-video.sh       # boucle hero, film, posters, images fixes
```

## Structure

```
src/
  app/            routes, layout, metadata, OG images, sitemap, robots
  components/     sections de page (composants serveur) et feuilles client
  components/ui/  briques du design system (Button, Eyebrow, FactsBar, ...)
  content/        tout le contenu éditorial, typé (voir ci-dessous)
  lib/            utilitaires (cn, mailto)
public/assets/    photos et vidéos
public/sponsors/  logos partenaires (blanc monochrome, fond transparent)
scripts/          optimisation des images, encodage vidéo, vérification des photos
```

### `src/content/`

Aucune chaîne de contenu ne vit dans un composant : tout passe par ces fichiers.

| Fichier | Contenu |
|---|---|
| `site.ts` | nom, tagline, URL canonique, email, téléphone, catégorie et saison, club |
| `athlete.ts` | bio, faits clés, tags, style de jeu, objectifs par horizon |
| `hualien.ts` | International Children's Games Hualien 2026 : dates, texte, résultats, photos |
| `palmares.ts` | entrées de palmarès typées (niveau, format, résultat) |
| `photos.ts` | photos du site (src, alt, dimensions, point focal) |
| `partners.ts` | partenaires et affiliations |
| `sponsoring.ts` | niveaux de partenariat, contreparties, matrice des supports |

Un `TODO(Guillaume)` dans un fichier de contenu signale une donnée à confirmer ; le bloc correspondant est masqué à l'affichage tant que la donnée manque.

## Ajouter une photo

1. Déposer le JPG dans `public/assets/` avec un nom descriptif en kebab-case (`action-gradignan.jpg`).
2. Lancer `node scripts/optimize-images.mjs` (redimensionne, retire les métadonnées).
3. Déclarer la photo dans `src/content/photos.ts` avec un `alt` réel, `width`, `height` et, pour un portrait, `focus: "top"`.
4. Lancer `npm run check:photos` : un fichier ne peut apparaître qu'une fois sur le site.

## Ajouter un partenaire

1. Déposer le logo dans `public/sponsors/` (SVG de préférence, sinon PNG 2x, fond transparent, version blanche).
2. Ajouter une entrée dans `src/content/partners.ts` : `name`, `role`, `url`, `logo`, `logoHeight` (28 à 36 px).
3. Le logo apparaît automatiquement sur la home et sur `/sponsoring`.

## Déploiement

- Projet Vercel `lenart-kadriu-v2-hxxf`, relié au dépôt GitHub `Todiboedf/lenart-kadriu-v2`.
- Domaines : `www.lenartkadriu.com` (production) et `lenartkadriu.com` (redirection vers www).
- Chaque push sur `master` est mis en ligne automatiquement. Travailler sur une branche, vérifier `npm run build`, puis fusionner.
- Variable d'environnement en production : `NEXT_PUBLIC_SITE_URL=https://www.lenartkadriu.com` (voir `.env.example`).
- `NEXT_PUBLIC_CLARITY_ID` (optionnel) active Microsoft Clarity.

## Charte

Les règles de rédaction et de design (pas d'emoji, pas de tiret cadratin, typographie française, accent rouge sous 5 % de la surface, contenu typé) sont détaillées dans `CLAUDE.md`.
