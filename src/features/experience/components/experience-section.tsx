import type { Locale } from "@/shared/types";
import { experiences } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { SectionHeading } from "@/shared/ui/section-heading";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="content-section experience-section" id="experience">
      <div className="section-wrap">
      <SectionHeading eyebrow={copy.experience.eyebrow} title={copy.experience.title} intro={copy.experience.intro} />
      <ol className="experience-list">
        {experiences.map((experience, index) => (
          <li className="experience-item" key={`${experience.organization}-${experience.period.en}`}>
            <div className="experience-date">{experience.period[locale]}</div>
            <span className="experience-marker" aria-hidden="true" />
            <div className="experience-body">
              <div className="experience-heading"><div><p className="experience-kind">{experience.kind[locale]} <span>·</span> {experience.location[locale]}</p><h3>{experience.role[locale]}</h3><p className="experience-company">{experience.organization}</p></div><span className="experience-index">0{index + 1}</span></div>
              <p className="experience-description">{experience.description[locale]}</p>
              <ul className="experience-contributions">{experience.contributions.map((line) => <li key={line.en}>{line[locale]}</li>)}</ul>
              <ul className="tag-list tag-list-compact" aria-label={copy.projects.technologies}>{experience.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}
