import type { Locale } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";
import { SectionHeading } from "@/shared/ui/section-heading";

export function AboutSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="content-section section-wrap about-section" id="about">
      <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} />
      <div className="about-grid">
        <p className="about-lead">{copy.about.body}</p>
        <div className="about-aside">
          <div>
            <p className="mini-label">{copy.about.focusTitle}</p>
            <ul className="focus-list">{copy.about.focus.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
          </div>
          <div className="spoken-languages">
            <p className="mini-label">{copy.about.languagesTitle}</p>
            <ul className="spoken-language-list">{copy.about.languages.map((language) => <li key={language}>{language}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
