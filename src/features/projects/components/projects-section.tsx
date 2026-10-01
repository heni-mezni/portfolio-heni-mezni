import type { Locale } from "@/shared/types";
import { projects } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { SectionHeading } from "@/shared/ui/section-heading";
import { ProjectCard } from "@/features/projects/components/project-card";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="content-section section-wrap projects-section" id="projects">
      <SectionHeading eyebrow={copy.projects.eyebrow} title={copy.projects.title} intro={copy.projects.intro} aside={<span className="section-index">06 / 06<br />ENGINEERING CASES</span>} />
      <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} locale={locale} index={index} />)}</div>
    </section>
  );
}
