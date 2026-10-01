"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";

export function BackToTop({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const label = getMessages(locale).footer.top;

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 560);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return <a className="back-to-top" href="#top" aria-label={label} title={label}><span aria-hidden="true">↑</span></a>;
}
