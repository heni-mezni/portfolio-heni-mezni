import Image from "next/image";
import Link from "next/link";
import type { Locale, Project } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";
import { ArrowUpRightIcon } from "@/shared/ui/icons";
import { withBasePath } from "@/shared/lib/site-paths";

export function ProjectCard({ project, locale, index }: { project: Project; locale: Locale; index: number }) {
  const copy = getMessages(locale).projects;
  const href = `/projects/${project.slug}/`;

  return (
    <article className={`project-card${project.featured ? " project-card-featured" : ""}`}>
      <Link href={href} className="project-card-link" aria-label={`${copy.viewProject}: ${project.title[locale]}`}>
        <div className="project-image-wrap">
          <Image src={withBasePath(project.image)} alt={project.imageAlt[locale]} fill unoptimized sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 32vw" />
          <span className="image-label">{copy.illustration}</span>
          <span className="image-count" aria-hidden="true">0{index + 1}</span>
          <span className="image-link-icon" aria-hidden="true"><ArrowUpRightIcon /></span>
        </div>
        <div className="project-card-content">
          <div className="project-meta"><span>{project.category[locale]}</span>{project.period ? <span>{project.period[locale]}</span> : null}</div>
          <h3>{project.title[locale]}</h3>
          <p className="project-organization">{project.organization ?? (locale === "fr" ? "Compétition internationale · Malte" : "International competition · Malta")}</p>
          <p className="project-summary">{project.summary[locale]}</p>
          <ul className="tag-list" aria-label={copy.technologies}>{project.technologies.slice(0, 5).map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <span className="project-cta">{copy.viewProject}<ArrowUpRightIcon /></span>
        </div>
      </Link>
    </article>
  );
}
