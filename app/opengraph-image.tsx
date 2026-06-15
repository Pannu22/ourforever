import { ImageResponse } from 'next/og'
import { COUPLE, WEDDING_DATE_RANGE } from '@/lib/events'

// WhatsApp / iMessage / social unfurl card.
// A custom Playfair .ttf can be loaded here later for exact brand type;
// next/og's default sans keeps this dependency-free for now.
export const runtime = 'edge'
export const alt = `${COUPLE.bride} & ${COUPLE.groom} — Wedding Invitation`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(ellipse 90% 80% at 50% 35%, #1d1508 0%, #0A0A0A 70%)',
          color: '#FAF7F2',
          position: 'relative',
        }}
      >
        {/* Gold frame */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '1px solid rgba(201,169,110,0.3)',
          }}
        />

        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.7)',
            marginBottom: 36,
          }}
        >
          You Are Invited
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 110, fontWeight: 500 }}>{COUPLE.bride}</span>
          <span
            style={{
              fontSize: 70,
              color: '#C9A96E',
              margin: '0 28px',
              fontStyle: 'italic',
            }}
          >
            &
          </span>
          <span style={{ fontSize: 110, fontWeight: 500 }}>{COUPLE.groom}</span>
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginTop: 40,
          }}
        >
          <div style={{ width: 90, height: 1, background: 'rgba(201,169,110,0.5)' }} />
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: 4,
              background: 'rgba(201,169,110,0.8)',
            }}
          />
          <div style={{ width: 90, height: 1, background: 'rgba(201,169,110,0.5)' }} />
        </div>

        <div
          style={{
            fontSize: 30,
            color: 'rgba(201,169,110,0.85)',
            marginTop: 36,
            letterSpacing: 2,
          }}
        >
          {WEDDING_DATE_RANGE}
        </div>
      </div>
    ),
    { ...size }
  )
}
