import type { Metadata } from "next";
import { PortfolioHome } from "@/features/portfolio/components/portfolio-home";
import { portfolioMetadata } from "@/shared/lib/metadata";

export const metadata: Metadata = portfolioMetadata("en");

export default function EnglishHomePage() {
  return <PortfolioHome locale="en" />;
}
