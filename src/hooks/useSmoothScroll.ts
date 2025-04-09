import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      easing: (t) => t,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
