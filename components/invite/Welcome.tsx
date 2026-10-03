import { COUPLE } from '@/lib/events'
import { WelcomeBack } from './Scenery'
import { Petals } from './Particles'

// Maroon velvet arch with swinging lanterns, curtains drawn back to either side.
// Its text settles in once the gate has opened (`entered`).
export default function Welcome({ entered, guestName, dateRange }: { entered: boolean; guestName?: string; dateRange: string }) {
  return (
    <section className={`room ${entered ? 'entered' : ''}`} style={{ background: '#6e1129' }}>
      <WelcomeBack />
      <div className="drape" aria-hidden="true" />
      <div className="drape drape-r" aria-hidden="true" />
      <div className="tie" aria-hidden="true" style={{ left: 'min(8%, calc((100% - 760px) / 4))' }} />
      <div className="tie" aria-hidden="true" style={{ right: 'min(8%, calc((100% - 760px) / 4))' }} />
      <Petals colors={['#c2263a', '#e46a7e', '#9b1b2e', '#e6c46e']} count={18} seed={3} />
      <div className="copy copy-welcome" style={{ color: '#f3e3c8', marginTop: 60 }}>
        {guestName && (
          <p className="body w-in" style={{ fontStyle: 'italic', color: '#e6c46e', animationDelay: '.7s' }}>
            Dear {guestName},
          </p>
        )}
        <div className="w-in glow-text" style={{ font: '500 52px/1 var(--font-gurmukhi), serif', color: '#e6c46e', animationDelay: '.9s' }}>
          ੴ
        </div>
        <p className="lbl w-in" style={{ color: '#e6c46e', animationDelay: '1.1s' }}>
          With the blessings of Waheguru Ji
        </p>
        <p className="body w-in" style={{ animationDelay: '1.3s' }}>
          Together with their families, {COUPLE.brideFamily} and {COUPLE.groomFamily}, request the honour of your presence at the
          wedding celebrations of
        </p>
        <h1
          className="w-in"
          style={{
            margin: '8px 0 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            font: 'italic 500 clamp(44px, 10vw, 68px)/1.05 var(--font-cormorant), serif',
            animationDelay: '1.6s',
          }}
        >
          <span className="shimmer">{COUPLE.bride}</span>
          <span style={{ fontSize: '.45em', color: '#e6c46e' }}>&amp;</span>
          <span className="shimmer">{COUPLE.groom}</span>
        </h1>
        <p className="lbl w-in" style={{ marginTop: 8, color: '#f3e3c8', animationDelay: '1.9s' }}>
          {dateRange}
        </p>
        <a
          className="lbl w-in"
          href="#functions"
          style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#e6c46e', textDecoration: 'none', minHeight: 44, animationDelay: '2.2s' }}
        >
          Step inside
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
