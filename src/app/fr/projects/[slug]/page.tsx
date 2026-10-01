import type { Metadata } from "next";
import { ProjectDetail } from "@/features/projects/components/project-detail";
import { projectFromParams, projectStaticParams, type ProjectParams } from "@/features/projects/lib/project-routes";
import { projectMetadata } from "@/shared/lib/metadata";

type PageProps = { params: ProjectParams };

export function generateStaticParams() {
  return projectStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return projectMetadata("fr", await projectFromParams(params));
}

export default async function FrenchProjectPage({ params }: PageProps) {
  return <ProjectDetail locale="fr" project={await projectFromParams(params)} />;
}
