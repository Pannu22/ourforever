'use client'

import type { CSSProperties, ReactNode } from 'react'
import { COUPLE, type WeddingEvent } from '@/lib/events'
import { downloadEventIcs } from '@/lib/calendar'
import Room from './Room'
import { Doves, DiscoLights, Embers, Petals } from './Particles'
import {
  AnandBack,
  AnandFront,
  GardenFoliageLeft,
  GardenFoliageRight,
  GardenLamps,
  JagoBack,
  JagoFront,
  ShaganBack,
  ShaganFront,
  TunnelBack,
} from './Scenery'

type Scene = {
  background: string
  back: ReactNode // drawn behind the text
  front?: ReactNode // drawn in front of the text
  copy: { color: string; accent: string; title: string; titleShadow?: string; light?: boolean; style?: CSSProperties }
}

const SCENES: Record<string, Scene> = {
  shagan: {
    background: '#e3d6c0',
    back: <ShaganBack />,
    front: (
      <>
        <Doves />
        <ShaganFront />
        <Petals colors={['#f6efe2', '#e9dcc4', '#d9c09a']} count={14} seed={5} />
      </>
    ),
    copy: { color: '#f3e3c8', accent: '#e6c46e', title: '#fbf1e0', style: { marginTop: 70 } },
  },
  jago: {
    background: '#3c4a22',
    back: <JagoBack />,
    front: (
      <>
        <JagoFront />
        <Embers />
        <Petals colors={['#ffb81c', '#f08a00', '#e8358a']} count={14} seed={6} />
      </>
    ),
    copy: { color: '#4a1c0c', accent: '#8a3a0c', title: '#b0300c', light: true, style: { marginTop: 150, marginBottom: 120 } },
  },
  garden: {
    background: 'radial-gradient(ellipse at 50% 45%, #1a2f63, #0b1636 60%, #050b1e)',
    back: (
      <>
        <DiscoLights />
        <GardenLamps />
      </>
    ),
    front: (
      <>
        <GardenFoliageLeft />
        <GardenFoliageRight />
      </>
    ),
    copy: {
      color: '#f2eaff',
      accent: '#5ee3ff',
      title: '#ff7cc4',
      titleShadow: '0 0 24px rgba(255,61,166,.6)',
      style: { marginTop: 100, padding: '28px 22px', background: 'rgba(8,14,36,.55)', border: '1px solid rgba(255,61,166,.6)', boxShadow: '0 0 40px rgba(255,61,166,.25)' },
    },
  },
  anand: {
    background: '#cfe2ee',
    back: <AnandBack />,
    front: (
      <>
        <AnandFront />
        <Petals colors={['#f3a6b3', '#e98aa0', '#fffaf0', '#f7c9d2']} count={22} seed={7} />
      </>
    ),
    copy: { color: '#4a1a14', accent: '#7a5a1e', title: '#7d1220', light: true, style: { marginTop: 40, marginBottom: 120 } },
  },
  tunnel: {
    background: '#000',
    back: (
      <>
        <TunnelBack />
        <Petals colors={['#ffd36b', '#d9a93a', '#fff1c4']} count={24} seed={2} confetti />
      </>
    ),
    copy: {
      color: '#f6efe0',
      accent: '#ffd36b',
      title: '#ffd36b',
      titleShadow: '0 0 26px rgba(255,200,100,.5)',
      style: { marginTop: 160, padding: '28px 22px', background: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,.8), rgba(0,0,0,.45) 70%, transparent)' },
    },
  },
}

const BY_EVENT: Record<string, keyof typeof SCENES> = {
  shagan: 'shagan',
  jago: 'jago',
  'dj-night1': 'garden',
  'dj-night1-bride': 'garden',
  'jago-bride': 'jago',
  'anand-karaj': 'anand',
  'dj-night2': 'tunnel',
}
const ORDER = Object.keys(SCENES)

// One themed room per function the guest is invited to. Unknown ids cycle through the scenes.
export default function EventRoom({ event, index, id }: { event: WeddingEvent; index: number; id?: string }) {
  const scene = SCENES[BY_EVENT[event.id] ?? ORDER[index % ORDER.length]]
  const c = scene.copy

  return (
    <Room id={id} style={{ background: scene.background }}>
      {scene.back}
      <div className={`copy ${c.light ? 'copy-light' : ''}`} style={{ color: c.color, ...c.style }}>
        <p className="lbl" style={{ color: c.accent }}>{event.subtitle}</p>
        <h2 className="ttl" style={{ color: c.title, textShadow: c.titleShadow }}>{event.name}</h2>
        <p className="body">{event.description}</p>
        <p className="meta">
          {event.displayDate} · {event.displayTime}
          <br />
          {event.venue}
        </p>
        <div className="actions" style={{ color: c.accent }}>
          {event.mapUrl && (
            <a className="maps" href={event.mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Maps
            </a>
          )}
          <button type="button" className="maps" onClick={() => downloadEventIcs(event, `${event.name} — ${COUPLE.monogram}`)}>
            Add to calendar
          </button>
        </div>
      </div>
      {scene.front}
    </Room>
  )
}
