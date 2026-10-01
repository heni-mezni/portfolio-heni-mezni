"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
  }, [pathname]);

  return null;
}
