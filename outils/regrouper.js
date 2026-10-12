// Réécrit data/mots.js trié par catégorie (une ligne par mot). Usage : node outils/regrouper.js
const fs = require("fs");
const p = "data/mots.js";
const code = fs.readFileSync(p, "utf8");
const { MOTS } = new Function(code + "; return { MOTS };")();
const debut = code.slice(0, code.indexOf("const MOTS = ["));
const ordreCat = ["Verbes", "Leçon 2 – écriture", "Exercice d'écriture", "Loisirs", "Métiers", "École et études", "Maison", "Personnes", "Adjectifs",
  "Sentiments", "Nourriture", "Animaux", "Expressions", "Grammaire", "Continents", "Pays arabes", "Pays et villes"];
const cats = [...new Set([...ordreCat, ...MOTS.map((m) => m.cat)])].filter((c) => MOTS.some((m) => m.cat === c));
const champs = ["ar", "fr", "tr", "cat", "racine", "m", "f", "du", "du_f", "pl", "pl_f", "note", "verifier", "ecrit", "corr", "src"];
const ligne = (m) => "  { " + champs.filter((k) => m[k] !== undefined).map((k) => `${k}: ${JSON.stringify(m[k])}`).join(", ") + " },";
let out = debut + "const MOTS = [\n";
for (const c of cats) out += `\n  // ---- ${c} ----\n` + MOTS.filter((m) => m.cat === c).map(ligne).join("\n") + "\n";
fs.writeFileSync(p, out + "];\n", "utf8");
console.log("regroupé :", MOTS.length);
