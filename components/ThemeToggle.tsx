"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { IconSun, IconMoon } from "./Icons";

interface ThemeToggleProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function ThemeToggle({ className = "", variant = "desktop" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-2 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 ${className}`}>
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 pl-2">
          {t.theme.toggleLabel}
        </span>
        <div className="flex items-center gap-1 bg-zinc-200/80 dark:bg-zinc-900 p-1 rounded-lg border border-zinc-300 dark:border-zinc-800 text-xs font-semibold">
          <button
            onClick={() => setTheme("light")}
            aria-label={t.theme.switchToLight}
            aria-pressed={theme === "light"}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              theme === "light"
                ? "bg-amber-500 text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <IconSun className="w-3.5 h-3.5" />
            <span>{t.theme.light}</span>
          </button>
          <button
            onClick={() => setTheme("dark")}
            aria-label={t.theme.switchToDark}
            aria-pressed={theme === "dark"}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              theme === "dark"
                ? "bg-indigo-600 text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <IconMoon className="w-3.5 h-3.5" />
            <span>{t.theme.dark}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={t.theme.toggleLabel}
      className={`inline-flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xs shadow-xs text-xs font-semibold ${className}`}
    >
      <button
        onClick={() => setTheme("light")}
        aria-label={t.theme.switchToLight}
        aria-pressed={theme === "light"}
        title={t.theme.switchToLight}
        className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
          theme === "light"
            ? "bg-amber-500 text-white shadow-xs"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
        }`}
      >
        <IconSun className="w-3.5 h-3.5" />
        <span className="hidden sm:inline tracking-wide">{t.theme.light}</span>
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label={t.theme.switchToDark}
        aria-pressed={theme === "dark"}
        title={t.theme.switchToDark}
        className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
        }`}
      >
        <IconMoon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline tracking-wide">{t.theme.dark}</span>
      </button>
    </div>
  );
}
