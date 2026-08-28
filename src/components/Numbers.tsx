import { dictionaries, type Lang } from '../content/site';
import Panel, { RV } from './Panel';
import Counter from './Counter';

/**
 * With no photography anywhere on the site, the numerals set at display scale
 * on a near-black panel are the visual peak of the page.
 */
export default function Numbers({ lang }: { lang: Lang }) {
  const c = dictionaries[lang].numbers;

  return (
    <Panel id="numeros" label={c.label} title={c.title} surface="dark">
      <ul className="flex flex-col justify-center">
        {c.items.map((m) => (
          <li
            key={m.label}
            className={`${RV} grid items-baseline gap-x-[clamp(20px,4vw,64px)] gap-y-1 border-t border-white/12 py-[clamp(14px,3vh,38px)] sd:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]`}
          >
            <p className="t-metric">
              {m.prefix && <span className="text-white/35">{m.prefix}</span>}
              <Counter metric={m} lang={lang} />
              <span>{m.suffix}</span>
            </p>

            <div className="sd:pb-2">
              <p className="t-body-strong">{m.label}</p>
              <p className="t-caption mt-1 text-[color:var(--color-on-dark-muted)]">{m.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
