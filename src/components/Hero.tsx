import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { dictionaries, profile, type Lang } from '../content/site';
import MaskedWords from './MaskedWords';

interface Props {
  lang: Lang;
  ready: boolean;
}

export default function Hero({ lang, ready }: Props) {
  const root = useRef<HTMLElement>(null);
  const t = dictionaries[lang].hero;

  // One line per word — the masthead is the whole composition.
  const lines = profile.fullName.split(' ');

  useGSAP(
    () => {
      if (!ready) return;

      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        '.hero-name .gs-word',
        { yPercent: 118, y: 0, rotate: 6 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.25,
          ease: 'power4.out',
          stagger: { each: 0.035, from: 'start' },
        },
      )
        .to('.hero-rule', { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0.5)
        .to('.hero-role', { autoAlpha: 1, y: 0, duration: 0.9 }, 0.6)
        .to('.hero-current', { autoAlpha: 1, y: 0, duration: 0.8 }, 0.75)
        .to('.hero-foot', { autoAlpha: 1, duration: 0.7 }, 0.9);

      if (prefersReducedMotion()) {
        tl.progress(1);
        return;
      }

      // Scroll speed leans the letters, then they spring back when it stops.
      const skew = gsap.quickTo('.hero-name', 'skewY', { duration: 0.7, ease: 'power3.out' });
      ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => skew(gsap.utils.clamp(-5, 5, self.getVelocity() / -320)),
      });

      // The masthead drifts out of the way as the first chapter arrives.
      gsap.to('.hero-inner', {
        yPercent: -12,
        autoAlpha: 0.12,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-scroll-arrow', {
        y: 8,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: root, dependencies: [ready, lang] },
  );

  return (
    <header
      ref={root}
      id="top"
      data-panel
      className="panel tile--canvas"
    >
      <div className="panel-inner shell">
      <div className="hero-inner panel-body">
        <h1
          className="hero-name t-hero-name"
          aria-label={profile.fullName}
          style={{ '--hero-lines': lines.length } as React.CSSProperties}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              <MaskedWords text={line} mode="chars" />
            </span>
          ))}
        </h1>

        <hr className="hero-rule rule gs-rule mt-[clamp(20px,3vw,40px)]" />

        <div className="mt-[clamp(14px,2vw,22px)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <p className="hero-role t-display-md gs-fade translate-y-4">{t.title}</p>
          <p className="hero-current t-caption gs-fade translate-y-4 text-[color:var(--color-ink-48)]">
            <span className="status-dot" aria-hidden="true" />
            {t.current}
          </p>
        </div>
      </div>

      <div className="hero-foot panel-foot gs-fade flex items-end justify-between gap-4">
        <span className="t-eyebrow text-[color:var(--color-ink-48)]">{t.role}</span>

        <span className="t-caption flex items-center gap-2 text-[color:var(--color-ink-48)]">
          {t.scroll}
          <svg
            className="hero-scroll-arrow"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path d="M7 1v11M2.5 8L7 12.5 11.5 8" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
        </div>
      </div>
    </header>
  );
}
