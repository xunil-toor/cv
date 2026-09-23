"use client";

import React, { useState } from "react";
import { CV_DATA } from "@/data/cvData";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconCalendar,
} from "./Icons";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageType, setMessageType] = useState<"cdi" | "freelance" | "interview">("cdi");

  const copyEmail = () => {
    navigator.clipboard.writeText(CV_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(CV_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getMailtoUrl = () => {
    let subject = "Opportunité Développeur Front-End Senior React / Next.js";
    let body = "Bonjour Jianni,\n\nJ'ai consulté votre profil et souhaiterais échanger avec vous concernant une opportunité...\n\nCordialement,";

    if (messageType === "cdi") {
      subject = "[Recrutement CDI] Opportunité Développeur Senior React / Next.js";
      body = `Bonjour Jianni,\n\nNous recrutons actuellement un Développeur Front-End Senior (React / Next.js / TypeScript) pour un poste en CDI (Bordeaux / Remote).\n\nSeriez-vous disponible pour un court échange téléphonique ?\n\nBien cordialement,`;
    } else if (messageType === "freelance") {
      subject = "[Mission Freelance] Mission Développeur Front-End React / Next.js";
      body = `Bonjour Jianni,\n\nNous avons une mission freelance à vous proposer sur un socle React / Next.js.\n\nSeriez-vous disponible prochainement pour en discuter ?\n\nBien cordialement,`;
    } else if (messageType === "interview") {
      subject = "[Prise de contact] Échange technique - Jianni Nirinarisoa";
      body = `Bonjour Jianni,\n\nJ'aimerais échanger avec vous au sujet de votre disponibilité et de vos compétences en architecture React / Next.js.\n\nQuelles sont vos disponibilités dans les prochains jours ?\n\nBien cordialement,`;
    }

    return `mailto:${CV_DATA.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Recrutement & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Prêt pour de Nouveaux Challenges
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Vous recherchez un Développeur Front-End Senior pour renforcer votre équipe technique ou porter un projet critique ? Échangeons dès maintenant.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Coordinates Card */}
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-xs flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Coordonnées Directes
              </h3>
              <p className="text-xs text-zinc-400">
                Réponse rapide garantie sous 24h ouvrées.
              </p>

              <div className="mt-6 space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-800/50">
                      <IconMail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Email Professionnel
                      </span>
                      <a
                        href={`mailto:${CV_DATA.personal.email}`}
                        className="text-sm font-semibold text-zinc-100 hover:text-blue-400 transition-colors"
                      >
                        {CV_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 transition-colors"
                    title="Copier l'email"
                  >
                    {copiedEmail ? (
                      <IconCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
                      <IconPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Téléphone
                      </span>
                      <a
                        href={`tel:${CV_DATA.personal.phone}`}
                        className="text-sm font-semibold text-zinc-100 hover:text-blue-400 transition-colors"
                      >
                        {CV_DATA.personal.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 transition-colors"
                    title="Copier le numéro"
                  >
                    {copiedPhone ? (
                      <IconCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/80 text-purple-400 border border-purple-800/50">
                    <IconMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Localisation & Mobilité
                    </span>
                    <span className="text-sm font-semibold text-zinc-100">
                      {CV_DATA.personal.location}
                    </span>
                    <span className="text-xs text-zinc-400 block mt-0.5">
                      {CV_DATA.personal.mobility}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{CV_DATA.personal.availability}</span>
            </div>
          </div>

          {/* Quick Email Launcher for Recruiters */}
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Initier un Premier Échange
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Sélectionnez votre type de besoin pour pré-remplir l&apos;email :
              </p>

              {/* Message Type Selector */}
              <div className="space-y-2.5 mb-6">
                <button
                  onClick={() => setMessageType("cdi")}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    messageType === "cdi"
                      ? "bg-blue-950/70 border-blue-700 text-blue-200 shadow-sm"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span>Opportunité CDI / Poste Fixe</span>
                  {messageType === "cdi" && <IconCheck className="w-4 h-4 text-blue-400" />}
                </button>

                <button
                  onClick={() => setMessageType("freelance")}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    messageType === "freelance"
                      ? "bg-blue-950/70 border-blue-700 text-blue-200 shadow-sm"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span>Mission Freelance / Régie / Forfait</span>
                  {messageType === "freelance" && <IconCheck className="w-4 h-4 text-blue-400" />}
                </button>

                <button
                  onClick={() => setMessageType("interview")}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    messageType === "interview"
                      ? "bg-blue-950/70 border-blue-700 text-blue-200 shadow-sm"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span>Échange découverte / Prise de contact</span>
                  {messageType === "interview" && <IconCheck className="w-4 h-4 text-blue-400" />}
                </button>
              </div>
            </div>

            <a
              href={getMailtoUrl()}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <IconMail className="w-4 h-4" />
              <span>Envoyer l&apos;email pré-rempli</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
