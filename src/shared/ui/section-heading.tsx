import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, intro, aside }: { eyebrow: string; title: string; intro?: string; aside?: ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{eyebrow}</p>
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {aside ? <div className="section-aside">{aside}</div> : null}
    </div>
  );
}
