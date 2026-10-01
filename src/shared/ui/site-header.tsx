import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/types";
import { profile } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { MenuIcon } from "@/shared/ui/icons";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import { LanguageSelector } from "@/shared/ui/language-selector";
import { HeaderDropdown } from "@/shared/ui/header-dropdown";
import { withBasePath } from "@/shared/lib/site-paths";

const navItems = [
  ["about", "about"],
  ["projects", "projects"],
  ["experience", "experience"],
  ["expertise", "expertise"],
  ["education", "education"],
  ["recognition", "recognition"],
  ["contact", "contact"],
] as const;

type SiteHeaderProps = { locale: Locale; onLocaleChange: (locale: Locale) => void; switchPath?: string };

function SectionLink({ href, samePage, className, children }: { href: string; samePage: boolean; className?: string; children: ReactNode }) {
  return samePage ? <a className={className} href={href}>{children}</a> : <Link className={className} href={href}>{children}</Link>;
}

export function SiteHeader({ locale, onLocaleChange, switchPath }: SiteHeaderProps) {
  const copy = getMessages(locale);
  const home = withBasePath("/");
  const base = "";
  const isHomePage = (switchPath ?? "/") === "/";
  const sectionHref = (id: string) => isHomePage ? `#${id}` : `${base}/#${id}`;

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={isHomePage ? "#top" : `${home}#top`} aria-label={locale === "fr" ? "Heni Mezni — retour en haut de l’accueil" : "Heni Mezni — back to the top of the home page"}>
          <Image className="brand-avatar" src={withBasePath(profile.photo)} alt="" width={44} height={44} unoptimized />
          <span className="brand-name">HENI <strong>MEZNI</strong><i>.</i></span>
        </a>
        <nav className="desktop-nav" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          {navItems.filter(([key]) => key !== "contact").map(([key, id]) => <SectionLink key={id} href={sectionHref(id)} samePage={isHomePage}>{copy.nav[key]}</SectionLink>)}
        </nav>
        <div className="header-tools">
          <LanguageSelector locale={locale} onLocaleChange={onLocaleChange} />
          <ThemeToggle locale={locale} />
          <SectionLink className="header-contact" href={sectionHref("contact")} samePage={isHomePage}>{copy.nav.contact}<span aria-hidden="true">↗</span></SectionLink>
          <HeaderDropdown className="mobile-nav" label={copy.nav.menu} trigger={<><MenuIcon /><span>Menu</span></>}>
            <nav aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
              {navItems.map(([key, id]) => <SectionLink key={id} href={sectionHref(id)} samePage={isHomePage}>{copy.nav[key]}</SectionLink>)}
            </nav>
          </HeaderDropdown>
        </div>
      </div>
    </header>
  );
}
