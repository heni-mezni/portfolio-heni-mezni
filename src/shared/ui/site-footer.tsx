import type { Locale } from "@/shared/types";
import { profile } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { withBasePath } from "@/shared/lib/site-paths";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const home = withBasePath("/");

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div><a href={`${home}#top`} className="footer-brand">Heni Mezni<span>.</span></a><p>{profile.role[locale]}</p></div>
        <p className="footer-note">{copy.footer.note}</p>
        <a href={`mailto:${profile.email}`} className="footer-email">{profile.email}</a>
        <p className="footer-meta">© {new Date().getFullYear()} Heni Mezni · {copy.footer.rights}</p>
      </div>
    </footer>
  );
}
