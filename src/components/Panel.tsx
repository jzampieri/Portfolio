import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP, settleIfReduced } from '../lib/gsap';
import type { Surface } from '../content/site';
import MaskedWords from './MaskedWords';

interface Props {
  id: string;
  label: string;
  title: string;
  surface: Surface;
  children: ReactNode;
  /** Optional bottom row. Anything here is pushed to the foot of the screen. */
  foot?: ReactNode;
}

const SURFACE: Record<Surface, string> = {
  canvas: 'tile--canvas',
  parchment: 'tile--parchment',
  dark: 'tile--dark',
  'dark-2': 'tile--dark-2',
  'dark-3': 'tile--dark-3',
  void: 'tile--void',
};

/**
 * One panel, exactly one screen. Head at the top, body optically centred, foot
 * at the bottom — the height is spent on air rather than letting the content
 * clump under the heading.
 */
export default function Panel({ id, label, title, surface, children, foot }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top 60%', once: true },
      });

      tl.to('.sec-rule', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' })
        .fromTo('.sec-label', { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.7 }, 0.1)
        .fromTo(
          '.sec-title .gs-word',
          { yPercent: 110, y: 0 },
          { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.045 },
          0.15,
        )
        .to('.sec-rv', { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.06 }, 0.35);

      settleIfReduced(tl);
    },
    { scope: root, dependencies: [id] },
  );

  return (
    <section ref={root} id={id} data-panel className={`panel ${SURFACE[surface]}`}>
      <div className="panel-inner shell">
        <header className="panel-head">
          <p className="sec-label t-eyebrow gs-fade opacity-45">{label}</p>
          <hr className="sec-rule rule gs-rule mt-[clamp(10px,1.6vh,18px)]" />
        </header>

        <div className="panel-body">
          <h2 className="sec-title t-display-lg max-w-[20ch]">
            <MaskedWords text={title} />
          </h2>

          <div className="mt-[clamp(20px,4vh,52px)] min-h-0">{children}</div>
        </div>

        {foot ? <footer className="panel-foot">{foot}</footer> : null}
      </div>
    </section>
  );
}

/** Shared class for anything that should ride in on the panel timeline. */
export const RV = 'sec-rv gs-fade translate-y-5';
