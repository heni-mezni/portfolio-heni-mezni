"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import type { Locale } from "@/shared/types";

export function useLocaleState() {
  const [locale, setLocale] = useState<Locale>("en");
  const [restorePosition, setRestorePosition] = useState<{ id: string; top: number } | null>(null);

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    if (!restorePosition) return;

    const section = document.getElementById(restorePosition.id);
    if (section) window.scrollBy(0, section.getBoundingClientRect().top - restorePosition.top);
    setRestorePosition(null);
  }, [locale, restorePosition]);

  const changeLocale = useCallback((nextLocale: Locale) => {
    if (nextLocale === locale) return;

    const headerBottom = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
    const activationLine = headerBottom + Math.min(140, window.innerHeight * 0.3);
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id], main > .top-anchor[id]"));
    const activeSection = sections
      .filter((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > headerBottom;
      })
      .at(-1) ?? sections.find((section) => section.getBoundingClientRect().bottom > headerBottom);

    setRestorePosition(activeSection ? { id: activeSection.id, top: activeSection.getBoundingClientRect().top } : null);
    setLocale(nextLocale);
  }, [locale]);

  return { locale, changeLocale };
}
