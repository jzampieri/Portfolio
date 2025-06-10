import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isFirefox = ua.includes('firefox');

    const lenis = new Lenis({
      lerp: 0.04,
      easing: t => 1 - Math.pow(1 - t, 3),
      wheelMultiplier: isFirefox ? 1 : 1.8,
      syncTouch: true,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
};
