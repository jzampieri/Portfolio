import { Fragment } from 'react';

interface Props {
  text: string;
  /** 'chars' gives every letter its own rise inside a single line mask. */
  mode?: 'words' | 'chars';
}

/**
 * Masked reveal without SplitText: pieces ride up from behind an
 * overflow-hidden box. The text stays in document order and remains plain
 * text, so screen readers are unaffected.
 */
export default function MaskedWords({ text, mode = 'words' }: Props) {
  if (mode === 'chars') {
    return (
      <span className="gs-mask">
        {[...text].map((char, i) => (
          <span key={`${char}-${i}`} className="gs-word">
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </span>
    );
  }

  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="gs-mask">
            <span className="gs-word">{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  );
}
