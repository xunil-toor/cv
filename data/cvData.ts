export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  modality: "Hybride" | "Télétravail" | "Sur site";
  description?: string;
  highlights: {
    clientOrProject: string;
    details: string;
    technologies: string[];
    roleBadge?: string;
  }[];
  skills: string[];
  category: ("react-next" | "lead-archi" | "public-enterprise" | "fullstack")[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Avancé" | "Opérationnel";
    badge?: string;
  }[];
}

export interface CVData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    location: string;
    availability: string;
    mobility: string;
    yearsOfExperience: string;
    languages: { name: string; level: string }[];
  };
  metrics: { label: string; value: string; sub: string }[];
  summary: {
    pitch: string;
    strengths: { title: string; description: string }[];
  };
  skillsCategories: {
    frontEnd: SkillCategory;
    backEnd: SkillCategory;
    toolsDevOps: SkillCategory;
    databases: SkillCategory;
    [key: string]: SkillCategory;
  };
  experiences: Experience[];
  additionalRoles: {
    period: string;
    role: string;
    context: string;
    summary: string;
  }[];
  leadershipAndTeaching: {
    title: string;
    organization: string;
    period: string;
    type: string;
    description: string;
    badge: string;
  }[];
  education: {
    degree: string;
    specialization: string;
    institution: string;
    period: string;
    location: string;
    details: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    description: string;
  }[];
}

export const CV_DATA: CVData = {
  personal: {
    name: "Jianni Nirinarisoa",
    title: "Développeur Front-End Senior (React / Next.js)",
    subtitle: "Architecture Web moderne, performance & lead technique",
    email: "njianni@protonmail.com",
    phone: "+33 6 72 32 03 90",
    phoneDisplay: "06 72 32 03 90",
    location: "Bordeaux, France",
    availability: "Disponible (CDI / Contrats / Missions)",
    mobility: "Bordeaux (Hybride / Sur site) ou Full Remote",
    yearsOfExperience: "6+ ans",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "Professionnel courant" },
    ],
  },
  metrics: [
    { label: "Années d'Expérience", value: "6+", sub: "En développement web moderne" },
    { label: "Stack de Prédilection", value: "React & Next", sub: "TypeScript, Node.js, Tailwind" },
    { label: "Projets Grands Comptes", value: "10+", sub: "Gendarmerie, Santé Publique, La Poste" },
    { label: "Rôles d'Encadrement", value: "IUT & Lead", sub: "Enseignant vacataire & Mentor" },
  ],
  summary: {
    pitch:
      "Développeur Front-End orienté résultats avec plus de 6 ans d'expérience spécialisé sur l'écosystème React, Next.js et TypeScript. Solide expérience dans la livraison d'applications critiques à fort trafic pour des clients majeurs (Gendarmerie Nationale, Santé Publique France, FranceAgriMer, La Poste).",
    strengths: [
      {
        title: "Architecture & Migrations Modernes",
        description:
          "Expertise prouvée dans la transition d'applications legacy (Delphi, AngularJS) vers des stacks modernes et pérennes (Next.js, React, Spring Boot, REST).",
      },
      {
        title: "Rigueur Grands Comptes & Secteur Public",
        description:
          "Habitué aux standards d'accessibilité, de sécurité, de TMA et aux contraintes méthodologiques strictes (Agile/Scrum, Cycle en V).",
      },
      {
        title: "Transmission & Tech Leadership",
        description:
          "Enseignant vacataire en développement React à l'IUT de Gradignan et tuteur d'alternance primé. Rôle actif de Tech Lead sur des projets web.",
      },
    ],
  },
  skillsCategories: {
    frontEnd: {
      title: "Front-End & Core Web",
      description: "Technologies maîtresses pour le développement d'interfaces riches et réactives.",
      skills: [
        { name: "React.js", level: "Expert", badge: "Principal" },
        { name: "Next.js (App Router)", level: "Expert", badge: "Principal" },
        { name: "TypeScript", level: "Expert", badge: "Principal" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "Angular", level: "Avancé" },
        { name: "HTML5 / CSS3 / Sass", level: "Expert" },
        { name: "Tailwind CSS / ChakraUI", level: "Avancé" },
      ],
    },
    backEnd: {
      title: "Back-End & APIs",
      description: "Compétences full-stack pour concevoir et consommer des APIs robustes.",
      skills: [
        { name: "Node.js", level: "Avancé" },
        { name: "Spring Boot", level: "Avancé" },
        { name: "Java EE", level: "Opérationnel" },
        { name: "API REST & Architecture", level: "Expert" },
        { name: "WebSockets & WebRTC", level: "Avancé" },
      ],
    },
    toolsDevOps: {
      title: "DevOps, Outils & Méthodes",
      description: "Environnement d'ingénierie logicielle, qualité de code et agilité.",
      skills: [
        { name: "Git & GitHub/GitLab", level: "Expert" },
        { name: "Docker", level: "Avancé" },
        { name: "CI / CD Pipelines", level: "Avancé" },
        { name: "Agile / Scrum & Cycle en V", level: "Expert" },
        { name: "Figma (UI/UX Handoff)", level: "Avancé" },
        { name: "Vim & Bash Scripting", level: "Avancé" },
        { name: "IntelliJ IDEA / WebStorm", level: "Expert" },
      ],
    },
    databases: {
      title: "Données & CMS",
      description: "Persistance relationnelle et gestion de contenus d'entreprise.",
      skills: [
        { name: "MySQL / PostgreSQL", level: "Avancé" },
        { name: "SGBDR (SQL)", level: "Avancé" },
        { name: "Drupal (Front Integration)", level: "Avancé" },
        { name: "HubSpot", level: "Opérationnel" },
      ],
    },
  },
  experiences: [
    {
      id: "sully-group",
      company: "Sully Group",
      role: "Développeur Front-End (React / Next.js)",
      period: "2022 – Présent",
      location: "Bordeaux, France",
      modality: "Hybride",
      description: "Intervention sur des projets critiques du secteur public et privé, alliant lead technique, architecture et TMA.",
      category: ["react-next", "lead-archi", "public-enterprise"],
      skills: ["React.js", "Next.js", "TypeScript", "Spring Boot", "Angular", "WebRTC", "Drupal", "Agile/Scrum", "Cycle en V"],
      highlights: [
        {
          clientOrProject: "Gendarmerie Nationale Française",
          roleBadge: "Mission Critique",
          details: "Conception et implémentation d'une solution de softphone pour la communication interne et la visioconférence sécurisée, dans le cadre d'un modèle en Cycle en V rigoureux.",
          technologies: ["React", "WebRTC", "Cycle en V", "Sécurité"],
        },
        {
          clientOrProject: "Optisantis (Mutuelle Entreprise)",
          roleBadge: "Application SaaS",
          details: "Développement de fonctionnalités Next.js pour une solution d'assurance mutuelle en marque blanche, au sein d'une équipe Agile pluridisciplinaire.",
          technologies: ["Next.js", "React", "TypeScript", "Agile"],
        },
        {
          clientOrProject: "Santé Publique France (1000-premiers-jours.fr)",
          roleBadge: "TMA & Performance",
          details: "Gestion de la tierce maintenance applicative (TMA), optimisation des performances web et accessibilité sur la plateforme nationale de référence.",
          technologies: ["Next.js", "Accessibilité", "TMA", "Performance Web"],
        },
        {
          clientOrProject: "FranceAgriMer / RNM",
          roleBadge: "Migration d'Architecture",
          details: "Migration intégrale de l'application métier du Réseau des Nouvelles des Marchés (RNM) depuis un socle Delphi vers une architecture moderne Spring Boot / Angular, avec conception des APIs REST.",
          technologies: ["Spring Boot", "Angular", "Java", "APIs REST", "Migration"],
        },
        {
          clientOrProject: "injject.com",
          roleBadge: "Tech Lead (2023)",
          details: "Supervision technique, choix d'architecture front-end et coordination de l'équipe de développement.",
          technologies: ["React", "Architecture Web", "Team Coordination"],
        },
        {
          clientOrProject: "Bordeaux Métropole & Santé Publique France",
          roleBadge: "Intégration Design",
          details: "Intégration des nouvelles chartes graphiques sur socle Drupal selon les meilleures pratiques front-end et responsive design.",
          technologies: ["Drupal", "CSS3 / Sass", "Responsive Design"],
        },
      ],
    },
    {
      id: "dydu",
      company: "Dydu",
      role: "Développeur Front-End (React)",
      period: "2020 – 2022",
      location: "Bordeaux, France",
      modality: "Télétravail",
      description: "Éditeur de logiciels conversationnels (Chatbots / Voicebots) d'envergure européenne.",
      category: ["react-next", "lead-archi"],
      skills: ["React.js", "AngularJS", "JavaScript ES6+", "WebSockets", "CSS Modules", "CI/CD"],
      highlights: [
        {
          clientOrProject: "Plateforme Conversationnelle & Live Chat",
          roleBadge: "Refonte Majeure",
          details: "Pilotage de la refonte et migration complète de la solution de chatbot depuis AngularJS vers React. Définition de l'architecture composable, modularisation et intégration du module de Live Chat en temps réel.",
          technologies: ["React", "AngularJS Migration", "WebSockets", "Architecture Modulaire"],
        },
      ],
    },
    {
      id: "onepoint",
      company: "onepoint",
      role: "Développeur Front-End (React & Angular)",
      period: "2018 – 2020",
      location: "Bordeaux, France",
      modality: "Sur site",
      description: "Cabinet de conseil et de transformation numérique pour de grands comptes français et internationaux.",
      category: ["react-next", "public-enterprise", "fullstack"],
      skills: ["React.js", "Angular", "Java EE", "Spring", "Agile/Scrum", "REST"],
      highlights: [
        {
          clientOrProject: "Moteur de Serious Game & Cybersécurité",
          roleBadge: "Grand Compte",
          details: "Développement d'un moteur de serious game en React pour la formation et la sensibilisation interactive des collaborateurs aux enjeux de cybersécurité.",
          technologies: ["React", "Interactive Gaming", "Cybersécurité"],
        },
        {
          clientOrProject: "La Poste",
          roleBadge: "Greenfield Project",
          details: "Création ex-nihilo d'une application Angular pour l'anticipation et la gestion opérationnelle des flux logistiques lors des pics saisonniers (Agile).",
          technologies: ["Angular", "TypeScript", "Agile Scrum"],
        },
        {
          clientOrProject: "Mon Compte Personnel de Formation (CPF) & Coresi",
          roleBadge: "Full-Stack & International",
          details: "Maintenance applicative Java EE pour l'application de consignation Coresi et développement backend pour le projet CPF en collaboration avec une équipe basée au Canada.",
          technologies: ["Java EE", "Spring", "APIs REST", "International Team"],
        },
      ],
    },
    {
      id: "jdc",
      company: "JDC",
      role: "Développeur Front-End (React)",
      period: "2016 – 2018",
      location: "Bordeaux, France",
      modality: "Sur site",
      description: "Leader des solutions d'encaissement et de gestion pour les points de vente.",
      category: ["react-next"],
      skills: ["React.js", "JavaScript", "HTML5/CSS3", "State Management", "POS Hardware"],
      highlights: [
        {
          clientOrProject: "Logiciel de Caisse POS Nouvelle Génération",
          roleBadge: "Création From Scratch",
          details: "Conception et développement complet de l'interface du logiciel de caisse tactile et point de vente (POS) dédié aux professionnels de la restauration.",
          technologies: ["React", "UI/UX", "Temps Réel", "Point de Vente"],
        },
      ],
    },
  ],
  additionalRoles: [
    {
      period: "01/2024 – 05/2024",
      role: "Développeur Front-End Drupal",
      context: "Freelance / Contract",
      summary: "Intégration de maquettes, composants front-end et accessibilité.",
    },
    {
      period: "06/2023 – 12/2023",
      role: "Développeur Next.js",
      context: "Remote",
      summary: "Développement de fonctionnalités full-stack et optimisation SSR/SSG.",
    },
    {
      period: "02/2020 – 05/2020",
      role: "Développeur Front-End (Angular / Intégration)",
      context: "Mission",
      summary: "Développement d'interfaces et intégration responsive.",
    },
    {
      period: "05/2019 – 10/2019",
      role: "Développeur Backend (Spring)",
      context: "Projet Entreprise",
      summary: "Conception de microservices et endpoints REST.",
    },
    {
      period: "07/2018 – 05/2019",
      role: "Développeur Java EE",
      context: "Projet Entreprise",
      summary: "Maintenance et évolutions de plateformes d'entreprise.",
    },
  ],
  leadershipAndTeaching: [
    {
      title: "Enseignant Vacataire — Développement Web React",
      organization: "IUT de Gradignan, Université de Bordeaux",
      period: "2025 – 2026",
      type: "Enseignement Supérieur",
      description:
        "Dispense de cours magistraux et travaux pratiques sur les standards modernes de React, l'écosystème front-end, la gestion d'état et les bonnes pratiques logicielles auprès d'étudiants en informatique.",
      badge: "Transmission & Pédagogie",
    },
    {
      title: "Tuteur d'Apprentissage Entreprise",
      organization: "IUT de Bordeaux / Sully Group",
      period: "2024 – 2025",
      type: "Mentorat",
      description:
        "Supervision et encadrement technique d'un étudiant majeur de promotion en 1ère année d'IUT, ayant obtenu les félicitations du jury et poursuivant son cursus à l'école d'ingénieurs ENSEIRB-MATMECA.",
      badge: "Mentorat Réussi",
    },
    {
      title: "Challenge Sécurité Interne Sully Group",
      organization: "Sully Group",
      period: "2024",
      type: "Cybersécurité",
      description: "Participation active aux épreuves de Capture The Flag (CTF) et sensibilisation aux vulnérabilités web applicatives.",
      badge: "Sécurité Applicative",
    },
    {
      title: "Hack It N (Bordeaux)",
      organization: "Communauté Sécurité & Hacking",
      period: "2017",
      type: "Hackathon",
      description: "Participation à l'événement de hacking éthique et challenges techniques à Bordeaux.",
      badge: "Hacking Éthique",
    },
  ],
  education: [
    {
      degree: "Licence en Informatique",
      specialization: "Parcours Applications Connectées",
      institution: "Université de Pau et des Pays de l'Adour (UPPA)",
      period: "2010 – 2013",
      location: "Pau / Pays de l'Adour, France",
      details: "Fondamentaux du génie logiciel, algorithmique, réseaux, systèmes d'information et applications réparties.",
    },
  ],
  certifications: [
    {
      name: "OP37 – Devenir Développeur d'Applications Android",
      issuer: "26 ACADEMY",
      date: "Décembre 2020",
      credentialId: "362154972386708",
      description: "Architecture mobile, cycle de vie des applications, intégration d'APIs et interfaces utilisateurs mobiles.",
    },
  ],
};
