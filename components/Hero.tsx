"use client";

import React, { useState } from "react";
import { CV_DATA } from "@/data/cvData";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCopy,
  IconCheck,
  IconDownload,
  IconSparkles,
  IconShield,
  IconLayers,
  IconGraduation,
} from "./Icons";
import { RecruiterModal } from "./RecruiterModal";

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <section id="presentation" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          
          {/* Main Headline */}
          <div className="flex-1 space-y-6">
            
            {/* Top Recruiter Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/60 shadow-xs">
                <IconSparkles className="w-3.5 h-3.5 text-blue-400" />
                Spécialiste Front-End & Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Disponible immédiatement
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
                <IconMapPin className="w-3.5 h-3.5 text-zinc-400" />
                Bordeaux / Full Remote
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Jianni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Nirinarisoa</span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-zinc-200">
                {CV_DATA.personal.title}
              </p>
              <p className="mt-1 text-sm sm:text-base text-zinc-400 font-mono">
                React.js • Next.js (App Router) • TypeScript • Node.js • Spring Boot
              </p>
            </div>

            {/* Value proposition paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              {CV_DATA.summary.pitch}
            </p>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${CV_DATA.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <IconMail className="w-4 h-4" />
                <span>Me contacter</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
                title="Copier l'adresse email"
              >
                {copiedEmail ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email copié !</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="w-4 h-4 text-zinc-400" />
                    <span>{CV_DATA.personal.email}</span>
                  </>
                )}
              </button>

              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
                title="Copier le numéro de téléphone"
              >
                {copiedPhone ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Téléphone copié !</span>
                  </>
                ) : (
                  <>
                    <IconPhone className="w-4 h-4 text-zinc-400" />
                    <span>{CV_DATA.personal.phoneDisplay}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-950/60 to-indigo-950/60 hover:from-purple-900/60 hover:to-indigo-900/60 text-purple-200 border border-purple-800/50 transition-colors"
              >
                <IconCopy className="w-4 h-4 text-purple-400" />
                <span>Synthèse ATS / Recruteur</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="w-full lg:w-[420px] grid grid-cols-2 gap-3.5">
            {CV_DATA.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-xs hover:border-zinc-700 transition-all group"
              >
                <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-100 to-zinc-400 group-hover:from-blue-400 group-hover:to-indigo-400 transition-colors">
                  {metric.value}
                </span>
                <span className="block mt-1 text-sm font-bold text-zinc-200">
                  {metric.label}
                </span>
                <span className="block mt-0.5 text-xs text-zinc-400 leading-snug">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Executive Pillars / Why Hire Jianni? */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-800/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-4">
              <IconLayers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-100 mb-2">
              {CV_DATA.summary.strengths[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {CV_DATA.summary.strengths[0].description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-800/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-4">
              <IconShield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-100 mb-2">
              {CV_DATA.summary.strengths[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {CV_DATA.summary.strengths[1].description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-purple-800/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-purple-400 mb-4">
              <IconGraduation className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-100 mb-2">
              {CV_DATA.summary.strengths[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {CV_DATA.summary.strengths[2].description}
            </p>
          </div>
        </div>
      </div>

      <RecruiterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
