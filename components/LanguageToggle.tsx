"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function LanguageToggle({ className = "", variant = "desktop" }: LanguageToggleProps) {
  const { language, setLanguage, t } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-2 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 ${className}`}>
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 pl-2">
          {t.toggle.toggleLabel}
        </span>
        <div className="flex items-center gap-1 bg-zinc-200/80 dark:bg-zinc-900 p-1 rounded-lg border border-zinc-300 dark:border-zinc-800 text-xs font-semibold">
          <button
            onClick={() => setLanguage("fr")}
            aria-label="Français"
            aria-pressed={language === "fr"}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              language === "fr"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <span>🇫🇷</span>
            <span>FR</span>
          </button>
          <button
            onClick={() => setLanguage("en")}
            aria-label="English"
            aria-pressed={language === "en"}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              language === "en"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.toggle.toggleLabel}
      className={`inline-flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xs shadow-xs text-xs font-semibold ${className}`}
    >
      <button
        onClick={() => setLanguage("fr")}
        aria-label="Français"
        aria-pressed={language === "fr"}
        title={language === "fr" ? "Français sélectionné" : t.toggle.switchToFr}
        className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
          language === "fr"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
        }`}
      >
        <span className="text-[13px] leading-none">🇫🇷</span>
        <span className="tracking-wide">FR</span>
      </button>

      <button
        onClick={() => setLanguage("en")}
        aria-label="English"
        aria-pressed={language === "en"}
        title={language === "en" ? "English selected" : t.toggle.switchToEn}
        className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
          language === "en"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
        }`}
      >
        <span className="text-[13px] leading-none">🇬🇧</span>
        <span className="tracking-wide">EN</span>
      </button>
    </div>
  );
}
