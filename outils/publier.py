"""Prépare la version en ligne du site (artifact claude.ai).

Le lecteur d'artifacts ajoute lui-même <!doctype>, <html>, <head> et <body> :
on retire donc ces balises de index.html et on écrit publication/index.html.
Les fichiers style.css, app.js et data/mots.js sont publiés tels quels à côté.
"""
import pathlib
import re

racine = pathlib.Path(__file__).resolve().parent.parent
html = (racine / "index.html").read_text(encoding="utf8")

for motif in [r"<!doctype html>\s*", r"<html[^>]*>\s*", r"</html>\s*", r"<head>\s*", r"</head>\s*",
              r"<body>\s*", r"</body>\s*", r'<meta charset="utf-8">\s*', r'<meta name="viewport"[^>]*>\s*']:
    html = re.sub(motif, "", html, flags=re.I)

sortie = racine / "publication" / "index.html"
sortie.parent.mkdir(exist_ok=True)
sortie.write_text(html.strip() + "\n", encoding="utf8")
print("écrit :", sortie)
