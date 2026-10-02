'use client'

import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from 'react'

const OPEN_MS = 3100
const EDGE_POINTS = 13 // fixed count so clip-path can transition between shapes

// Each curtain's inner edge, pulled aside around the pointer's height (y in %).
function curtainClip(side: 'l' | 'r', pull: number, y: number) {
  const pts = Array.from({ length: EDGE_POINTS }, (_, k) => {
    const yy = (k * 100) / (EDGE_POINTS - 1)
    const p = pull * Math.exp(-(((yy - y) / 20) ** 2))
    return `${(side === 'l' ? 100 - p : p).toFixed(1)}% ${yy.toFixed(1)}%`
  })
  return side === 'l'
    ? `polygon(0% 0%, ${pts.join(', ')}, 0% 100%)`
    : `polygon(100% 0%, ${pts.join(', ')}, 100% 100%)`
}

// Intro: a carved palace doorway whose door is the opening, with a red curtain
// behind it. Moving over the door peeks at the welcome page; the tassel opens it.
export default function Gate({
  monogram,
  onTap,
  onOpen,
  onGone,
}: {
  monogram: string
  onTap: () => void
  onOpen: () => void
  onGone: () => void
}) {
  const [pointer, setPointer] = useState({ nx: 0, ny: 0, near: 0, peek: false })
  const [opening, setOpening] = useState(false)
  const raf = useRef<number | null>(null)
  const latest = useRef(pointer)

  useEffect(() => () => {
    if (raf.current) cancelAnimationFrame(raf.current)
  }, [])

  function move(clientX: number, clientY: number) {
    const W = window.innerWidth
    const H = window.innerHeight
    const halfDoor = 90 * Math.min(W / 700, H / 1000) // the doorway is 180 viewBox units wide
    latest.current = {
      nx: clientX / W - 0.5,
      ny: clientY / H - 0.5,
      near: Math.max(0, Math.min(1, 1 - Math.abs(clientX - W / 2) / (halfDoor * 1.6))),
      peek: true,
    }
    if (raf.current) return
    raf.current = requestAnimationFrame(() => {
      raf.current = null
      setPointer(latest.current)
    })
  }

  function open() {
    if (opening) return
    onTap()
    setOpening(true)
    setPointer((p) => ({ ...p, peek: false }))
    onOpen()
    window.setTimeout(onGone, OPEN_MS)
  }

  const pull = pointer.peek ? 60 * pointer.near : 0
  const y = (pointer.ny + 0.5) * 100
  const skew = pointer.nx * -1.4

  return (
    <div
      className={`gate ${opening ? 'gate-open' : ''}`}
      onMouseMove={(e: MouseEvent) => move(e.clientX, e.clientY)}
      onTouchMove={(e: TouchEvent) => move(e.touches[0].clientX, e.touches[0].clientY)}
      onMouseLeave={() => setPointer((p) => ({ ...p, peek: false }))}
    >
      <div className="curtain curtain-l" style={{ transform: `translateX(${pointer.nx * 30}px) skewX(${skew}deg)`, clipPath: curtainClip('l', pull, y) }}>
        <div className="velvet" />
      </div>
      <div className="curtain curtain-r" style={{ transform: `translateX(${pointer.nx * 18}px) skewX(${skew}deg)`, clipPath: curtainClip('r', pull, y) }}>
        <div className="velvet" />
      </div>
      <svg className="scene gate-wall" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <use href="#doorway" />
        <text x="500" y="282" textAnchor="middle" fontStyle="italic" fontSize="46" fill="#7a5520" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
          {monogram}
        </text>
      </svg>
      <div className="gate-cta">
        <button className="tassel" onClick={open}>
          <svg viewBox="0 0 46 150" aria-hidden="true">
            <path d="M23 0 V70" stroke="#e6c46e" strokeWidth="3" />
            <path d="M23 0 V70" stroke="#8a6526" strokeWidth="3" strokeDasharray="3 5" />
            <circle cx="23" cy="78" r="10" fill="#d9b25a" stroke="#8a6526" strokeWidth="1.5" />
            <rect x="13" y="88" width="20" height="8" rx="2" fill="#b08a3e" />
            <path d="M13 96 Q6 130 4 146 H42 Q40 130 33 96Z" fill="#d9b25a" />
            <path d="M10 104 L7 146 M16 100 L14 146 M23 100 V146 M30 100 L32 146 M36 104 L39 146" stroke="#8a6526" strokeWidth="1.2" />
            <rect x="9" y="108" width="28" height="4" fill="#b3262e" />
          </svg>
          <span>Pull to enter</span>
        </button>
        <p className="gate-hint">Hover or drag over the door to peek inside</p>
      </div>
    </div>
  )
}
