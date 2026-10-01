import type { ReactNode } from "react";
import { portfolioMetadata } from "@/shared/lib/metadata";
import { LocaleSync } from "@/shared/ui/locale-sync";
import { ThemeBootstrap } from "@/shared/ui/theme-bootstrap";
import "@/styles/globals.css";

export const metadata = portfolioMetadata("en");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <ThemeBootstrap />
        <LocaleSync />
        {children}
      </body>
    </html>
  );
}
