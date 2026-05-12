SONGS FOLDER — drop your .mp3 files here
==========================================

The audio page automatically detects any .mp3 file you put in this folder
and plays it directly on the website (no YouTube, no popup).

How filename matching works:
----------------------------
The code converts each song name to a "slug" (lowercase, dashes instead of
spaces, no special characters), and looks for a matching .mp3 filename here.

Expected filenames for your playlist:

  ab-tumsa-jahaan-mein-koi-nahi-hai.mp3
  neela-gagan-ke-deewane.mp3
  darkhaast.mp3
  tumse-hi.mp3
  saason-ki-maala-pe-simru-main-pi-ka-naam.mp3
  teri-ore.mp3
  ektara.mp3
  dekhe-dekhe-sheesha-sharmaye.mp3
  kiska-hai-yeh-tumko-intezaar.mp3
  phir-le-aaya-dil.mp3
  hothon-se-chhu-lo-tum.mp3
  kun-faya-kun.mp3
  yeh-dooriyan.mp3
  bairan.mp3
  gajar.mp3
  hum-tere-pyar-mein.mp3
  itna-na-mujhse-tu-pyar-badha.mp3
  hona-tha-pyar.mp3
  yaaron.mp3
  tere-jaisa-yaar-kahan.mp3
  phir-se-ud-chala.mp3
  kabira.mp3
  yeh-dosti.mp3

Steps:
1. Download the .mp3 of any song you have rights to (e.g. JioSaavn / personal collection).
2. Rename it to match the filename above.
3. Drop it into this folder.
4. Restart `npm run dev` if it's already running — Vite will pick it up.

Songs without a matching .mp3 will fall back to a "Open on YouTube" link.
