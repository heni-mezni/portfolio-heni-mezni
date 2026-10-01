import type { Locale } from "@/shared/types";
import { skillGroups } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { SectionHeading } from "@/shared/ui/section-heading";

export function SkillsSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="content-section section-wrap skills-section" id="expertise">
      <SectionHeading eyebrow={copy.expertise.eyebrow} title={copy.expertise.title} intro={copy.expertise.intro} />
      <div className="skills-grid">
        {skillGroups.map((group, index) => <article className="skill-group" key={group.name.en}><div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.name[locale]}</h3></div><ul className="tag-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
      </div>
    </section>
  );
}
