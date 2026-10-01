import type { Metadata } from "next";
import type { Locale, Project } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";
import { profile } from "@/content/portfolio";

const siteUrl = new URL("https://heni-mezni-robotics-portfolio.goofy-ridge-5535.chatgpt.site");

export function portfolioMetadata(locale: Locale): Metadata {
  const copy = getMessages(locale);
  return {
    metadataBase: siteUrl,
    title: copy.metadata.title,
    description: copy.metadata.description,
    applicationName: "Heni Mezni Portfolio",
    authors: [{ name: profile.name }],
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      title: copy.metadata.title,
      description: copy.metadata.description,
    },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export function projectMetadata(locale: Locale, project: Project): Metadata {
  const title = `${project.title[locale]} — Heni Mezni`;
  const description = project.summary[locale];
  return {
    title,
    description,
    openGraph: { type: "article", locale: locale === "fr" ? "fr_FR" : "en_US", title, description },
  };
}
