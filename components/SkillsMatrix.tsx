"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { IconCode, IconTerminal, IconLayers, IconBuilding } from "./Icons";

export function SkillsMatrix() {
  const { cvData, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: t.skills.allCategories, icon: IconLayers },
    { id: "frontEnd", label: t.skills.frontEndCat, icon: IconCode },
    { id: "backEnd", label: t.skills.backEndCat, icon: IconTerminal },
    { id: "toolsDevOps", label: t.skills.devOpsCat, icon: IconBuilding },
    { id: "databases", label: t.skills.databasesCat, icon: IconLayers },
  ];

  const allSkillsList = useMemo(() => {
    const list: {
      categoryKey: string;
      categoryTitle: string;
      name: string;
      level: string;
      badge?: string;
    }[] = [];

    Object.entries(cvData.skillsCategories).forEach(([key, category]) => {
      category.skills.forEach((s) => {
        list.push({
          categoryKey: key,
          categoryTitle: category.title,
          name: s.name,
          level: s.level,
          badge: s.badge,
        });
      });
    });
    return list;
  }, [cvData]);

  const filteredSkills = useMemo(() => {
    return allSkillsList.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.categoryKey === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allSkillsList, selectedCategory, searchQuery]);

  return (
    <section id="competences" className="py-20 bg-zinc-50/80 dark:bg-zinc-950/60 border-y border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <IconCode className="w-3.5 h-3.5" />
            {t.skills.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full md:w-auto shadow-xs">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={t.skills.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors shadow-xs"
            />
            <div className="absolute left-3 top-2.5 text-zinc-400 dark:text-zinc-500 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {filteredSkills.map((skill, idx) => {
            const isExpert = skill.level === "Expert";
            const isAvance = skill.level === "Avancé" || skill.level === "Advanced";

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  skill.badge
                    ? "bg-gradient-to-b from-blue-50/70 to-white dark:from-blue-950/30 dark:to-zinc-900/90 border-blue-200 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-700 shadow-xs dark:shadow-none"
                    : "bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-xs dark:shadow-none"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isExpert
                          ? "bg-emerald-500 dark:bg-emerald-400"
                          : isAvance
                          ? "bg-blue-500 dark:bg-blue-400"
                          : "bg-amber-500 dark:bg-amber-400"
                      }`}
                    />
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                  </div>

                  {skill.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-600 text-white shadow-xs">
                      {skill.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                  <span className="text-[11px] text-zinc-500 truncate max-w-[120px]">
                    {skill.categoryTitle}
                  </span>
                  <span
                    className={`font-medium ${
                      isExpert
                        ? "text-emerald-600 dark:text-emerald-400"
                        : isAvance
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Level Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <span><strong className="text-zinc-800 dark:text-zinc-200">{t.skills.legendExpert}</strong> {t.skills.legendExpertDesc}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <span><strong className="text-zinc-800 dark:text-zinc-200">{t.skills.legendAdvanced}</strong> {t.skills.legendAdvancedDesc}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400" />
            <span><strong className="text-zinc-800 dark:text-zinc-200">{t.skills.legendOperational}</strong> {t.skills.legendOperationalDesc}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
