'use client'

import { useEffect, useState } from 'react'
import Room from './Room'
import { Balloons } from './Particles'
import { TajSkyline } from './Scenery'

const pad = (n: number) => String(n).padStart(2, '0')

function units(targetIso: string, now: number) {
  const diff = Math.max(0, new Date(targetIso).getTime() - now)
  return [
    { v: pad(Math.floor(diff / 864e5)), l: 'Days' },
    { v: pad(Math.floor(diff / 36e5) % 24), l: 'Hours' },
    { v: pad(Math.floor(diff / 6e4) % 60), l: 'Minutes' },
    { v: pad(Math.floor(diff / 1e3) % 60), l: 'Seconds' },
  ]
}

// Stepping out of the palace at dusk: live countdown, the Taj reflected in its pool, heart balloons rising.
export default function Outside({ targetIso, targetName }: { targetIso: string; targetName: string }) {
  const [now, setNow] = useState<number | null>(null) // set on mount so server and client markup match

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <Room
      className=""
      style={{
        position: 'relative',
        minHeight: 1000,
        overflow: 'hidden',
        padding: '120px 24px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(#141a44 0%, #4a2a66 38%, #c2577a 66%, #f39a6b 84%, #f8c98e 100%)',
      }}
    >
      <p className="lbl" style={{ letterSpacing: '.32em', color: '#ffe2c2' }}>Until the {targetName}</p>
      <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        {units(targetIso, now ?? 0).map((u) => (
          <div
            key={u.l}
            style={{ width: 116, padding: '20px 0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, border: '1px solid rgba(255,226,194,.55)', background: 'rgba(20,16,50,.35)' }}
          >
            <span style={{ font: '500 56px/1 var(--font-cormorant), serif', color: '#fff4e4', fontVariantNumeric: 'tabular-nums' }}>{now === null ? '--' : u.v}</span>
            <span style={{ font: '400 11px/1 var(--font-jost), sans-serif', letterSpacing: '.28em', textTransform: 'uppercase', color: '#ffe2c2' }}>{u.l}</span>
          </div>
        ))}
      </div>
      <p style={{ margin: '28px 0 0', font: 'italic 400 26px/1.4 var(--font-cormorant), serif', color: '#fff4e4', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        We can’t wait to celebrate with you.
      </p>
      <TajSkyline />
      <Balloons />
    </Room>
  )
}
