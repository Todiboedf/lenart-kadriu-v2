#!/usr/bin/env bash
# Encodage des vidéos du site à partir du film source (ffmpeg requis).
#
# Usage : bash scripts/encode-video.sh [chemin/du/film/source.mp4]
# Par défaut, la source est public/assets/film-2026.mp4 (film RNT Visuals, 60 s,
# 1280x720). Utiliser de préférence le fichier maître original (celui du dépôt
# est déjà ré-encodé) : git show 1c11faa:public/assets/lenart_kadriu_web.mp4 > source.mp4 Le script produit dans public/assets/ :
#   hero-loop.mp4 / hero-loop.webm  boucle muette de 8,6 s (phase de jeu, 21,7 s à 30,3 s)
#   hero-poster.jpg                 première image nette de la boucle
#   film-2026.mp4                   film ré-encodé (H.264 deux passes 800 kbit/s, AAC 96 kbit/s, faststart)
#   film-2026-poster.jpg            image d'attente du lecteur
#   stills/film-*.jpg               images fixes nettes (photos d'action de secours)
#
# Les sous-titres sont incrustés dans le bas de l'image du film source. La boucle
# hero, les posters et les images fixes sont donc recadrés à 1280x576 (bande basse
# retirée) pour ne pas afficher de texte derrière le titre du site.

set -euo pipefail

SRC="${1:-public/assets/film-2026.mp4}"
OUT="public/assets"
STILLS="$OUT/stills"
LOOP_START=21.7
LOOP_DURATION=8.6
CROP="crop=1280:576:0:0"

mkdir -p "$STILLS"

echo "Boucle hero (mp4)"
ffmpeg -v error -y -ss "$LOOP_START" -t "$LOOP_DURATION" -i "$SRC" \
  -vf "$CROP,fps=24" -an \
  -c:v libx264 -crf 28 -preset slow -profile:v high -pix_fmt yuv420p \
  -movflags +faststart "$OUT/hero-loop.mp4"

echo "Boucle hero (webm)"
ffmpeg -v error -y -ss "$LOOP_START" -t "$LOOP_DURATION" -i "$SRC" \
  -vf "$CROP,fps=24" -an \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 \
  "$OUT/hero-loop.webm"

echo "Poster hero"
ffmpeg -v error -y -ss "$LOOP_START" -i "$SRC" -frames:v 1 \
  -vf "$CROP" -q:v 4 "$OUT/hero-poster.jpg"

echo "Film principal (deux passes, 800 kbit/s : le CRF 26 prévu donnait 10 Mo)"
TMP_FILM="$(mktemp --suffix=.mp4)"
PASSLOG="$(mktemp -d)/film"
ffmpeg -v error -y -i "$SRC" \
  -c:v libx264 -b:v 800k -maxrate 1200k -bufsize 2400k -preset slow -profile:v high -pix_fmt yuv420p \
  -pass 1 -passlogfile "$PASSLOG" -an -f mp4 /dev/null
ffmpeg -v error -y -i "$SRC" \
  -c:v libx264 -b:v 800k -maxrate 1200k -bufsize 2400k -preset slow -profile:v high -pix_fmt yuv420p \
  -pass 2 -passlogfile "$PASSLOG" \
  -c:a aac -b:a 96k -movflags +faststart "$TMP_FILM"
mv "$TMP_FILM" "$OUT/film-2026.mp4"
chmod 644 "$OUT/film-2026.mp4"

echo "Poster du film"
ffmpeg -v error -y -ss 41.5 -i "$OUT/film-2026.mp4" -frames:v 1 \
  -vf "$CROP" -q:v 4 "$OUT/film-2026-poster.jpg"

echo "Images fixes (les images à 25,5 s et 36,75 s ont été écartées : flou de mouvement)"
still() {
  ffmpeg -v error -y -ss "$1" -i "$SRC" -frames:v 1 -vf "$CROP" -q:v 2 "$STILLS/$2"
}
still 22.5 film-coup-droit-arche.jpg
still 41.0 film-coup-droit.jpg
still 42.75 film-preparation.jpg

ls -la "$OUT"/hero-loop.* "$OUT"/hero-poster.jpg "$OUT"/film-2026.mp4 "$OUT"/film-2026-poster.jpg "$STILLS"
