import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from './gsap';

/**
 * Pulls an element toward the pointer while it is hovered. quickTo keeps a
 * single tween alive per axis instead of spawning one per mousemove, which is
 * what makes this cheap enough to put on every button.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      // Coarse pointers have no hover state to react to.
      if (!el || prefersReducedMotion() || matchMedia('(hover: none)').matches) return;

      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: ref },
  );

  return ref;
}
