"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { IconCopy, IconPrint, IconCheck, IconMail, IconPhone } from "./Icons";
import { RecruiterModal } from "./RecruiterModal";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { cvData, t } = useLanguage();
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
    navigator.clipboard.writeText(cvData.personal.email);
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
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/25 py-2.5"
            : "bg-zinc-950/70 backdrop-blur-sm border-b border-zinc-800/40 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ligne 1 : Logo, Titre & Toggle de langue / Actions */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Name */}
            <a href="#top" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                JN
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-100 tracking-tight group-hover:text-blue-400 transition-colors">
                    {cvData.personal.name}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                    {t.navbar.availableBadge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono truncate max-w-[220px] sm:max-w-none">
                  {t.navbar.subtitle}
                </p>
              </div>
            </a>

            {/* Actions Ligne 1 (Toggle de langue en premier & Outils recruteur) */}
            <div className="flex items-center gap-2">
              {/* Language Switcher Toggle */}
              <LanguageToggle variant="desktop" />

              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                title={t.navbar.recruiterSheetTitle}
              >
                <IconCopy className="w-3.5 h-3.5" />
                <span>{t.navbar.recruiterSheet}</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"
                title={t.navbar.printTitle}
                aria-label={t.navbar.printTitle}
              >
                <IconPrint className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"
                title={t.navbar.copyEmail}
              >
                {copiedEmail ? (
                  <>
                    <IconCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{t.navbar.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <IconMail className="w-3.5 h-3.5" />
                    <span>{t.navbar.copyEmail}</span>
                  </>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 text-sm"
                aria-label={t.navbar.menu}
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Ligne 2 : Navbar de navigation */}
          <div className="hidden lg:flex items-center justify-center pt-2.5 mt-2 border-t border-zinc-800/50">
            <nav className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 bg-zinc-900/70 border border-zinc-800/80 px-2 py-1 rounded-full backdrop-blur-md shadow-inner">
              <a
                href="#presentation"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800/90 transition-colors"
              >
                {t.navbar.profile}
              </a>
              <a
                href="#competences"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800/90 transition-colors"
              >
                {t.navbar.skills}
              </a>
              <a
                href="#experiences"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800/90 transition-colors"
              >
                {t.navbar.experiences}
              </a>
              <a
                href="#leadership"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800/90 transition-colors"
              >
                {t.navbar.leadership}
              </a>
              <a
                href="#formation"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800/90 transition-colors"
              >
                {t.navbar.education}
              </a>
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-zinc-800/90 transition-colors text-blue-400 font-semibold"
              >
                {t.navbar.contact}
              </a>
            </nav>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl space-y-3">
              {/* Mobile Language Toggle */}
              <LanguageToggle variant="mobile" />

              <nav className="flex flex-col space-y-2 text-sm font-medium">
                <a
                  href="#presentation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {t.navbar.profile}
                </a>
                <a
                  href="#competences"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {t.navbar.skills}
                </a>
                <a
                  href="#experiences"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {t.navbar.experiences}
                </a>
                <a
                  href="#leadership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {t.navbar.leadership}
                </a>
                <a
                  href="#formation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {t.navbar.education}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-blue-400 hover:bg-zinc-800"
                >
                  {t.navbar.contact}
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
                  <IconCopy className="w-4 h-4" /> {t.navbar.recruiterSheet}
                </button>
                <div className="flex gap-2 text-xs">
                  <a
                    href={`mailto:${cvData.personal.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-zinc-800 text-zinc-200 rounded-lg"
                  >
                    <IconMail className="w-3.5 h-3.5" /> {t.navbar.email}
                  </a>
                  <a
                    href={`tel:${cvData.personal.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-zinc-800 text-zinc-200 rounded-lg"
                  >
                    <IconPhone className="w-3.5 h-3.5" /> {t.navbar.call}
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
