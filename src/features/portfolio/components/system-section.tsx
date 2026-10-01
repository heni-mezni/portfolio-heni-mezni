import type { Locale } from "@/shared/types";
import { getMessages } from "@/shared/i18n/messages";
import { SystemStageIcon, type SystemStage } from "./system-stage-icon";

const stages: SystemStage[] = ["sense", "compute", "perceive", "decide", "control"];

export function SystemSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);

  return (
    <section className="system-section" id="system" aria-label={copy.system.title}>
      <div className="section-wrap system-inner">
        <p className="eyebrow">{copy.system.eyebrow}</p>
        <h2>{copy.system.title}</h2>
        <ol className="system-flow">{copy.system.items.map((item, index) => <li key={item}><div className="system-node-head"><SystemStageIcon stage={stages[index]} /><span>0{index + 1}</span></div><div className="system-node-copy"><strong>{item}</strong><p>{copy.system.details[index]}</p></div>{index < copy.system.items.length - 1 ? <i aria-hidden="true">→</i> : null}</li>)}</ol>
        <p className="system-caption">{copy.system.caption}</p>
      </div>
    </section>
  );
}
