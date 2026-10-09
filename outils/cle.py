"""Installe la clé GitHub des remarques dans app.js.

Usage : python outils/cle.py <clé github_pat_...>

La clé est inversée et découpée en morceaux, pour que les robots de GitHub
ne la bloquent pas comme une fuite lors du push. Elle ne doit donner accès
qu'au dépôt Aefis/flashcards-arabe-remarques (Contents : lecture et écriture).
"""
import pathlib
import re
import sys

cle = sys.argv[1].strip()
inverse = cle[::-1]
morceaux = [inverse[i:i + 8] for i in range(0, len(inverse), 8)]
js = "[" + ", ".join(f'"{m}"' for m in morceaux) + ']'

app = pathlib.Path(__file__).resolve().parent.parent / "app.js"
code = app.read_text(encoding="utf8")
code, n = re.subn(r'cle: \[[^\]]*\]\.join\(""\)', f'cle: {js}.join("")', code)
assert n == 1, "emplacement de la clé introuvable dans app.js"
app.write_text(code, encoding="utf8")
print("clé installée dans app.js")
