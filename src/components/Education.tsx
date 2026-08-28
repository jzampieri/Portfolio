import { dictionaries, type Lang } from '../content/site';
import Panel, { RV } from './Panel';

export default function Education({ lang }: { lang: Lang }) {
  const c = dictionaries[lang].education;

  return (
    <Panel
      id="formacao"
      label={c.label}
      title={c.title}
      surface="dark-2"
      foot={
        <div className={`${RV} flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-white/12 pt-[clamp(12px,2vh,22px)]`}>
          <p className="t-body-strong">
            {c.degree.course} · {c.degree.school}
          </p>
          <p className="t-caption text-[color:var(--color-action-dark)]">{c.degree.note}</p>
        </div>
      }
    >
      <p className={`${RV} t-eyebrow mb-[clamp(10px,1.8vh,18px)] opacity-45`}>
        {c.certificationsTitle}
      </p>

      <ul className="grid gap-x-[clamp(24px,4vw,72px)] tp:grid-cols-2">
        {c.certifications.map((cert) => (
          <li
            key={cert.name}
            className={`${RV} flex items-baseline justify-between gap-4 border-t border-white/10 py-[clamp(6px,1.2vh,13px)]`}
          >
            <span className="t-caption">{cert.name}</span>
            <span className="t-eyebrow shrink-0 opacity-45">{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
