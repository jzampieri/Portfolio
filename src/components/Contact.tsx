import { dictionaries, profile, type Lang } from '../content/site';
import { gotoPanel } from '../hooks/usePager';
import Panel, { RV } from './Panel';
import MaskedWords from './MaskedWords';

/**
 * The closing panel, footer folded in. The address set at display scale is the
 * ending — a second giant wordmark underneath would only compete with it.
 */
export default function Contact({ lang }: { lang: Lang }) {
  const c = dictionaries[lang].contact;
  const f = dictionaries[lang].footer;

  return (
    <Panel
      id="contato"
      label={c.label}
      title={c.title}
      surface="void"
      foot={
        <div className={`${RV} flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-[clamp(12px,2vh,20px)]`}>
          <span className="t-fine text-white/40">
            © {profile.year} {profile.fullName}. {f.rights}
          </span>
          <span className="t-fine text-white/40">{f.built}</span>
          <button onClick={() => gotoPanel('top')} className="link-swap t-fine text-white/40">
            <span>{f.backToTop} ↑</span>
            <span aria-hidden="true">{f.backToTop} ↑</span>
          </button>
        </div>
      }
    >
      <p className={`${RV} t-lead max-w-[44ch] text-[color:var(--color-on-dark-muted)]`}>
        {c.body}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className={`${RV} tap t-mail mt-[clamp(18px,4vh,52px)] block text-[color:var(--color-action-dark)]`}
      >
        <MaskedWords text={profile.email} />
      </a>

      <ul className="mt-[clamp(16px,2.6vh,36px)] flex flex-wrap gap-x-[clamp(20px,4vw,52px)] gap-y-3">
        {c.links.map((l) => (
          <li key={l.label} className={RV}>
            <a
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              {...(l.download ? { download: true } : {})}
              className="link-swap t-body-strong text-white"
            >
              <span>{l.label}</span>
              <span aria-hidden="true">{l.label}</span>
            </a>
          </li>
        ))}
        <li className={RV}>
          <a href={profile.phoneHref} className="link-swap t-body-strong text-white">
            <span>{profile.phone}</span>
            <span aria-hidden="true">{profile.phone}</span>
          </a>
        </li>
      </ul>
    </Panel>
  );
}
