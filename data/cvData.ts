export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  modality: string;
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
    level: "Expert" | "Avancé" | "Opérationnel" | "Advanced" | "Operational";
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

export interface UIStrings {
  navbar: {
    availableBadge: string;
    subtitle: string;
    profile: string;
    skills: string;
    experiences: string;
    leadership: string;
    education: string;
    contact: string;
    recruiterSheet: string;
    recruiterSheetTitle: string;
    printTitle: string;
    copyEmail: string;
    emailCopied: string;
    menu: string;
    call: string;
    email: string;
  };
  hero: {
    specialistBadge: string;
    availableBadge: string;
    locationBadge: string;
    contactMe: string;
    copiedEmail: string;
    copiedPhone: string;
    copyEmailTitle: string;
    copyPhoneTitle: string;
    atsSummary: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    allCategories: string;
    frontEndCat: string;
    backEndCat: string;
    devOpsCat: string;
    databasesCat: string;
    searchPlaceholder: string;
    legendExpert: string;
    legendExpertDesc: string;
    legendAdvanced: string;
    legendAdvancedDesc: string;
    legendOperational: string;
    legendOperationalDesc: string;
  };
  experiences: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterReactNext: string;
    filterLeadArchi: string;
    filterPublicEnterprise: string;
    missionsHeading: string;
    relatedTech: string;
    additionalRolesHeading: string;
  };
  leadership: {
    badge: string;
    title: string;
    subtitle: string;
    fieldLabel: string;
    provenImpact: string;
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    issuerLabel: string;
    certIdLabel: string;
    languagesTitle: string;
    activeStatus: string;
    languagesNote: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directCoordinates: string;
    fastResponse: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    initiateExchange: string;
    selectNeed: string;
    optCdi: string;
    optFreelance: string;
    optInterview: string;
    sendEmailBtn: string;
    copiedEmail: string;
    copiedPhone: string;
  };
  footer: {
    profile: string;
    skills: string;
    experiences: string;
    leadership: string;
    education: string;
    contact: string;
    printCV: string;
    copyrightText: string;
    statusLabel: string;
  };
  recruiterModal: {
    title: string;
    subtitle: string;
    btnFr: string;
    btnEn: string;
    copiedMsg: string;
    copyBtn: string;
    footerNote: string;
    closeBtn: string;
  };
  toggle: {
    toggleLabel: string;
    switchToEn: string;
    switchToFr: string;
  };
  theme: {
    toggleLabel: string;
    light: string;
    dark: string;
    switchToLight: string;
    switchToDark: string;
  };
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
        "Dispense de cours et travaux pratiques sur les standards modernes de React, l'écosystème front-end, la gestion d'état et les bonnes pratiques logicielles auprès d'étudiants en informatique.",
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

export const CV_DATA_EN: CVData = {
  personal: {
    name: "Jianni Nirinarisoa",
    title: "Senior Front-End Developer (React / Next.js)",
    subtitle: "Modern Web Architecture, Performance & Tech Leadership",
    email: "njianni@protonmail.com",
    phone: "+33 6 72 32 03 90",
    phoneDisplay: "+33 6 72 32 03 90",
    location: "Bordeaux, France",
    availability: "Available (Permanent / Contracts / Freelance)",
    mobility: "Bordeaux (Hybrid / On-site) or Full Remote",
    yearsOfExperience: "6+ yrs",
    languages: [
      { name: "French", level: "Native language" },
      { name: "English", level: "Full professional proficiency" },
    ],
  },
  metrics: [
    { label: "Years of Experience", value: "6+", sub: "In modern web engineering" },
    { label: "Primary Tech Stack", value: "React & Next", sub: "TypeScript, Node.js, Tailwind" },
    { label: "Enterprise Projects", value: "10+", sub: "French Gendarmerie, Public Health, La Poste" },
    { label: "Mentorship & Lead", value: "IUT & Lead", sub: "Guest Lecturer & Mentor" },
  ],
  summary: {
    pitch:
      "Results-driven Senior Front-End Developer with over 6 years of experience specializing in the React, Next.js, and TypeScript ecosystem. Solid background delivering high-traffic, mission-critical applications for tier-1 public and private organizations (French National Gendarmerie, Santé Publique France, FranceAgriMer, La Poste).",
    strengths: [
      {
        title: "Modern Architecture & Migrations",
        description:
          "Proven expertise in transitioning legacy enterprise applications (Delphi, AngularJS) to modern and maintainable stacks (Next.js, React, Spring Boot, REST).",
      },
      {
        title: "Enterprise & Public Sector Rigor",
        description:
          "Accustomed to high accessibility, security, application maintenance (TMA) standards, and strict methodologies (Agile/Scrum, V-Model).",
      },
      {
        title: "Knowledge Sharing & Tech Leadership",
        description:
          "Guest lecturer teaching React development at Bordeaux University (IUT Gradignan) and award-winning apprenticeship mentor. Active Tech Lead on web projects.",
      },
    ],
  },
  skillsCategories: {
    frontEnd: {
      title: "Front-End & Core Web",
      description: "Core technologies for engineering rich, reactive, and accessible user interfaces.",
      skills: [
        { name: "React.js", level: "Expert", badge: "Core" },
        { name: "Next.js (App Router)", level: "Expert", badge: "Core" },
        { name: "TypeScript", level: "Expert", badge: "Core" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "Angular", level: "Advanced" },
        { name: "HTML5 / CSS3 / Sass", level: "Expert" },
        { name: "Tailwind CSS / ChakraUI", level: "Advanced" },
      ],
    },
    backEnd: {
      title: "Back-End & APIs",
      description: "Full-stack competencies to design, build, and consume robust APIs.",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Java EE", level: "Operational" },
        { name: "REST APIs & Architecture", level: "Expert" },
        { name: "WebSockets & WebRTC", level: "Advanced" },
      ],
    },
    toolsDevOps: {
      title: "DevOps, Tools & Methods",
      description: "Software engineering environment, code quality, and agile delivery.",
      skills: [
        { name: "Git & GitHub/GitLab", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "CI / CD Pipelines", level: "Advanced" },
        { name: "Agile / Scrum & V-Model", level: "Expert" },
        { name: "Figma (UI/UX Handoff)", level: "Advanced" },
        { name: "Vim & Bash Scripting", level: "Advanced" },
        { name: "IntelliJ IDEA / WebStorm", level: "Expert" },
      ],
    },
    databases: {
      title: "Data & CMS",
      description: "Relational persistence and enterprise content management.",
      skills: [
        { name: "MySQL / PostgreSQL", level: "Advanced" },
        { name: "RDBMS (SQL)", level: "Advanced" },
        { name: "Drupal (Front Integration)", level: "Advanced" },
      ],
    },
  },
  experiences: [
    {
      id: "sully-group",
      company: "Sully Group",
      role: "Front-End Developer (React / Next.js)",
      period: "2022 – Present",
      location: "Bordeaux, France",
      modality: "Hybrid",
      description: "Delivering critical public and private sector projects, combining technical leadership, architecture, and maintenance.",
      category: ["react-next", "lead-archi", "public-enterprise"],
      skills: ["React.js", "Next.js", "TypeScript", "Spring Boot", "Angular", "WebRTC", "Drupal", "Agile/Scrum", "V-Model"],
      highlights: [
        {
          clientOrProject: "French National Gendarmerie",
          roleBadge: "Critical Mission",
          details: "Designed and implemented a secure WebRTC softphone solution for internal communications and video conferencing under a strict V-Model framework.",
          technologies: ["React", "WebRTC", "V-Model", "Security"],
        },
        {
          clientOrProject: "Optisantis (Corporate Health Insurance)",
          roleBadge: "SaaS Application",
          details: "Developed Next.js features for a white-label mutual insurance platform within a cross-functional Agile squad.",
          technologies: ["Next.js", "React", "TypeScript", "Agile"],
        },
        {
          clientOrProject: "Santé Publique France (1000-premiers-jours.fr)",
          roleBadge: "TMA & Performance",
          details: "Third-party application maintenance (TMA), web performance optimization, and accessibility compliance for the French national reference health platform.",
          technologies: ["Next.js", "Accessibility", "TMA", "Web Performance"],
        },
        {
          clientOrProject: "FranceAgriMer / RNM",
          roleBadge: "Architecture Migration",
          details: "Full migration of the Market News Network (RNM) core business application from legacy Delphi to modern Spring Boot / Angular with RESTful API design.",
          technologies: ["Spring Boot", "Angular", "Java", "REST APIs", "Migration"],
        },
        {
          clientOrProject: "injject.com",
          roleBadge: "Tech Lead (2023)",
          details: "Technical supervision, front-end architecture design, and development squad coordination.",
          technologies: ["React", "Web Architecture", "Team Coordination"],
        },
        {
          clientOrProject: "Bordeaux Métropole & Santé Publique France",
          roleBadge: "Design Integration",
          details: "Integrated newly designed UI kits on Drupal following front-end best practices and responsive layout standards.",
          technologies: ["Drupal", "CSS3 / Sass", "Responsive Design"],
        },
      ],
    },
    {
      id: "dydu",
      company: "Dydu",
      role: "Front-End Developer (React)",
      period: "2020 – 2022",
      location: "Bordeaux, France",
      modality: "Remote",
      description: "European software vendor specializing in conversational AI (Chatbots / Voicebots).",
      category: ["react-next", "lead-archi"],
      skills: ["React.js", "AngularJS", "JavaScript ES6+", "WebSockets", "CSS Modules", "CI/CD"],
      highlights: [
        {
          clientOrProject: "Conversational Platform & Live Chat",
          roleBadge: "Major Redesign",
          details: "Led the complete redesign and migration of the chatbot solution from AngularJS to React. Defined composable architecture, modularized components, and integrated real-time Live Chat.",
          technologies: ["React", "AngularJS Migration", "WebSockets", "Modular Architecture"],
        },
      ],
    },
    {
      id: "onepoint",
      company: "onepoint",
      role: "Front-End Developer (React & Angular)",
      period: "2018 – 2020",
      location: "Bordeaux, France",
      modality: "On-site",
      description: "Digital transformation consultancy serving major French and international enterprise accounts.",
      category: ["react-next", "public-enterprise", "fullstack"],
      skills: ["React.js", "Angular", "Java EE", "Spring", "Agile/Scrum", "REST"],
      highlights: [
        {
          clientOrProject: "Serious Game Engine & Cybersecurity",
          roleBadge: "Enterprise Account",
          details: "Engineered a React-based serious game engine for interactive employee training and cybersecurity awareness.",
          technologies: ["React", "Interactive Gaming", "Cybersecurity"],
        },
        {
          clientOrProject: "La Poste",
          roleBadge: "Greenfield Project",
          details: "Built an Angular application from scratch to anticipate and manage operational logistics flows during seasonal parcel peaks (Agile).",
          technologies: ["Angular", "TypeScript", "Agile Scrum"],
        },
        {
          clientOrProject: "CPF (National Training Account) & Coresi",
          roleBadge: "Full-Stack & International",
          details: "Java EE application maintenance for the Coresi escrow platform and backend feature development for the national CPF project in collaboration with a Canada-based squad.",
          technologies: ["Java EE", "Spring", "REST APIs", "International Team"],
        },
      ],
    },
    {
      id: "jdc",
      company: "JDC",
      role: "Front-End Developer (React)",
      period: "2016 – 2018",
      location: "Bordeaux, France",
      modality: "On-site",
      description: "Market leader in point-of-sale (POS) and retail management solutions.",
      category: ["react-next"],
      skills: ["React.js", "JavaScript", "HTML5/CSS3", "State Management", "POS Hardware"],
      highlights: [
        {
          clientOrProject: "Next-Gen Touchscreen POS Software",
          roleBadge: "Built From Scratch",
          details: "End-to-end design and development of the modern touchscreen POS interface tailored for hospitality and retail professionals.",
          technologies: ["React", "UI/UX", "Real-time", "Point of Sale"],
        },
      ],
    },
  ],
  additionalRoles: [
    {
      period: "01/2024 – 05/2024",
      role: "Drupal Front-End Developer",
      context: "Freelance / Contract",
      summary: "Mockup integration, accessible front-end components and styling.",
    },
    {
      period: "06/2023 – 12/2023",
      role: "Next.js Developer",
      context: "Remote",
      summary: "Full-stack feature development and SSR/SSG rendering optimizations.",
    },
    {
      period: "02/2020 – 05/2020",
      role: "Front-End Developer (Angular / Integration)",
      context: "Contract Mission",
      summary: "Interface development and responsive web integration.",
    },
    {
      period: "05/2019 – 10/2019",
      role: "Backend Developer (Spring)",
      context: "Enterprise Project",
      summary: "Microservices design, business logic, and REST endpoints.",
    },
    {
      period: "07/2018 – 05/2019",
      role: "Java EE Developer",
      context: "Enterprise Project",
      summary: "Maintenance and feature upgrades for enterprise web portals.",
    },
  ],
  leadershipAndTeaching: [
    {
      title: "Guest Lecturer — Modern React Web Development",
      organization: "IUT de Gradignan, University of Bordeaux",
      period: "2025 – 2026",
      type: "Higher Education",
      description:
        "Delivering university lectures and lab sessions on modern React standards, front-end architecture, state management, and software craftsmanship to CS students.",
      badge: "Teaching & Mentorship",
    },
    {
      title: "Enterprise Apprenticeship Mentor",
      organization: "IUT de Bordeaux / Sully Group",
      period: "2024 – 2025",
      type: "Mentorship",
      description:
        "Supervised and mentored a 1st-year IUT valedictorian apprentice who achieved jury congratulations and was admitted to the ENSEIRB-MATMECA engineering school.",
      badge: "Awarded Mentorship",
    },
    {
      title: "Sully Group Internal Security Challenge",
      organization: "Sully Group",
      period: "2024",
      type: "Cybersecurity",
      description: "Active participation in Capture The Flag (CTF) challenges and team awareness workshops on web application vulnerabilities.",
      badge: "Application Security",
    },
    {
      title: "Hack It N (Bordeaux)",
      organization: "Security & Hacking Community",
      period: "2017",
      type: "Hackathon",
      description: "Participated in the ethical hacking and technical challenges competition in Bordeaux.",
      badge: "Ethical Hacking",
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Computer Science",
      specialization: "Connected Applications Program",
      institution: "University of Pau and the Adour Region (UPPA)",
      period: "2010 – 2013",
      location: "Pau / South-West France",
      details: "Fundamentals of software engineering, algorithms, computer networking, information systems, and distributed applications.",
    },
  ],
  certifications: [
    {
      name: "OP37 – Certified Android Application Developer",
      issuer: "26 ACADEMY",
      date: "December 2020",
      credentialId: "362154972386708",
      description: "Mobile architecture, application lifecycle, REST API consumption, and mobile UI/UX engineering.",
    },
  ],
};

export const translations: Record<"fr" | "en", UIStrings> = {
  fr: {
    navbar: {
      availableBadge: "Dispo",
      subtitle: "React / Next.js Senior • 6+ ans",
      profile: "Profil",
      skills: "Compétences",
      experiences: "Expériences",
      leadership: "Enseignement & Lead",
      education: "Formation",
      contact: "Contact",
      recruiterSheet: "Fiche Recruteur (ATS)",
      recruiterSheetTitle: "Ouvrir la fiche synthèse pour ATS / CRM",
      printTitle: "Imprimer / Exporter en PDF",
      copyEmail: "Copier Email",
      emailCopied: "Email copié !",
      menu: "Menu",
      call: "Appeler",
      email: "Email",
    },
    hero: {
      specialistBadge: "Spécialiste Front-End & Architecture",
      availableBadge: "Disponible immédiatement",
      locationBadge: "Bordeaux / Full Remote",
      contactMe: "Me contacter",
      copiedEmail: "Email copié !",
      copiedPhone: "Téléphone copié !",
      copyEmailTitle: "Copier l'adresse email",
      copyPhoneTitle: "Copier le numéro de téléphone",
      atsSummary: "Synthèse ATS / Recruteur",
    },
    skills: {
      badge: "Matrice des Compétences & Stack Technique",
      title: "Compétences & Maîtrise Technique",
      subtitle: "Une expertise éprouvée de 6+ ans centrée sur l'écosystème React / Next.js avec une réelle polyvalence Full-Stack & DevOps.",
      allCategories: "Toutes les compétences",
      frontEndCat: "Front-End & Core",
      backEndCat: "Back-End & APIs",
      devOpsCat: "DevOps & Méthodes",
      databasesCat: "Données & CMS",
      searchPlaceholder: "Rechercher une compétence...",
      legendExpert: "Expert :",
      legendExpertDesc: "Production quotidienne, maîtrise approfondie & architecture",
      legendAdvanced: "Avancé :",
      legendAdvancedDesc: "Autonome en entreprise, projets livrés",
      legendOperational: "Opérationnel :",
      legendOperationalDesc: "Capacité d'intervention et maintenance",
    },
    experiences: {
      badge: "Parcours Professionnel & Réalisations Clés",
      title: "Expériences & Projets Marquants",
      subtitle: "6+ années de réalisations concrètes : applications critiques, refontes d'envergure et projets SaaS.",
      filterAll: "Toutes les expériences",
      filterReactNext: "React / Next.js",
      filterLeadArchi: "Lead & Architecture",
      filterPublicEnterprise: "Secteur Public & Grands Comptes",
      missionsHeading: "Missions & Projets Réalisés",
      relatedTech: "Technologies associées :",
      additionalRolesHeading: "Missions Spécifiques & Expériences Complémentaires",
    },
    leadership: {
      badge: "Leadership, Transmission & Challenges",
      title: "Enseignement, Mentorat & Cybersécurité",
      subtitle: "Un profil d'ingénieur complet : capacité avérée à transmettre le savoir, encadrer la relève et relever des défis techniques.",
      fieldLabel: "Domaine :",
      provenImpact: "✓ Impact Démontré",
    },
    education: {
      badge: "Diplômes, Certifications & Langues",
      title: "Formation & Certifications",
      subtitle: "Un socle solide en sciences informatiques, complété par une veille continue et des certifications professionnelles.",
      issuerLabel: "Organisme :",
      certIdLabel: "ID Certif :",
      languagesTitle: "Langues & Communication",
      activeStatus: "Actif",
      languagesNote: "Collaboration fluide en environnement bilingue (équipes internationales).",
    },
    contact: {
      badge: "Recrutement & Collaboration",
      title: "Prêt pour de Nouveaux Challenges",
      subtitle: "Vous recherchez un Développeur Front-End Senior pour renforcer votre équipe technique ou porter un projet critique ? Échangeons dès maintenant.",
      directCoordinates: "Coordonnées Directes",
      fastResponse: "Réponse rapide garantie sous 24h ouvrées.",
      emailLabel: "Email Professionnel",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation & Mobilité",
      initiateExchange: "Initier un Premier Échange",
      selectNeed: "Sélectionnez votre type de besoin pour pré-remplir l'email :",
      optCdi: "Opportunité CDI / Poste Fixe",
      optFreelance: "Mission Freelance / Régie / Forfait",
      optInterview: "Échange découverte / Prise de contact",
      sendEmailBtn: "Envoyer l'email pré-rempli",
      copiedEmail: "Email copié !",
      copiedPhone: "Téléphone copié !",
    },
    footer: {
      profile: "Profil",
      skills: "Compétences",
      experiences: "Expériences",
      leadership: "Enseignement",
      education: "Formation",
      contact: "Contact",
      printCV: "Imprimer le CV",
      copyrightText: "Conçu avec Next.js, React & Tailwind CSS.",
      statusLabel: "Statut :",
    },
    recruiterModal: {
      title: "Fiche Synthèse Recruteur (Format ATS / Markdown)",
      subtitle: "Idéal pour intégrer directement dans votre ATS, CRM ou notes d'entretien",
      btnFr: "Français (FR)",
      btnEn: "English (EN)",
      copiedMsg: "Copié dans le presse-papier !",
      copyBtn: "Copier le résumé Markdown",
      footerNote: "Prêt pour copie directe vers Bullhorn, Greenhouse, Lever, Notion, etc.",
      closeBtn: "Fermer",
    },
    toggle: {
      toggleLabel: "Changer de langue",
      switchToEn: "Passer en anglais",
      switchToFr: "Passer en français",
    },
    theme: {
      toggleLabel: "Changer de thème",
      light: "Clair",
      dark: "Sombre",
      switchToLight: "Passer en mode clair",
      switchToDark: "Passer en mode sombre",
    },
  },
  en: {
    navbar: {
      availableBadge: "Available",
      subtitle: "Senior React / Next.js • 6+ yrs",
      profile: "Profile",
      skills: "Skills",
      experiences: "Experience",
      leadership: "Teaching & Lead",
      education: "Education",
      contact: "Contact",
      recruiterSheet: "Recruiter Sheet (ATS)",
      recruiterSheetTitle: "Open executive summary sheet for ATS / CRM",
      printTitle: "Print / Export to PDF",
      copyEmail: "Copy Email",
      emailCopied: "Email copied!",
      menu: "Menu",
      call: "Call",
      email: "Email",
    },
    hero: {
      specialistBadge: "Front-End & Architecture Specialist",
      availableBadge: "Available immediately",
      locationBadge: "Bordeaux / Full Remote",
      contactMe: "Get in touch",
      copiedEmail: "Email copied!",
      copiedPhone: "Phone copied!",
      copyEmailTitle: "Copy email address",
      copyPhoneTitle: "Copy phone number",
      atsSummary: "ATS / Recruiter Summary",
    },
    skills: {
      badge: "Skills Matrix & Technical Stack",
      title: "Skills & Technical Expertise",
      subtitle: "A proven 6+ years expertise focused on the React / Next.js ecosystem with strong Full-Stack & DevOps versatility.",
      allCategories: "All Skills",
      frontEndCat: "Front-End & Core",
      backEndCat: "Back-End & APIs",
      devOpsCat: "DevOps & Methods",
      databasesCat: "Data & CMS",
      searchPlaceholder: "Search a skill...",
      legendExpert: "Expert:",
      legendExpertDesc: "Daily production, in-depth mastery & architecture",
      legendAdvanced: "Advanced:",
      legendAdvancedDesc: "Autonomous in enterprise environments, delivered projects",
      legendOperational: "Operational:",
      legendOperationalDesc: "Intervention & maintenance capabilities",
    },
    experiences: {
      badge: "Career Path & Key Achievements",
      title: "Featured Experiences & Projects",
      subtitle: "6+ years of concrete achievements: mission-critical applications, large-scale redesigns, and SaaS products.",
      filterAll: "All Experiences",
      filterReactNext: "React / Next.js",
      filterLeadArchi: "Lead & Architecture",
      filterPublicEnterprise: "Public Sector & Enterprise",
      missionsHeading: "Missions & Delivered Projects",
      relatedTech: "Related technologies:",
      additionalRolesHeading: "Specific Missions & Additional Experience",
    },
    leadership: {
      badge: "Leadership, Teaching & Challenges",
      title: "Teaching, Mentorship & Cybersecurity",
      subtitle: "A well-rounded engineer profile: proven ability to share knowledge, mentor upcoming talent, and tackle technical challenges.",
      fieldLabel: "Field:",
      provenImpact: "✓ Proven Impact",
    },
    education: {
      badge: "Degrees, Certifications & Languages",
      title: "Education & Certifications",
      subtitle: "A solid foundation in computer science, enhanced by continuous learning and industry certifications.",
      issuerLabel: "Issuer:",
      certIdLabel: "Cert ID:",
      languagesTitle: "Languages & Communication",
      activeStatus: "Active",
      languagesNote: "Seamless collaboration in bilingual environments (international teams).",
    },
    contact: {
      badge: "Recruitment & Collaboration",
      title: "Ready for New Challenges",
      subtitle: "Looking for a Senior Front-End Developer to strengthen your technical squad or lead a critical project? Let's connect.",
      directCoordinates: "Direct Coordinates",
      fastResponse: "Prompt reply guaranteed within 24 business hours.",
      emailLabel: "Professional Email",
      phoneLabel: "Phone",
      locationLabel: "Location & Mobility",
      initiateExchange: "Start a Conversation",
      selectNeed: "Select your project requirement to pre-fill the email:",
      optCdi: "Permanent Full-time Role",
      optFreelance: "Freelance / Contract Mission",
      optInterview: "Introductory Call / Tech Discussion",
      sendEmailBtn: "Send Pre-filled Email",
      copiedEmail: "Email copied!",
      copiedPhone: "Phone copied!",
    },
    footer: {
      profile: "Profile",
      skills: "Skills",
      experiences: "Experience",
      leadership: "Teaching",
      education: "Education",
      contact: "Contact",
      printCV: "Print CV",
      copyrightText: "Built with Next.js, React & Tailwind CSS.",
      statusLabel: "Status:",
    },
    recruiterModal: {
      title: "Recruiter Executive Summary (ATS / Markdown Format)",
      subtitle: "Perfect for direct export into your ATS, CRM or interview notes",
      btnFr: "Français (FR)",
      btnEn: "English (EN)",
      copiedMsg: "Copied to clipboard!",
      copyBtn: "Copy Markdown Summary",
      footerNote: "Ready for direct paste into Bullhorn, Greenhouse, Lever, Notion, etc.",
      closeBtn: "Close",
    },
    toggle: {
      toggleLabel: "Change language",
      switchToEn: "Switch to English",
      switchToFr: "Passer en français",
    },
    theme: {
      toggleLabel: "Toggle theme",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
  },
};
