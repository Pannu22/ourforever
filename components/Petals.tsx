'use client'

import { useEffect, useState } from 'react'

type Petal = {
  id: number
  left: number
  size: number
  hue: string
  fall: number // vertical fall duration (s)
  sway: number // side-to-side flutter duration (s)
  fallDelay: number // negative → start mid-cycle so the screen fills at once
  swayDelay: number
  drift: number // horizontal sway amplitude (px)
  spin: number // rotation amplitude (deg)
}

// Warm marigold / gold tones for a Sikh-wedding feel.
const HUES = ['#E8A33D', '#C9A96E', '#E8D5A3', '#D98B2B', '#F2C14E']

function PetalShape({ size, hue }: { size: number; hue: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: 'block' }}
    >
      {/* Soft petal — teardrop curve */}
      <path
        d="M12 1 C 17 6, 19 13, 12 23 C 5 13, 7 6, 12 1 Z"
        fill={hue}
        fillOpacity="0.85"
      />
      <path
        d="M12 3 C 14 8, 14 15, 12 21"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  )
}

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([])

  // Generated on the client (Math.random) to avoid hydration mismatch.
  useEffect(() => {
    setPetals(
      Array.from({ length: 14 }, (_, i) => {
        const fall = Math.random() * 8 + 11 // 11–19s
        const sway = Math.random() * 2.5 + 3 // 3–5.5s
        return {
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 12 + 10,
          hue: HUES[i % HUES.length],
          fall,
          sway,
          fallDelay: -(Math.random() * fall),
          swayDelay: -(Math.random() * sway),
          drift: Math.random() * 55 + 25, // 25–80px
          spin: Math.random() * 70 + 25, // 25–95deg
        }
      })
    )
  }, [])

  return (
    <div
      className="fixed inset-0 z-30 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal-fall absolute"
          style={{
            left: `${p.left}%`,
            top: 0,
            animationDuration: `${p.fall}s`,
            animationDelay: `${p.fallDelay}s`,
          }}
        >
          <div
            className="petal-sway"
            style={{
              animationDuration: `${p.sway}s`,
              animationDelay: `${p.swayDelay}s`,
              ['--drift' as string]: `${p.drift}px`,
              ['--spin' as string]: `${p.spin}deg`,
            }}
          >
            <PetalShape size={p.size} hue={p.hue} />
          </div>
        </div>
      ))}
    </div>
  )
}
