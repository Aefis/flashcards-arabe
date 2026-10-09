# Site de flashcards — cours d'arabe

Instructions communes à tous les agents (Codex, Claude Code…). Répondre à l'utilisateur en français.

Site statique (ouvrir `index.html` dans le navigateur, aucun serveur ni compilation).

- `data/mots.js` : la base de mots (`MOTS`) + la table des fichiers déjà traités (`FICHIERS_TRAITES`, fichier → cours).
- `app.js`, `style.css`, `index.html` : le site (ne pas modifier lors d'une extraction).
- `photo du cours/` : photos et documents du cours, ajoutés par l'utilisateur après chaque cours.
  **Dossier privé, exclu du dépôt Git** (`.gitignore`) : ne jamais le committer.
- `outils/verifier.js` : contrôle de `data/mots.js`.

## Procédure « lancer l'extraction »

Quand l'utilisateur demande de lancer l'extraction :

1. Lister tous les fichiers de `photo du cours/` (images, PDF, docs, sous-dossiers compris).
2. Ne garder que ceux **absents** de `FICHIERS_TRAITES` dans `data/mots.js`.
3. Lire chaque nouveau fichier (les photos sont souvent pivotées à 90° ; les notes sont manuscrites).
   Pour les pages manuscrites, toujours les redresser et les découper en 2–3 bandes avec Pillow
   (`Image.rotate(90, expand=True)` puis `crop`) avant de lire : la vue d'ensemble a déjà causé
   des erreurs de lecture (ex. حَرْف lu حِرْفَة, جُمْلَة lu خَبَّاز). Relever **tous** les mots, y compris
   les petites phrases dans les marges (ex. مِنْ أَيْنَ أَنْتَ؟).
4. Pour chaque mot de vocabulaire, ajouter une ligne à `MOTS` :
   - `ar` avec harakat, `fr`, `cat` (réutiliser une catégorie existante si possible), `src: ["<nom exact du fichier>"]`.
   - `tr` si une translittération figure sur le document.
   - `m`/`f`/`du`/`pl` quand c'est pertinent (noms, adjectifs, métiers). Compléter les formes manquantes selon la grammaire standard.
   - `verifier: true` + une `note` si la lecture est incertaine.
   - Si le mot existe déjà : ajouter le fichier à son `src` au lieu de créer un doublon.
   - **Vérifier l'orthographe** (les notes manuscrites peuvent contenir des fautes) : `ar` contient
     toujours la forme correcte ; si les notes diffèrent, mettre la version écrite dans `ecrit`
     et une courte explication en français dans `corr` (affichée sur la carte, encadré « Corrigé »).
   - Duel « de base » au nominatif (ـَانِ), pluriel au nominatif.
5. Ajouter les nouveaux fichiers à `FICHIERS_TRAITES` (même ceux sans mots utiles), avec leur cours :
   `"<nom du fichier>": "Cours N"`. Pour trouver N, dans l'ordre : le sous-dossier
   (`photo du cours/Cours 3/…`), la mention manuscrite sur le document (« Cours 3 »),
   sinon demander à l'utilisateur. Le site regroupe les mots par cours grâce à cette table.
6. Vérifier : `node outils/verifier.js` (doit afficher le nombre de mots par cours, sans erreur).
7. Déployer (voir ci-dessous).
8. Résumer en français : nombre de mots ajoutés par fichier, corrections d'orthographe et lectures « à vérifier ».

## Procédure « traite les remarques »

Les visiteurs signalent des erreurs via le bouton ⚑ du site. Chaque remarque est ajoutée en ligne au fichier
`remarques.csv` du dépôt **privé** `Aefis/flashcards-arabe-remarques`
(colonnes : date, mot, francais, type, remarque, correction, cours, categorie, source).
L'écriture passe par l'API GitHub avec une clé limitée à ce dépôt, installée dans `app.js` par `outils/cle.py`.

1. Lire le fichier : `gh api repos/Aefis/flashcards-arabe-remarques/contents/remarques.csv -H "Accept: application/vnd.github.raw"`.
2. Juger chaque remarque non encore traitée (les visiteurs peuvent se tromper) ; en cas de doute, demander à l'utilisateur.
3. Si elle est fondée : corriger `data/mots.js` et lancer `node outils/verifier.js`.
4. Déplacer les remarques traitées dans `traitees.csv` du même dépôt (avec une colonne `decision`),
   pour que `remarques.csv` ne contienne que les remarques en attente.
5. Déployer le site, puis résumer à l'utilisateur ce qui a été corrigé ou refusé.

## Déploiement : GitHub Pages

Site public : https://aefis.github.io/flashcards-arabe/ (dépôt `Aefis/flashcards-arabe`, branche `main`).
GitHub Pages republie automatiquement à chaque push (environ 1 minute) :

```
git add -A
git commit -m "Extraction : <cours / résumé>"
git push
```

Vérifier avant de committer que `git status` ne montre aucun fichier de `photo du cours/`.
