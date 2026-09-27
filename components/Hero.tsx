"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconShield,
  IconLayers,
  IconGraduation,
} from "./Icons";
import { RecruiterModal } from "./RecruiterModal";

export function Hero() {
  const { cvData, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <section id="presentation" className="relative pt-36 pb-20 sm:pt-40 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 dark:from-blue-600/15 via-indigo-500/10 dark:via-indigo-600/10 to-purple-500/10 dark:to-purple-600/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Main Headline */}
          <div className="flex-1 space-y-6">
            
            {/* Top Recruiter Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 shadow-xs">
                <IconSparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {t.hero.specialistBadge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                {t.hero.availableBadge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                <IconMapPin className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                {t.hero.locationBadge}
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Jianni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">Nirinarisoa</span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                {cvData.personal.title}
              </p>
              <p className="mt-1 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-mono">
                React.js • Next.js (App Router) • TypeScript • Node.js • Spring Boot
              </p>
            </div>

            {/* Value proposition paragraph */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {cvData.summary.pitch}
            </p>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${cvData.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <IconMail className="w-4 h-4" />
                <span>{t.hero.contactMe}</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-xs dark:shadow-none"
                title={t.hero.copyEmailTitle}
              >
                {copiedEmail ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t.hero.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span>{cvData.personal.email}</span>
                  </>
                )}
              </button>

              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-xs dark:shadow-none"
                title={t.hero.copyPhoneTitle}
              >
                {copiedPhone ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t.hero.copiedPhone}</span>
                  </>
                ) : (
                  <>
                    <IconPhone className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span>{cvData.personal.phoneDisplay}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-purple-50 hover:bg-purple-100 dark:bg-gradient-to-r dark:from-purple-950/60 dark:to-indigo-950/60 dark:hover:from-purple-900/60 dark:hover:to-indigo-900/60 text-purple-700 dark:text-purple-200 border border-purple-200 dark:border-purple-800/50 transition-colors"
              >
                <IconCopy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{t.hero.atsSummary}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="w-full lg:w-[420px] grid grid-cols-2 gap-3.5">
            {cvData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/90 backdrop-blur-xs hover:border-blue-400 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
              >
                <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-100 dark:to-zinc-400 group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-colors">
                  {metric.value}
                </span>
                <span className="block mt-1 text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  {metric.label}
                </span>
                <span className="block mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 leading-snug">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Executive Pillars / Why Hire Jianni? */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-400 dark:hover:border-blue-800/40 transition-colors shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <IconLayers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {cvData.summary.strengths[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {cvData.summary.strengths[0].description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-indigo-400 dark:hover:border-indigo-800/40 transition-colors shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
              <IconShield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {cvData.summary.strengths[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {cvData.summary.strengths[1].description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-purple-400 dark:hover:border-purple-800/40 transition-colors shadow-xs dark:shadow-none">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <IconGraduation className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {cvData.summary.strengths[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {cvData.summary.strengths[2].description}
            </p>
          </div>
        </div>
      </div>

      <RecruiterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
