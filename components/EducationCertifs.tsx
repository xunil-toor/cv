"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  IconGraduation,
  IconAward,
  IconMapPin,
  IconCalendar,
  IconCheck,
} from "./Icons";

export function EducationCertifs() {
  const { cvData, t } = useLanguage();

  return (
    <section id="formation" className="py-20 bg-white/60 dark:bg-zinc-950/40 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <IconGraduation className="w-3.5 h-3.5" />
            {t.education.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Education Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-xs dark:shadow-none">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <IconGraduation className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1">
                <IconCalendar className="w-3.5 h-3.5" />
                {cvData.education[0].period}
              </span>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {cvData.education[0].degree}
              </h3>
              
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {cvData.education[0].specialization}
              </p>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {cvData.education[0].institution}
              </p>

              <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {cvData.education[0].details}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
              <IconMapPin className="w-3.5 h-3.5" />
              <span>{cvData.education[0].location}</span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-xs dark:shadow-none">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <IconAward className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1">
                <IconCalendar className="w-3.5 h-3.5" />
                {cvData.certifications[0].date}
              </span>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                {cvData.certifications[0].name}
              </h3>

              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                {t.education.issuerLabel} {cvData.certifications[0].issuer}
              </p>

              <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {cvData.certifications[0].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block truncate">
                {t.education.certIdLabel} <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{cvData.certifications[0].credentialId}</span>
              </span>
            </div>
          </div>

          {/* Languages & Working Style */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between shadow-xs dark:shadow-none">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <IconCheck className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                {t.education.languagesTitle}
              </h3>

              <div className="space-y-3">
                {cvData.personal.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/70 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-200 block">
                        {lang.name}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/40 font-medium">
                      {t.education.activeStatus}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/60">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.education.languagesNote}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
