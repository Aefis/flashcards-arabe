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
  afficherCarte();
  afficherListe();
}

// ---------- Carte ----------
function afficherCarte() {
  const carte = $("carte");
  carte.classList.remove("retournee");
  const m = etat.paquet[etat.i];
  const nbSus = etat.paquet.filter((x) => etat.connus[x.id] === true).length;

  if (!m) {
    $("recto-mot").className = "mot fr";
    $("recto-mot").textContent = etat.aRevoir ? "Bravo, plus rien à revoir 🎉" : "Aucun mot";
    $("compteur").textContent = "";
    $("verso-mot").textContent = "";
    return;
  }
  $("compteur").textContent = `${etat.i + 1} / ${etat.paquet.length} · ${nbSus} su(s)` +
    (etat.connus[m.id] === true ? " · ✓ connu" : etat.connus[m.id] === false ? " · à revoir" : "");

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
  const lignes = [["Masculin", m.m], ["Féminin", m.f], ["Duel", m.du], ["Pluriel", m.pl]]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><th>${k}</th><td lang="ar">${afficheAr(v)}</td><td>${boutonDire(v)}</td></tr>`);
  $("verso-formes").innerHTML = lignes.join("");
  $("verso-note").innerHTML = (m.note ? afficheAr(m.note) : "") +
    (m.verifier ? ` <span class="badge">lecture à vérifier</span>` : "");
  $("verso-corr").innerHTML = blocCorrection(m);
  $("verso-src").textContent = m.cours.join(" · ") + " — " + m.cat + " — " + m.src.map(nomCourt).join(" · ");
}

function retourner() { if (etat.paquet.length) $("carte").classList.toggle("retournee"); }
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
  if (etat.aRevoir && su) {
    etat.paquet.splice(etat.i, 1);
    if (etat.i >= etat.paquet.length) etat.i = 0;
    afficherCarte();
  } else {
    aller(1);
  }
}

// ---------- Synthèse vocale ----------
let voixArabe = null;
function chercherVoix() {
  const voix = speechSynthesis.getVoices().filter((v) => v.lang && v.lang.toLowerCase().startsWith("ar"));
  // Préférer les voix "naturelles"/en ligne (Edge) qui lisent mieux les harakat
  voixArabe = voix.find((v) => /natural|online/i.test(v.name)) || voix[0] || null;
}
if ("speechSynthesis" in window) {
  chercherVoix();
  speechSynthesis.onvoiceschanged = chercherVoix;
}

let audioSecours = null;
function parler(texte, bouton = $("ecouter")) {
  // Toujours prononcer avec harakat ; retirer les annotations françaises « (m.) », « / »
  texte = texte.replace(/\([^)]*\)/g, "").replace(/[A-Za-zÀ-ÿ.?؟]/g, "").replace(/\//g, "،").trim();
  const fin = () => bouton.classList.remove("joue");
  bouton.classList.add("joue");

  if (voixArabe) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.voice = voixArabe; u.lang = voixArabe.lang; u.rate = 0.8;
    u.onend = fin; u.onerror = fin;
    speechSynthesis.speak(u);
    return;
  }
  // Secours : voix de Google Traduction (nécessite internet)
  if (audioSecours) audioSecours.pause();
  audioSecours = new Audio("https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=" + encodeURIComponent(texte));
  audioSecours.onended = fin;
  audioSecours.play().catch(() => {
    fin();
    toast("Aucune voix arabe trouvée sur cet appareil. Sur PC : utilisez Microsoft Edge. Sur téléphone : ajoutez la langue arabe dans les réglages de synthèse vocale.");
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
      <td class="fr">${m.fr}${m.verifier ? ' <span class="badge">à vérifier</span>' : ""}${m.note ? `<br><small>${afficheAr(m.note)}</small>` : ""}${blocCorrection(m)}</td>
      <td class="tr" data-label="Translit."><i>${m.tr || ""}</i></td>
      ${cell("Masculin", m.m)}${cell("Féminin", m.f)}${cell("Duel", m.du)}${cell("Pluriel", m.pl)}
      <td class="meta" data-label="Catégorie">${m.cat}</td>
      <td class="meta" data-label="Cours">${m.cours.join(", ")}</td>
      <td class="src" data-label="Fichier">${m.src.map(nomCourt).join("<br>")}</td>
    </tr>`).join("");
}

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

$("harakat").addEventListener("change", (e) => { etat.harakat = e.target.checked; stock.ecrire("harakat", etat.harakat); afficherCarte(); afficherListe(); });
$("sens").addEventListener("change", (e) => { etat.sens = e.target.value; stock.ecrire("sens", etat.sens); afficherCarte(); });
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
  if ($("vue-cartes").hidden || e.target.matches("input, select")) return;
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
construirePaquet();
