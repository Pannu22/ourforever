import { ImageResponse } from 'next/og'
import { COUPLE } from '@/lib/events'

export const runtime = 'edge'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

// Monogram favicon — gold initials on dark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at 35% 30%, #1d1508 0%, #0A0A0A 100%)',
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#C9A96E',
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: -1,
          }}
        >
          {COUPLE.bride[0]}
          <span style={{ fontSize: 18, margin: '0 1px', opacity: 0.8 }}>&</span>
          {COUPLE.groom[0]}
        </div>
      </div>
    ),
    { ...size }
  )
}
