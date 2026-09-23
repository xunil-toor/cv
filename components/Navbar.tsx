"use client";

import React, { useState, useEffect } from "react";
import { CV_DATA } from "@/data/cvData";
import { IconCopy, IconPrint, IconCheck, IconMail, IconPhone } from "./Icons";
import { RecruiterModal } from "./RecruiterModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CV_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Name */}
            <a href="#top" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                JN
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-100 tracking-tight group-hover:text-blue-400 transition-colors">
                    {CV_DATA.personal.name}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                    Dispo
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono truncate max-w-[220px]">
                  React / Next.js Senior • 6+ ans
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 p-1.5 rounded-full backdrop-blur-sm">
              <a
                href="#presentation"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Profil
              </a>
              <a
                href="#competences"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Compétences
              </a>
              <a
                href="#experiences"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Expériences
              </a>
              <a
                href="#leadership"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Enseignement & Lead
              </a>
              <a
                href="#formation"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Formation
              </a>
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800 transition-colors text-blue-400"
              >
                Contact
              </a>
            </nav>

            {/* Quick Actions (Recruiter Oriented) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                title="Ouvrir la fiche synthèse pour ATS / CRM"
              >
                <IconCopy className="w-3.5 h-3.5" />
                <span>Fiche Recruteur (ATS)</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"
                title="Imprimer / Exporter en PDF"
                aria-label="Imprimer le CV"
              >
                <IconPrint className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"
                title="Copier l'email"
              >
                {copiedEmail ? (
                  <>
                    <IconCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email copié !</span>
                  </>
                ) : (
                  <>
                    <IconMail className="w-3.5 h-3.5" />
                    <span>Copier Email</span>
                  </>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 text-sm"
                aria-label="Menu"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl space-y-3">
              <nav className="flex flex-col space-y-2 text-sm font-medium">
                <a
                  href="#presentation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Profil & Résumé
                </a>
                <a
                  href="#competences"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Compétences Techniques
                </a>
                <a
                  href="#experiences"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Expériences & Projets
                </a>
                <a
                  href="#leadership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Enseignement & Mentorat
                </a>
                <a
                  href="#formation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Formation & Certifications
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-blue-400 hover:bg-zinc-800"
                >
                  Contact Direct
                </a>
              </nav>

              <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs"
                >
                  <IconCopy className="w-4 h-4" /> Fiche Recruteur (Format ATS)
                </button>
                <div className="flex gap-2 text-xs">
                  <a
                    href={`mailto:${CV_DATA.personal.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-zinc-800 text-zinc-200 rounded-lg"
                  >
                    <IconMail className="w-3.5 h-3.5" /> Email
                  </a>
                  <a
                    href={`tel:${CV_DATA.personal.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-zinc-800 text-zinc-200 rounded-lg"
                  >
                    <IconPhone className="w-3.5 h-3.5" /> Appeler
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Recruiter Modal */}
      <RecruiterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
