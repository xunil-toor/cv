"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Experience } from "@/data/cvData";
import {
  IconBriefcase,
  IconBuilding,
  IconCalendar,
  IconMapPin,
  IconSparkles,
  IconLayers,
} from "./Icons";

export function ExperienceSection() {
  const { cvData, t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: t.experiences.filterAll },
    { id: "react-next", label: t.experiences.filterReactNext },
    { id: "lead-archi", label: t.experiences.filterLeadArchi },
    { id: "public-enterprise", label: t.experiences.filterPublicEnterprise },
  ];

  const filteredExperiences = cvData.experiences.filter((exp) => {
    if (filter === "all") return true;
    return exp.category.includes(filter as Experience["category"][number]);
  });

  return (
    <section id="experiences" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            <IconBriefcase className="w-3.5 h-3.5" />
            {t.experiences.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.experiences.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.experiences.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === opt.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-xs dark:shadow-none"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="space-y-12">
          {filteredExperiences.map((exp: Experience) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700/90 transition-all backdrop-blur-xs shadow-sm dark:shadow-none"
            >
              {/* Header: Company & Meta */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800/70">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <IconBuilding className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                      {exp.modality}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <IconCalendar className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <IconMapPin className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {exp.description && (
                <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300 italic">
                  {exp.description}
                </p>
              )}

              {/* Highlights & Projects */}
              <div className="mt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <IconSparkles className="w-4 h-4 text-amber-500 dark:text-yellow-400" />
                  {t.experiences.missionsHeading}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((hl, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/70 hover:border-blue-400 dark:hover:border-blue-900/40 transition-colors flex flex-col justify-between shadow-xs dark:shadow-none"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                            {hl.clientOrProject}
                          </span>
                          {hl.roleBadge && (
                            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                              {hl.roleBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {hl.details}
                        </p>
                      </div>

                      {/* Tech badges */}
                      <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                        {hl.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-blue-100/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/70 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mr-1">
                  {t.experiences.relatedTech}
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Roles & Contract Missions */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/70">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-6">
            <IconLayers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            {t.experiences.additionalRolesHeading}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvData.additionalRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors shadow-xs dark:shadow-none"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  <span>{role.period}</span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">{role.context}</span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {role.role}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {role.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
