import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { useMagnetic } from '../lib/useMagnetic';
import { dictionaries, profile, type Lang } from '../content/site';
import { gotoPanel } from '../hooks/usePager';

interface Props {
  lang: Lang;
  onToggleLang: () => void;
  /** The pager stands down while the menu covers the screen. */
  onOpenChange: (open: boolean) => void;
}

export default function Nav({ lang, onToggleLang, onOpenChange }: Props) {
  const bar = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const burger = useMagnetic<HTMLButtonElement>(0.4);
  const t = dictionaries[lang];

  useEffect(() => {
    openRef.current = open;
    onOpenChange(open);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  /* --- the bar retracts on the way down, returns on the way up --- */
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const shift = gsap.quickTo(bar.current, 'yPercent', { duration: 0.5, ease: 'power3.out' });

      ScrollTrigger.create({
        start: 'top -120',
        end: 'max',
        onUpdate: (self) => {
          if (openRef.current) return;
          shift(self.direction === 1 ? -100 : 0);
        },
        onLeaveBack: () => {
          shift(0);
        },
      });
    },
    { scope: bar },
  );

  /* --- overlay: three panels wipe in, then the links climb out of their masks --- */
  useGSAP(
    () => {
      const el = overlay.current;
      if (!el) return;
      const reduced = prefersReducedMotion();

      if (open) {
        gsap.set(el, { pointerEvents: 'auto', autoAlpha: 1 });

        const tl = gsap.timeline();
        tl.fromTo(
          '.menu-panel',
          { yPercent: -101 },
          { yPercent: 0, duration: 0.7, ease: 'power4.inOut', stagger: 0.07 },
        )
          .fromTo(
            '.menu-link',
            { yPercent: 115, rotate: 4 },
            { yPercent: 0, rotate: 0, duration: 0.8, ease: 'power4.out', stagger: 0.07 },
            0.45,
          )
          .fromTo(
            '.menu-meta',
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06 },
            0.7,
          );

        if (reduced) tl.progress(1);
      } else {
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(el, { pointerEvents: 'none', autoAlpha: 0 });
          },
        });
        tl.to('.menu-link', { yPercent: -115, duration: 0.4, ease: 'power3.in', stagger: 0.04 })
          .to('.menu-meta', { autoAlpha: 0, duration: 0.25 }, 0)
          .to(
            '.menu-panel',
            { yPercent: 101, duration: 0.6, ease: 'power4.inOut', stagger: 0.06 },
            0.2,
          );

        if (reduced) tl.progress(1);
      }
    },
    { scope: overlay, dependencies: [open], revertOnUpdate: false },
  );

  const go = (id: string) => {
    setOpen(false);
    // Wait for the overlay to clear before the pager moves underneath it.
    window.setTimeout(() => gotoPanel(id), 520);
  };

  return (
    <>
      <div ref={bar} className="fixed inset-x-0 top-0 z-[100]">
        <nav className="tile--void flex h-[var(--nav-h)] items-center justify-between px-[clamp(16px,3vw,32px)]">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go('top');
            }}
            className="link-swap t-eyebrow tracking-[0.2em] text-white"
            aria-label={profile.fullName}
          >
            <span>JZ</span>
            <span aria-hidden="true">JZ</span>
          </a>

          <div className="flex items-center gap-[clamp(10px,2vw,20px)]">
            <a
              href={profile.resume}
              download
              className="link-swap t-fine hidden text-white/70 ph:block"
            >
              <span>{t.nav.resume}</span>
              <span aria-hidden="true">{t.nav.resume}</span>
            </a>

            <button
              onClick={onToggleLang}
              className="lang-toggle t-fine text-white/50 transition-colors hover:text-white"
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
            >
              <span className={lang === 'pt' ? 'text-white' : ''}>PT</span>
              <span className="mx-1 opacity-40">/</span>
              <span className={lang === 'en' ? 'text-white' : ''}>EN</span>
            </button>

            <button
              ref={burger}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="main-menu"
              aria-label={open ? t.nav.close : t.nav.menu}
              className={`burger ${open ? 'is-open' : ''}`}
            >
              <span className="burger__bar" />
              <span className="burger__bar" />
            </button>
          </div>
        </nav>
      </div>

      {/* ---- full-screen menu ---- */}
      <div
        ref={overlay}
        id="main-menu"
        className="invisible fixed inset-0 z-[99] opacity-0"
        style={{ pointerEvents: 'none' }}
      >
        <div className="absolute inset-0 flex" aria-hidden="true">
          <div className="menu-panel h-full flex-1 bg-[color:var(--color-tile-3)]" />
          <div className="menu-panel h-full flex-1 bg-[color:var(--color-tile-1)]" />
          <div className="menu-panel h-full flex-1 bg-[color:var(--color-void)]" />
        </div>

        <div className="relative flex h-full flex-col justify-between px-[clamp(20px,5vw,64px)] pb-[clamp(24px,4vw,48px)] pt-[calc(var(--nav-h)+clamp(32px,8vw,90px))]">
          <ul>
            {t.nav.sections.map((s) => (
              <li key={s.id} className="gs-mask block w-full">
                <button
                  onClick={() => go(s.id)}
                  className="menu-link t-menu block w-full py-[clamp(2px,0.6vw,8px)] text-left text-white"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div className="menu-meta">
              <p className="t-eyebrow mb-2 text-white/35">{t.nav.reach}</p>
              <a href={`mailto:${profile.email}`} className="link-swap t-body text-white">
                <span>{profile.email}</span>
                <span aria-hidden="true">{profile.email}</span>
              </a>
            </div>

            <div className="menu-meta flex gap-6">
              {[
                { label: 'GitHub', href: profile.github },
                { label: 'LinkedIn', href: profile.linkedin },
                { label: t.nav.resume, href: profile.resume },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-swap t-caption text-white/70"
                >
                  <span>{l.label}</span>
                  <span aria-hidden="true">{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
