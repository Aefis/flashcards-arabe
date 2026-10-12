// =====================================================================
//  BASE DE MOTS — cours d'arabe
//  Chaque ligne = un mot. Colonnes :
//    ar       : le mot en arabe (avec harakat)
//    fr       : traduction française
//    tr       : translittération (facultatif)
//    cat      : catégorie / thème
//    racine   : racine (3 lettres) (facultatif)
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
};

const MOTS = [

  // ---- Verbes ----
  { ar: "كَتَبَ", fr: "écrire (il a écrit)", tr: "kataba", cat: "Verbes", racine: "ك ت ب", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَحَثَ", fr: "chercher (il a cherché)", tr: "baḥatha", cat: "Verbes", racine: "ب ح ث", note: "nom : بَحْثٌ (une recherche)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "فَتَحَ", fr: "ouvrir (il a ouvert)", tr: "fataḥa", cat: "Verbes", racine: "ف ت ح", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "خَرَجَ", fr: "sortir (il est sorti)", tr: "kharadja", cat: "Verbes", racine: "خ ر ج", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "دَخَلَ", fr: "entrer (il est entré)", tr: "dakhala", cat: "Verbes", racine: "د خ ل", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "ذَابَ", fr: "fondre (il a fondu)", tr: "dhāba", cat: "Verbes", racine: "ذ و ب", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "بَرَدَ", fr: "se refroidir", tr: "barada", cat: "Verbes", racine: "ب ر د", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "حَدَّدْتُ", fr: "j'ai précisé", cat: "Verbes", racine: "ح د د", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "أُحِبُّ", fr: "j'aime", cat: "Verbes", racine: "ح ب ب", note: "أَنَا أُحِبُّ = moi, j'aime", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "يَبْنِي", fr: "il construit", cat: "Verbes", racine: "ب ن ي", note: "maçon : بَنَّاءٌ ; passé : بَنَى (il a construit)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "بَنَى", fr: "il a construit", cat: "Verbes", racine: "ب ن ي", note: "présent : يَبْنِي ; maçon : بَنَّاءٌ ; bâtiment : بِنَايَةٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "قَرَأَ", fr: "il a lu", cat: "Verbes", racine: "ق ر أ", note: "أَنْ يَقْرَأَ = (le fait) de lire ; la lecture : القِرَاءَةُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "فَهِمَ", fr: "il a compris", cat: "Verbes", racine: "ف ه م", note: "nom : فَهْمٌ (la compréhension)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "سَمِعَ", fr: "il a entendu, écouté", cat: "Verbes", racine: "س م ع", note: "مَسْمُوعٌ = entendu, écouté", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "طَلَبَ", fr: "il a demandé (réclamé)", cat: "Verbes", racine: "ط ل ب", note: "même racine que طَالِبٌ (étudiant)", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "سَأَلَ", fr: "il a demandé (posé une question)", cat: "Verbes", racine: "س أ ل", note: "سُؤَالٌ = question ; سَائِلٌ = celui qui demande", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "يُحِبُّ", fr: "il aime", cat: "Verbes", racine: "ح ب ب", note: "أُحِبُّ = j'aime", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "أَسْكُنُ", fr: "j'habite", cat: "Verbes", racine: "س ك ن", note: "سَكَنَ = il a habité, habiter", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "قُلْتِ", fr: "tu as dit (à une femme)", cat: "Verbes", racine: "ق و ل", note: "قُلْتَ = tu as dit (à un homme) ; قَالَ = il a dit", ecrit: "ق ا ل", corr: "La racine de قَالَ est ق و ل : le و devient ا au passé (قَالَ), et disparaît dans قُلْتِ.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "صَارَ", fr: "devenir (il est devenu)", cat: "Verbes", racine: "ص ي ر", note: "ص et س : comparer avec سَارَةُ ; صُورَةٌ / سُورَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },

  // ---- Leçon 2 – écriture ----
  { ar: "بَابٌ", fr: "porte", tr: "bābun", cat: "Leçon 2 – écriture", du: "بَابَانِ", pl: "أَبْوَابٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "شَبَابٌ", fr: "jeunesse", tr: "chabābun", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "سَبَبٌ", fr: "cause", tr: "sababun", cat: "Leçon 2 – écriture", du: "سَبَبَانِ", pl: "أَسْبَابٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بِنْتٌ", fr: "fille", tr: "bintun", cat: "Leçon 2 – écriture", du: "بِنْتَانِ", pl: "بَنَاتٌ", note: "masculin : اِبْنٌ (fils), pl. أَبْنَاءٌ ; بِنْتِي = ma fille ; بِنْتٌ جَمِيلَةٌ = une belle fille", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "كِتَابَةٌ", fr: "écriture", tr: "kitābatun", cat: "Leçon 2 – écriture", racine: "ك ت ب", pl: "كِتَابَاتٌ", note: "ة (t fermé) en finale", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "فَتَاةٌ", fr: "jeune fille", tr: "fatātun", cat: "Leçon 2 – écriture", du: "فَتَاتَانِ", pl: "فَتَيَاتٌ", note: "masculin : فَتًى (jeune homme), pl. فِتْيَانٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "تِجَارَةٌ", fr: "commerce", tr: "tidjāratun", cat: "Leçon 2 – écriture", pl: "تِجَارَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "ثَلْجٌ", fr: "neige", tr: "thaldjun", cat: "Leçon 2 – écriture", pl: "ثُلُوجٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "حَبِيبٌ", fr: "ami, bien-aimé", tr: "ḥabībun", cat: "Leçon 2 – écriture", m: "حَبِيبٌ", f: "حَبِيبَةٌ", du: "حَبِيبَانِ", du_f: "حَبِيبَتَانِ", pl: "أَحِبَّاءُ", pl_f: "حَبِيبَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَحْرٌ", fr: "mer", tr: "baḥrun", cat: "Leçon 2 – écriture", du: "بَحْرَانِ", pl: "بِحَارٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَدْرٌ", fr: "pleine lune", tr: "badrun", cat: "Leçon 2 – écriture", pl: "بُدُورٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "بَلَدٌ", fr: "pays", tr: "baladun", cat: "Leçon 2 – écriture", du: "بَلَدَانِ", pl: "بِلَادٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "تَذْكِرَةٌ", fr: "billet, ticket", tr: "tadhkiratun", cat: "Leçon 2 – écriture", du: "تَذْكِرَتَانِ", pl: "تَذَاكِرُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },

  // ---- Exercice d'écriture ----
  { ar: "بَحْثٌ", fr: "recherche (chercher)", cat: "Exercice d'écriture", racine: "ب ح ث", pl: "بُحُوثٌ / أَبْحَاثٌ", note: "verbe : بَحَثَ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "حَثٌّ", fr: "incitation (motiver)", cat: "Exercice d'écriture", racine: "ح ث ث", note: "verbe : حَثَّ (il a incité, motivé)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "ذَبْحٌ", fr: "abattage (abattre)", cat: "Exercice d'écriture", racine: "ذ ب ح", note: "verbe : ذَبَحَ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "تَحَدُّثٌ", fr: "le fait de parler, conversation", cat: "Exercice d'écriture", racine: "ح د ث", note: "verbe : تَحَدَّثَ (il a parlé)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },

  // ---- Loisirs ----
  { ar: "الهِوَايَاتُ", fr: "les loisirs / les hobbies", cat: "Loisirs", note: "singulier : هِوَايَةٌ (un loisir, un hobby)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "القِرَاءَةُ", fr: "la lecture", cat: "Loisirs", racine: "ق ر أ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "الرِّيَاضَةُ", fr: "le sport", cat: "Loisirs", pl: "الرِّيَاضَاتُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "الرَّسْمُ", fr: "le dessin", cat: "Loisirs", pl: "الرُّسُومُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "المُوسِيقَى", fr: "la musique", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "السَّفَرُ", fr: "le voyage", cat: "Loisirs", pl: "الأَسْفَارُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "الطَّبْخُ", fr: "la cuisine", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "السِّبَاحَةُ", fr: "la natation", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "التَّصْوِيرُ", fr: "la photographie", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "السِّينَمَا", fr: "le cinéma", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "هِوَايَةٌ", fr: "loisir, hobby", cat: "Loisirs", du: "هِوَايَتَانِ", pl: "هِوَايَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },

  // ---- Métiers ----
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
  { ar: "بِنَايَةٌ", fr: "bâtiment", cat: "Métiers", du: "بِنَايَتَانِ", pl: "بِنَايَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "كَاتِبٌ", fr: "écrivain(e)", cat: "Métiers", racine: "ك ت ب", m: "كَاتِبٌ", f: "كَاتِبَةٌ", du: "كَاتِبَانِ", du_f: "كَاتِبَتَانِ", pl: "كُتَّابٌ", pl_f: "كَاتِبَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },

  // ---- École et études ----
  { ar: "كِتَابٌ", fr: "livre", cat: "École et études", racine: "ك ت ب", du: "كِتَابَانِ", pl: "كُتُبٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "مَكْتَبٌ", fr: "bureau", cat: "École et études", racine: "ك ت ب", du: "مَكْتَبَانِ", pl: "مَكَاتِبُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "مَكْتَبَةٌ", fr: "bibliothèque, librairie", cat: "École et études", racine: "ك ت ب", du: "مَكْتَبَتَانِ", pl: "مَكْتَبَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "مَدْرَسَةٌ", fr: "école", cat: "École et études", racine: "د ر س", du: "مَدْرَسَتَانِ", pl: "مَدَارِسُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "قَلَمٌ", fr: "stylo", cat: "École et études", du: "قَلَمَانِ", pl: "أَقْلَامٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "دِرَاسَةٌ", fr: "études", cat: "École et études", racine: "د ر س", pl: "دِرَاسَاتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "تَمْرِينُ كِتَابَةٍ", fr: "exercice d'écriture", cat: "École et études", note: "تَمْرِينٌ = exercice, pl. تَمَارِينُ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "فَهْمُ المَقْرُوءِ", fr: "compréhension écrite (de la lecture)", cat: "École et études", racine: "ف ه م", ecrit: "فِهِم مَقْرُوء", corr: "فَهْم se prononce « fahm » : fatha sur le ف, sukun sur le ه. Avec l'article : فَهْمُ المَقْرُوءِ.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "فَهْمُ المَسْمُوعِ", fr: "compréhension orale (de l'écoute)", cat: "École et études", racine: "ف ه م", ecrit: "فِهِم مَسْمُوع", corr: "فَهْم se prononce « fahm » : fatha sur le ف, sukun sur le ه. Avec l'article : فَهْمُ المَسْمُوعِ.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "اللُّغَةُ الفُصْحَى", fr: "l'arabe classique (fuṣḥā)", cat: "École et études", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },

  // ---- Maison ----
  { ar: "دَارٌ", fr: "maison", tr: "dārun", cat: "Maison", du: "دَارَانِ", pl: "دُورٌ", note: "دَارِي = ma maison ; synonymes : بَيْتٌ، مَنْزِلٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "بَيْتٌ", fr: "maison", cat: "Maison", du: "بَيْتَانِ", pl: "بُيُوتٌ", note: "بَيْتِي = ma maison ; synonymes : مَنْزِلٌ، دَارٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "مَنْزِلٌ", fr: "maison, domicile", cat: "Maison", du: "مَنْزِلَانِ", pl: "مَنَازِلُ", note: "مَنْزِلِي = ma maison", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },

  // ---- Personnes ----
  { ar: "وَلَدٌ", fr: "garçon ; fils", cat: "Personnes", du: "وَلَدَانِ", pl: "أَوْلَادٌ", note: "féminin : بِنْتٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "اِمْرَأَةٌ", fr: "femme", cat: "Personnes", du: "اِمْرَأَتَانِ", pl: "نِسَاءٌ", note: "اِمْرَأَةٌ جَمِيلَةٌ = une belle femme ; masculin : رَجُلٌ (homme)", ecrit: "إِمْرَأَة", corr: "اِمْرَأَة commence par une hamzat al-waṣl : pas de hamza (ء) sous l'alif.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },

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

  // ---- Nourriture ----
  { ar: "تَمْرٌ", fr: "dattes", tr: "tamrun", cat: "Nourriture", pl: "تُمُورٌ", note: "nom collectif ; une datte : تَمْرَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "ثَمَرٌ", fr: "fruits", tr: "thamarun", cat: "Nourriture", pl: "ثِمَارٌ", note: "nom collectif ; un fruit : ثَمَرَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "خُوخٌ", fr: "pêches", tr: "khūkhun", cat: "Nourriture", note: "nom collectif ; une pêche : خَوْخَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "مَخْبَزٌ", fr: "boulangerie", cat: "Nourriture", racine: "خ ب ز", pl: "مَخَابِزُ", note: "pain : خُبْزٌ ; boulanger : خَبَّازٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "مَوْزٌ", fr: "bananes", cat: "Nourriture", note: "nom collectif ; une banane : مَوْزَةٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },

  // ---- Animaux ----
  { ar: "جَمَلٌ", fr: "chameau", cat: "Animaux", du: "جَمَلَانِ", pl: "جِمَالٌ", note: "femelle : نَاقَةٌ ; ne pas confondre avec جُمَلٌ (phrases)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "نَاقَةٌ", fr: "chamelle", cat: "Animaux", du: "نَاقَتَانِ", pl: "نُوقٌ", note: "mâle : جَمَلٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "أَسَدٌ", fr: "lion", cat: "Animaux", du: "أَسَدَانِ", pl: "أُسُودٌ", note: "femelle : لَبُؤَةٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "لَبُؤَةٌ", fr: "lionne", cat: "Animaux", du: "لَبُؤَتَانِ", pl: "لَبُؤَاتٌ", note: "mâle : أَسَدٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },

  // ---- Expressions ----
  { ar: "لَدَيْهِ", fr: "il a", cat: "Expressions", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "كَمْ", fr: "combien", cat: "Expressions", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "فَوْقَ", fr: "au-dessus", cat: "Expressions", note: "contraire : تَحْتَ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "تَحْتَ", fr: "en dessous", cat: "Expressions", note: "contraire : فَوْقَ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مَا اسْمُكَ؟", fr: "comment t'appelles-tu ?", cat: "Expressions", m: "مَا اسْمُكَ؟", f: "مَا اسْمُكِ؟", ecrit: "مَا إِسْمُكَ", corr: "اِسْم commence par une hamzat al-waṣl : pas de hamza (ء) sous l'alif.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مِنْ أَيْنَ أَنْتَ؟", fr: "d'où viens-tu ?", cat: "Expressions", m: "مِنْ أَيْنَ أَنْتَ؟", f: "مِنْ أَيْنَ أَنْتِ؟", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "هِيَ", fr: "elle (c'est)", cat: "Expressions", note: "ex. : إِفْرِيقِيَا هِيَ القَارَّةُ… (l'Afrique est le continent…)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "الدَّرْسُ الثَّانِي", fr: "la deuxième leçon", cat: "Expressions", ecrit: "الدَّرْس الثَّنِي", corr: "Il manque l'alif long : ثَانِي (« deuxième »).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "ذَهَبَ إِلَى المَدْرَسَةِ", fr: "il est allé à l'école", cat: "Expressions", note: "ذَهَبَ = il est allé ; إِلَى = vers, à", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "لَا", fr: "non ; ne… pas (devant un verbe)", cat: "Expressions", note: "contraire : نَعَمْ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "نَعَمْ", fr: "oui", cat: "Expressions", note: "contraire : لَا", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "وَ", fr: "et", cat: "Expressions", note: "s'écrit attaché au mot suivant : وَجَمِيلٌ", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "مِنْ", fr: "de (provenance)", cat: "Expressions", note: "ne pas confondre avec مَنْ (qui ?)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "مَنْ", fr: "qui ?", cat: "Expressions", note: "ne pas confondre avec مِنْ (de)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَيْنَ", fr: "où ?", cat: "Expressions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَيْنَ أَنْتَ؟", fr: "où es-tu ?", cat: "Expressions", m: "أَيْنَ أَنْتَ؟", f: "أَيْنَ أَنْتِ؟", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "أَنَا فِي المَدْرَسَةِ", fr: "je suis à l'école", cat: "Expressions", ecrit: "أَنَا فِي المَدْرَس", corr: "École s'écrit avec ة : المَدْرَسَة.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "مَاذَا؟", fr: "quoi ? quel ?", cat: "Expressions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "لِمَاذَا؟", fr: "pourquoi ?", cat: "Expressions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46.jpeg"] },
  { ar: "وَمِنْ ثُمَّ", fr: "et ensuite", cat: "Expressions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "سَوْفَ نَبْنِي كَلِمَاتٍ", fr: "nous allons construire des mots", cat: "Expressions", note: "سَوْفَ + présent = futur", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (3).jpeg"] },
  { ar: "أَتَعَلَّمُ اللُّغَةَ العَرَبِيَّةَ", fr: "j'apprends la langue arabe", cat: "Expressions", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "مِنْ أَجْلِ / لِكَيْ", fr: "pour, afin de", cat: "Expressions", note: "ex. : أَتَعَلَّمُ العَرَبِيَّةَ لِكَيْ… (j'apprends l'arabe pour…)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث"] },
  { ar: "بَيْتٌ كَبِيرٌ وَجَمِيلٌ", fr: "une maison grande et belle", cat: "Expressions", note: "dictée", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَنَا أُحِبُّ بَيْتِي", fr: "j'aime ma maison", cat: "Expressions", note: "dictée", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَنَا أَسْكُنُ فِي بْرُوكْسِل", fr: "j'habite à Bruxelles", cat: "Expressions", note: "dictée", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "أَنَا مِنْ فِلَسْطِينَ", fr: "je viens de Palestine", cat: "Expressions", note: "dictée", ecrit: "فِلِسْتِين", corr: "Palestine s'écrit avec ط et fatha sur le ل : فِلَسْطِين.", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },

  // ---- Grammaire ----
  { ar: "حَرْفٌ", fr: "lettre (de l'alphabet)", cat: "Grammaire", du: "حَرْفَانِ", pl: "حُرُوفٌ / أَحْرُفٌ", note: "deux pluriels : أَحْرُف (petit nombre) et حُرُوف", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "جُمْلَةٌ", fr: "phrase", cat: "Grammaire", du: "جُمْلَتَانِ", pl: "جُمَلٌ", note: "ne pas confondre avec جَمَلٌ (chameau)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "حَرَكَةٌ", fr: "voyelle brève (signe) ; mouvement", cat: "Grammaire", du: "حَرَكَتَانِ", pl: "حَرَكَاتٌ", note: "ce sont les « harakat » du site ; duel complément : حَرَكَتَيْنِ (le ة devient ت, puis ـَيْنِ)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "نُقْطَةٌ", fr: "point", cat: "Grammaire", du: "نُقْطَتَانِ", pl: "نِقَاطٌ", ecrit: "نُقْطَتَيْن", corr: "Le duel « de base » (sujet) se termine en ـَانِ. ـَيْنِ est correct seulement après une préposition ou en complément (ex. : رَأَيْتُ نُقْطَتَيْنِ).", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "هَمْزَةٌ", fr: "hamza (ء)", cat: "Grammaire", du: "هَمْزَتَانِ", pl: "هَمَزَاتٌ", ecrit: "هَمْزَتَيْن", corr: "Le duel « de base » (sujet) se termine en ـَانِ. ـَيْنِ est correct après une préposition ou en complément.", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "كَلِمَةٌ", fr: "mot", cat: "Grammaire", du: "كَلِمَتَانِ", pl: "كَلِمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "صَوْتٌ", fr: "voix, son", cat: "Grammaire", du: "صَوْتَانِ", pl: "أَصْوَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "سُؤَالٌ", fr: "question", cat: "Grammaire", racine: "س أ ل", du: "سُؤَالَانِ", pl: "أَسْئِلَةٌ", note: "verbe : سَأَلَ (il a demandé)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "صُورَةٌ", fr: "photo, image", cat: "Grammaire", du: "صُورَتَانِ", pl: "صُوَرٌ", note: "à ne pas confondre avec سُورَةٌ (sourate)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "سُورَةٌ", fr: "sourate", cat: "Grammaire", du: "سُورَتَانِ", pl: "سُوَرٌ", note: "à ne pas confondre avec صُورَةٌ (photo)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "سَارَةُ", fr: "Sara (prénom)", cat: "Grammaire", note: "ص / س : comparer avec صَارَ", verifier: true, ecrit: "سَار", corr: "Le prénom Sara prend un ة final : سَارَة. Sans ة, سَارَ veut dire « il a marché ».", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مُفْرَدٌ", fr: "singulier", cat: "Grammaire", pl: "مُفْرَدَاتٌ", note: "contraire : جَمْعٌ (pluriel, abrégé ج) ; مُفْرَدَاتٌ = vocabulaire", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "جَمْعٌ", fr: "pluriel", cat: "Grammaire", pl: "جُمُوعٌ", note: "abrégé ج ; contraire : مُفْرَدٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "آ", fr: "alif madda (« ā » avec hamza)", cat: "Grammaire", note: "أَلِفٌ مَمْدُودَةٌ = ءَا", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "هَمْزَةٌ عَلَى كُرْسِيٍّ", fr: "hamza sur un support (kursi)", cat: "Grammaire", note: "ex. : سُؤَالٌ، أَسْئِلَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "شَمْسٌ", fr: "soleil", cat: "Grammaire", pl: "شُمُوسٌ", note: "شَمْسِيٌّ = solaire (lettres solaires) ; mot féminin : شَمْسٌ جَمِيلَةٌ (un beau soleil)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "قَمَرٌ", fr: "lune", cat: "Grammaire", du: "قَمَرَانِ", pl: "أَقْمَارٌ", note: "قَمَرِيٌّ = lunaire (lettres lunaires) ; mot masculin : قَمَرٌ جَمِيلٌ (une belle lune)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني","دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "رِسَالَةٌ", fr: "message, lettre", cat: "Grammaire", du: "رِسَالَتَانِ", pl: "رَسَائِلُ", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },
  { ar: "حَرْفٌ شَمْسِيٌّ", fr: "lettre solaire", cat: "Grammaire", note: "ش هُوَ حَرْفٌ شَمْسِيٌّ ; contraire : حَرْفٌ قَمَرِيٌّ (lettre lunaire)", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "فَتْحَةٌ", fr: "fatha (voyelle « a »)", cat: "Grammaire", note: "signe : ـَ", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "ضَمَّةٌ", fr: "damma (voyelle « u »)", cat: "Grammaire", note: "signe : ـُ", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "كَسْرَةٌ", fr: "kasra (voyelle « i »)", cat: "Grammaire", note: "signe : ـِ", src: ["WhatsApp Image 2026-10-12 at 22.58.46 (4).jpeg"] },
  { ar: "عَكْسٌ", fr: "contraire", cat: "Grammaire", note: "مَا هُوَ العَكْسُ؟ = quel est le contraire ?", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },
  { ar: "لَيْسَ جَمِيلًا", fr: "il n'est pas beau", cat: "Grammaire", note: "négation : لَيْسَ + adjectif ; لَا + verbe au présent ; مَا + verbe au passé", ecrit: "لَيْسَ جَمِيل", corr: "Après لَيْسَ, l'adjectif se met au cas direct (accusatif) : لَيْسَ جَمِيلًا.", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (2).jpeg"] },

  // ---- Continents ----
  { ar: "سَمَاءٌ", fr: "ciel", cat: "Continents", pl: "سَمَاوَاتٌ", note: "hamza seule en fin de mot ; avec شَمْسٌ et قَمَرٌ", verifier: true, src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "قَارَّةٌ", fr: "continent", cat: "Continents", du: "قَارَّتَانِ", pl: "قَارَّاتٌ", note: "سِتُّ قَارَّاتٍ = six continents", ecrit: "سِتَّة قَارَّات", corr: "قَارَّة est féminin : de 3 à 10, le nombre prend le genre inverse → سِتُّ قَارَّاتٍ (et non سِتَّة).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "إِفْرِيقِيَا", fr: "Afrique", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "آسِيَا", fr: "Asie", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أُسْتُرَالِيَا", fr: "Australie (Océanie)", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أُورُوبَّا", fr: "Europe", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أَمْرِيكَا الشَّمَالِيَّةُ", fr: "Amérique du Nord", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "أَمْرِيكَا الجَنُوبِيَّةُ", fr: "Amérique du Sud", cat: "Continents", note: "aussi : أَمْرِيكَا اللَّاتِينِيَّةُ (Amérique latine)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg","دروس اللغّة العربيّة مع رغد.docx#الدرس الثاني"] },
  { ar: "أَنْتَارْكْتِيكَا", fr: "Antarctique", cat: "Continents", verifier: true, ecrit: "أَطْلِيتِكَا", corr: "Nom usuel : أَنْتَارْكْتِيكَا, ou القَارَّةُ القُطْبِيَّةُ الجَنُوبِيَّةُ (le continent du pôle Sud).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },

  // ---- Pays arabes ----
  { ar: "دَوْلَةٌ", fr: "pays, État", cat: "Pays arabes", du: "دَوْلَتَانِ", pl: "دُوَلٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "اِثْنَتَانِ وَعِشْرُونَ دَوْلَةً", fr: "vingt-deux pays", cat: "Pays arabes", ecrit: "إِثْنَيْن وَعِشْرُون دَوْلَة", corr: "Pas de hamza : اِثْنَتَانِ commence par une hamzat al-waṣl. دَوْلَة est féminin → اِثْنَتَانِ (et non اِثْنَانِ/اِثْنَيْنِ). Après 11 à 99, le nom se met au singulier avec tanwîn fatha : دَوْلَةً. La forme en ـَيْنِ/ـِينَ s'emploie en complément (ex. : فِي اثْنَتَيْنِ وَعِشْرِينَ دَوْلَةً).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "جَامِعَةُ الدُّوَلِ العَرَبِيَّةِ", fr: "la Ligue des États arabes", cat: "Pays arabes", note: "جَامِعَة = ligue, union (aussi : université)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "جَامِعٌ", fr: "mosquée", cat: "Pays arabes", du: "جَامِعَانِ", pl: "جَوَامِعُ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
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

  // ---- Pays et villes ----
  { ar: "بَلْجِيكَا", fr: "Belgique", cat: "Pays et villes", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
  { ar: "بْرُوكْسِل", fr: "Bruxelles", cat: "Pays et villes", note: "aussi écrit : بْرُوكْسِيل", src: ["دروس اللغّة العربيّة مع رغد.docx#الدرس الثالث","WhatsApp Image 2026-10-12 at 22.58.46 (1).jpeg"] },
];
