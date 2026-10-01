import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/shared/types";
import { profile } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/shared/ui/icons";
import { withBasePath } from "@/shared/lib/site-paths";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const base = "";

  return (
    <section className="hero-section section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{copy.hero.eyebrow}</p>
        <p className="availability"><span className="availability-dot" aria-hidden="true" />{copy.hero.availability}</p>
        <h1 id="hero-title">Heni <span>Mezni</span><b aria-hidden="true">.</b></h1>
        <p className="hero-role">{profile.role[locale]}</p>
        <p className="hero-description">{copy.hero.intro}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href={`${base}/#projects`}>{copy.hero.primary}<ArrowRightIcon /></Link>
          <Link className="button button-secondary" href={`${base}/#contact`}>{copy.hero.secondary}<ArrowUpRightIcon /></Link>
        </div>
        <div className="hero-meta">
          <span><span className="meta-marker" aria-hidden="true" />{copy.hero.location}</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRightIcon /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-coordinate coordinate-one" aria-hidden="true">{locale === "fr" ? "SFAX / TUNISIE" : "SFAX / TUNISIA"}</div>
        <figure className="portrait-frame">
          <div className="portrait-image"><Image src={withBasePath(profile.photo)} alt={copy.hero.photoAlt} width={900} height={900} priority unoptimized sizes="(max-width: 680px) 90vw, 420px" /></div>
          <figcaption className="portrait-caption"><strong>{profile.name}</strong><span>{locale === "fr" ? "Robotique & systèmes embarqués" : "Robotics & embedded systems"}</span></figcaption>
        </figure>
        <div className="system-card">
          <div className="system-card-head"><span>{copy.hero.panelLabel}</span><span className="system-live"><i aria-hidden="true" />ROS 2</span></div>
          <h2><Link href={`${base}/projects/3d-slam-point-lio/`}>{copy.hero.panelTitle}<ArrowUpRightIcon /></Link></h2>
          <ol>{copy.hero.panelItems.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
          <p>{copy.hero.panelNote}</p>
        </div>
      </div>
    </section>
  );
}
