import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jianni Nirinarisoa | Développeur Front-End Senior (React / Next.js)",
  description:
    "CV & Portfolio de Jianni Nirinarisoa, Développeur Front-End Senior avec 6+ ans d'expérience (React, Next.js, TypeScript, Node.js). Missions grands comptes, enseignant vacataire IUT & Tech Lead.",
  keywords: [
    "Jianni Nirinarisoa",
    "Développeur Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Bordeaux",
    "Tech Lead",
    "Recrutement IT",
  ],
  authors: [{ name: "Jianni Nirinarisoa" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
