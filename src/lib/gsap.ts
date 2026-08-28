import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer, useGSAP);

// One motion signature for the whole site.
gsap.defaults({ duration: 0.9, ease: 'power3.out' });

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reduced motion: drop the scroll trigger and jump the animation to its end
 * state. Seeking alone is not enough — a live ScrollTrigger would render the
 * timeline back to progress 0 on its next refresh.
 */
export function settleIfReduced(anim: gsap.core.Timeline | gsap.core.Tween) {
  if (!prefersReducedMotion()) return false;
  anim.scrollTrigger?.kill();
  anim.progress(1);
  return true;
}

export { gsap, ScrollTrigger, Observer, useGSAP };

// Dev-only handle so animations can be inspected/stepped from the console.
if (import.meta.env.DEV) {
  (window as unknown as { __gsap?: typeof gsap }).__gsap = gsap;
}
