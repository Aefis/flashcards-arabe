// =====================================================================
//  BASE DE MOTS — cours d'arabe
//  Chaque ligne = un mot. Colonnes :
//    ar       : le mot en arabe (avec harakat)
//    fr       : traduction française
//    tr       : translittération (facultatif)
//    cat      : catégorie / thème
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
};

const MOTS = [

  // ---- Leçon 2 – écriture ----
  { ar: "بَابٌ", fr: "porte", tr: "bābun", cat: "Leçon 2 – écriture", du: "بَابَانِ", pl: "أَبْوَابٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "شَبَابٌ", fr: "jeunesse", tr: "chabābun", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "سَبَبٌ", fr: "cause", tr: "sababun", cat: "Leçon 2 – écriture", du: "سَبَبَانِ", pl: "أَسْبَابٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "تَمْرٌ", fr: "dattes", tr: "tamrun", cat: "Leçon 2 – écriture", pl: "تُمُورٌ", note: "nom collectif ; une datte : تَمْرَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "كَتَبَ", fr: "écrire (il a écrit)", tr: "kataba", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بِنْتٌ", fr: "fille", tr: "bintun", cat: "Leçon 2 – écriture", du: "بِنْتَانِ", pl: "بَنَاتٌ", note: "masculin : اِبْنٌ (fils), pl. أَبْنَاءٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "كِتَابَةٌ", fr: "écriture", tr: "kitābatun", cat: "Leçon 2 – écriture", pl: "كِتَابَاتٌ", note: "ة (t fermé) en finale", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "فَتَاةٌ", fr: "jeune fille", tr: "fatātun", cat: "Leçon 2 – écriture", du: "فَتَاتَانِ", pl: "فَتَيَاتٌ", note: "masculin : فَتًى (jeune homme), pl. فِتْيَانٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "ثَمَرٌ", fr: "fruits", tr: "thamarun", cat: "Leçon 2 – écriture", pl: "ثِمَارٌ", note: "nom collectif ; un fruit : ثَمَرَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "كَثِيرٌ", fr: "nombreux", tr: "kathīrun", cat: "Leçon 2 – écriture", m: "كَثِيرٌ", f: "كَثِيرَةٌ", du: "كَثِيرَانِ", du_f: "كَثِيرَتَانِ", pl: "كَثِيرُونَ", pl_f: "كَثِيرَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَحَثَ", fr: "chercher (il a cherché)", tr: "baḥatha", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "جَمِيلٌ", fr: "beau", tr: "djamīlun", cat: "Leçon 2 – écriture", m: "جَمِيلٌ", f: "جَمِيلَةٌ", du: "جَمِيلَانِ", du_f: "جَمِيلَتَانِ", pl: "جَمِيلُونَ", pl_f: "جَمِيلَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "تِجَارَةٌ", fr: "commerce", tr: "tidjāratun", cat: "Leçon 2 – écriture", pl: "تِجَارَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "ثَلْجٌ", fr: "neige", tr: "thaldjun", cat: "Leçon 2 – écriture", pl: "ثُلُوجٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "حَبِيبٌ", fr: "ami, bien-aimé", tr: "ḥabībun", cat: "Leçon 2 – écriture", m: "حَبِيبٌ", f: "حَبِيبَةٌ", du: "حَبِيبَانِ", du_f: "حَبِيبَتَانِ", pl: "أَحِبَّاءُ", pl_f: "حَبِيبَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "بَحْرٌ", fr: "mer", tr: "baḥrun", cat: "Leçon 2 – écriture", du: "بَحْرَانِ", pl: "بِحَارٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "فَتَحَ", fr: "ouvrir (il a ouvert)", tr: "fataḥa", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (1).jpeg"] },
  { ar: "خَرَجَ", fr: "sortir (il est sorti)", tr: "kharadja", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "دَخَلَ", fr: "entrer (il est entré)", tr: "dakhala", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "خُوخٌ", fr: "pêches", tr: "khūkhun", cat: "Leçon 2 – écriture", note: "nom collectif ; une pêche : خَوْخَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "دَارٌ", fr: "maison", tr: "dārun", cat: "Leçon 2 – écriture", du: "دَارَانِ", pl: "دُورٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "بَدْرٌ", fr: "pleine lune", tr: "badrun", cat: "Leçon 2 – écriture", pl: "بُدُورٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "بَلَدٌ", fr: "pays", tr: "baladun", cat: "Leçon 2 – écriture", du: "بَلَدَانِ", pl: "بِلَادٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "ذَابَ", fr: "fondre (il a fondu)", tr: "dhāba", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "تَذْكِرَةٌ", fr: "billet, ticket", tr: "tadhkiratun", cat: "Leçon 2 – écriture", du: "تَذْكِرَتَانِ", pl: "تَذَاكِرُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "لَذِيذٌ", fr: "doux, agréable (délicieux)", tr: "ladhīdhun", cat: "Leçon 2 – écriture", m: "لَذِيذٌ", f: "لَذِيذَةٌ", du: "لَذِيذَانِ", du_f: "لَذِيذَتَانِ", pl: "لَذِيذُونَ", pl_f: "لَذِيذَاتٌ", note: "pour des choses au pluriel, on accorde au féminin singulier : فَوَاكِهُ لَذِيذَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },
  { ar: "بَرَدَ", fr: "se refroidir", tr: "barada", cat: "Leçon 2 – écriture", src: ["WhatsApp Image 2026-10-09 at 13.32.50.jpeg"] },

  // ---- Loisirs ----
  { ar: "الهِوَايَاتُ", fr: "les loisirs / les hobbies", cat: "Loisirs", note: "singulier : هِوَايَةٌ (un loisir, un hobby)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "القِرَاءَةُ", fr: "la lecture", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "الرِّيَاضَةُ", fr: "le sport", cat: "Loisirs", pl: "الرِّيَاضَاتُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "الرَّسْمُ", fr: "le dessin", cat: "Loisirs", pl: "الرُّسُومُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "المُوسِيقَى", fr: "la musique", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "السَّفَرُ", fr: "le voyage", cat: "Loisirs", pl: "الأَسْفَارُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "الطَّبْخُ", fr: "la cuisine", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "السِّبَاحَةُ", fr: "la natation", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "التَّصْوِيرُ", fr: "la photographie", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "السِّينَمَا", fr: "le cinéma", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },
  { ar: "أُحِبُّ", fr: "j'aime", cat: "Loisirs", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (2).jpeg"] },

  // ---- Métiers ----
  { ar: "مُعَلِّمٌ", fr: "enseignant(e)", cat: "Métiers", m: "مُعَلِّمٌ", f: "مُعَلِّمَةٌ", du: "مُعَلِّمَانِ", du_f: "مُعَلِّمَتَانِ", pl: "مُعَلِّمُونَ", pl_f: "مُعَلِّمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "أُسْتَاذٌ", fr: "professeur(e)", cat: "Métiers", m: "أُسْتَاذٌ", f: "أُسْتَاذَةٌ", du: "أُسْتَاذَانِ", du_f: "أُسْتَاذَتَانِ", pl: "أَسَاتِذَةٌ", pl_f: "أُسْتَاذَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "طَبِيبٌ", fr: "médecin", cat: "Métiers", m: "طَبِيبٌ", f: "طَبِيبَةٌ", du: "طَبِيبَانِ", du_f: "طَبِيبَتَانِ", pl: "أَطِبَّاءُ", pl_f: "طَبِيبَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "بَنَّاءٌ", fr: "maçon", cat: "Métiers", du: "بَنَّاءَانِ", pl: "بَنَّاؤُونَ", note: "de يَبْنِي (il construit)", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "مُهَنْدِسٌ", fr: "ingénieur(e)", cat: "Métiers", m: "مُهَنْدِسٌ", f: "مُهَنْدِسَةٌ", du: "مُهَنْدِسَانِ", du_f: "مُهَنْدِسَتَانِ", pl: "مُهَنْدِسُونَ", pl_f: "مُهَنْدِسَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "شُرْطِيٌّ", fr: "policier / policière", cat: "Métiers", m: "شُرْطِيٌّ", f: "شُرْطِيَّةٌ", du: "شُرْطِيَّانِ", du_f: "شُرْطِيَّتَانِ", pl: "شُرْطِيُّونَ", pl_f: "شُرْطِيَّاتٌ", note: "la police : الشُّرْطَةُ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "مُصَمِّمٌ", fr: "designer", cat: "Métiers", m: "مُصَمِّمٌ", f: "مُصَمِّمَةٌ", du: "مُصَمِّمَانِ", du_f: "مُصَمِّمَتَانِ", pl: "مُصَمِّمُونَ", pl_f: "مُصَمِّمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "جُنْدِيٌّ", fr: "soldat", cat: "Métiers", m: "جُنْدِيٌّ", f: "جُنْدِيَّةٌ", du: "جُنْدِيَّانِ", du_f: "جُنْدِيَّتَانِ", pl: "جُنُودٌ", pl_f: "جُنْدِيَّاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "حَارِسٌ", fr: "gardien", cat: "Métiers", m: "حَارِسٌ", f: "حَارِسَةٌ", du: "حَارِسَانِ", du_f: "حَارِسَتَانِ", pl: "حُرَّاسٌ", pl_f: "حَارِسَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "طَالِبٌ", fr: "étudiant(e)", cat: "Métiers", m: "طَالِبٌ", f: "طَالِبَةٌ", du: "طَالِبَانِ", du_f: "طَالِبَتَانِ", pl: "طُلَّابٌ", pl_f: "طَالِبَاتٌ", note: "autre pluriel masculin : طَلَبَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },
  { ar: "تِلْمِيذٌ", fr: "élève", cat: "Métiers", m: "تِلْمِيذٌ", f: "تِلْمِيذَةٌ", du: "تِلْمِيذَانِ", du_f: "تِلْمِيذَتَانِ", pl: "تَلَامِيذُ", pl_f: "تِلْمِيذَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg"] },
  { ar: "مُسْتَشَارٌ", fr: "conseiller, consultant", cat: "Métiers", m: "مُسْتَشَارٌ", f: "مُسْتَشَارَةٌ", du: "مُسْتَشَارَانِ", du_f: "مُسْتَشَارَتَانِ", pl: "مُسْتَشَارُونَ", pl_f: "مُسْتَشَارَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.50 (3).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "بِنَايَةٌ", fr: "bâtiment", cat: "Métiers", du: "بِنَايَتَانِ", pl: "بِنَايَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "يَبْنِي", fr: "il construit", cat: "Métiers", note: "maçon : بَنَّاءٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },

  // ---- Expressions ----
  { ar: "لَدَيْهِ", fr: "il a", cat: "Expressions", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },
  { ar: "كَمْ", fr: "combien", cat: "Expressions", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },
  { ar: "فَوْقَ", fr: "au-dessus", cat: "Expressions", note: "contraire : تَحْتَ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "تَحْتَ", fr: "en dessous", cat: "Expressions", note: "contraire : فَوْقَ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مَا اسْمُكَ؟", fr: "comment t'appelles-tu ?", cat: "Expressions", m: "مَا اسْمُكَ؟", f: "مَا اسْمُكِ؟", ecrit: "مَا إِسْمُكَ", corr: "اِسْم commence par une hamzat al-waṣl : pas de hamza (ء) sous l'alif.", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مِنْ أَيْنَ أَنْتَ؟", fr: "d'où viens-tu ?", cat: "Expressions", m: "مِنْ أَيْنَ أَنْتَ؟", f: "مِنْ أَيْنَ أَنْتِ؟", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "هِيَ", fr: "elle (c'est)", cat: "Expressions", note: "ex. : إِفْرِيقِيَا هِيَ القَارَّةُ… (l'Afrique est le continent…)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (3).jpeg"] },
  { ar: "الدَّرْسُ الثَّانِي", fr: "la deuxième leçon", cat: "Expressions", ecrit: "الدَّرْس الثَّنِي", corr: "Il manque l'alif long : ثَانِي (« deuxième »).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },

  // ---- Grammaire ----
  { ar: "حَرْفٌ", fr: "lettre (de l'alphabet)", cat: "Grammaire", du: "حَرْفَانِ", pl: "حُرُوفٌ / أَحْرُفٌ", note: "deux pluriels : أَحْرُف (petit nombre) et حُرُوف", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "جُمْلَةٌ", fr: "phrase", cat: "Grammaire", du: "جُمْلَتَانِ", pl: "جُمَلٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "حَرَكَةٌ", fr: "voyelle brève (signe) ; mouvement", cat: "Grammaire", du: "حَرَكَتَانِ", pl: "حَرَكَاتٌ", note: "ce sont les « harakat » du site", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "نُقْطَةٌ", fr: "point", cat: "Grammaire", du: "نُقْطَتَانِ", pl: "نِقَاطٌ", ecrit: "نُقْطَتَيْن", corr: "Le duel « de base » (sujet) se termine en ـَانِ. ـَيْنِ est correct seulement après une préposition ou en complément (ex. : رَأَيْتُ نُقْطَتَيْنِ).", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },
  { ar: "هَمْزَةٌ", fr: "hamza (ء)", cat: "Grammaire", du: "هَمْزَتَانِ", pl: "هَمَزَاتٌ", ecrit: "هَمْزَتَيْن", corr: "Le duel « de base » (sujet) se termine en ـَانِ. ـَيْنِ est correct après une préposition ou en complément.", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },
  { ar: "كَلِمَةٌ", fr: "mot", cat: "Grammaire", du: "كَلِمَتَانِ", pl: "كَلِمَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "صَوْتٌ", fr: "voix, son", cat: "Grammaire", du: "صَوْتَانِ", pl: "أَصْوَاتٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg"] },
  { ar: "سُؤَالٌ", fr: "question", cat: "Grammaire", du: "سُؤَالَانِ", pl: "أَسْئِلَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (1).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "صُورَةٌ", fr: "photo, image", cat: "Grammaire", du: "صُورَتَانِ", pl: "صُوَرٌ", note: "à ne pas confondre avec سُورَةٌ (sourate)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "سُورَةٌ", fr: "sourate", cat: "Grammaire", du: "سُورَتَانِ", pl: "سُوَرٌ", note: "à ne pas confondre avec صُورَةٌ (photo)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "صَارَ", fr: "devenir (il est devenu)", cat: "Grammaire", note: "ص et س : comparer avec سَارَةُ ; صُورَةٌ / سُورَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "سَارَةُ", fr: "Sara (prénom)", cat: "Grammaire", note: "ص / س : comparer avec صَارَ", verifier: true, ecrit: "سَار", corr: "Le prénom Sara prend un ة final : سَارَة. Sans ة, سَارَ veut dire « il a marché ».", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "مُفْرَدٌ", fr: "singulier", cat: "Grammaire", pl: "مُفْرَدَاتٌ", note: "contraire : جَمْعٌ (pluriel, abrégé ج) ; مُفْرَدَاتٌ = vocabulaire", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
  { ar: "جَمْعٌ", fr: "pluriel", cat: "Grammaire", pl: "جُمُوعٌ", note: "abrégé ج ; contraire : مُفْرَدٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg","WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "آ", fr: "alif madda (« ā » avec hamza)", cat: "Grammaire", note: "أَلِفٌ مَمْدُودَةٌ = ءَا", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "هَمْزَةٌ عَلَى كُرْسِيٍّ", fr: "hamza sur un support (kursi)", cat: "Grammaire", note: "ex. : سُؤَالٌ، أَسْئِلَةٌ", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "شَمْسٌ", fr: "soleil", cat: "Grammaire", pl: "شُمُوسٌ", note: "شَمْسِيٌّ = solaire (lettres solaires)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "قَمَرٌ", fr: "lune", cat: "Grammaire", du: "قَمَرَانِ", pl: "أَقْمَارٌ", note: "قَمَرِيٌّ = lunaire (lettres lunaires)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },

  // ---- Vocabulaire ----
  { ar: "رِسَالَةٌ", fr: "message, lettre", cat: "Grammaire", du: "رِسَالَتَانِ", pl: "رَسَائِلُ", src: ["WhatsApp Image 2026-10-09 at 13.32.51.jpeg"] },

  // ---- Continents ----
  { ar: "سَمَاءٌ", fr: "ciel", cat: "Continents", pl: "سَمَاوَاتٌ", note: "hamza seule en fin de mot ; avec شَمْسٌ et قَمَرٌ", verifier: true, src: ["WhatsApp Image 2026-10-09 at 13.32.51 (5).jpeg"] },
  { ar: "قَارَّةٌ", fr: "continent", cat: "Continents", du: "قَارَّتَانِ", pl: "قَارَّاتٌ", note: "سِتُّ قَارَّاتٍ = six continents", ecrit: "سِتَّة قَارَّات", corr: "قَارَّة est féminin : de 3 à 10, le nombre prend le genre inverse → سِتُّ قَارَّاتٍ (et non سِتَّة).", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "إِفْرِيقِيَا", fr: "Afrique", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "آسِيَا", fr: "Asie", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أُسْتُرَالِيَا", fr: "Australie (Océanie)", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أُورُوبَّا", fr: "Europe", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أَمْرِيكَا الشَّمَالِيَّةُ", fr: "Amérique du Nord", cat: "Continents", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
  { ar: "أَمْرِيكَا الجَنُوبِيَّةُ", fr: "Amérique du Sud", cat: "Continents", note: "aussi : أَمْرِيكَا اللَّاتِينِيَّةُ (Amérique latine)", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (2).jpeg"] },
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
  { ar: "فِلَسْطِينُ", fr: "Palestine", cat: "Pays arabes", src: ["WhatsApp Image 2026-10-09 at 13.32.51 (4).jpeg"] },
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
];
