// Deterministic particle layers (same output on server and client, so no hydration drift).

const range = (n: number) => Array.from({ length: n }, (_, i) => i)

export function Petals({ colors, count, seed, confetti = false }: { colors: string[]; count: number; seed: number; confetti?: boolean }) {
  return (
    <div className="fx" aria-hidden="true" style={{ zIndex: 5 }}>
      {range(count).map((i) => {
        const size = 9 + ((i * 7 + seed) % 10)
        return (
          <div
            key={i}
            className="petal"
            style={{
              left: `${(i * 37 + seed * 11) % 100}%`,
              width: size,
              height: confetti ? 5 : size,
              borderRadius: confetti ? 1 : undefined,
              background: colors[i % colors.length],
              animationDuration: `${9 + ((i * 5 + seed) % 8)}s`,
              animationDelay: `${-((i * 1.7 + seed) % 14)}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export function Embers() {
  return (
    <div className="fx" aria-hidden="true" style={{ zIndex: 5 }}>
      {range(16).map((i) => (
        <div
          key={i}
          className="ember"
          style={{
            left: `${i < 8 ? 4 + ((i * 3) % 9) : 87 + ((i * 3) % 9)}%`,
            animationDuration: `${3 + (i % 4)}s`,
            animationDelay: `${-((i * 0.6) % 4)}s`,
          }}
        />
      ))}
    </div>
  )
}

const DOVES = [
  { y: 160, dur: 16, d: 0, w: 54 },
  { y: 240, dur: 19, d: -6, w: 42 },
  { y: 120, dur: 22, d: -13, w: 36 },
]

export function Doves() {
  return (
    <>
      {DOVES.map((b, i) => (
        <div key={i} className="dove" style={{ top: b.y, animationDuration: `${b.dur}s`, animationDelay: `${b.d}s` }}>
          <svg viewBox="0 0 60 30" aria-hidden="true" style={{ width: b.w, display: 'block' }}>
            <path d="M14 18 L2 14 L6 20Z" fill="#fff" />
            <ellipse cx="28" cy="18" rx="14" ry="5.5" fill="#fff" />
            <circle cx="42" cy="15" r="4.5" fill="#fff" />
            <path d="M46 14 L51 15.5 L46 17Z" fill="#e8a33a" />
            <path className="wing" d="M20 16 Q28 -2 40 14Z" fill="#f2efe8" />
          </svg>
        </div>
      ))}
    </>
  )
}

const NEON = ['#ff3da6', '#5ee3ff', '#ffd23f', '#9b5bff']

// Disco-night lighting: chequered floor, pulsing light pools, fairy strands, disco ball and sweeping beams.
export function DiscoLights() {
  return (
    <>
      <div className="floor" aria-hidden="true" />
      {NEON.map((c, i) => (
        <div key={c} className="pool" aria-hidden="true" style={{ left: `${2 + i * 24}%`, background: c, animationDelay: `${-i * 0.6}s` }} />
      ))}
      {range(20).map((i) => (
        <div
          key={i}
          className="fairy"
          aria-hidden="true"
          style={{ left: `${2.5 + i * 5}%`, height: `${18 + ((i * 37) % 30)}%`, animationDelay: `${-((i * 0.7) % 2.2)}s` }}
        />
      ))}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <div style={{ width: 2, height: 'clamp(40px, 6vw, 80px)', background: '#8a7a5a' }} />
        <div className="disco" />
      </div>
      {[...NEON, NEON[0]].map((c, i) => (
        <div
          key={i}
          className="beam"
          aria-hidden="true"
          style={{ left: `${4 + i * 20}%`, background: `linear-gradient(to bottom, ${c}, transparent 80%)`, animationDelay: `${-i * 1.3}s` }}
        />
      ))}
    </>
  )
}

export function Balloons() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {range(16).map((i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${((i * 37) % 94) + 2}%`,
            width: 38 + ((i * 13) % 34),
            animationDuration: `${11 + ((i * 7) % 9)}s`,
            animationDelay: `${-i * 1.4}s`,
          }}
        >
          <div>
            <svg viewBox="0 0 100 190" style={{ width: '100%', display: 'block' }}>
              <path d="M50 88 C20 66 4 48 4 30 C4 16 15 6 28 6 C38 6 46 12 50 20 C54 12 62 6 72 6 C85 6 96 16 96 30 C96 48 80 66 50 88Z" fill="#d3122f" />
              <path d="M24 20 C18 24 16 30 17 36" fill="none" stroke="#ff8a9a" strokeWidth="5" strokeLinecap="round" />
              <path d="M45 94 L50 87 L55 94Z" fill="#a50e25" />
              <path d="M50 94 C42 120 58 140 50 186" fill="none" stroke="#f5e6d8" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
