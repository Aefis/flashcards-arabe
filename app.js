// ---------- Utilitaires ----------
const HARAKAT = /[ؐ-ًؚ-ٰٟۖ-ۭ]/g;
const sansHarakat = (s) => (s || "").replace(HARAKAT, "");
const $ = (id) => document.getElementById(id);

const stock = {
  lire(cle, defaut) {
    try { const v = localStorage.getItem(cle); return v === null ? defaut : JSON.parse(v); } catch { return defaut; }
  },
  ecrire(cle, v) { try { localStorage.setItem(cle, JSON.stringify(v)); } catch {} },
};

// Identifiant stable d'un mot (pour mémoriser la progression)
MOTS.forEach((m) => {
  m.id = sansHarakat(m.ar) + "|" + m.fr;
  if (m.f && !m.m) m.m = m.ar;
  m.cours = [...new Set(m.src.map((f) => FICHIERS_TRAITES[f] || "Sans cours"))];
});

// Tri naturel : "Cours 2" avant "Cours 10"
const triCours = (a, b) => a.localeCompare(b, "fr", { numeric: true });

// ---------- État ----------
const etat = {
  harakat: stock.lire("harakat", true),
  sens: stock.lire("sens", "ar"),
  cat: stock.lire("cat", ""),
  cours: stock.lire("cours", ""),
  aRevoir: stock.lire("aRevoir", false),
  connus: stock.lire("connus", {}), // id -> true (su) | false (à revoir)
  paquet: [],
  i: 0,
};

// Annotations françaises « (m.) » isolées pour ne pas être inversées dans le texte arabe
const afficheAr = (s) => (etat.harakat ? s : sansHarakat(s))
  .replace(/\(([^)؀-ۿ]*)\)/g, '<span class="lat">($1)</span>');
const nomCourt = (f) => f.replace(/^WhatsApp Image /, "");

// ---------- Filtres ----------
function remplirFiltres() {
  const cats = [...new Set(MOTS.map((m) => m.cat))];
  const cours = [...new Set(MOTS.flatMap((m) => m.cours))].sort(triCours);
  $("filtre-cat").innerHTML = `<option value="">Toutes (${MOTS.length})</option>` +
    cats.map((c) => `<option value="${c}">${c} (${MOTS.filter((m) => m.cat === c).length})</option>`).join("");
  $("filtre-cours").innerHTML = `<option value="">Tous</option>` +
    cours.map((c) => `<option value="${c}">${c} (${MOTS.filter((m) => m.cours.includes(c)).length})</option>`).join("");
  $("filtre-cat").value = cats.includes(etat.cat) ? etat.cat : "";
  $("filtre-cours").value = cours.includes(etat.cours) ? etat.cours : "";
  $("harakat").checked = etat.harakat;
  $("sens").value = etat.sens;
  $("a-revoir").checked = etat.aRevoir;
  majPuces();
}

// Résumé de la sélection, affiché en haut (ouvre les réglages)
function majPuces() {
  const puces = [
    etat.cours || "Tous les cours",
    etat.cat || "Toutes catégories",
    etat.sens === "ar" ? "AR → FR" : "FR → AR",
  ];
  if (etat.aRevoir) puces.push("Pas encore sus");
  if (!etat.harakat) puces.push("Sans harakat");
  $("puces").innerHTML = puces.map((p) => `<span class="puce">${p}</span>`).join("");
}

function motsFiltres() {
  return MOTS.filter((m) =>
    (!etat.cat || m.cat === etat.cat) &&
    (!etat.cours || m.cours.includes(etat.cours)) &&
    (!etat.aRevoir || etat.connus[m.id] !== true));
}

function construirePaquet(melanger = false) {
  etat.paquet = motsFiltres();
  if (melanger) {
    for (let k = etat.paquet.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [etat.paquet[k], etat.paquet[j]] = [etat.paquet[j], etat.paquet[k]];
    }
  }
  etat.i = 0;
  majPuces();
  afficherCarte();
  afficherListe();
}

// ---------- Carte ----------
function afficherCarte() {
  const carte = $("carte");
  carte.classList.remove("retournee");
  $("fin").hidden = true;
  $("vue-cartes").classList.remove("termine");
  const m = etat.paquet[etat.i];
  majProgression();

  if (!m) {
    afficherFin();
    return;
  }

  const arHtml = `<span lang="ar" dir="rtl">${afficheAr(m.ar)}</span>`;
  const recto = $("recto-mot"), verso = $("verso-mot");
  if (etat.sens === "ar") {
    recto.className = "mot"; recto.innerHTML = arHtml;
    verso.className = "mot fr"; verso.textContent = m.fr;
  } else {
    recto.className = "mot fr"; recto.textContent = m.fr;
    verso.className = "mot"; verso.innerHTML = arHtml;
  }

  $("verso-tr").textContent = m.tr || "";
  $("verso-formes").innerHTML = tableauFormes(m);
  $("verso-note").innerHTML = (m.note ? afficheAr(m.note) : "") +
    (m.verifier ? ` <span class="badge">lecture à vérifier</span>` : "");
  $("verso-corr").innerHTML = blocCorrection(m);
  $("verso-src").textContent = m.cours.join(" · ") + " — " + m.cat + " — " + m.src.map(nomCourt).join(" · ");
}

// Formes : tableau Masculin / Féminin × Singulier / Duel / Pluriel quand le mot a un féminin,
// sinon simple liste Duel / Pluriel.
function tableauFormes(m) {
  const forme = (v) => v ? `<span lang="ar">${afficheAr(v)}</span>${boutonDire(v)}` : "—";
  if (m.f) {
    return `<thead><tr><th></th><th>Masculin</th><th>Féminin</th></tr></thead><tbody>` +
      [["Singulier", m.m, m.f], ["Duel", m.du, m.du_f], ["Pluriel", m.pl, m.pl_f]]
        .filter(([, a, b]) => a || b)
        .map(([k, a, b]) => `<tr><th>${k}</th><td>${forme(a)}</td><td>${forme(b)}</td></tr>`).join("") + "</tbody>";
  }
  return [["Duel", m.du], ["Pluriel", m.pl]].filter(([, v]) => v)
    .map(([k, v]) => `<tr><th>${k}</th><td>${forme(v)}</td></tr>`).join("");
}

// Barre de progression : vert = sus, rouge = à revoir (sur le paquet en cours)
function majProgression() {
  const n = etat.paquet.length;
  const sus = etat.paquet.filter((x) => etat.connus[x.id] === true).length;
  const revoir = etat.paquet.filter((x) => etat.connus[x.id] === false).length;
  $("prog-su").style.width = n ? `${(sus / n) * 100}%` : "0";
  $("prog-revoir").style.width = n ? `${(revoir / n) * 100}%` : "0";
  const m = etat.paquet[etat.i];
  const statut = !m ? "" : etat.connus[m.id] === true ? ' · <b class="ok">sue</b>' : etat.connus[m.id] === false ? ' · <b class="ko">à revoir</b>' : "";
  $("compteur").innerHTML = n
    ? `<span>Carte ${Math.min(etat.i + 1, n)} / ${n}${statut}</span><span><b class="ok">${sus} ✓</b> · <b class="ko">${revoir} à revoir</b></span>`
    : "";
}

// Écran de fin de paquet
function afficherFin() {
  const n = etat.paquet.length;
  const sus = etat.paquet.filter((x) => etat.connus[x.id] === true).length;
  const revoir = motsFiltres().filter((x) => etat.connus[x.id] === false);
  $("fin-titre").textContent = n ? "Paquet terminé" : etat.aRevoir ? "Bravo, plus rien à revoir" : "Aucun mot dans cette sélection";
  $("fin-sus").textContent = n ? `${sus} sus` : "";
  $("fin-revoir").textContent = revoir.length ? `${revoir.length} à revoir` : "";
  $("fin-revoir-btn").hidden = !revoir.length;
  $("fin-revoir-btn").textContent = `Revoir les ${revoir.length} mot${revoir.length > 1 ? "s" : ""} à revoir`;
  $("fin-recommencer").hidden = !motsFiltres().length;
  $("fin").hidden = false;
  $("vue-cartes").classList.add("termine");
  majProgression();
}

function retourner() { if (etat.paquet.length && $("fin").hidden) $("carte").classList.toggle("retournee"); }
function aller(delta) {
  if (!etat.paquet.length) return;
  etat.i = (etat.i + delta + etat.paquet.length) % etat.paquet.length;
  afficherCarte();
}
function marquer(su) {
  const m = etat.paquet[etat.i];
  if (!m) return;
  etat.connus[m.id] = su;
  stock.ecrire("connus", etat.connus);
  vibrer(su ? 12 : [10, 40, 10]);
  if (etat.aRevoir && su) {
    etat.paquet.splice(etat.i, 1);
    if (etat.i >= etat.paquet.length) afficherFin();
    else afficherCarte();
  } else if (etat.i >= etat.paquet.length - 1) {
    afficherFin();
  } else {
    aller(1);
  }
}
const vibrer = (motif) => { try { navigator.vibrate?.(motif); } catch {} };

$("fin-revoir-btn").addEventListener("click", () => {
  etat.paquet = motsFiltres().filter((x) => etat.connus[x.id] === false);
  etat.i = 0;
  afficherCarte();
});
$("fin-recommencer").addEventListener("click", () => construirePaquet());

// ---------- Synthèse vocale ----------
// Forme pausale (waqf, règle de l'arabe classique) : en fin d'énoncé, on ne prononce ni le tanwîn
// ni la voyelle de cas (بَابٌ → « bāb »). Case « Terminaisons » cochée : lecture complète (« bābun »).
function formePausale(texte) {
  return texte.split(/(\s+|،)/).map((mot) => mot
    .replace(/\u064Bا$/, "ا")                  // ـًا → ـا (« -an » devient « -ā »)
    // tanwîn et voyelle finale (ٌ ٍ ً ُ ِ َ ْ) retirés, en gardant une éventuelle chadda (ّ)
    .replace(/[ً-ْ]+$/, (fin) => (fin.includes("ّ") ? "ّ" : ""))
  ).join("");
}

// Voix : celles de l'appareil + celle de Google (souvent la plus naturelle, nécessite internet)
const GOOGLE = "google";
let voixArabes = [];
function chercherVoix() {
  if (!("speechSynthesis" in window)) return;
  // Arabe classique / standard uniquement : on écarte les voix régionales (ar-EG, ar-MA…) à l'accent dialectal
  voixArabes = speechSynthesis.getVoices().filter((v) => /^ar([-_](SA|001))?$/i.test(v.lang || ""));
  const choix = $("voix");
  const actuel = stock.lire("voix", "");
  choix.innerHTML = `<option value="${GOOGLE}">Google (en ligne)</option>` +
    voixArabes.map((v) => `<option value="${echapper(v.name)}">${echapper(v.name)}</option>`).join("");
  const naturelle = voixArabes.find((v) => /natural|online|neural/i.test(v.name));
  choix.value = [...choix.options].some((o) => o.value === actuel) ? actuel : (naturelle ? naturelle.name : GOOGLE);
}
if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = chercherVoix;

let audioEnCours = null;
function parler(texte, bouton = $("ecouter")) {
  // Retirer les annotations françaises « (m.) » et les séparateurs, puis passer à la forme pausale
  texte = texte.replace(/\([^)]*\)/g, "").replace(/[A-Za-zÀ-ÿ.?؟]/g, "").replace(/\//g, "،").trim();
  if (!$("terminaisons").checked) texte = formePausale(texte);
  const fin = () => bouton.classList.remove("joue");
  bouton.classList.add("joue");
  if (audioEnCours) audioEnCours.pause();
  if ("speechSynthesis" in window) speechSynthesis.cancel();

  const voix = voixArabes.find((v) => v.name === $("voix").value);
  if (voix) {
    const u = new SpeechSynthesisUtterance(texte);
    u.voice = voix; u.lang = voix.lang; u.rate = 0.85;
    u.onend = fin; u.onerror = fin;
    speechSynthesis.speak(u);
    return;
  }
  audioEnCours = new Audio("https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=" + encodeURIComponent(texte));
  audioEnCours.onended = fin;
  audioEnCours.play().catch(() => {
    fin();
    toast(voixArabes.length
      ? "La voix Google ne répond pas. Choisissez une autre voix dans le menu « Voix »."
      : "Aucune voix disponible. Vérifiez la connexion internet, ou ajoutez la langue arabe dans les réglages de synthèse vocale de l'appareil.");
  });
}

const echapper = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function boutonDire(texte) {
  return `<button class="mini" data-dire="${echapper(texte)}" aria-label="Écouter">🔊</button>`;
}
function blocCorrection(m) {
  if (!m.ecrit) return "";
  return `<div class="corr"><b>Corrigé</b> — dans tes notes : <span lang="ar" class="barre-ar">${afficheAr(m.ecrit)}</span><br>${m.corr || ""}</div>`;
}

function toast(msg) {
  const t = $("toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (t.hidden = true), 6000);
}

// ---------- Liste ----------
function afficherListe() {
  const q = sansHarakat($("recherche").value.trim().toLowerCase());
  const lignes = motsFiltres().filter((m) =>
    !q || sansHarakat(m.ar).includes(q) || m.fr.toLowerCase().includes(q) || (m.tr || "").toLowerCase().includes(q));
  const cell = (label, v) => v
    ? `<td class="ar forme" data-label="${label}"><span lang="ar">${afficheAr(v)}</span>${boutonDire(v)}</td>`
    : `<td class="vide"></td>`;
  $("liste-corps").innerHTML = lignes.map((m) => `
    <tr>
      <td class="ar principal"><span lang="ar">${afficheAr(m.ar)}</span>${boutonDire(m.ar)}</td>
      <td class="fr"><button class="mini drapeau" data-signaler="${MOTS.indexOf(m)}" title="Signaler une erreur" aria-label="Signaler une erreur">⚑</button>${m.fr}${m.verifier ? ' <span class="badge">à vérifier</span>' : ""}${m.note ? `<br><small>${afficheAr(m.note)}</small>` : ""}${blocCorrection(m)}</td>
      <td class="tr" data-label="Translit."><i>${m.tr || ""}</i></td>
      ${cell("Masculin", m.m)}${cell("Féminin", m.f)}${cell(m.du_f ? "Duel masc." : "Duel", m.du)}${cell("Duel fém.", m.du_f)}${cell(m.pl_f ? "Pluriel masc." : "Pluriel", m.pl)}${cell("Pluriel fém.", m.pl_f)}
      <td class="meta" data-label="Catégorie">${m.cat}</td>
      <td class="meta" data-label="Cours">${m.cours.join(", ")}</td>
      <td class="src" data-label="Fichier">${m.src.map(nomCourt).join("<br>")}</td>
    </tr>`).join("");
}

// ---------- Remarques ----------
// Chaque remarque est ajoutée en ligne au fichier remarques.csv du dépôt privé
// Aefis/flashcards-arabe-remarques, via l'API GitHub.
// La clé ne donne accès qu'à ce dépôt de remarques (jamais au site). Elle est stockée découpée
// et inversée pour ne pas être prise pour une fuite par les robots de GitHub.
const REMARQUES = {
  depot: "Aefis/flashcards-arabe-remarques",
  fichier: "remarques.csv",
  cle: [""].join("").split("").reverse().join(""), // à remplir avec outils/cle.py
};
let motSignale = null;
// Sans clé, le formulaire ne peut rien enregistrer : on cache les boutons ⚑
if (!REMARQUES.cle) document.documentElement.classList.add("sans-remarques");

const enBase64 = (txt) => btoa(unescape(encodeURIComponent(txt)));
const deBase64 = (b64) => decodeURIComponent(escape(atob(b64.replace(/\s/g, ""))));
const csv = (v) => `"${String(v ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;

function ouvrirRemarque(m) {
  if (!m) return;
  motSignale = m;
  $("remarque-mot").innerHTML = `<span lang="ar" dir="rtl">${m.ar}</span><b>${m.fr}</b><small>${m.cours.join(", ")} · ${m.cat}</small>`;
  $("remarque-texte").value = "";
  $("remarque-correction").value = "";
  $("remarque-aide").hidden = true;
  $("remarque").showModal();
  $("remarque-texte").focus();
}

async function ajouterRemarque(ligne, essais = 4) {
  const url = `https://api.github.com/repos/${REMARQUES.depot}/contents/${REMARQUES.fichier}`;
  const entetes = { Authorization: `Bearer ${REMARQUES.cle}`, Accept: "application/vnd.github+json" };
  const lu = await fetch(url, { headers: entetes, cache: "no-store" });
  if (!lu.ok) throw new Error("lecture " + lu.status);
  const { sha, content } = await lu.json();
  const ecrit = await fetch(url, {
    method: "PUT",
    headers: entetes,
    body: JSON.stringify({
      message: "Nouvelle remarque",
      content: enBase64(deBase64(content).replace(/\n*$/, "\n") + ligne + "\n"),
      sha,
    }),
  });
  // 409 : quelqu'un a écrit en même temps, on relit et on recommence
  if (ecrit.status === 409 && essais > 1) return ajouterRemarque(ligne, essais - 1);
  if (!ecrit.ok) throw new Error("écriture " + ecrit.status);
  // Deux envois à la même milliseconde peuvent s'écraser : on vérifie que la ligne est bien là
  const verif = await fetch(url, { headers: entetes, cache: "no-store" });
  if (verif.ok && !deBase64((await verif.json()).content).includes(ligne)) {
    if (essais > 1) return ajouterRemarque(ligne, essais - 1);
    throw new Error("remarque écrasée");
  }
}

$("remarque-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const m = motSignale;
  const texte = $("remarque-texte").value.trim();
  if (!m || !texte) return;
  const bouton = $("remarque-envoyer");
  bouton.disabled = true; bouton.textContent = "Envoi…";
  const ligne = [
    new Date().toISOString().slice(0, 16).replace("T", " "),
    m.ar, m.fr, $("remarque-type").value, texte, $("remarque-correction").value.trim(),
    m.cours.join(", "), m.cat, m.src.join(" ; "),
  ].map(csv).join(",");
  try {
    if (!REMARQUES.cle) throw new Error("clé absente");
    await ajouterRemarque(ligne);
    $("remarque").close();
    toast("Merci, votre remarque a été enregistrée.");
  } catch {
    $("remarque-aide").hidden = false;
    $("remarque-aide").textContent = "La remarque n'a pas pu être enregistrée. Vérifiez votre connexion et réessayez dans un instant.";
  } finally {
    bouton.disabled = false; bouton.textContent = "Envoyer";
  }
});
$("remarque-annuler").addEventListener("click", () => $("remarque").close());
$("signaler").addEventListener("click", (e) => { e.stopPropagation(); ouvrirRemarque(etat.paquet[etat.i]); });
$("liste-corps").addEventListener("click", (e) => {
  const b = e.target.closest("[data-signaler]");
  if (b) ouvrirRemarque(MOTS[+b.dataset.signaler]);
});

// ---------- Événements ----------
// ---------- Glisser (mobile et souris) ----------
// Toucher = retourner ; glisser à gauche = suivante ; à droite = précédente.
(() => {
  const carte = $("carte");
  let x0 = null, y0 = 0, dx = 0, horizontal = null;

  carte.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button") || (e.pointerType === "mouse" && e.button !== 0)) return;
    x0 = e.clientX; y0 = e.clientY; dx = 0; horizontal = null;
    carte.style.transition = "none";
  });
  carte.addEventListener("pointermove", (e) => {
    if (x0 === null) return;
    dx = e.clientX - x0;
    const dy = e.clientY - y0;
    if (horizontal === null && Math.hypot(dx, dy) > 8) {
      horizontal = Math.abs(dx) > Math.abs(dy);
      if (horizontal) carte.setPointerCapture(e.pointerId);
    }
    if (horizontal) carte.style.transform = `translateX(${dx}px) rotate(${dx / 25}deg)`;
  });
  const fin = (e) => {
    if (x0 === null) return;
    const tap = horizontal === null && e.type === "pointerup";
    x0 = null;
    carte.style.transition = "transform .25s ease, opacity .25s ease";
    if (horizontal && Math.abs(dx) > Math.min(90, carte.offsetWidth / 4) && etat.paquet.length > 1) {
      const sens = dx < 0 ? 1 : -1;
      carte.style.transform = `translateX(${-sens * carte.offsetWidth * 1.2}px) rotate(${-sens * 12}deg)`;
      carte.style.opacity = "0";
      setTimeout(() => {
        aller(sens);
        carte.style.transition = "none";
        carte.style.transform = `translateX(${sens * 40}px)`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          carte.style.transition = "transform .2s ease, opacity .2s ease";
          carte.style.transform = ""; carte.style.opacity = "";
        }));
      }, 200);
    } else {
      carte.style.transform = "";
      if (tap) retourner();
    }
  };
  carte.addEventListener("pointerup", fin);
  carte.addEventListener("pointercancel", fin);
})();

// ---------- Plein écran ----------
function basculerPleinEcran() {
  const actif = !document.body.classList.contains("plein-ecran");
  document.body.classList.toggle("plein-ecran", actif);
  // API Fullscreen si disponible (pas sur iPhone : le mode CSS suffit alors)
  try {
    if (actif && document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (!actif && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  } catch {}
}
$("plein").addEventListener("click", (e) => { e.stopPropagation(); basculerPleinEcran(); });
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) document.body.classList.remove("plein-ecran");
});
$("ecouter").addEventListener("click", (e) => { e.stopPropagation(); const m = etat.paquet[etat.i]; if (m) parler(m.ar); });
$("prec").addEventListener("click", () => aller(-1));
$("suiv").addEventListener("click", () => aller(1));
$("su").addEventListener("click", () => marquer(true));
$("pas-su").addEventListener("click", () => marquer(false));
$("melanger").addEventListener("click", () => construirePaquet(true));
// Confirmation dans la page (les boîtes confirm() sont bloquées dans certains lecteurs)
$("reset").addEventListener("click", () => {
  const b = $("reset");
  if (!b.dataset.confirmer) {
    b.dataset.confirmer = "1";
    b.textContent = "Confirmer : tout effacer ?";
    setTimeout(() => { delete b.dataset.confirmer; b.textContent = "Réinitialiser la progression"; }, 4000);
    return;
  }
  delete b.dataset.confirmer;
  b.textContent = "Réinitialiser la progression";
  etat.connus = {}; stock.ecrire("connus", {}); construirePaquet();
  toast("Progression effacée.");
});

$("ouvrir-reglages").addEventListener("click", () => $("reglages").showModal());
// Toucher le fond grisé ferme le panneau
$("reglages").addEventListener("click", (e) => { if (e.target === $("reglages")) $("reglages").close(); });
$("terminaisons").checked = stock.lire("terminaisons", false);
$("terminaisons").addEventListener("change", (e) => { stock.ecrire("terminaisons", e.target.checked); const m = etat.paquet[etat.i]; if (m) parler(m.ar); });
$("voix").addEventListener("change", (e) => { stock.ecrire("voix", e.target.value); parler(etat.paquet[etat.i]?.ar || "مَرْحَبًا"); });
$("harakat").addEventListener("change", (e) => { etat.harakat = e.target.checked; stock.ecrire("harakat", etat.harakat); majPuces(); afficherCarte(); afficherListe(); });
$("sens").addEventListener("change", (e) => { etat.sens = e.target.value; stock.ecrire("sens", etat.sens); majPuces(); afficherCarte(); });
$("filtre-cat").addEventListener("change", (e) => { etat.cat = e.target.value; stock.ecrire("cat", etat.cat); construirePaquet(); });
$("filtre-cours").addEventListener("change", (e) => { etat.cours = e.target.value; stock.ecrire("cours", etat.cours); construirePaquet(); });
$("a-revoir").addEventListener("change", (e) => { etat.aRevoir = e.target.checked; stock.ecrire("aRevoir", etat.aRevoir); construirePaquet(); });
$("recherche").addEventListener("input", afficherListe);
// Boutons 🔊 des formes (carte et liste) : ne pas retourner la carte
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-dire]");
  if (!b) return;
  e.stopPropagation();
  parler(b.dataset.dire, b);
}, true);

document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("active", x === t));
  $("vue-cartes").hidden = t.dataset.vue !== "cartes";
  $("vue-liste").hidden = t.dataset.vue !== "liste";
}));

document.addEventListener("keydown", (e) => {
  if ($("vue-cartes").hidden || $("remarque").open || $("reglages").open || e.target.matches("input, select, textarea")) return;
  if (!$("fin").hidden) return;
  if (e.key === " ") { e.preventDefault(); retourner(); }
  else if (e.key === "ArrowRight") aller(1);
  else if (e.key === "ArrowLeft") aller(-1);
  else if (e.key.toLowerCase() === "e") $("ecouter").click();
  else if (e.key.toLowerCase() === "f") basculerPleinEcran();
  else if (e.key === "Escape" && document.body.classList.contains("plein-ecran")) basculerPleinEcran();
  else if (e.key === "1") marquer(false);
  else if (e.key === "2") marquer(true);
});

remplirFiltres();
chercherVoix();
construirePaquet();
