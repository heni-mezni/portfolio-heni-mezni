"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import type { Locale } from "@/shared/types";
import { HeaderDropdown } from "@/shared/ui/header-dropdown";

function LanguageFlag({ locale }: { locale: Locale }) {
  return locale === "fr" ? (
    <svg className="language-flag" viewBox="0 0 24 16" aria-hidden="true"><path fill="#fff" d="M0 0h24v16H0z" /><path fill="#002395" d="M0 0h8v16H0z" /><path fill="#ed2939" d="M16 0h8v16h-8z" /></svg>
  ) : (
    <svg className="language-flag" viewBox="0 0 60 40" aria-hidden="true"><path fill="#012169" d="M0 0h60v40H0z" /><path d="m0 0 60 40m0-40L0 40" stroke="#fff" strokeWidth="8" /><path d="m0 0 60 40m0-40L0 40" stroke="#c8102e" strokeWidth="3" /><path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="13" /><path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="7" /></svg>
  );
}

export function LanguageSelector({ locale, switchPath = "/" }: { locale: Locale; switchPath?: string }) {
  const router = useRouter();
  const label = locale === "fr" ? "Choisir la langue" : "Choose language";
  const options = [
    { locale: "en" as const, name: "English", href: switchPath },
    { locale: "fr" as const, name: "Français", href: `/fr${switchPath}` },
  ];

  function switchLanguage(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const headerBottom = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
    const activationLine = headerBottom + Math.min(140, window.innerHeight * 0.3);
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id], main > .top-anchor[id]"));
    const activeSection = sections
      .filter((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > headerBottom;
      })
      .at(-1) ?? sections.find((section) => section.getBoundingClientRect().bottom > headerBottom);
    const currentHash = decodeURIComponent(window.location.hash.slice(1));
    const currentAnchor = currentHash ? document.getElementById(currentHash) : null;
    const destination = `${href}#${currentAnchor?.id ?? activeSection?.id ?? "top"}`;

    router.push(destination);
  }

  return (
    <HeaderDropdown className="language-selector" label={label} trigger={<><LanguageFlag locale={locale} /><span>{locale.toUpperCase()}</span><svg className="language-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></>}>
      <nav className="language-options" aria-label={label}>
        {options.map((option) => (
          <Link key={option.locale} href={option.href} hrefLang={option.locale} lang={option.locale} aria-current={locale === option.locale ? "page" : undefined} onClick={(event) => switchLanguage(event, option.href)}>
            <LanguageFlag locale={option.locale} /><span>{option.name}</span>{locale === option.locale ? <span className="language-check" aria-hidden="true">✓</span> : null}
          </Link>
        ))}
      </nav>
    </HeaderDropdown>
  );
}
