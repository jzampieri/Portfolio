import { useId, useRef, useState } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { dictionaries, type Lang } from '../content/site';
import Panel, { RV } from './Panel';
import CompanyMark from './CompanyMark';

/**
 * A tab pattern rather than an accordion: expanding rows grew the panel past
 * the screen, which the fixed-height layout cannot allow. Selecting a company
 * swaps the detail in place, so the height never changes.
 */
export default function Work({ lang }: { lang: Lang }) {
  const c = dictionaries[lang].work;
  const detail = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  /** Mobile has no room for list and detail at once, so it shows one at a time. */
  const [showDetail, setShowDetail] = useState(false);
  const baseId = useId();

  const role = c.roles[selected];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.wk-detail',
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' },
      );
    },
    { scope: detail, dependencies: [selected, lang], revertOnUpdate: false },
  );

  const pick = (i: number) => {
    setSelected(i);
    setShowDetail(true);
  };

  return (
    <Panel id="trabalho" label={c.label} title={c.title} surface="canvas">
      <div className="grid min-h-0 gap-[clamp(20px,4vw,64px)] sd:grid-cols-[minmax(0,21rem)_minmax(0,1fr)]">
        {/* ---- company list ---- */}
        <ul
          role="tablist"
          aria-orientation="vertical"
          className={`${showDetail ? 'hidden sd:block' : ''}`}
        >
          {c.roles.map((r, i) => (
            <li key={r.company}>
              <button
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={i === selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => pick(i)}
                className={`${RV} wk-tab group ${i === selected ? 'is-active' : ''}`}
              >
                <span className="wk-bar" aria-hidden="true" />
                <CompanyMark company={r.company} logo={r.logo} initials={r.initials} />
                <span className="min-w-0 flex-1 text-left">
                  <span className="t-body-strong block truncate">{r.company}</span>
                  <span className="t-caption mt-[2px] block text-[color:var(--color-ink-48)]">
                    {r.period}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* ---- detail ---- */}
        <div
          ref={detail}
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${selected}`}
          className={`min-w-0 ${showDetail ? '' : 'hidden sd:block'}`}
        >
          <button
            onClick={() => setShowDetail(false)}
            className="link-swap t-eyebrow mb-1 text-[color:var(--color-ink-48)] sd:hidden"
          >
            <span>← {c.collapse}</span>
            <span aria-hidden="true">← {c.collapse}</span>
          </button>

          <h3 className="wk-detail t-display-md">{role.title}</h3>
          <p className="wk-detail t-caption mt-1 text-[color:var(--color-ink-48)]">
            {role.company} · {role.period}
          </p>

          <p className="wk-detail t-lead mt-[clamp(8px,2vh,26px)] max-w-[46ch]">
            {role.summary}
          </p>

          <ul className="mt-[clamp(8px,1.8vh,22px)] max-w-[62ch]">
            {role.bullets.map((b) => (
              <li
                key={b}
                className="wk-detail t-body flex gap-3 py-[clamp(3px,0.8vh,9px)] text-[color:var(--color-ink-80)]"
              >
                <span className="text-[color:var(--color-action)]">—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(8px,1.8vh,22px)] flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="wk-detail t-eyebrow text-[color:var(--color-ink-48)]">
              {c.stackLabel}
            </span>
            {role.stack.map((s) => (
              <span
                key={s}
                className="wk-detail t-caption rounded-[var(--radius-sm)] border border-[color:var(--color-hairline)] px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
