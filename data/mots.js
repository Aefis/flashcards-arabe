// =====================================================================
//  BASE DE MOTS — cours d'arabe
//  Chaque ligne = un mot. Colonnes :
//    ar       : le mot en arabe (avec harakat)
//    fr       : traduction française
//    tr       : translittération (facultatif)
//    cat      : catégorie / thème
//    racine   : racine (3 lettres) (facultatif)
//    pres     : verbes : présent (il…) ; pour un verbe, ar = passé « il a… » et fr = infinitif
//    m, f     : masculin / féminin (facultatif)
//    du       : duel (facultatif)
//    pl       : pluriel (facultatif)
//    note     : remarque (facultatif)
//    verifier : true si la lecture de la photo est incertaine
//    ecrit    : orthographe trouvée dans les notes, quand elle a été corrigée
//    corr     : explication de la correction
//    src      : fichier(s) d'où vient le mot
//               (le cours est déduit via FICHIERS_TRAITES)
//  Les formes (f, du, pl) non écrites sur les photos ont été complétées
//  selon la grammaire standard.
// =====================================================================

// Fichiers déjà traités par l'extraction (même ceux sans mots retenus),
// avec le cours auquel ils appartiennent.
// Un document qui couvre plusieurs cours est enregistré par section : "fichier#section".
const FICHIERS_TRAITES = {
  "WhatsApp Image 2026-10-09 at 13.32.50.jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.51.jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg": "Cours 2",
  "WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg": "Cours 1",
  "WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg": "Cours 1",
  "WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg": "Cours 1",
  "دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني": "Cours 2",
  "دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث": "Cours 3",
  "WhatsApp Image 2026-10-12 at 22.58.46.jpeg": "Cours 3",
  "WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg": "Cours 3",
  "WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg": "Cours 3",
  "WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg": "Cours 3",
  "WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg": "Cours 3",
  "WhatsApp Image 2026-11-03 at 21.00.26.jpeg": "Cours 4",
  "WhatsApp Image 2026-11-03 at 21.00.27.jpeg": "Cours 4",
  "WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg": "Cours 4",
  "WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg": "Cours 4",
  "WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg": "Cours 4",
  "WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg": "Cours 4",
  "WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg": "Cours 4",
};

const MOTS = [

  // ---- Verbes ----
  { ar: "كَتَبَ", fr: "écrire", tr: "kataba", cat: "Verbes", racine: "ك ت ب", pres: "يَكْتُبُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَحَثَ", fr: "chercher", tr: "baḥatha", cat: "Verbes", racine: "ب ح ث", pres: "يَبْحَثُ", note: "nom : بَحْثٌ (une recherche)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "فَتَحَ", fr: "ouvrir", tr: "fataḥa", cat: "Verbes", racine: "ف ت ح", pres: "يَفْتَحُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "خَرَجَ", fr: "sortir", tr: "kharadja", cat: "Verbes", racine: "خ ر ج", pres: "يَخْرُجُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "دَخَلَ", fr: "entrer", tr: "dakhala", cat: "Verbes", racine: "د خ ل", pres: "يَدْخُلُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "ذَابَ", fr: "fondre", tr: "dhāba", cat: "Verbes", racine: "ذ و ب", pres: "يَذُوبُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "بَرَدَ", fr: "se refroidir", tr: "barada", cat: "Verbes", racine: "ب ر د", pres: "يَبْرُدُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "حَدَّدَ", fr: "préciser, fixer", cat: "Verbes", racine: "ح د د", pres: "يُحَدِّدُ", note: "vu en cours : حَدَّدْتُ = j'ai précisé ; racine ح د د : حَدٌّ = limite", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "أَحَبَّ", fr: "aimer", cat: "Verbes", racine: "ح ب ب", pres: "يُحِبُّ", note: "vu en cours : أَنَا أُحِبُّ = moi, j'aime", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "بَنَى", fr: "construire", cat: "Verbes", racine: "ب ن ي", pres: "يَبْنِي", note: "maçon : بَنَّاءٌ ; bâtiment : بِنَايَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "قَرَأَ", fr: "lire", cat: "Verbes", racine: "ق ر أ", pres: "يَقْرَأُ", note: "أَنْ يَقْرَأَ = (le fait) de lire ; la lecture : القِرَاءَةُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "فَهِمَ", fr: "comprendre", cat: "Verbes", racine: "ف ه م", pres: "يَفْهَمُ", note: "nom : فَهْمٌ (la compréhension)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "سَمِعَ", fr: "entendre, écouter", cat: "Verbes", racine: "س م ع", pres: "يَسْمَعُ", note: "مَسْمُوعٌ = entendu, écouté", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "طَلَبَ", fr: "demander (réclamer)", cat: "Verbes", racine: "ط ل ب", pres: "يَطْلُبُ", note: "même racine que طَالِبٌ (étudiant)", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "سَأَلَ", fr: "demander (poser une question)", cat: "Verbes", racine: "س أ ل", pres: "يَسْأَلُ", note: "سُؤَالٌ = question ; سَائِلٌ = celui qui demande", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "سَكَنَ", fr: "habiter", cat: "Verbes", racine: "س ك ن", pres: "يَسْكُنُ", note: "vu en cours : أَسْكُنُ = j'habite", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "قَالَ", fr: "dire", cat: "Verbes", racine: "ق و ل", pres: "يَقُولُ", note: "vu en cours : قُلْتِ = tu as dit (à une femme) ; قُلْتَ = tu as dit (à un homme)", ecrit: "ق ا ل", corr: "La racine de قَالَ est ق و ل : le و devient ا au passé (قَالَ), et disparaît dans قُلْتِ.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "صَارَ", fr: "devenir", cat: "Verbes", racine: "ص ي ر", pres: "يَصِيرُ", note: "ص et س : comparer avec سَارَةُ ; صُورَةٌ / سُورَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "رَجَعَ", fr: "revenir, rentrer", cat: "Verbes", racine: "ر ج ع", pres: "يَرْجِعُ", note: "même racine : مُرَاجَعَةٌ (révision)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "لَبِسَ", fr: "porter (un vêtement), s'habiller", cat: "Verbes", racine: "ل ب س", pres: "يَلْبَسُ", note: "vu en cours : يَلْبَسُ النَّاسُ = les gens portent", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "تَرْجَمَ", fr: "traduire", cat: "Verbes", racine: "ت ر ج م", pres: "يُتَرْجِمُ", note: "verbe à 4 lettres ; la traduction : تَرْجَمَةٌ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "دَرَسَ", fr: "étudier", cat: "Verbes", racine: "د ر س", pres: "يَدْرُسُ", note: "vu en cours : سَنَدْرُسُ = nous allons étudier ; même racine : دَرْسٌ, مَدْرَسَةٌ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg"] },

  // ---- Personnes ----
  { ar: "شَبَابٌ", fr: "jeunesse", tr: "chabābun", cat: "Personnes", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بِنْتٌ", fr: "fille", tr: "bintun", cat: "Personnes", du: "بِنْتَانِ", pl: "بَنَاتٌ", note: "masculin : اِبْنٌ (fils), pl. أَبْنَاءٌ ; بِنْتِي = ma fille ; بِنْتٌ جَمِيلَةٌ = une belle fille", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "فَتَاةٌ", fr: "jeune fille", tr: "fatātun", cat: "Personnes", du: "فَتَاتَانِ", pl: "فَتَيَاتٌ", note: "masculin : فَتًى (jeune homme), pl. فِتْيَانٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "حَبِيبٌ", fr: "ami, bien-aimé", tr: "ḥabībun", cat: "Personnes", m: "حَبِيبٌ", f: "حَبِيبَةٌ", du: "حَبِيبَانِ", du_f: "حَبِيبَتَانِ", pl: "أَحِبَّاءُ", pl_f: "حَبِيبَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "وَلَدٌ", fr: "garçon ; fils", cat: "Personnes", du: "وَلَدَانِ", pl: "أَوْلَادٌ", note: "féminin : بِنْتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "اِمْرَأَةٌ", fr: "femme", cat: "Personnes", du: "اِمْرَأَتَانِ", pl: "نِسَاءٌ", note: "اِمْرَأَةٌ جَمِيلَةٌ = une belle femme ; masculin : رَجُلٌ (homme)", ecrit: "إِمْرَأَة", corr: "اِمْرَأَة commence par une hamzat al-waṣl : pas de hamza (ء) sous l'alif.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "سَارَةُ", fr: "Sara (prénom)", cat: "Personnes", note: "ص / س : comparer avec صَارَ", verifier: true, ecrit: "سَار", corr: "Le prénom Sara prend un ة final : سَارَة. Sans ة, سَارَ veut dire « il a marché ».", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "النَّاسُ", fr: "les gens", cat: "Personnes", note: "s'accorde au masculin pluriel : النَّاسُ يَلْبَسُونَ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },

  // ---- Métiers ----
  { ar: "تِجَارَةٌ", fr: "commerce", tr: "tidjāratun", cat: "Métiers", pl: "تِجَارَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "مُعَلِّمٌ", fr: "enseignant(e)", cat: "Métiers", m: "مُعَلِّمٌ", f: "مُعَلِّمَةٌ", du: "مُعَلِّمَانِ", du_f: "مُعَلِّمَتَانِ", pl: "مُعَلِّمُونَ", pl_f: "مُعَلِّمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "أُسْتَاذٌ", fr: "professeur(e)", cat: "Métiers", m: "أُسْتَاذٌ", f: "أُسْتَاذَةٌ", du: "أُسْتَاذَانِ", du_f: "أُسْتَاذَتَانِ", pl: "أَسَاتِذَةٌ", pl_f: "أُسْتَاذَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "طَبِيبٌ", fr: "médecin", cat: "Métiers", m: "طَبِيبٌ", f: "طَبِيبَةٌ", du: "طَبِيبَانِ", du_f: "طَبِيبَتَانِ", pl: "أَطِبَّاءُ", pl_f: "طَبِيبَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "بَنَّاءٌ", fr: "maçon", cat: "Métiers", du: "بَنَّاءَانِ", pl: "بَنَّاؤُونَ", note: "de يَبْنِي (il construit)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "مُهَنْدِسٌ", fr: "ingénieur(e)", cat: "Métiers", m: "مُهَنْدِسٌ", f: "مُهَنْدِسَةٌ", du: "مُهَنْدِسَانِ", du_f: "مُهَنْدِسَتَانِ", pl: "مُهَنْدِسُونَ", pl_f: "مُهَنْدِسَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "شُرْطِيٌّ", fr: "policier / policière", cat: "Métiers", m: "شُرْطِيٌّ", f: "شُرْطِيَّةٌ", du: "شُرْطِيَّانِ", du_f: "شُرْطِيَّتَانِ", pl: "شُرْطِيُّونَ", pl_f: "شُرْطِيَّاتٌ", note: "la police : الشُّرْطَةُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "مُصَمِّمٌ", fr: "designer", cat: "Métiers", m: "مُصَمِّمٌ", f: "مُصَمِّمَةٌ", du: "مُصَمِّمَانِ", du_f: "مُصَمِّمَتَانِ", pl: "مُصَمِّمُونَ", pl_f: "مُصَمِّمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "جُنْدِيٌّ", fr: "soldat", cat: "Métiers", m: "جُنْدِيٌّ", f: "جُنْدِيَّةٌ", du: "جُنْدِيَّانِ", du_f: "جُنْدِيَّتَانِ", pl: "جُنُودٌ", pl_f: "جُنْدِيَّاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "حَارِسٌ", fr: "gardien", cat: "Métiers", m: "حَارِسٌ", f: "حَارِسَةٌ", du: "حَارِسَانِ", du_f: "حَارِسَتَانِ", pl: "حُرَّاسٌ", pl_f: "حَارِسَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "طَالِبٌ", fr: "étudiant(e)", cat: "Métiers", racine: "ط ل ب", m: "طَالِبٌ", f: "طَالِبَةٌ", du: "طَالِبَانِ", du_f: "طَالِبَتَانِ", pl: "طُلَّابٌ", pl_f: "طَالِبَاتٌ", note: "autre pluriel masculin : طَلَبَةٌ ; même racine que طَلَبَ (il a demandé)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "تِلْمِيذٌ", fr: "élève", cat: "Métiers", m: "تِلْمِيذٌ", f: "تِلْمِيذَةٌ", du: "تِلْمِيذَانِ", du_f: "تِلْمِيذَتَانِ", pl: "تَلَامِيذُ", pl_f: "تِلْمِيذَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "مُسْتَشَارٌ", fr: "conseiller, consultant", cat: "Métiers", m: "مُسْتَشَارٌ", f: "مُسْتَشَارَةٌ", du: "مُسْتَشَارَانِ", du_f: "مُسْتَشَارَتَانِ", pl: "مُسْتَشَارُونَ", pl_f: "مُسْتَشَارَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "كَاتِبٌ", fr: "écrivain(e)", cat: "Métiers", racine: "ك ت ب", m: "كَاتِبٌ", f: "كَاتِبَةٌ", du: "كَاتِبَانِ", du_f: "كَاتِبَتَانِ", pl: "كُتَّابٌ", pl_f: "كَاتِبَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },

  // ---- École et études ----
  { ar: "كِتَابَةٌ", fr: "écriture", tr: "kitābatun", cat: "École et études", racine: "ك ت ب", pl: "كِتَابَاتٌ", note: "ة (t fermé) en finale", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "بَحْثٌ", fr: "recherche (chercher)", cat: "École et études", racine: "ب ح ث", pl: "بُحُوثٌ / أَبْحَاثٌ", note: "verbe : بَحَثَ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "كِتَابٌ", fr: "livre", cat: "École et études", racine: "ك ت ب", du: "كِتَابَانِ", pl: "كُتُبٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "مَكْتَبٌ", fr: "bureau", cat: "École et études", racine: "ك ت ب", du: "مَكْتَبَانِ", pl: "مَكَاتِبُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "مَكْتَبَةٌ", fr: "bibliothèque, librairie", cat: "École et études", racine: "ك ت ب", du: "مَكْتَبَتَانِ", pl: "مَكْتَبَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "مَدْرَسَةٌ", fr: "école", cat: "École et études", racine: "د ر س", du: "مَدْرَسَتَانِ", pl: "مَدَارِسُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "قَلَمٌ", fr: "stylo", cat: "École et études", du: "قَلَمَانِ", pl: "أَقْلَامٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "دِرَاسَةٌ", fr: "études", cat: "École et études", racine: "د ر س", pl: "دِرَاسَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "تَمْرِينُ كِتَابَةٍ", fr: "exercice d'écriture", cat: "École et études", note: "تَمْرِينٌ = exercice, pl. تَمَارِينُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "فَهْمُ المَقْرُوءِ", fr: "compréhension écrite (de la lecture)", cat: "École et études", racine: "ف ه م", ecrit: "فِهِم مَقْرُوء", corr: "فَهْم se prononce « fahm » : fatha sur le ف, sukun sur le ه. Avec l'article : فَهْمُ المَقْرُوءِ.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "فَهْمُ المَسْمُوعِ", fr: "compréhension orale (de l'écoute)", cat: "École et études", racine: "ف ه م", ecrit: "فِهِم مَسْمُوع", corr: "فَهْم se prononce « fahm » : fatha sur le ف, sukun sur le ه. Avec l'article : فَهْمُ المَسْمُوعِ.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "اللُّغَةُ الفُصْحَى", fr: "l'arabe classique (fuṣḥā)", cat: "École et études", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "الدَّرْسُ الثَّانِي", fr: "la deuxième leçon", cat: "École et études", ecrit: "الدَّرْس الثَّنِي", corr: "Il manque l'alif long : ثَانِي (« deuxième »).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "دَرْسٌ", fr: "leçon, cours", cat: "École et études", racine: "د ر س", du: "دَرْسَانِ", pl: "دُرُوسٌ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "مُرَاجَعَةٌ", fr: "révision, répétition", cat: "École et études", racine: "ر ج ع", pl: "مُرَاجَعَاتٌ", note: "de رَجَعَ (revenir) : revenir sur la leçon", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "تَرْجَمَةٌ", fr: "traduction", cat: "École et études", pl: "تَرْجَمَاتٌ", note: "verbe : تَرْجَمَ – يُتَرْجِمُ (traduire)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },

  // ---- Langue et grammaire ----
  { ar: "تَحَدُّثٌ", fr: "le fait de parler, conversation", cat: "Langue et grammaire", racine: "ح د ث", note: "verbe : تَحَدَّثَ (il a parlé)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "حَرْفٌ", fr: "lettre (de l'alphabet)", cat: "Langue et grammaire", du: "حَرْفَانِ", pl: "حُرُوفٌ / أَحْرُفٌ", note: "deux pluriels : أَحْرُف (petit nombre) et حُرُوف", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "جُمْلَةٌ", fr: "phrase", cat: "Langue et grammaire", du: "جُمْلَتَانِ", pl: "جُمَلٌ", note: "ne pas confondre avec جَمَلٌ (chameau)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "حَرَكَةٌ", fr: "voyelle brève (signe) ; mouvement", cat: "Langue et grammaire", du: "حَرَكَتَانِ", pl: "حَرَكَاتٌ", note: "ce sont les « harakat » du site ; duel complément : حَرَكَتَيْنِ (le ة devient ت, puis ـَيْنِ)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "نُقْطَةٌ", fr: "point", cat: "Langue et grammaire", du: "نُقْطَتَانِ", pl: "نِقَاطٌ", ecrit: "نُقْطَتَيْن", corr: "Le duel « de base » (sujet) se termine en ـَانِ. ـَيْنِ est correct seulement après une préposition ou en complément (ex. : رَأَيْتُ نُقْطَتَيْنِ).", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "هَمْزَةٌ", fr: "hamza (ء)", cat: "Langue et grammaire", du: "هَمْزَتَانِ", pl: "هَمَزَاتٌ", ecrit: "هَمْزَتَيْن", corr: "Le duel « de base » (sujet) se termine en ـَانِ. ـَيْنِ est correct après une préposition ou en complément.", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "كَلِمَةٌ", fr: "mot", cat: "Langue et grammaire", du: "كَلِمَتَانِ", pl: "كَلِمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "صَوْتٌ", fr: "voix, son", cat: "Langue et grammaire", du: "صَوْتَانِ", pl: "أَصْوَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "سُؤَالٌ", fr: "question", cat: "Langue et grammaire", racine: "س أ ل", du: "سُؤَالَانِ", pl: "أَسْئِلَةٌ", note: "verbe : سَأَلَ (il a demandé)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "مُفْرَدٌ", fr: "singulier", cat: "Langue et grammaire", pl: "مُفْرَدَاتٌ", note: "contraire : جَمْعٌ (pluriel, abrégé ج) ; مُفْرَدَاتٌ = vocabulaire", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "جَمْعٌ", fr: "pluriel", cat: "Langue et grammaire", pl: "جُمُوعٌ", note: "abrégé ج ; contraire : مُفْرَدٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "آ", fr: "alif madda (« ā » avec hamza)", cat: "Langue et grammaire", note: "أَلِفٌ مَمْدُودَةٌ = ءَا", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "هَمْزَةٌ عَلَى كُرْسِيٍّ", fr: "hamza sur un support (kursi)", cat: "Langue et grammaire", note: "ex. : سُؤَالٌ، أَسْئِلَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "حَرْفٌ شَمْسِيٌّ", fr: "lettre solaire", cat: "Langue et grammaire", note: "ش هُوَ حَرْفٌ شَمْسِيٌّ ; contraire : حَرْفٌ قَمَرِيٌّ (lettre lunaire)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "فَتْحَةٌ", fr: "fatha (voyelle « a »)", cat: "Langue et grammaire", note: "signe : ـَ", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "ضَمَّةٌ", fr: "damma (voyelle « u »)", cat: "Langue et grammaire", note: "signe : ـُ", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "كَسْرَةٌ", fr: "kasra (voyelle « i »)", cat: "Langue et grammaire", note: "signe : ـِ", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "عَكْسٌ", fr: "contraire", cat: "Langue et grammaire", note: "مَا هُوَ العَكْسُ؟ = quel est le contraire ?", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "سُكُونٌ", fr: "soukoun (absence de voyelle, signe ـْ)", cat: "Langue et grammaire", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "يَلْبَسُ النَّاسُ / النَّاسُ يَلْبَسُونَ", fr: "les gens portent (s'habillent)", cat: "Langue et grammaire", note: "verbe avant le sujet : toujours au singulier (يَلْبَسُ) ; verbe après le sujet : accordé au pluriel (يَلْبَسُونَ)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },

  // ---- Maison et ville ----
  { ar: "بَابٌ", fr: "porte", tr: "bābun", cat: "Maison et ville", du: "بَابَانِ", pl: "أَبْوَابٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بِنَايَةٌ", fr: "bâtiment", cat: "Maison et ville", du: "بِنَايَتَانِ", pl: "بِنَايَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "دَارٌ", fr: "maison (دَار)", tr: "dārun", cat: "Maison et ville", du: "دَارَانِ", pl: "دُورٌ", note: "دَارِي = ma maison ; synonymes : بَيْتٌ، مَنْزِلٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "بَيْتٌ", fr: "maison (بَيْت)", cat: "Maison et ville", du: "بَيْتَانِ", pl: "بُيُوتٌ", note: "بَيْتِي = ma maison ; synonymes : مَنْزِلٌ، دَارٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "مَنْزِلٌ", fr: "maison, domicile", cat: "Maison et ville", du: "مَنْزِلَانِ", pl: "مَنَازِلُ", note: "مَنْزِلِي = ma maison", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "مَخْبَزٌ", fr: "boulangerie", cat: "Maison et ville", racine: "خ ب ز", pl: "مَخَابِزُ", note: "pain : خُبْزٌ ; boulanger : خَبَّازٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "جَامِعٌ", fr: "mosquée", cat: "Maison et ville", du: "جَامِعَانِ", pl: "جَوَامِعُ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },

  // ---- Objets ----
  { ar: "تَذْكِرَةٌ", fr: "billet, ticket", tr: "tadhkiratun", cat: "Objets", du: "تَذْكِرَتَانِ", pl: "تَذَاكِرُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "صُورَةٌ", fr: "photo, image", cat: "Objets", du: "صُورَتَانِ", pl: "صُوَرٌ", note: "à ne pas confondre avec سُورَةٌ (sourate)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "رِسَالَةٌ", fr: "message, lettre", cat: "Objets", du: "رِسَالَتَانِ", pl: "رَسَائِلُ", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },

  // ---- Nourriture ----
  { ar: "تَمْرٌ", fr: "dattes", tr: "tamrun", cat: "Nourriture", pl: "تُمُورٌ", note: "nom collectif ; une datte : تَمْرَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "ثَمَرٌ", fr: "fruits", tr: "thamarun", cat: "Nourriture", pl: "ثِمَارٌ", note: "nom collectif ; un fruit : ثَمَرَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "خُوخٌ", fr: "pêches", tr: "khūkhun", cat: "Nourriture", note: "nom collectif ; une pêche : خَوْخَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "مَوْزٌ", fr: "bananes", cat: "Nourriture", note: "nom collectif ; une banane : مَوْزَةٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },

  // ---- Animaux ----
  { ar: "جَمَلٌ", fr: "chameau", cat: "Animaux", du: "جَمَلَانِ", pl: "جِمَالٌ", note: "femelle : نَاقَةٌ ; ne pas confondre avec جُمَلٌ (phrases)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "نَاقَةٌ", fr: "chamelle", cat: "Animaux", du: "نَاقَتَانِ", pl: "نُوقٌ", note: "mâle : جَمَلٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "أَسَدٌ", fr: "lion", cat: "Animaux", du: "أَسَدَانِ", pl: "أُسُودٌ", note: "femelle : لَبُؤَةٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "لَبُؤَةٌ", fr: "lionne", cat: "Animaux", du: "لَبُؤَتَانِ", pl: "لَبُؤَاتٌ", note: "mâle : أَسَدٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },

  // ---- Vêtements ----
  { ar: "مِعْطَفٌ", fr: "manteau", cat: "Vêtements", du: "مِعْطَفَانِ", pl: "مَعَاطِفُ", ecrit: "مَعْطَف", corr: "Le م prend une kasra : مِعْطَفٌ (mi‘ṭaf).", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "شُورْتٌ", fr: "short", cat: "Vêtements", note: "mot emprunté à l'anglais", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },

  // ---- Nature ----
  { ar: "ثَلْجٌ", fr: "neige", tr: "thaldjun", cat: "Nature", pl: "ثُلُوجٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَحْرٌ", fr: "mer", tr: "baḥrun", cat: "Nature", du: "بَحْرَانِ", pl: "بِحَارٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَدْرٌ", fr: "pleine lune", tr: "badrun", cat: "Nature", pl: "بُدُورٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "شَمْسٌ", fr: "soleil", cat: "Nature", pl: "شُمُوسٌ", note: "شَمْسِيٌّ = solaire (lettres solaires) ; mot féminin : شَمْسٌ جَمِيلَةٌ (un beau soleil)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "قَمَرٌ", fr: "lune", cat: "Nature", du: "قَمَرَانِ", pl: "أَقْمَارٌ", note: "قَمَرِيٌّ = lunaire (lettres lunaires) ; mot masculin : قَمَرٌ جَمِيلٌ (une belle lune)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "سَمَاءٌ", fr: "ciel", cat: "Nature", pl: "سَمَاوَاتٌ", note: "hamza seule en fin de mot ; avec شَمْسٌ et قَمَرٌ", verifier: true, src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },

  // ---- Temps et saisons ----
  { ar: "فَصْلٌ", fr: "saison", cat: "Temps et saisons", du: "فَصْلَانِ", pl: "فُصُولٌ", note: "veut aussi dire : trimestre, période ; classe (salle)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg","WhatsApp Image 2026-11-03 at 21.00.26.jpeg","WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "فُصُولُ السَّنَةِ", fr: "les saisons de l'année", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg"] },
  { ar: "سَنَةٌ", fr: "année, an", cat: "Temps et saisons", du: "سَنَتَانِ", pl: "سَنَوَاتٌ / سِنُونَ", note: "سِنِينَ (dans les notes) = سِنُونَ après une préposition ou en complément", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg"] },
  { ar: "شَهْرٌ", fr: "mois", cat: "Temps et saisons", du: "شَهْرَانِ", pl: "شُهُورٌ / أَشْهُرٌ", note: "de 3 à 10, on préfère أَشْهُرٌ : ثَلَاثَةُ أَشْهُرٍ", src: ["WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "الشِّتَاءُ", fr: "l'hiver", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "الرَّبِيعُ", fr: "le printemps", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "الصَّيْفُ", fr: "l'été", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "الخَرِيفُ", fr: "l'automne", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "الصَّبَاحُ", fr: "le matin", cat: "Temps et saisons", note: "فِي الصَّبَاحِ = le matin ; صَبَاحُ الخَيْرِ = bonjour", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "الظُّهْرُ", fr: "midi", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "بَعْدَ الظُّهْرِ", fr: "l'après-midi", cat: "Temps et saisons", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "المَغْرِبُ", fr: "le coucher du soleil", cat: "Temps et saisons", note: "le même mot désigne aussi le Maroc (l'Occident, là où le soleil se couche)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "المَسَاءُ", fr: "le soir", cat: "Temps et saisons", note: "مَسَاءُ الخَيْرِ = bonsoir", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "اللَّيْلُ", fr: "la nuit", cat: "Temps et saisons", note: "une nuit : لَيْلَةٌ, pl. لَيَالٍ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "لَيْلَةٌ", fr: "une nuit (une soirée)", cat: "Temps et saisons", du: "لَيْلَتَانِ", pl: "لَيَالٍ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },

  // ---- Nombres ----
  { ar: "وَاحِدٌ", fr: "un (1)", cat: "Nombres", m: "وَاحِدٌ", f: "وَاحِدَةٌ", note: "ordinal : الأَوَّلُ (le premier)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "اِثْنَانِ", fr: "deux (2)", cat: "Nombres", m: "اِثْنَانِ", f: "اِثْنَتَانِ", ecrit: "إِثْنَيْن", corr: "Pas de hamza : le alif est un alif de liaison (اِثْنَانِ). اِثْنَيْنِ est la forme après une préposition ou en complément ; la forme de base est اِثْنَانِ.", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "ثَلَاثَةٌ", fr: "trois (3)", cat: "Nombres", m: "ثَلَاثَةٌ", f: "ثَلَاثٌ", note: "avec un nom masculin, le nombre prend ة : ثَلَاثَةُ شُهُورٍ (trois mois)", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg","WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "أَرْبَعَةٌ", fr: "quatre (4)", cat: "Nombres", m: "أَرْبَعَةٌ", f: "أَرْبَعٌ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "الأَوَّلُ", fr: "le premier", cat: "Nombres", m: "الأَوَّلُ", f: "الأُولَى", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "الثَّانِي", fr: "le deuxième", cat: "Nombres", m: "الثَّانِي", f: "الثَّانِيَةُ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "الثَّالِثُ", fr: "le troisième", cat: "Nombres", m: "الثَّالِثُ", f: "الثَّالِثَةُ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "الرَّابِعُ", fr: "le quatrième", cat: "Nombres", m: "الرَّابِعُ", f: "الرَّابِعَةُ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },

  // ---- Adjectifs ----
  { ar: "كَثِيرٌ", fr: "nombreux", tr: "kathīrun", cat: "Adjectifs", m: "كَثِيرٌ", f: "كَثِيرَةٌ", du: "كَثِيرَانِ", du_f: "كَثِيرَتَانِ", pl: "كَثِيرُونَ", pl_f: "كَثِيرَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "جَمِيلٌ", fr: "beau", tr: "djamīlun", cat: "Adjectifs", m: "جَمِيلٌ", f: "جَمِيلَةٌ", du: "جَمِيلَانِ", du_f: "جَمِيلَتَانِ", pl: "جَمِيلُونَ", pl_f: "جَمِيلَاتٌ", note: "contraire : بَشِعٌ / شَنِيعٌ ; l'adjectif s'accorde : بِنْتٌ جَمِيلَةٌ، قَمَرٌ جَمِيلٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "لَذِيذٌ", fr: "doux, agréable (délicieux)", tr: "ladhīdhun", cat: "Adjectifs", m: "لَذِيذٌ", f: "لَذِيذَةٌ", du: "لَذِيذَانِ", du_f: "لَذِيذَتَانِ", pl: "لَذِيذُونَ", pl_f: "لَذِيذَاتٌ", note: "pour des choses au pluriel, on accorde au féminin singulier : فَوَاكِهُ لَذِيذَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "كَبِيرٌ", fr: "grand", cat: "Adjectifs", m: "كَبِيرٌ", f: "كَبِيرَةٌ", du: "كَبِيرَانِ", du_f: "كَبِيرَتَانِ", pl: "كِبَارٌ", pl_f: "كَبِيرَاتٌ", note: "contraire : صَغِيرٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "صَغِيرٌ", fr: "petit", cat: "Adjectifs", m: "صَغِيرٌ", f: "صَغِيرَةٌ", du: "صَغِيرَانِ", du_f: "صَغِيرَتَانِ", pl: "صِغَارٌ", pl_f: "صَغِيرَاتٌ", note: "contraire : كَبِيرٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "بَشِعٌ", fr: "laid", cat: "Adjectifs", m: "بَشِعٌ", f: "بَشِعَةٌ", note: "contraire : جَمِيلٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "شَنِيعٌ", fr: "affreux, horrible", cat: "Adjectifs", m: "شَنِيعٌ", f: "شَنِيعَةٌ", note: "contraire : جَمِيلٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },

  // ---- Sentiments ----
  { ar: "حُبٌّ", fr: "amour", cat: "Sentiments", racine: "ح ب ب", note: "الحُبُّ = l'amour", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "مَحَبَّةٌ", fr: "affection, amour", cat: "Sentiments", racine: "ح ب ب", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },

  // ---- Loisirs ----
  { ar: "القِرَاءَةُ", fr: "la lecture", cat: "Loisirs", racine: "ق ر أ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "الرِّيَاضَةُ", fr: "le sport", cat: "Loisirs", pl: "الرِّيَاضَاتُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "الرَّسْمُ", fr: "le dessin", cat: "Loisirs", pl: "الرُّسُومُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "المُوسِيقَى", fr: "la musique", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "السَّفَرُ", fr: "le voyage", cat: "Loisirs", pl: "الأَسْفَارُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "الطَّبْخُ", fr: "la cuisine", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "السِّبَاحَةُ", fr: "la natation", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "التَّصْوِيرُ", fr: "la photographie", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "السِّينَمَا", fr: "le cinéma", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "هِوَايَةٌ", fr: "loisir, hobby", cat: "Loisirs", du: "هِوَايَتَانِ", pl: "هِوَايَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },

  // ---- Petits mots et questions ----
  { ar: "لَدَيْهِ", fr: "il a", cat: "Petits mots et questions", note: "synonyme : عِنْدَهُ", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "كَمْ", fr: "combien", cat: "Petits mots et questions", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg","WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "فَوْقَ", fr: "au-dessus", cat: "Petits mots et questions", note: "contraire : تَحْتَ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "تَحْتَ", fr: "en dessous", cat: "Petits mots et questions", note: "contraire : فَوْقَ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "هِيَ", fr: "elle (c'est)", cat: "Petits mots et questions", note: "ex. : إِفْرِيقِيَا هِيَ القَارَّةُ… (l'Afrique est le continent…)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "لَا", fr: "non ; ne… pas (devant un verbe)", cat: "Petits mots et questions", note: "contraire : نَعَمْ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "نَعَمْ", fr: "oui", cat: "Petits mots et questions", note: "contraire : لَا", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "وَ", fr: "et", cat: "Petits mots et questions", note: "s'écrit attaché au mot suivant : وَجَمِيلٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "مِنْ", fr: "de (provenance)", cat: "Petits mots et questions", note: "ne pas confondre avec مَنْ (qui ?)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "مَنْ", fr: "qui ?", cat: "Petits mots et questions", note: "ne pas confondre avec مِنْ (de)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَيْنَ", fr: "où ?", cat: "Petits mots et questions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "مَاذَا؟", fr: "quoi ? quel ?", cat: "Petits mots et questions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "لِمَاذَا؟", fr: "pourquoi ?", cat: "Petits mots et questions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "وَمِنْ ثُمَّ", fr: "et ensuite", cat: "Petits mots et questions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "مِنْ أَجْلِ / لِكَيْ", fr: "pour, afin de", cat: "Petits mots et questions", note: "ex. : أَتَعَلَّمُ العَرَبِيَّةَ لِكَيْ… (j'apprends l'arabe pour…)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "كُلُّ", fr: "chaque ; tout", cat: "Petits mots et questions", note: "كُلُّ فَصْلٍ = chaque saison", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg","WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "أَمَّا … فَـ", fr: "quant à … ; par contre", cat: "Petits mots et questions", note: "opposé à لَكِنْ dans les notes ; أَمَّا فِي الصَّيْفِ فَيَلْبَسُونَ… = l'été, par contre, ils portent…", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "لَكِنْ", fr: "mais", cat: "Petits mots et questions", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "قَبْلَ", fr: "avant", cat: "Petits mots et questions", note: "contraire : بَعْدَ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "بَعْدَ", fr: "après", cat: "Petits mots et questions", note: "contraire : قَبْلَ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "أَيُّ؟", fr: "quel ? lequel ?", cat: "Petits mots et questions", note: "أَيُّ فَصْلٍ؟ = quelle saison ?", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "عِنْدَهُ", fr: "il a (chez lui)", cat: "Petits mots et questions", note: "synonyme : لَدَيْهِ", src: ["WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "الآنَ", fr: "maintenant", cat: "Petits mots et questions", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "اليَوْمَ", fr: "aujourd'hui", cat: "Petits mots et questions", note: "اليَوْمُ = le jour", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },

  // ---- Phrases ----
  { ar: "مَا اسْمُكَ؟", fr: "comment t'appelles-tu ?", cat: "Phrases", m: "مَا اسْمُكَ؟", f: "مَا اسْمُكِ؟", ecrit: "مَا إِسْمُكَ", corr: "اِسْم commence par une hamzat al-waṣl : pas de hamza (ء) sous l'alif.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مِنْ أَيْنَ أَنْتَ؟", fr: "d'où viens-tu ?", cat: "Phrases", m: "مِنْ أَيْنَ أَنْتَ؟", f: "مِنْ أَيْنَ أَنْتِ؟", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "ذَهَبَ إِلَى المَدْرَسَةِ", fr: "il est allé à l'école", cat: "Phrases", note: "ذَهَبَ = il est allé ; إِلَى = vers, à", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "أَيْنَ أَنْتَ؟", fr: "où es-tu ?", cat: "Phrases", m: "أَيْنَ أَنْتَ؟", f: "أَيْنَ أَنْتِ؟", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "أَنَا فِي المَدْرَسَةِ", fr: "je suis à l'école", cat: "Phrases", ecrit: "أَنَا فِي المَدْرَس", corr: "École s'écrit avec ة : المَدْرَسَة.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "سَوْفَ نَبْنِي كَلِمَاتٍ", fr: "nous allons construire des mots", cat: "Phrases", note: "سَوْفَ + présent = futur", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "أَتَعَلَّمُ اللُّغَةَ العَرَبِيَّةَ", fr: "j'apprends la langue arabe", cat: "Phrases", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "بَيْتٌ كَبِيرٌ وَجَمِيلٌ", fr: "une maison grande et belle", cat: "Phrases", note: "dictée", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَنَا أُحِبُّ بَيْتِي", fr: "j'aime ma maison", cat: "Phrases", note: "dictée", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَنَا أَسْكُنُ فِي بْرُوكْسِل", fr: "j'habite à Bruxelles", cat: "Phrases", note: "dictée", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَنَا مِنْ فِلَسْطِينَ", fr: "je viens de Palestine", cat: "Phrases", note: "dictée", ecrit: "فِلِسْتِين", corr: "Palestine s'écrit avec ط et fatha sur le ل : فِلَسْطِين.", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "لَيْسَ جَمِيلًا", fr: "il n'est pas beau", cat: "Phrases", note: "négation : لَيْسَ + adjectif ; لَا + verbe au présent ; مَا + verbe au passé", ecrit: "لَيْسَ جَمِيل", corr: "Après لَيْسَ, l'adjectif se met au cas direct (accusatif) : لَيْسَ جَمِيلًا.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "صَبَاحُ الخَيْرِ", fr: "bonjour (le matin)", cat: "Phrases", note: "réponse : صَبَاحُ النُّورِ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "مَسَاءُ الخَيْرِ", fr: "bonsoir", cat: "Phrases", note: "réponse : مَسَاءُ النُّورِ", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "تُصْبِحُونَ عَلَى خَيْرٍ", fr: "bonne nuit", cat: "Phrases", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (1).jpeg"] },
  { ar: "اليَوْمَ هُوَ الدَّرْسُ الرَّابِعُ", fr: "aujourd'hui, c'est la quatrième leçon", cat: "Phrases", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (5).jpeg"] },
  { ar: "سَنَدْرُسُ فُصُولَ السَّنَةِ", fr: "nous allons étudier les saisons de l'année", cat: "Phrases", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (3).jpeg"] },
  { ar: "أَيُّ فَصْلٍ؟", fr: "quelle saison ?", cat: "Phrases", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "الآنَ هُوَ فَصْلُ الخَرِيفِ", fr: "maintenant, c'est l'automne", cat: "Phrases", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
  { ar: "كُلُّ فَصْلٍ عِنْدَهُ كَمْ شَهْرًا؟", fr: "chaque saison a combien de mois ?", cat: "Phrases", note: "après كَمْ, le nom est au singulier et à l'accusatif : شَهْرًا", src: ["WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "ثَلَاثَةُ شُهُورٍ", fr: "trois mois", cat: "Phrases", note: "on dit aussi ثَلَاثَةُ أَشْهُرٍ", src: ["WhatsApp Image 2026-11-03 at 21.00.27.jpeg"] },
  { ar: "فِي الصَّبَاحِ يَلْبَسُ النَّاسُ قَبْلَ الخُرُوجِ إِلَى المَدْرَسَةِ", fr: "le matin, les gens s'habillent avant de partir à l'école", cat: "Phrases", note: "dictée", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "فِي فَصْلِ الشِّتَاءِ يَلْبَسُ النَّاسُ المِعْطَفَ، أَمَّا فِي فَصْلِ الصَّيْفِ فَيَلْبَسُونَ الشُّورْتَ", fr: "en hiver, les gens portent un manteau ; en été, par contre, ils portent un short", cat: "Phrases", note: "dictée", ecrit: "فَيَلْبَسْنَ", corr: "النَّاسُ est masculin pluriel : فَيَلْبَسُونَ. يَلْبَسْنَ est le féminin pluriel (« elles portent »).", src: ["WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },

  // ---- Pays arabes ----
  { ar: "دَوْلَةٌ", fr: "pays, État", cat: "Pays arabes", du: "دَوْلَتَانِ", pl: "دُوَلٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "اِثْنَتَانِ وَعِشْرُونَ دَوْلَةً", fr: "vingt-deux pays", cat: "Pays arabes", ecrit: "إِثْنَيْن وَعِشْرُون دَوْلَة", corr: "Pas de hamza : اِثْنَتَانِ commence par une hamzat al-waṣl. دَوْلَة est féminin → اِثْنَتَانِ (et non اِثْنَانِ/اِثْنَيْنِ). Après 11 à 99, le nom se met au singulier avec tanwîn fatha : دَوْلَةً. La forme en ـَيْنِ/ـِينَ s'emploie en complément (ex. : فِي اثْنَتَيْنِ وَعِشْرِينَ دَوْلَةً).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "جَامِعَةُ الدُّوَلِ العَرَبِيَّةِ", fr: "la Ligue des États arabes", cat: "Pays arabes", note: "جَامِعَة = ligue, union (aussi : université)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "المَغْرِبُ العَرَبِيُّ", fr: "le Maghreb arabe", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "مُورِيتَانِيَا", fr: "Mauritanie", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "السُّودَانُ", fr: "Soudan", cat: "Pays arabes", ecrit: "سُودَان", corr: "Le nom du pays prend l'article : السُّودَان.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "مِصْرُ", fr: "Égypte", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "المَغْرِبُ", fr: "Maroc", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "تُونِسُ", fr: "Tunisie", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "لِيبْيَا", fr: "Libye", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "السُّعُودِيَّةُ", fr: "Arabie saoudite", cat: "Pays arabes", ecrit: "سُعُودِيَّا", corr: "On écrit السُّعُودِيَّة avec ة (nom complet : المَمْلَكَةُ العَرَبِيَّةُ السُّعُودِيَّةُ).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "الجَزَائِرُ", fr: "Algérie", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "فِلَسْطِينُ", fr: "Palestine", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "سُورِيَا", fr: "Syrie", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "لُبْنَانُ", fr: "Liban", cat: "Pays arabes", ecrit: "لِبْنَان", corr: "Voyelle : لُبْنَان, avec damma sur le lam (lubnān).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "اليَمَنُ", fr: "Yémen", cat: "Pays arabes", ecrit: "يَمَن", corr: "Le nom du pays prend l'article : اليَمَن.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "العِرَاقُ", fr: "Irak", cat: "Pays arabes", ecrit: "عِرَاق", corr: "Le nom du pays prend l'article : العِرَاق.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "عُمَانُ", fr: "Oman", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "الأُرْدُنُّ", fr: "Jordanie", cat: "Pays arabes", ecrit: "أُرْدُن", corr: "Le nom du pays prend l'article : الأُرْدُنّ.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "البَحْرَيْنُ", fr: "Bahreïn", cat: "Pays arabes", ecrit: "بَحْرَيْن", corr: "Le nom du pays prend l'article : البَحْرَيْن.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "الصُّومَالُ", fr: "Somalie", cat: "Pays arabes", ecrit: "صُومَال", corr: "Le nom du pays prend l'article : الصُّومَال.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "الإِمَارَاتُ العَرَبِيَّةُ المُتَّحِدَةُ", fr: "Émirats arabes unis", cat: "Pays arabes", ecrit: "إِمَارَات", corr: "Nom avec l'article : الإِمَارَاتُ (العَرَبِيَّةُ المُتَّحِدَةُ).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "الكُوَيْتُ", fr: "Koweït", cat: "Pays arabes", ecrit: "كُوَيْت", corr: "Le nom du pays prend l'article : الكُوَيْت.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "قَطَرُ", fr: "Qatar", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "جُزُرُ القَمَرِ", fr: "Comores", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "جِيبُوتِي", fr: "Djibouti", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },

  // ---- Continents et pays du monde ----
  { ar: "بَلَدٌ", fr: "pays", tr: "baladun", cat: "Continents et pays du monde", du: "بَلَدَانِ", pl: "بِلَادٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "قَارَّةٌ", fr: "continent", cat: "Continents et pays du monde", du: "قَارَّتَانِ", pl: "قَارَّاتٌ", note: "سِتُّ قَارَّاتٍ = six continents", ecrit: "سِتَّة قَارَّات", corr: "قَارَّة est féminin : de 3 à 10, le nombre prend le genre inverse → سِتُّ قَارَّاتٍ (et non سِتَّة).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "إِفْرِيقِيَا", fr: "Afrique", cat: "Continents et pays du monde", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "آسِيَا", fr: "Asie", cat: "Continents et pays du monde", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أُسْتُرَالِيَا", fr: "Australie (Océanie)", cat: "Continents et pays du monde", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أُورُوبَّا", fr: "Europe", cat: "Continents et pays du monde", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أَمْرِيكَا الشَّمَالِيَّةُ", fr: "Amérique du Nord", cat: "Continents et pays du monde", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "أَمْرِيكَا الجَنُوبِيَّةُ", fr: "Amérique du Sud", cat: "Continents et pays du monde", note: "aussi : أَمْرِيكَا اللَّاتِينِيَّةُ (Amérique latine)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "أَنْتَارْكْتِيكَا", fr: "Antarctique", cat: "Continents et pays du monde", verifier: true, ecrit: "أَطْلِيتِكَا", corr: "Nom usuel : أَنْتَارْكْتِيكَا, ou القَارَّةُ القُطْبِيَّةُ الجَنُوبِيَّةُ (le continent du pôle Sud).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "بَلْجِيكَا", fr: "Belgique", cat: "Continents et pays du monde", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (4).jpeg"] },
  { ar: "بْرُوكْسِل", fr: "Bruxelles", cat: "Continents et pays du monde", note: "aussi écrit : بْرُوكْسِيل", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },

  // ---- Autres mots ----
  { ar: "سَبَبٌ", fr: "cause", tr: "sababun", cat: "Autres mots", du: "سَبَبَانِ", pl: "أَسْبَابٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "حَثٌّ", fr: "incitation (motiver)", cat: "Autres mots", racine: "ح ث ث", note: "verbe : حَثَّ (il a incité, motivé)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "ذَبْحٌ", fr: "abattage (abattre)", cat: "Autres mots", racine: "ذ ب ح", note: "verbe : ذَبَحَ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "سُورَةٌ", fr: "sourate", cat: "Autres mots", du: "سُورَتَانِ", pl: "سُوَرٌ", note: "à ne pas confondre avec صُورَةٌ (photo)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "الخُرُوجُ", fr: "la sortie (le fait de sortir)", cat: "Autres mots", racine: "خ ر ج", note: "verbe : خَرَجَ ; contraire : الدُّخُولُ", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg","WhatsApp Image 2026-11-03 at 21.00.27 (2).jpeg"] },
  { ar: "الدُّخُولُ", fr: "l'entrée (le fait d'entrer)", cat: "Autres mots", racine: "د خ ل", note: "verbe : دَخَلَ ; contraire : الخُرُوجُ", src: ["WhatsApp Image 2026-11-03 at 21.00.26.jpeg"] },
];
