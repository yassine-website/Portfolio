/* ═══════════════════════════════════════════════════════════════
   APP.JS — Portfolio Ferhat Mohamed Yassine
   ---------------------------------------------------------------
   SOMMAIRE :
     1. Dictionnaire de traductions FR / EN
     2. Fichiers CV par langue
     3. Fonction de changement de langue (+ lien du CV)
     4. Menu hamburger (mobile)
     5. Barre de navigation au scroll + bouton retour en haut
     6. Animations d'apparition au scroll
   ═══════════════════════════════════════════════════════════════ */

/* ── 1. TRADUCTIONS ──
   Chaque clé correspond à un attribut data-i18n dans index.html.
   Pour modifier un texte : change-le ICI (dans les 2 langues)
   ET dans index.html (texte français par défaut). */
const i18n = {
  fr: {
    nav_home:"Accueil", nav_interests:"Intérêts", nav_skills:"Compétences", nav_exp:"Expérience", nav_projects:"Projets", nav_about:"À propos", nav_contact:"Contact",
    badge:"Étudiant au Collège La Cité · À la recherche d'un stage coop",
    hello:"Bonjour,", myname:"Je m'appelle",
    hero_lead:"Développeur logiciel avec 6 ans d'expérience · Java / Jakarta EE · C++ moderne · SQL",
    cta_projects:"Mes projets", cta_cv2:"CV 📄",
    int_t:"Intérêts",
    int_sub:"Je consacre beaucoup de temps à mes études et à l'informatique, mais je crois aussi à l'équilibre entre travail et vie personnelle. Voici ce qui me passionne.",
    int1_t:"Programmation",
    int1_p:"Depuis mes premières lignes de code à l'université, la programmation est devenue bien plus qu'un métier : c'est un plaisir quotidien. Résoudre un problème difficile après des heures d'essais reste l'une de mes plus grandes satisfactions.",
    int2_t:"Football",
    int2_p:"Je joue au football depuis mon plus jeune âge. C'est pour moi la meilleure façon de rester actif tout en cultivant l'esprit d'équipe et les amitiés. Quand je ne joue pas, je suis les grands matchs à la télévision.",
    int3_t:"Découvertes",
    int3_p:"Quitter l'Algérie pour m'installer au Canada a été une grande aventure. J'aime découvrir de nouvelles cultures, de nouveaux endroits et rencontrer des gens de tous horizons — Ottawa est parfaite pour ça.",
    int4_t:"Image & Photo",
    int4_p:"Ma passion pour le traitement d'image dépasse le cadre académique : je m'intéresse à la photographie numérique, à la vision par ordinateur et à la manière dont les algorithmes « voient » le monde.",
    skills_t1:"Mes", skills_t2:"Compétences",
    skills_sub:"Ce que j'utilise au quotidien, en entreprise comme dans mes projets.",
    sk1_p:"JSF/PrimeFaces, CDI, EJB, JPA, JAX-RS, API REST, Maven, JUnit, Payara.",
    sk2_t:"moderne",
    sk2_p:"C++17/20, STL, POO, CMake, Qt, GDB, programmation sous Linux.",
    sk3_t:"Bases de données",
    sk3_p:"MySQL, modélisation relationnelle, vues, procédures stockées, transactions, index, JPQL.",
    sk4_p:"HTML, CSS, JavaScript, Node.js, Express, API REST JSON, JWT.",
    sk5_t:"Traitement d'image",
    sk5_p:"PSNR, critères de Linfoot, saillance visuelle d'Itti-Koch, filtres de Gabor.",
    sk6_t:"Outils",
    sk6_p:"Git, GitHub, Python, PyTorch, IntelliJ IDEA, VS Code, Postman, MySQL Workbench, Linux (Ubuntu/WSL2).",
    exp_t1:"Expérience", exp_t2:"Professionnelle",
    exp_sub:"Six ans de développement d'applications de gestion en entreprise.",
    exp_role:"Développeur de logiciels",
    exp_org:"Coopérative des céréales et légumes secs · Khenchela, Algérie",
    exp_date:"Janv. 2018 – juin 2024",
    exp_b1:"Conception d'une application de paiement électronique pour les agriculteurs (WinDev, HyperFileSQL) : collecte des RIB, rapprochement avec les ventes et la comptabilité, génération du fichier EDI transmis à la banque.",
    exp_b2:"Applications de gestion des stocks, de location de matériel agricole et de suivi du carburant (CRUD, C#) : environ 35 % de temps de suivi manuel en moins.",
    exp_b3:"Scripts de validation JavaScript pour les formulaires internes : environ 40 % d'erreurs de saisie en moins.",
    proj_t1:"Mes", proj_t2:"Projets",
    proj_sub:"Des projets concrets alliant théorie et pratique, tous disponibles sur mon GitHub.",
    p_link:"Voir le projet",
    p1_tag:"Développement Web · Jakarta EE",
    p1_t:"MediBook",
    p1_p:"Application Web de gestion de rendez-vous médicaux à trois rôles (patient, médecin, administrateur) : réservation de créneaux de 30 minutes, détection des chevauchements et prévention des doubles réservations, API REST JSON (JAX-RS), mots de passe hachés en PBKDF2, contrôle d'accès par rôles et 21 tests JUnit.",
    p1_tech:"Java · Jakarta EE 10 · PrimeFaces · JPA",
    p2_tag:"API REST · Projet d'équipe",
    p2_t:"API de location de voitures",
    p2_p:"API REST d'une agence de location de voitures : clients, véhicules, marques, catégories, agences, locations et paiements. Modèle de données Sequelize sur MySQL, authentification JWT, hachage bcrypt, rôles (admin, employé, client), validation avec express-validator, pagination, téléversement d'images (Multer) et collection de tests Postman.",
    p2_tech:"Node.js · Express · Sequelize · MySQL",
    p3_tag:"Intelligence artificielle · IA responsable",
    p3_t:"AI Portfolio",
    p3_p:"Un mini-LLM de type GPT écrit de zéro en PyTorch (tokeniseur, auto-attention causale, entraînement) et une boîte à outils d'IA générative responsable : masquage des renseignements personnels, évaluation de résumés (ROUGE-1), explicateur de documents avec vérification des dates et montants, et assistant coop honnête avec couche Claude optionnelle. 19 tests pytest.",
    p3_tech:"Python · PyTorch · pytest · API Claude",
    p4_tag:"Projet de recherche · Traitement d'image",
    p4_t:"Modélisation du Bruit Perceptible",
    p4_p:"Implémentation de deux approches pour mesurer le bruit dans les images numériques : métriques mathématiques (PSNR, MSE, critères de Linfoot) et modèle perceptuel du Système Visuel Humain (carte de saillance d'Itti-Koch, pyramides gaussiennes, filtres de Gabor, 42 cartes de propriétés). Projet complet avec documentation détaillée.",
    p4_tech:"C++20 · Qt · CMake",
    p5_tag:"Bases de données · SQL",
    p5_t:"Base de données scolaire",
    p5_p:"Schéma relationnel d'un conseil scolaire (écoles, élèves, absences) avec clés primaires et étrangères, puis requêtes d'analyse : jointures, agrégations (GROUP BY / HAVING), sous-requêtes, vues, procédures stockées, transactions et index vérifiés avec EXPLAIN.",
    p5_tech:"MySQL · SQL · MySQL Workbench",
    p5_b3:"Procédures stockées",
    p6_tag:"C++ moderne · Linux",
    p6_t:"Gestionnaire de tâches CLI",
    p6_p:"Application en ligne de commande (ajouter, lister, terminer, supprimer) avec persistance dans un fichier, conteneurs STL et modules séparés. Chaîne d'outils Linux sous WSL2 (gcc, CMake) et débogage mémoire avec GDB, dans un parcours autodidacte vers le C++ embarqué.",
    p6_tech:"C++17 · Linux · GDB",
    p7_tag:"Développement Web · Front-end",
    p7_t:"Ce portfolio",
    p7_p:"Site personnel adaptatif en HTML, CSS et JavaScript natif, sans framework : bascule FR/EN, CV téléchargé dans la langue choisie, animations au défilement, déployé sur GitHub Pages.",
    p7_tech:"HTML · CSS · JavaScript",
    cta_allgh:"Tous mes dépôts GitHub",
    about_t1:"À propos", about_t2:"de moi",
    about_st:"Étudiant en programmation informatique @ Collège La Cité",
    about_p1:"Titulaire d'un baccalauréat et d'une maîtrise en génie logiciel, j'ai travaillé six ans comme développeur de logiciels en Algérie avant de m'installer au Canada. Je suis aujourd'hui en 2e année de programmation informatique (régime coop) au Collège La Cité, à Ottawa.",
    about_p2:"Je cherche un stage coop en développement d'applications où je peux mettre à profit mon expérience en Java / Jakarta EE, en C++ et en bases de données, et continuer à apprendre au sein d'une équipe.",
    edu1:"Diplôme en programmation informatique (coop) · 2025 – 2028 · Moyenne 3,78/4",
    edu2_t:"Université Abbès-Laghrour — Khenchela",
    edu2:"Baccalauréat et maîtrise en génie logiciel et systèmes distribués · 2012 – 2018",
    cta_github:"Mon GitHub", cta_cv:"Télécharger mon CV",
    contact_t1:"Me", contact_t2:"Contacter",
    contact_sub:"N'hésitez pas à me joindre pour un stage, une opportunité ou une collaboration.",
    c_phone:"Téléphone", c_addr:"Adresse",
    footer_sub:"Étudiant en programmation informatique au Collège La Cité, Ottawa",
    footer_c:"Tous droits réservés."
  },
  en: {
    nav_home:"Home", nav_interests:"Interests", nav_skills:"Skills", nav_exp:"Experience", nav_projects:"Projects", nav_about:"About", nav_contact:"Contact",
    badge:"Student at Collège La Cité · Looking for a co-op internship",
    hello:"Hello,", myname:"My name is",
    hero_lead:"Software developer with 6 years of experience · Java / Jakarta EE · Modern C++ · SQL",
    cta_projects:"My projects", cta_cv2:"Resume 📄",
    int_t:"Interests",
    int_sub:"While I dedicate a lot of my time to my studies and computer science, I believe in a healthy work-life balance. Here is what I'm passionate about.",
    int1_t:"Programming",
    int1_p:"Ever since my first lines of code at university, programming has become much more than a career path: it's a daily pleasure. Solving a hard problem after hours of trying remains one of my greatest satisfactions.",
    int2_t:"Soccer",
    int2_p:"I've been playing soccer since a young age. It's the best way for me to stay active while nurturing teamwork and friendships. When I'm not playing, I follow the big games on TV.",
    int3_t:"Discovering",
    int3_p:"Leaving Algeria to settle in Canada was a great adventure. I love discovering new cultures, new places and meeting people from all walks of life — Ottawa is perfect for that.",
    int4_t:"Image & Photo",
    int4_p:"My passion for image processing goes beyond academics: I'm interested in digital photography, computer vision and how algorithms \"see\" the world.",
    skills_t1:"My", skills_t2:"Skills",
    skills_sub:"What I use every day, at work and in my projects.",
    sk1_p:"JSF/PrimeFaces, CDI, EJB, JPA, JAX-RS, REST APIs, Maven, JUnit, Payara.",
    sk2_t:"Modern",
    sk2_p:"C++17/20, STL, OOP, CMake, Qt, GDB, Linux programming.",
    sk3_t:"Databases",
    sk3_p:"MySQL, relational modeling, views, stored procedures, transactions, indexing, JPQL.",
    sk4_p:"HTML, CSS, JavaScript, Node.js, Express, JSON REST APIs, JWT.",
    sk5_t:"Image Processing",
    sk5_p:"PSNR, Linfoot criteria, Itti-Koch visual saliency, Gabor filters.",
    sk6_t:"Tools",
    sk6_p:"Git, GitHub, Python, PyTorch, IntelliJ IDEA, VS Code, Postman, MySQL Workbench, Linux (Ubuntu/WSL2).",
    exp_t1:"Work", exp_t2:"Experience",
    exp_sub:"Six years building business applications in industry.",
    exp_role:"Software Developer",
    exp_org:"Cereals and Dry Legumes Cooperative · Khenchela, Algeria",
    exp_date:"Jan. 2018 – June 2024",
    exp_b1:"Designed an electronic payment application for farmers (WinDev, HyperFileSQL): bank details collection, reconciliation with sales and accounting, and generation of the EDI file sent to the bank.",
    exp_b2:"Built stock management, equipment rental and fuel tracking applications (CRUD, C#): about 35% less time spent on manual tracking.",
    exp_b3:"Wrote JavaScript validation scripts for internal forms: about 40% fewer data-entry errors.",
    proj_t1:"My", proj_t2:"Projects",
    proj_sub:"Concrete projects combining theory and practice, all available on my GitHub.",
    p_link:"View project",
    p1_tag:"Web Development · Jakarta EE",
    p1_t:"MediBook",
    p1_p:"Three-role medical appointment web application (patient, doctor, admin): 30-minute slot booking, overlap detection and double-booking prevention, JSON REST API (JAX-RS), PBKDF2 password hashing, role-based access control and 21 JUnit tests.",
    p1_tech:"Java · Jakarta EE 10 · PrimeFaces · JPA",
    p2_tag:"REST API · Team project",
    p2_t:"Car Rental API",
    p2_p:"REST API for a car rental agency: customers, vehicles, brands, categories, agencies, rentals and payments. Sequelize data model on MySQL, JWT authentication, bcrypt hashing, roles (admin, employee, client), express-validator rules, pagination, image upload (Multer) and a Postman test collection.",
    p2_tech:"Node.js · Express · Sequelize · MySQL",
    p3_tag:"Artificial Intelligence · Responsible AI",
    p3_t:"AI Portfolio",
    p3_p:"A mini GPT-style LLM written from scratch in PyTorch (tokenizer, causal self-attention, training) and a responsible Gen AI toolkit: PII redaction, summary evaluation (ROUGE-1), a document explainer with a fact guard on dates and amounts, and an honest co-op interview assistant with an optional Claude layer. 19 pytest tests.",
    p3_tech:"Python · PyTorch · pytest · Claude API",
    p4_tag:"Research Project · Image Processing",
    p4_t:"Perceptual Noise Modeling",
    p4_p:"Implementation of two approaches to measure noise in digital images: mathematical metrics (PSNR, MSE, Linfoot criteria) and a perceptual model of the Human Visual System (Itti-Koch saliency map, Gaussian pyramids, Gabor filters, 42 feature maps). Complete project with detailed documentation.",
    p4_tech:"C++20 · Qt · CMake",
    p5_tag:"Databases · SQL",
    p5_t:"School Board Database",
    p5_p:"Relational schema for a school board (schools, students, absences) with primary and foreign keys, plus analytical queries: joins, aggregations (GROUP BY / HAVING), subqueries, views, stored procedures, transactions and indexes checked with EXPLAIN.",
    p5_tech:"MySQL · SQL · MySQL Workbench",
    p5_b3:"Stored procedures",
    p6_tag:"Modern C++ · Linux",
    p6_t:"CLI Task Manager",
    p6_p:"Command-line app (add, list, done, remove) with file persistence, STL containers and separate modules. Linux toolchain on WSL2 (gcc, CMake) and memory debugging with GDB, as part of a self-directed path toward embedded C++.",
    p6_tech:"C++17 · Linux · GDB",
    p7_tag:"Web Development · Front-end",
    p7_t:"This portfolio",
    p7_p:"Responsive personal website in HTML, CSS and vanilla JavaScript, no framework: FR/EN switch, résumé downloaded in the chosen language, scroll animations, deployed on GitHub Pages.",
    p7_tech:"HTML · CSS · JavaScript",
    cta_allgh:"All my GitHub repositories",
    about_t1:"About", about_t2:"me",
    about_st:"Computer Programming Student @ Collège La Cité",
    about_p1:"With a Bachelor's and a Master's in software engineering, I worked for six years as a software developer in Algeria before moving to Canada. I'm now in my second year of Computer Programming (Co-op) at Collège La Cité in Ottawa.",
    about_p2:"I'm looking for a co-op internship in application development where I can put my experience with Java / Jakarta EE, C++ and databases to work, and keep learning as part of a team.",
    edu1:"Diploma in Computer Programming (Co-op) · 2025 – 2028 · GPA 3.78/4",
    edu2_t:"Abbes Laghrour University — Khenchela",
    edu2:"Bachelor's and Master's in Software Engineering and Distributed Systems · 2012 – 2018",
    cta_github:"My GitHub", cta_cv:"Download my Resume",
    contact_t1:"Contact", contact_t2:"Me",
    contact_sub:"Feel free to reach out about an internship, an opportunity or a collaboration.",
    c_phone:"Phone", c_addr:"Address",
    footer_sub:"Computer Programming student at Collège La Cité, Ottawa",
    footer_c:"All rights reserved."
  }
};

/* ── 2. CV PAR LANGUE ──
   Tous les liens marqués data-cv dans index.html pointent vers le bon fichier. */
const CV_FILES = {
  fr: "CV_Ferhat_Mohamed_Yassine_FR.pdf",
  en: "CV_Ferhat_Mohamed_Yassine_EN.pdf"
};

/* ── 3. CHANGEMENT DE LANGUE ──
   Remplace les textes data-i18n, met à jour le lien du CV et
   sauvegarde le choix (localStorage). */
function setLang(lang) {
  if (!i18n[lang]) lang = 'fr';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('[data-cv]').forEach(a => a.setAttribute('href', CV_FILES[lang]));
  document.getElementById('btnFr').classList.toggle('active', lang === 'fr');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  try { localStorage.setItem('lang', lang); } catch(e) {}
}

// Au chargement : langue enregistrée, sinon langue du navigateur, sinon français
(function initLang() {
  let lang = null;
  try { lang = localStorage.getItem('lang'); } catch(e) {}
  if (!lang) lang = (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
  setLang(lang);
})();

// Année du pied de page
document.getElementById('year').textContent = new Date().getFullYear();

/* ── 4. MENU HAMBURGER (mobile) ── */
const hamburger   = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items  = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const headerEl    = document.getElementById('header');
const headerBg    = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
menu_items.forEach(item => item.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobile_menu.classList.remove('active');
}));

/* ── 5. NAVIGATION AU SCROLL + BOUTON RETOUR EN HAUT ── */
const backTop = document.getElementById('backTop');
function onScroll() {
  const scrolled = window.scrollY > 200;
  headerBg.style.backgroundColor = scrolled ? 'rgba(255,255,255,0.97)' : 'transparent';
  headerBg.style.boxShadow = scrolled ? '0 2px 14px rgba(15,23,42,0.08)' : 'none';
  headerEl.classList.toggle('scrolled', scrolled);
  headerEl.classList.toggle('on-hero', !scrolled);
  backTop.classList.toggle('show', window.scrollY > 500);
}
document.addEventListener('scroll', onScroll);
onScroll();

/* ── 6. ANIMATIONS D'APPARITION AU SCROLL ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
