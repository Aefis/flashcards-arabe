@AGENTS.md

## Spécifique à Claude : version privée claude.ai

En plus de GitHub Pages, le site est publié en artifact privé :
https://claude.ai/artifact/BVra7DjgHi8sD3XrFcF2hG — après chaque extraction, mettre à jour **les deux**.

1. `python outils/publier.py` (génère `publication/index.html` sans les balises html/head/body).
2. Outil Artifact, action publish, avec `url` = le lien ci-dessus, `file_path` = `publication/index.html`,
   `files` = `{"style.css": "style.css", "app.js": "app.js", "data/mots.js": "data/mots.js"}`, sans `icon`.
   (Faire d'abord une lecture `action: "read"` de l'artifact si la session ne l'a pas encore publié.)

Contraintes du lecteur d'artifacts : pas de `confirm()`/`alert()`, pas d'audio ni de fetch vers
d'autres sites (le secours Google TTS ne marche qu'en local), plein écran indisponible sur iPhone.
