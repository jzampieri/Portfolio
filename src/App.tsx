import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from './lib/gsap';
import { usePager } from './hooks/usePager';
import { dictionaries, type Lang } from './content/site';

import Preloader from './components/Preloader';
import Nav from './components/Nav';
import ProgressRail from './components/ProgressRail';
import Hero from './components/Hero';
import About from './components/About';
import Numbers from './components/Numbers';
import Work from './components/Work';
import Stack from './components/Stack';
import Education from './components/Education';
import Contact from './components/Contact';

const LANG_KEY = 'zampieri-lang';

export default function App() {
  const shell = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<Lang>('pt');
  const [ready, setReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Paging stays off until the preloader hands over, and while the menu is up.
  const { index, count, goTo } = usePager(ready && !menuOpen);

  const t = dictionaries[lang];
  const railLabels = ['Julio Zampieri', ...t.nav.sections.map((s) => s.label)];

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'pt' || stored === 'en') setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      if (!ready) return;
      gsap.to(shell.current, {
        autoAlpha: 1,
        duration: prefersReducedMotion() ? 0 : 0.6,
        onComplete: () => ScrollTrigger.refresh(),
      });
    },
    { dependencies: [ready] },
  );

  /* --- the webfont swap moves every trigger; recalculate once it lands --- */
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <>
      {!ready && <Preloader lang={lang} onDone={() => setReady(true)} />}

      <div ref={shell} className="app-shell" aria-busy={!ready}>
        <Nav
          lang={lang}
          onToggleLang={() => setLang((l) => (l === 'pt' ? 'en' : 'pt'))}
          onOpenChange={setMenuOpen}
        />

        <main>
          <Hero lang={lang} ready={ready} />
          <About lang={lang} />
          <Numbers lang={lang} />
          <Work lang={lang} />
          <Stack lang={lang} />
          <Education lang={lang} />
          <Contact lang={lang} />
        </main>

        <ProgressRail index={index} count={count} labels={railLabels} onSelect={goTo} />
      </div>
    </>
  );
}
