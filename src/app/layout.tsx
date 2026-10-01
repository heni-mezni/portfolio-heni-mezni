import type { ReactNode } from "react";
import { portfolioMetadata } from "@/shared/lib/metadata";
import { ThemeBootstrap } from "@/shared/ui/theme-bootstrap";
import "@/styles/globals.css";

export const metadata = portfolioMetadata("en");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <ThemeBootstrap />
        {children}
      </body>
    </html>
  );
}
