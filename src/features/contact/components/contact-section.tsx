import type { Locale } from "@/shared/types";
import { profile } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { ArrowUpRightIcon } from "@/shared/ui/icons";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ContactSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} intro={copy.contact.body} />
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>{copy.contact.email}<ArrowUpRightIcon /></a>
          <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">{copy.contact.linkedin}<ArrowUpRightIcon /></a>
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">{copy.contact.github}<ArrowUpRightIcon /></a>
        </div>
        <div className="contact-location"><span>{copy.contact.locationLabel}</span><p>{profile.location[locale]}</p></div>
      </div>
    </section>
  );
}
