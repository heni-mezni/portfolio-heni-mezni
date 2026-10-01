"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";
import { SiteHeader } from "@/shared/ui/site-header";
import { SiteFooter } from "@/shared/ui/site-footer";
import { BackToTop } from "@/shared/ui/back-to-top";
import { ArrowRightIcon } from "@/shared/ui/icons";
import { withBasePath } from "@/shared/lib/site-paths";
import { useLocaleState } from "@/shared/ui/use-locale-state";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, changeLocale } = useLocaleState();
  const copy = getMessages(locale);
  const home = "/";
  const alternatePath = `/projects/${project.slug}/`;

  return (
    <>
      <a className="skip-link" href="#main">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <SiteHeader locale={locale} onLocaleChange={changeLocale} switchPath={alternatePath} />
      <main id="main" lang={locale} className="project-detail-page section-wrap">
        <span id="top" className="top-anchor" aria-hidden="true" />
        <nav className="breadcrumbs" aria-label={locale === "fr" ? "Fil d’Ariane" : "Breadcrumbs"}>
          <Link href={`${home}#projects`}>{copy.projects.back}</Link><span aria-hidden="true">/</span><span>{project.organization ?? (locale === "fr" ? "Malte" : "Malta")}</span>
        </nav>
        <header className="detail-heading">
          <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{project.category[locale]}</p>
          <div className="detail-title-row"><div><h1>{project.title[locale]}</h1><p className="detail-subtitle">{project.organization ?? (locale === "fr" ? "Compétition internationale · Malte" : "International competition · Malta")}{project.period ? <><span aria-hidden="true"> · </span>{project.period[locale]}</> : null}</p></div><Link className="detail-back-link" href={`${home}#projects`}>{copy.projects.back}<ArrowRightIcon /></Link></div>
          <p className="detail-summary">{project.summary[locale]}</p>
        </header>
        <figure className="detail-image">
          <div className="detail-image-frame"><Image src={withBasePath(project.image)} alt={project.imageAlt[locale]} fill unoptimized priority sizes="(max-width: 900px) 92vw, 1200px" /></div>
          <figcaption><span>{copy.projects.illustration}</span><span>{project.organization ?? "Malta"} · {project.title[locale]}</span></figcaption>
        </figure>
        <div className="detail-content-grid">
          <aside className="detail-aside"><p className="mini-label">{copy.projects.technologies}</p><ul className="tag-list">{project.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul></aside>
          <div className="detail-story">
            <section id="context"><p className="mini-label">01 / {copy.projects.context}</p><p className="detail-prose">{project.context[locale]}</p></section>
            <section id="approach"><p className="mini-label">02 / {copy.projects.approach}</p><ol className="detail-steps">{project.approach.map((step, index) => <li key={step[locale]}><span>0{index + 1}</span><p>{step[locale]}</p></li>)}</ol></section>
            <section id="outcome" className="detail-outcome"><p className="mini-label">03 / {copy.projects.outcome}</p><p className="detail-prose">{project.outcome[locale]}</p></section>
          </div>
        </div>
        <Link className="detail-next-link" href={`${home}#projects`}><ArrowRightIcon />{copy.projects.all}</Link>
      </main>
      <SiteFooter locale={locale} />
      <BackToTop locale={locale} />
    </>
  );
}
