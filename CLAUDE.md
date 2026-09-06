# CLAUDE.md : règles du projet lenartkadriu.com

Site officiel de Lenart Kadriu, joueur de tennis suisse né en 2012 à Vevey (Team Vaud, GHaas Management SA). Objectif : convaincre des sponsors. Next.js 16, React 19, Tailwind v4, TypeScript strict.

## Charte (non négociable)

- Aucun emoji, nulle part (code, UI, commits, README).
- Icônes : `lucide-react` uniquement, taille 16 à 20, `strokeWidth` 1.5, seulement quand l'icône porte un sens (téléphone, mail, flèche, lecture). Pas d'icône décorative devant un titre. Jamais d'icône à la place d'un logo.
- Aucun tiret cadratin (U+2014) ni demi-cadratin (U+2013) en guise de ponctuation. Utiliser ":", ",", "(...)" ou " · ". Plages de dates : "du 1er au 6 août 2026".
- Pas de lorem ipsum, pas de texte de remplissage. Donnée manquante : `TODO(Guillaume)` typé dans `src/content/`, bloc masqué à l'affichage.
- TypeScript strict, zéro `any`, zéro `@ts-ignore`, zéro cast paresseux.
- Mobile-first : chaque section conçue à 390 px, puis 768, puis 1440.
- Paragraphes courts (3 lignes max sur mobile), une idée par paragraphe.
- Typographie française : apostrophe "’", espace insécable avant ":" ";" "!" "?" et dans les nombres ("5 000 CHF"), guillemets « » avec espaces insécables.
- Interdiction d'inventer : résultats, chiffres, classements, citations, témoignages, KPIs, logos, partenaires.
- Ne pas supprimer de contenu factuel (palmarès, affiliations, coordonnées) sans le signaler.
- Ne jamais toucher aux projets Vercel ni aux DNS sans instruction explicite.

## Faits fixés

- Hualien 2026 = International Children's Games (ICG), 58e édition, du 1er au 6 août 2026, athlètes de 12 à 15 ans. Ce ne sont pas les Jeux Olympiques de la Jeunesse. Lenart a été "sélectionné par la Ville de Vevey" (jamais "qualifié").
- Résultats ICG Hualien 2026 : simple garçons 2e place (argent), double garçons bronze. Rien d'autre : pas de score, d'adversaire ni de partenaire.
- Prix des niveaux Bronze, Silver, Gold : "Sur demande". Aucun montant.
- Pas de compteur "7+ titres européens" : le palmarès détaillé suffit.
- Catégorie : U14 en 2026, U16 dès 2027 (`categorieSaison` dans `src/content/site.ts`).
- Swiss Olympic (jamais "Swiss Olympique"). Lenart a une carte Talent régional Swiss Olympic ; ne jamais afficher l'image de la carte.
- Naissance : "Né en 2012 à Vevey", sans jour ni mois (mineur).

## Direction artistique : éditorial sport

Tokens (`src/app/globals.css`, `@theme`) :

```
--color-bg        #0B0B0C
--color-bg-elev   #141416
--color-fg        #F3F2EE
--color-fg-muted  #A3A29C
--color-line      rgba(243, 242, 238, 0.12)
--color-accent    #E2231A   (rouge suisse)
--color-accent-fg #FFFFFF
```

Accent : moins de 5 % de la surface. Autorisé sur le filet des eyebrows, le lien actif, le bouton primaire, un chiffre clé, le focus ring. Interdit sur les titres entiers, les fonds, les dégradés, les bordures de cartes.

Pas de dégradé décoratif, pas de `backdrop-blur` hors navbar, pas de grain, pas de glow, pas d'ombre colorée, pas de rayon supérieur à 2 px.

Typographie (`next/font/google`, `display: "swap"`) :

- Archivo pour les titres et les chiffres : titres en 600, `tracking-[-0.02em]`, chiffres en 700 `tabular-nums`.
- Inter 400 et 500 pour le texte et l'UI.
- Eyebrow : Inter 500, 11 px, `tracking-[0.18em]`, capitales, `fg-muted`, filet de 24 px en accent devant. Seul motif répétitif autorisé.
- Pas d'italique décorative, pas de "titre + mot en accent". Un titre est une phrase courte en un seul style.
- Classes nommées dans `globals.css` : `.t-display`, `.t-h2`, `.t-h3`, `.t-eyebrow`, `.t-body`, `.t-small`. Pas de taille ad hoc dans les composants.

Mise en page : conteneur 1280 px, grille 12 colonnes (7/5 ou 8/4) pour texte + image, sections séparées par un filet `color-line`, rythme `py-20` mobile et `py-28` desktop, chiffres clés en bande horizontale, listes de résultats en tableau ou liste à filets. Photos en `next/image` avec `sizes` corrects et `object-position` choisi image par image.

Mouvement : une animation d'entrée sur le hero, au plus un `fadeUp` discret sur le bloc titre d'une section, rien sur les listes. `prefers-reduced-motion` : aucune animation, vidéo hero remplacée par son poster. Pas de parallaxe, pas de reflet, pas de `hover:scale`.

## Contenu typé (`src/content/`)

`site.ts`, `athlete.ts`, `hualien.ts`, `palmares.ts`, `photos.ts`, `partners.ts`, `sponsoring.ts`. Aucune chaîne de contenu dans les composants : ils importent `src/content/` ou reçoivent des props. `npm run check:photos` vérifie qu'un fichier photo n'est utilisé qu'une fois.

## Interdictions explicites

- Inventer un résultat, un classement, un chiffre d'audience, une citation, un témoignage, un partenaire.
- "JOJ", "Jeux Olympiques", "olympique" (hors "Swiss Olympic"), "qualifié".
- Icône à la place d'un logo. Grille de cartes à icône pour des "points forts". Compte à rebours. KPI sans chiffre. Badge "Recommandé". Texte "à confirmer" visible par le public.
- Emojis, tirets cadratins, lorem ipsum, `any`.
- Glow, grain, dégradé décoratif, glassmorphism, reflet sur bouton, `hover:scale`, parallaxe, stagger sur listes de texte, animation sur chaque bloc.
- Deux vidéos en autoplay. Vidéo portrait dans un cadre paysage. Image de moins de 1 000 px de large en pleine largeur.
- Afficher la carte Swiss Olympic, la photo d'identité, le selfie, la date de naissance complète.
- Modifier Vercel ou les DNS. Pousser sur `master` sans build vert.

## Vérifications avant push

```bash
npx tsc --noEmit && npm run lint && npm run build && npm run check:photos
grep -rnP "\x{2014}|\x{2013}" src/          # vide
grep -rnP "[\x{1F300}-\x{1FAFF}]" src/       # vide
grep -rniE "JOJ|olympi|qualifi|indicatif|projection|countdown" src/   # seulement "Swiss Olympic"
```
