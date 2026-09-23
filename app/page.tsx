import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { EducationCertifs } from "@/components/EducationCertifs";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-600 selection:text-white" id="top">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SkillsMatrix />
        <ExperienceSection />
        <LeadershipSection />
        <EducationCertifs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
