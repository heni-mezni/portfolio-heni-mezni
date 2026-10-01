import type { Locale } from "@/shared/types";
import { education } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { SectionHeading } from "@/shared/ui/section-heading";

export function EducationSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="content-section section-wrap education-section" id="education">
      <SectionHeading eyebrow={copy.education.eyebrow} title={copy.education.title} />
      <ol className="education-list">
        {education.map((item, index) => <li className="education-item" key={item.institution}>
          <span className="education-period">{item.period}</span>
          <div><p className="education-institution">{item.institution}<span> · {item.location[locale]}</span></p><h3>{item.degree[locale]}</h3><p className="education-detail">{item.detail[locale]}</p></div>
          <span className="education-number" aria-hidden="true">0{index + 1}</span>
        </li>)}
      </ol>
    </section>
  );
}
