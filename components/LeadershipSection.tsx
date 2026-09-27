"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  IconGraduation,
  IconUsers,
  IconShield,
  IconAward,
  IconSparkles,
  IconCalendar,
} from "./Icons";

export function LeadershipSection() {
  const { cvData, t } = useLanguage();

  const getIconForType = (type: string) => {
    switch (type.toLowerCase()) {
      case "enseignement supérieur":
      case "higher education":
        return <IconGraduation className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "mentorat":
      case "mentorship":
        return <IconUsers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "cybersécurité":
      case "cybersecurity":
        return <IconShield className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "hackathon":
        return <IconAward className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <IconSparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="leadership" className="py-20 bg-zinc-50/80 dark:bg-zinc-950/70 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <IconUsers className="w-3.5 h-3.5" />
            {t.leadership.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.leadership.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.leadershipAndTeaching.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                      {getIconForType(item.type)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                        <IconCalendar className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                        {item.period}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {item.organization}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-medium text-zinc-600 dark:text-zinc-400">{t.leadership.fieldLabel} {item.type}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  {t.leadership.provenImpact}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
