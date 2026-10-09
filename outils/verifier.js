// Contrôle de data/mots.js : syntaxe, champs obligatoires, sources connues, doublons.
// Usage : node outils/verifier.js
const fs = require("fs");
const path = require("path");

const code = fs.readFileSync(path.join(__dirname, "..", "data", "mots.js"), "utf8");
const { MOTS, FICHIERS_TRAITES } = new Function(code + "; return { MOTS, FICHIERS_TRAITES };")();

const erreurs = [];
const vus = new Set();
const parCours = {};

MOTS.forEach((m, i) => {
  const ref = `#${i + 1} ${m.ar || "?"}`;
  for (const champ of ["ar", "fr", "cat"]) if (!m[champ]) erreurs.push(`${ref} : champ « ${champ} » manquant`);
  if (!Array.isArray(m.src) || !m.src.length) erreurs.push(`${ref} : « src » doit être une liste non vide`);
  (m.src || []).forEach((f) => {
    if (!FICHIERS_TRAITES[f]) erreurs.push(`${ref} : source absente de FICHIERS_TRAITES : ${f}`);
  });
  if (m.ecrit && !m.corr) erreurs.push(`${ref} : « ecrit » sans explication « corr »`);
  const cle = m.ar.replace(/[ً-ْٰ]/g, "") + "|" + m.fr;
  if (vus.has(cle)) erreurs.push(`${ref} : doublon`);
  vus.add(cle);
  const cours = [...new Set((m.src || []).map((f) => FICHIERS_TRAITES[f]))].join(" + ");
  parCours[cours] = (parCours[cours] || 0) + 1;
});

console.log(`${MOTS.length} mots`, parCours);
if (erreurs.length) {
  console.error(erreurs.join("\n"));
  process.exit(1);
}
console.log("OK");
