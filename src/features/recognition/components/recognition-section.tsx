import type { Locale } from "@/shared/types";
import { leadership, recognitions } from "@/content/portfolio";
import { getMessages } from "@/shared/i18n/messages";
import { SectionHeading } from "@/shared/ui/section-heading";

export function RecognitionSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="content-section section-wrap recognition-section" id="recognition">
      <SectionHeading eyebrow={copy.recognition.eyebrow} title={copy.recognition.title} />
      <div className="recognition-layout">
        <div className="recognition-grid">
          {recognitions.map((item) => <article className="recognition-card" key={item.title.en}><span className="recognition-mark">{item.mark}</span><div><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></div></article>)}
        </div>
        <aside className="leadership-card"><p className="mini-label">{copy.recognition.leadership}</p><ul>{leadership.map((item) => <li key={item.en}>{item[locale]}</li>)}</ul></aside>
      </div>
    </section>
  );
}
