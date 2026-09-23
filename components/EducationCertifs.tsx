import React from "react";
import { CV_DATA } from "@/data/cvData";
import {
  IconGraduation,
  IconAward,
  IconMapPin,
  IconCalendar,
  IconCheck,
} from "./Icons";

export function EducationCertifs() {
  return (
    <section id="formation" className="py-20 bg-zinc-950/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/60 mb-3">
            <IconGraduation className="w-3.5 h-3.5" />
            Diplômes, Certifications & Langues
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formation & Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Un socle solide en sciences informatiques, complété par une veille continue et des certifications professionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Education Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-4">
                <IconGraduation className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 mb-1">
                <IconCalendar className="w-3.5 h-3.5" />
                {CV_DATA.education[0].period}
              </span>

              <h3 className="text-lg font-bold text-white">
                {CV_DATA.education[0].degree}
              </h3>
              
              <p className="text-xs font-semibold text-blue-400 mt-1">
                {CV_DATA.education[0].specialization}
              </p>

              <p className="text-xs text-zinc-400 mt-1">
                {CV_DATA.education[0].institution}
              </p>

              <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                {CV_DATA.education[0].details}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-400">
              <IconMapPin className="w-3.5 h-3.5" />
              <span>{CV_DATA.education[0].location}</span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-4">
                <IconAward className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 mb-1">
                <IconCalendar className="w-3.5 h-3.5" />
                {CV_DATA.certifications[0].date}
              </span>

              <h3 className="text-lg font-bold text-white">
                {CV_DATA.certifications[0].name}
              </h3>

              <p className="text-xs font-semibold text-indigo-400 mt-1">
                Organisme : {CV_DATA.certifications[0].issuer}
              </p>

              <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
                {CV_DATA.certifications[0].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60">
              <span className="text-[11px] font-mono text-zinc-400 block truncate">
                ID Certif : <span className="text-zinc-200">{CV_DATA.certifications[0].credentialId}</span>
              </span>
            </div>
          </div>

          {/* Languages & Working Style */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-4">
                <IconCheck className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                Langues & Communication
              </h3>

              <div className="space-y-3">
                {CV_DATA.personal.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-sm text-zinc-200 block">
                        {lang.name}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {lang.level}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/40 font-medium">
                      Actif
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60">
              <span className="text-xs text-zinc-400">
                Collaboration fluide en environnement bilingue (équipes internationales).
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
