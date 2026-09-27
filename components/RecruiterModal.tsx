"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CV_DATA } from "@/data/cvData";
import { IconCheck, IconCopy } from "./Icons";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState<"fr" | "en">(language);

  useEffect(() => {
    if (isOpen) {
      setFormat(language);
    }
  }, [isOpen, language]);

  if (!isOpen) return null;

  const markdownFr = `# PROFIL CANDIDAT : JIANNI NIRINARISOA
**Rôle :** Développeur Front-End Senior (React / Next.js / TypeScript)
**Expérience :** 6+ ans
**Localisation :** Bordeaux, France (Disponible en Hybride ou Full Remote)
**Contact :** ${CV_DATA.personal.email} | ${CV_DATA.personal.phone}

## POINTS CLÉS RECRUTEURS (HIGHLIGHTS)
- **Stack Maîtrisée :** React.js, Next.js (App Router), TypeScript, Node.js, Spring Boot, Angular, Tailwind CSS, Docker.
- **Grands Comptes & Secteur Public :** Gendarmerie Nationale (softphone WebRTC), Santé Publique France (TMA 1000-premiers-jours.fr), FranceAgriMer / RNM (migration Delphi vers Spring Boot / Angular), La Poste (application logistique).
- **Leadership & Transmission :** Tech Lead sur projets web, Enseignant vacataire en développement React à l'IUT de Bordeaux / Gradignan (2025-2026), Tuteur d'alternance primé.
- **Expertise Migration :** Spécialiste de la refonte d'architectures legacy (Delphi, AngularJS) vers des socles modernes React/Next.js et APIs REST.

## FORMATION & CERTIFICATIONS
- Licence Informatique (Applications Connectées) - Université de Pau (UPPA)
- Certification OP37 Développeur Android (26 ACADEMY - ID: 362154972386708)
- Langues : Français (Natif), Anglais (Professionnel courant)`;

  const markdownEn = `# CANDIDATE PROFILE: JIANNI NIRINARISOA
**Role:** Senior Front-End Developer (React / Next.js / TypeScript)
**Experience:** 6+ years
**Location:** Bordeaux, France (Open to Hybrid or Full Remote)
**Contact:** ${CV_DATA.personal.email} | ${CV_DATA.personal.phone}

## RECRUITER HIGHLIGHTS
- **Core Tech Stack:** React.js, Next.js (App Router), TypeScript, Node.js, Spring Boot, Angular, Tailwind CSS, Docker.
- **Enterprise & Public Sector:** French National Gendarmerie (WebRTC softphone), Santé Publique France (1000-premiers-jours.fr TMA & performance), FranceAgriMer / RNM (Delphi to Spring Boot / Angular migration), La Poste (greenfield logistics app).
- **Leadership & Mentorship:** Web Tech Lead, Guest Lecturer teaching React at Bordeaux IUT (2025-2026), Top-ranking Apprenticeship Mentor.
- **Migration Expertise:** Proven record transitioning legacy codebases (Delphi, AngularJS) to modern React/Next.js cloud-native architectures.

## EDUCATION & CERTIFICATIONS
- Bachelor's Degree in Computer Science (Connected Applications) - UPPA France
- OP37 Certified Android Application Developer (26 ACADEMY - ID: 362154972386708)
- Languages: French (Native), English (Professional Proficiency)`;

  const currentText = format === "fr" ? markdownFr : markdownEn;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {t.recruiterModal.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.recruiterModal.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label={t.recruiterModal.closeBtn}
          >
            ✕
          </button>
        </div>

        {/* Language switch & actions */}
        <div className="flex items-center justify-between px-6 py-3 bg-zinc-50/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-950 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium">
            <button
              onClick={() => setFormat("fr")}
              className={`px-3 py-1 rounded-md transition-colors ${
                format === "fr"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {t.recruiterModal.btnFr}
            </button>
            <button
              onClick={() => setFormat("en")}
              className={`px-3 py-1 rounded-md transition-colors ${
                format === "en"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {t.recruiterModal.btnEn}
            </button>
          </div>

          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-blue-500/20"
            }`}
          >
            {copied ? (
              <>
                <IconCheck className="w-4 h-4" /> {t.recruiterModal.copiedMsg}
              </>
            ) : (
              <>
                <IconCopy className="w-4 h-4" /> {t.recruiterModal.copyBtn}
              </>
            )}
          </button>
        </div>

        {/* Content area */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-zinc-800 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-950/60 whitespace-pre-wrap select-all">
          {currentText}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80 text-xs text-zinc-500 dark:text-zinc-400">
          <span>{t.recruiterModal.footerNote}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            {t.recruiterModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
