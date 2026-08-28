import { useRef } from 'react';
import { gsap, useGSAP, settleIfReduced } from '../lib/gsap';
import type { Lang, Metric } from '../content/site';

/** Counts the numeral up when it enters view. Locale-aware decimal separator. */
export default function Counter({ metric, lang }: { metric: Metric; lang: Lang }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const fmt = new Intl.NumberFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
        minimumFractionDigits: metric.decimals,
        maximumFractionDigits: metric.decimals,
      });

      const state = { n: 0 };
      const write = () => {
        el.textContent = fmt.format(state.n);
      };
      write();

      const tween = gsap.to(state, {
        n: metric.value,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: write,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });

      settleIfReduced(tween);
    },
    { scope: ref, dependencies: [lang, metric.value, metric.decimals] },
  );

  return <span ref={ref} />;
}
