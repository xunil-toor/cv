"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { IconPrint } from "./Icons";

export function Footer() {
  const { cvData, t } = useLanguage();

  return (
    <footer className="py-12 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 text-xs text-zinc-600 dark:text-zinc-400 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 block">
              {cvData.personal.name}
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 text-xs">
              {cvData.personal.title} • {cvData.personal.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <a href="#presentation" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              {t.footer.profile}
            </a>
            <a href="#competences" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              {t.footer.skills}
            </a>
            <a href="#experiences" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              {t.footer.experiences}
            </a>
            <a href="#leadership" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              {t.footer.leadership}
            </a>
            <a href="#formation" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              {t.footer.education}
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.footer.contact}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-xs"
            >
              <IconPrint className="w-3.5 h-3.5" />
              <span>{t.footer.printCV}</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} {cvData.personal.name}. {t.footer.copyrightText}</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <span>{t.footer.statusLabel} {cvData.personal.availability}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
