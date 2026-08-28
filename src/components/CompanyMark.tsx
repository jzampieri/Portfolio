interface Props {
  company: string;
  logo?: string;
  initials: string;
  className?: string;
}

/**
 * Company mark in a fixed rounded frame. The supplied logos are opaque,
 * edge-to-edge brand tiles, so the image fills the frame and the radius does
 * the clipping — padding one inside a white chip would read as a sticker.
 * The typographic fallback keeps the same footprint so the list stays aligned.
 */
export default function CompanyMark({ company, logo, initials, className }: Props) {
  return (
    <span
      className={`flex h-[clamp(48px,5vw,64px)] w-[clamp(48px,5vw,64px)] shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-md)] ${
        logo ? '' : 'border border-black/[0.08] bg-[color:var(--color-canvas)]'
      } ${className ?? ''}`}
    >
      {logo ? (
        <img
          src={logo}
          alt={company}
          width={192}
          height={192}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="t-caption-strong tracking-[0.08em] text-[color:var(--color-ink)]"
        >
          {initials}
        </span>
      )}
    </span>
  );
}
