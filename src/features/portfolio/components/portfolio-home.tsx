import type { Locale } from "@/shared/types";
import { AboutSection } from "@/features/portfolio/components/about-section";
import { HeroSection } from "@/features/portfolio/components/hero-section";
import { SystemSection } from "@/features/portfolio/components/system-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { SkillsSection } from "@/features/skills/components/skills-section";
import { EducationSection } from "@/features/education/components/education-section";
import { RecognitionSection } from "@/features/recognition/components/recognition-section";
import { ContactSection } from "@/features/contact/components/contact-section";
import { SiteHeader } from "@/shared/ui/site-header";
import { SiteFooter } from "@/shared/ui/site-footer";
import { BackToTop } from "@/shared/ui/back-to-top";

export function PortfolioHome({ locale }: { locale: Locale }) {
  return (
    <>
      <a className="skip-link" href="#main">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <SiteHeader locale={locale} switchPath="/" />
      <main id="main" lang={locale}>
        <HeroSection locale={locale} />
        <SystemSection locale={locale} />
        <AboutSection locale={locale} />
        <ProjectsSection locale={locale} />
        <ExperienceSection locale={locale} />
        <SkillsSection locale={locale} />
        <div className="credentials-grid section-wrap">
          <EducationSection locale={locale} />
          <RecognitionSection locale={locale} />
        </div>
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <BackToTop locale={locale} />
    </>
  );
}
