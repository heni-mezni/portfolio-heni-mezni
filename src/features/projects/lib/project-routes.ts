import { notFound } from "next/navigation";
import { projects } from "@/content/portfolio";
import type { Project } from "@/shared/types";

export type ProjectParams = Promise<{ slug: string }>;

export function projectStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function projectFromParams(params: ProjectParams): Promise<Project> {
  const { slug } = await params;
  return getProjectBySlug(slug);
}

export function getProjectBySlug(slug: string): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}
