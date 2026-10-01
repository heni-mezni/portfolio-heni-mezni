"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";
import { MoonIcon, SunIcon } from "@/shared/ui/icons";

type Theme = "light" | "dark";

function subscribe(listener: () => void) {
  window.addEventListener("heni-theme-change", listener);
  return () => window.removeEventListener("heni-theme-change", listener);
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage?.setItem("heni-theme", nextTheme);
    } catch {
      // Keep the in-page toggle usable when browser storage is disabled.
    }
    window.dispatchEvent(new Event("heni-theme-change"));
  }

  const label = theme === "dark" ? copy.theme.light : copy.theme.dark;

  return (
    <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label} aria-pressed={theme === "dark"}>
      <SunIcon className="theme-icon-light" /><MoonIcon className="theme-icon-dark" />
    </button>
  );
}
