interface Props {
  index: number;
  count: number;
  labels: string[];
  onSelect: (i: number) => void;
}

/**
 * Position indicator on the right edge. With every panel filling the screen the
 * reader loses the scrollbar's sense of place — this gives it back.
 *
 * On touch it is indicator-only (see `.rail` under `pointer: coarse`): seven
 * small targets sitting under the resting thumb, on the same edge people swipe,
 * caused more mistaps than it was worth. The menu is the navigation there.
 */
export default function ProgressRail({ index, count, labels, onSelect }: Props) {
  if (!count) return null;

  return (
    <nav className="rail" aria-label={labels[index]}>
      <ul className="flex flex-col items-end">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-current={i === index ? 'true' : undefined}
              aria-label={labels[i] ?? `${i + 1}`}
              className={`rail-tick ${i === index ? 'is-active' : ''}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
