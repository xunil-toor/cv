"use client";

import React, { useState, useMemo } from "react";
import { CV_DATA } from "@/data/cvData";
import { IconCode, IconTerminal, IconLayers, IconBuilding, IconCheck } from "./Icons";

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "Toutes les compétences", icon: IconLayers },
    { id: "frontEnd", label: "Front-End & Core", icon: IconCode },
    { id: "backEnd", label: "Back-End & APIs", icon: IconTerminal },
    { id: "toolsDevOps", label: "DevOps & Méthodes", icon: IconBuilding },
    { id: "databases", label: "Données & CMS", icon: IconLayers },
  ];

  const allSkillsList = useMemo(() => {
    const list: {
      categoryKey: string;
      categoryTitle: string;
      name: string;
      level: "Expert" | "Avancé" | "Opérationnel";
      badge?: string;
    }[] = [];

    Object.entries(CV_DATA.skillsCategories).forEach(([key, category]) => {
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
  }, []);

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
    <section id="competences" className="py-20 bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/60 mb-3">
            <IconCode className="w-3.5 h-3.5" />
            Matrice des Compétences & Stack Technique
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compétences & Maîtrise Technique
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Une expertise éprouvée de 6+ ans centrée sur l&apos;écosystème React / Next.js avec une réelle polyvalence Full-Stack & DevOps.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-2xl w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60"
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
              placeholder="Rechercher une compétence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <div className="absolute left-3 top-2.5 text-zinc-500 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-zinc-500 hover:text-zinc-300"
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
            const isAvance = skill.level === "Avancé";

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  skill.badge
                    ? "bg-gradient-to-b from-blue-950/30 to-zinc-900/90 border-blue-800/50 hover:border-blue-700"
                    : "bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isExpert
                          ? "bg-emerald-400"
                          : isAvance
                          ? "bg-blue-400"
                          : "bg-amber-400"
                      }`}
                    />
                    <span className="font-semibold text-sm text-zinc-100">
                      {skill.name}
                    </span>
                  </div>

                  {skill.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-600 text-white shadow-xs">
                      {skill.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/60">
                  <span className="text-[11px] text-zinc-500 truncate max-w-[120px]">
                    {skill.categoryTitle}
                  </span>
                  <span
                    className={`font-medium ${
                      isExpert
                        ? "text-emerald-400"
                        : isAvance
                        ? "text-blue-400"
                        : "text-amber-400"
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span><strong className="text-zinc-200">Expert :</strong> Production quotidienne, maîtrise approfondie & architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <span><strong className="text-zinc-200">Avancé :</strong> Autonome en entreprise, projets livrés</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span><strong className="text-zinc-200">Opérationnel :</strong> Capacité d&apos;intervention et maintenance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
