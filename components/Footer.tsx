"use client";

import React from "react";
import { CV_DATA } from "@/data/cvData";
import { IconMail, IconPhone, IconMapPin, IconPrint } from "./Icons";

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-xs text-zinc-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <span className="font-bold text-sm text-zinc-100 block">
              {CV_DATA.personal.name}
            </span>
            <span className="text-zinc-400 text-xs">
              {CV_DATA.personal.title} • {CV_DATA.personal.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#presentation" className="hover:text-zinc-200 transition-colors">
              Profil
            </a>
            <a href="#competences" className="hover:text-zinc-200 transition-colors">
              Compétences
            </a>
            <a href="#experiences" className="hover:text-zinc-200 transition-colors">
              Expériences
            </a>
            <a href="#leadership" className="hover:text-zinc-200 transition-colors">
              Enseignement
            </a>
            <a href="#formation" className="hover:text-zinc-200 transition-colors">
              Formation
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
            >
              <IconPrint className="w-3.5 h-3.5" />
              <span>Imprimer le CV</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} {CV_DATA.personal.name}. Conçu avec Next.js, React & Tailwind CSS.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Statut : {CV_DATA.personal.availability}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
