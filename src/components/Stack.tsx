import { dictionaries, type Lang } from '../content/site';
import Panel, { RV } from './Panel';

/**
 * A tech-spec table. Items run as one interpuncted line rather than chips:
 * six groups have to sit inside one screen, and text is what fits.
 */
export default function Stack({ lang }: { lang: Lang }) {
  const c = dictionaries[lang].stack;

  return (
    <Panel id="stack" label={c.label} title={c.title} surface="parchment">
      <dl className="grid gap-x-[clamp(24px,4vw,72px)] sd:grid-cols-2">
        {c.groups.map((g) => (
          <div
            key={g.title}
            className={`${RV} border-t border-black/10 py-[clamp(10px,2vh,22px)]`}
          >
            <dt className="t-body-strong">{g.title}</dt>
            <dd>
              <p className="t-caption mt-1 hidden max-w-[46ch] text-[color:var(--color-ink-48)] sd:block">
                {g.note}
              </p>
              <p className="t-caption mt-[6px] text-[color:var(--color-ink-80)]">
                {g.items.join(' · ')}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
