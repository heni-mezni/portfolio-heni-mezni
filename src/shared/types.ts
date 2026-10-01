export type Locale = "en" | "fr";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  organization?: string;
  period?: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  summary: LocalizedText;
  context: LocalizedText;
  approach: LocalizedText[];
  outcome: LocalizedText;
  technologies: string[];
  featured: boolean;
};

export type Experience = {
  role: LocalizedText;
  organization: string;
  location: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  contributions: LocalizedText[];
  technologies: string[];
  kind: LocalizedText;
};

export type SkillGroup = {
  name: LocalizedText;
  skills: string[];
};
