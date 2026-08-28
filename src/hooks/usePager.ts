import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap, Observer, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

const PANEL_SELECTOR = '[data-panel]';

/**
 * One gesture moves exactly one panel. Observer swallows the wheel/touch so
 * the page never free-scrolls, and a lock holds until the tween lands — that
 * is what makes the movement read as deliberate rather than elastic.
 *
 * Lenis used to own the scroll here; its inertia fought the paging, so the
 * pager animates the window directly instead.
 */
export function usePager(enabled: boolean) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const indexRef = useRef(0);
  const animating = useRef(false);

  const panels = useCallback(
    () => Array.from(document.querySelectorAll<HTMLElement>(PANEL_SELECTOR)),
    [],
  );

  const goTo = useCallback(
    (next: number, immediate = false) => {
      const list = panels();
      if (!list.length) return;

      const target = gsap.utils.clamp(0, list.length - 1, next);
      if (target === indexRef.current && !immediate) return;

      indexRef.current = target;
      setIndex(target);

      const y = list[target].offsetTop;

      if (immediate || prefersReducedMotion()) {
        window.scrollTo(0, y);
        return;
      }

      animating.current = true;
      gsap.to(window, {
        scrollTo: { y, autoKill: false },
        duration: 1,
        ease: 'expo.inOut',
        overwrite: true,
        onComplete: () => {
          animating.current = false;
        },
      });
    },
    [panels],
  );

  /* --- keep the count in sync with what is rendered --- */
  useEffect(() => {
    setCount(panels().length);
  }, [panels, enabled]);

  /* --- gesture + keyboard paging --- */
  useEffect(() => {
    if (!enabled) return;

    const step = (dir: 1 | -1) => {
      if (animating.current) return;
      goTo(indexRef.current + dir);
    };

    const observers: Observer[] = [];

    if (!prefersReducedMotion()) {
      // wheelSpeed -1 flips the axis so onUp means "next panel".
      observers.push(
        Observer.create({
          type: 'wheel',
          wheelSpeed: -1,
          onUp: () => step(1),
          onDown: () => step(-1),
          tolerance: 12,
          preventDefault: true,
        }),
      );

      // Touch is tuned separately: a thumb wobbles far more than a wheel notch,
      // and `allowClicks` is mandatory — without it preventDefault swallows
      // every tap on a link or button.
      observers.push(
        Observer.create({
          type: 'touch',
          onUp: () => step(1),
          onDown: () => step(-1),
          tolerance: 40,
          dragMinimum: 12,
          preventDefault: true,
          allowClicks: true,
        }),
      );
    }

    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      // Never hijack typing or a focused control's own key handling.
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          step(1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          step(-1);
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(panels().length - 1);
          break;
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      observers.forEach((o) => o.kill());
      window.removeEventListener('keydown', onKey);
    };
  }, [enabled, goTo, panels]);

  /* --- anchors (nav, menu, footer) address panels by id --- */
  useEffect(() => {
    const onGoto = (e: Event) => {
      const id = (e as CustomEvent<{ id: string }>).detail?.id;
      if (!id) return;
      const at = panels().findIndex((p) => p.id === id);
      if (at >= 0) goTo(at);
    };
    window.addEventListener('pager:goto', onGoto);
    return () => window.removeEventListener('pager:goto', onGoto);
  }, [goTo, panels]);

  /* --- a resize changes every offsetTop; re-seat on the current panel --- */
  useEffect(() => {
    if (!enabled) return;
    const onResize = () => {
      ScrollTrigger.refresh();
      goTo(indexRef.current, true);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [enabled, goTo]);

  return { index, count, goTo };
}

/** Ask the pager to move to a panel by id, from anywhere in the tree. */
export function gotoPanel(id: string) {
  window.dispatchEvent(new CustomEvent('pager:goto', { detail: { id } }));
}
