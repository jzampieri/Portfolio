import { dictionaries, type Lang } from '../content/site';
import Panel, { RV } from './Panel';

export default function About({ lang }: { lang: Lang }) {
  const c = dictionaries[lang].about;

  return (
    <Panel
      id="sobre"
      label={c.label}
      title={c.lead}
      surface="parchment"
      foot={
        <dl className="grid gap-x-[clamp(20px,3vw,48px)] gap-y-[clamp(8px,1.4vh,14px)] border-t border-black/10 pt-[clamp(12px,2vh,22px)] tp:grid-cols-2 sd:grid-cols-4">
          {c.facts.map((f) => (
            <div key={f.key} className={RV}>
              <dt className="t-eyebrow text-[color:var(--color-ink-48)]">{f.key}</dt>
              <dd className="t-caption-strong mt-1">{f.value}</dd>
            </div>
          ))}
        </dl>
      }
    >
      <div className="max-w-[58ch]">
        {c.body.map((paragraph) => (
          <p
            key={paragraph}
            className={`${RV} t-body mb-[clamp(12px,2vh,20px)] text-[color:var(--color-ink-80)]`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Panel>
  );
}
