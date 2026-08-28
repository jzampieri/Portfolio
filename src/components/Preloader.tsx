import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { profile, type Lang, dictionaries } from '../content/site';

interface Props {
  lang: Lang;
  onDone: () => void;
}

export default function Preloader({ lang, onDone }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const t = dictionaries[lang].preloader;

  useGSAP(
    (_ctx, contextSafe) => {
      const finish = contextSafe?.(onDone) ?? onDone;

      if (prefersReducedMotion()) {
        gsap.set(root.current, { autoAlpha: 0 });
        finish();
        return;
      }

      const progress = { value: 0 };

      const tl = gsap.timeline({ onComplete: finish });

      // fromTo, not to: GSAP reads the CSS translateY(110%) back as pixels, so
      // the percentage start has to be restated for it to animate at all.
      tl.fromTo(
        '.pl-word',
        { yPercent: 110, y: 0 },
        { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.08 },
      )
        .to('.pl-rule', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, 0.1)
        .to(
          progress,
          {
            value: 100,
            duration: 1.6,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (counter.current) {
                counter.current.textContent = String(Math.round(progress.value)).padStart(3, '0');
              }
            },
          },
          0.1,
        )
        .to('.pl-word', { yPercent: -110, duration: 0.7, ease: 'power3.in', stagger: 0.05 }, '+=0.15')
        .to('.pl-meta', { autoAlpha: 0, duration: 0.4 }, '<')
        .to(
          root.current,
          {
            yPercent: -100,
            duration: 1.05,
            ease: 'expo.inOut',
          },
          '-=0.15',
        );
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[999] flex flex-col justify-between tile--void px-[clamp(20px,4vw,64px)] py-[clamp(20px,3vw,40px)]"
    >
      <div className="pl-meta t-eyebrow opacity-60">{t.label}</div>

      <div>
        <h1 className="t-hero" aria-label={profile.fullName}>
          <span className="gs-mask">
            <span className="pl-word block translate-y-[110%]">{profile.firstName}</span>
          </span>{' '}
          <span className="gs-mask">
            <span className="pl-word block translate-y-[110%]">{profile.lastName}</span>
          </span>
        </h1>
        <div className="pl-rule rule mt-[clamp(20px,3vw,36px)] origin-left scale-x-0" />
      </div>

      <div className="pl-meta flex items-end justify-between gap-4">
        <span className="t-eyebrow opacity-60">{profile.location}</span>
        <span ref={counter} className="t-eyebrow text-[clamp(28px,6vw,72px)] leading-none tracking-tight">
          000
        </span>
      </div>
    </div>
  );
}
