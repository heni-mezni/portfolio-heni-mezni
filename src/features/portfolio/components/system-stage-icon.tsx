const stages = {
  sense: <><circle cx="12" cy="12" r="2" /><circle cx="12" cy="12" r="6" /><path d="M2 12a10 10 0 0 1 10-10m10 10a10 10 0 0 1-10 10M12 2v2m8 8h2M2 12h2m8 8v2" /></>,
  compute: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 9h6v6H9zm0-7v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /></>,
  perceive: <><path d="m12 2 9 5v10l-9 5-9-5V7zm0 10v10M3 7l9 5 9-5" /><circle cx="12" cy="12" r="2" /></>,
  decide: <><circle cx="5" cy="19" r="2" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><path d="M5 17V7m0 7h7a7 7 0 0 0 7-7M12 10l3 4-3 4" /></>,
  control: <><path d="M5 21h14M8 21v-4h8v4M10 17l-5-7 7-6 6 7m-2 1 2-1 3 2" /><circle cx="5" cy="10" r="2" /><circle cx="12" cy="4" r="2" /><path d="m19 9-1 2 1 3" /></>,
};

export type SystemStage = keyof typeof stages;

export function SystemStageIcon({ stage }: { stage: SystemStage }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{stages[stage]}</svg>;
}
