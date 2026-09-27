"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCopy,
  IconCheck,
} from "./Icons";

export function ContactSection() {
  const { language, cvData, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageType, setMessageType] = useState<"cdi" | "freelance" | "interview">("cdi");

  const copyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(cvData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getMailtoUrl = () => {
    let subject = "";
    let body = "";

    if (language === "fr") {
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
    } else {
      if (messageType === "cdi") {
        subject = "[Permanent Hiring] Senior React / Next.js Developer Opportunity";
        body = `Hello Jianni,\n\nWe are currently looking for a Senior Front-End Developer (React / Next.js / TypeScript) for a permanent position (Bordeaux / Remote).\n\nWould you be available for a brief introductory call?\n\nBest regards,`;
      } else if (messageType === "freelance") {
        subject = "[Contract Mission] Front-End Developer React / Next.js";
        body = `Hello Jianni,\n\nWe have an exciting freelance/contract opportunity focused on React / Next.js.\n\nWould you be available soon to discuss this project?\n\nBest regards,`;
      } else if (messageType === "interview") {
        subject = "[Direct Contact] Technical Discussion - Jianni Nirinarisoa";
        body = `Hello Jianni,\n\nI would love to connect regarding your availability and expertise in modern React / Next.js architecture.\n\nWhat are your availabilities in the coming days?\n\nBest regards,`;
      }
    }

    return `mailto:${cvData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-3xl -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Coordinates Card */}
          <div className="p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xs flex flex-col justify-between space-y-6 shadow-md dark:shadow-none">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {t.contact.directCoordinates}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.contact.fastResponse}
              </p>

              <div className="mt-6 space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                      <IconMail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        {t.contact.emailLabel}
                      </span>
                      <a
                        href={`mailto:${cvData.personal.email}`}
                        className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {cvData.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 transition-colors shadow-xs dark:shadow-none"
                    title={t.hero.copyEmailTitle}
                  >
                    {copiedEmail ? (
                      <IconCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50">
                      <IconPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        {t.contact.phoneLabel}
                      </span>
                      <a
                        href={`tel:${cvData.personal.phone}`}
                        className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {cvData.personal.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyPhone}
                    className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 transition-colors shadow-xs dark:shadow-none"
                    title={t.hero.copyPhoneTitle}
                  >
                    {copiedPhone ? (
                      <IconCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50">
                    <IconMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      {t.contact.locationLabel}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {cvData.personal.location}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-0.5">
                      {cvData.personal.mobility}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-100/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              <span>{cvData.personal.availability}</span>
            </div>
          </div>

          {/* Quick Email Launcher for Recruiters */}
          <div className="p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xs flex flex-col justify-between shadow-md dark:shadow-none">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {t.contact.initiateExchange}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                {t.contact.selectNeed}
              </p>

              {/* Message Type Selector */}
              <div className="space-y-2.5 mb-6">
                <button
                  onClick={() => setMessageType("cdi")}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    messageType === "cdi"
                      ? "bg-blue-50 dark:bg-blue-950/70 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-200 shadow-xs"
                      : "bg-zinc-50 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <span>{t.contact.optCdi}</span>
                  {messageType === "cdi" && <IconCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                </button>

                <button
                  onClick={() => setMessageType("freelance")}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    messageType === "freelance"
                      ? "bg-blue-50 dark:bg-blue-950/70 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-200 shadow-xs"
                      : "bg-zinc-50 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <span>{t.contact.optFreelance}</span>
                  {messageType === "freelance" && <IconCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                </button>

                <button
                  onClick={() => setMessageType("interview")}
                  className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    messageType === "interview"
                      ? "bg-blue-50 dark:bg-blue-950/70 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-200 shadow-xs"
                      : "bg-zinc-50 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  <span>{t.contact.optInterview}</span>
                  {messageType === "interview" && <IconCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                </button>
              </div>
            </div>

            <a
              href={getMailtoUrl()}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <IconMail className="w-4 h-4" />
              <span>{t.contact.sendEmailBtn}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
