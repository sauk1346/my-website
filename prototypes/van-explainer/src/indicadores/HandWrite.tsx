import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { HAND_FONT } from './font';

/** Default ink color for handwritten values (warm marker on dark board). */
export const INK = '#ffd98a';

/**
 * Stylized right hand holding a pencil. The pencil tip sits at the SVG's
 * top-left corner (0,0), so the sprite can be anchored at the point where
 * the writing happens and extends down-right, like a real hand.
 */
export const HandSprite: React.FC<{ height?: number }> = ({ height = 110 }) => {
  const width = (height * 150) / 190;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 190"
      style={{ display: 'block' }}
    >
      {/* lápiz: mina + madera + cuerpo */}
      <polygon points="2,2 12,6 8,14" fill="#2f2f2f" />
      <polygon points="8,6 24,14 16,26 5,12" fill="#e8b36a" stroke="#b4824a" strokeWidth="1.5" />
      <polygon
        points="18,12 86,84 70,100 8,24"
        fill="#f5a83d"
        stroke="#c67f24"
        strokeWidth="2"
      />
      {/* puño */}
      <ellipse cx="94" cy="124" rx="46" ry="42" fill="#f2c9a0" stroke="#c89468" strokeWidth="3" />
      {/* pulgar sujetando el lápiz */}
      <path
        d="M58 92 Q40 96 42 114 Q44 130 64 128 Q76 126 78 112 Q79 100 70 94 Z"
        fill="#f2c9a0"
        stroke="#c89468"
        strokeWidth="3"
      />
      {/* dedos doblados */}
      <path d="M66 142 q10 14 26 10" fill="none" stroke="#c89468" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 152 q10 12 24 8" fill="none" stroke="#c89468" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 160 q9 9 20 6" fill="none" stroke="#c89468" strokeWidth="3" strokeLinecap="round" />
      {/* índice apoyado en el lápiz */}
      <path
        d="M62 88 Q78 102 90 120 Q96 130 108 126 Q118 120 110 106 Q96 86 78 76 Q66 70 62 88 Z"
        fill="#f2c9a0"
        stroke="#c89468"
        strokeWidth="3"
      />
      {/* puño de la camisa */}
      <path
        d="M118 150 L150 176 L140 190 L104 166 Z"
        fill="#5b7fb4"
        stroke="#3f5c87"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export type Seg =
  | { t: 'text'; v: string }
  | { t: 'sup'; v: string }
  | { t: 'frac'; num: string; den: string; denSup?: string };

export function segCells(seg: Seg): number {
  if (seg.t === 'frac') return seg.num.length + 1 + seg.den.length + (seg.denSup?.length ?? 0);
  return seg.v.length;
}

type HandExprProps = {
  segments: Seg[];
  /** Writing window in frames, relative to the enclosing scene Sequence. */
  window: { start: number; end: number; holdUntil?: number };
  fontSize?: number;
  color?: string;
  showHand?: boolean;
  style?: React.CSSProperties;
  /**
   * Writing speed in frames per character. The expression is written
   * quickly at the start of its window and stays visible for the rest of
   * the narration, instead of stretching across the whole beat.
   */
  framesPerCell?: number;
};

/**
 * Writes a math expression character by character in a handwriting font,
 * with a hand+pencil sprite riding on the character currently being written.
 */
export const HandExpr: React.FC<HandExprProps> = ({
  segments,
  window: win,
  fontSize = 44,
  color = INK,
  showHand = true,
  style,
  framesPerCell = 2,
}) => {
  const frame = useCurrentFrame();
  const total = segments.reduce((acc, s) => acc + segCells(s), 0);
  const writeEnd = Math.min(win.end, win.start + Math.max(6, total * framesPerCell));
  const progress = interpolate(frame, [win.start, writeEnd], [0, total], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  // The hand stays visible (resting on the last character, with a subtle
  // idle sway) until holdUntil, so consecutive writes don't make it blink.
  const holdUntil = win.holdUntil ?? win.end;
  const writing = showHand && frame >= win.start && frame < Math.max(writeEnd, holdUntil);
  const resting = progress >= total;
  const handIdx = Math.min(Math.floor(progress), total - 1);
  const handHeight = fontSize * 2.3;
  const idleSway = resting ? Math.sin(frame / 9) * fontSize * 0.03 : 0;

  // The hand must live in an always-visible wrapper: the character itself
  // toggles opacity while being written, and a nested hand would inherit
  // that blinking.
  const renderChar = (ch: string, idx: number, extra?: React.CSSProperties) => (
    <span
      key={idx}
      style={{
        position: 'relative',
        whiteSpace: 'pre',
        ...extra,
      }}
    >
      <span style={{ opacity: idx < progress ? 1 : 0 }}>{ch}</span>
      {writing && idx === handIdx ? (
        <span
          style={{
            // Pen tip at the glyph's bottom-right corner, so the hand never
            // covers the character it just wrote (covering it and then
            // revealing it reads as the text "trembling").
            position: 'absolute',
            left: '85%',
            top: '78%',
            zIndex: 30,
            pointerEvents: 'none',
            transform: `translateY(${idleSway}px)`,
          }}
        >
          <HandSprite height={handHeight} />
        </span>
      ) : null}
    </span>
  );

  let cursor = 0;
  const parts: React.ReactNode[] = [];

  segments.forEach((seg, sIdx) => {
    if (seg.t === 'text') {
      const base = cursor;
      parts.push(
        <span key={sIdx}>
          {[...seg.v].map((ch, i) => renderChar(ch, base + i))}
        </span>
      );
      cursor += seg.v.length;
    } else if (seg.t === 'sup') {
      const base = cursor;
      parts.push(
        <sup key={sIdx} style={{ fontSize: '62%', lineHeight: 0 }}>
          {[...seg.v].map((ch, i) => renderChar(ch, base + i))}
        </sup>
      );
      cursor += seg.v.length;
    } else {
      const numBase = cursor;
      const barIdx = cursor + seg.num.length;
      const denBase = barIdx + 1;
      parts.push(
        <span
          key={sIdx}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            verticalAlign: 'middle',
            margin: '0 10px',
            lineHeight: 1.1,
          }}
        >
          <span>{[...seg.num].map((ch, i) => renderChar(ch, numBase + i))}</span>
          <span
            style={{
              position: 'relative',
              alignSelf: 'stretch',
              height: Math.max(3, fontSize * 0.07),
              margin: '2px 0',
            }}
          >
            <span
              style={{
                position: 'absolute',
                inset: 0,
                background: color,
                borderRadius: 2,
                opacity: barIdx < progress ? 1 : 0,
              }}
            />
            {writing && barIdx === handIdx ? (
              <span
                style={{
                  position: 'absolute',
                  left: '70%',
                  top: '60%',
                  zIndex: 30,
                  transform: `translateY(${idleSway}px)`,
                }}
              >
                <HandSprite height={handHeight} />
              </span>
            ) : null}
          </span>
          <span>
            {[...seg.den].map((ch, i) => renderChar(ch, denBase + i))}
            {seg.denSup ? (
              <sup style={{ fontSize: '62%', lineHeight: 0 }}>
                {[...seg.denSup].map((ch, i) =>
                  renderChar(ch, denBase + seg.den.length + i)
                )}
              </sup>
            ) : null}
          </span>
        </span>
      );
      cursor += segCells(seg);
    }
  });

  return (
    <span
      style={{
        fontFamily: `'${HAND_FONT}', cursive`,
        fontWeight: 600,
        fontSize,
        color,
        ...style,
      }}
    >
      {parts}
    </span>
  );
};

/** Plain handwritten text (single segment). */
export const HandWrite: React.FC<Omit<HandExprProps, 'segments'> & { text: string }> = ({
  text,
  ...rest
}) => {
  return <HandExpr segments={[{ t: 'text', v: text }]} {...rest} />;
};
