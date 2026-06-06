## 2026-06-06 — Add .gitignore and standard project files

**Task:** Add a .gitignore and other standard files for the project.

**Changed:**
- `.gitignore` (new) — ignores node_modules, .next, build output, .env*.local, .vercel, next-env.d.ts, editor/OS cruft
- `.eslintrc.json` (new) — extends next/core-web-vitals (the `lint` script referenced it but it was missing)
- `.editorconfig` (new) — utf-8, LF, 2-space indent, final newline
- `.nvmrc` (new) — pins Node 24

**Unchanged:** all source files
**Execution model:** unchanged
**Breaking changes:** none
**New dependencies:** none

## 2026-06-05 — Add README

**Task:** Write a README giving an overview and usage instructions.

**Changed:**
- `README.md` (new) — project overview, features, tech stack, getting started, personalization guide (lib/events.ts), guest links, RSVP storage, Vercel deployment + env vars, project structure, pre-publish checklist

**Unchanged:** all source files
**Execution model:** unchanged
**Breaking changes:** none
**New dependencies:** none

## 2026-06-05 — Personal + cinematic layer: ambient audio, petals, per-guest greeting, share card

**Task:** Make the invite more personal and cinematic — ambient music, falling petals, a per-guest URL greeting, and a WhatsApp/social share card.

**Changed:**
- `components/AudioController.tsx` (new) — looping ambient audio that fades in on envelope-open, with a floating animated mute toggle; hides itself if the audio file is absent
- `components/Petals.tsx` (new) — full-screen marigold/gold petal overlay (pointer-events-none), mounts only after open
- `app/opengraph-image.tsx` (new) — dynamic 1200×630 share card via next/og (names + dates on dark gold)
- `app/icon.tsx` (new) — dynamic monogram favicon (initials, gold on dark)
- `app/page.tsx` — wrapped in Suspense; reads & sanitizes `?to=` guest name; mounts AudioController + Petals on open
- `components/HeroCard.tsx` — optional `guestName` prop renders "Dear [Name]," greeting
- `app/layout.tsx` — added `metadataBase` (OG unfurl) and twitter card metadata
- `lib/events.ts` — added `SITE_URL` constant (NEXT_PUBLIC_SITE_URL with placeholder fallback)
- `.env.example` — documented `NEXT_PUBLIC_SITE_URL`
- `public/audio/README.md` (new) — instructions for dropping `ambient.mp3`

**Unchanged:** EventsTimeline, Countdown, RSVPForm, EnvelopeScene, API route
**Execution model:** unchanged (client components + static metadata routes; next/og runs on edge runtime)
**Breaking changes:** none
**New dependencies:** none (next/og ships with Next)

## 2026-06-05 — Initial project scaffold: cinematic wedding invitation website

**Task:** Build a full wedding invitation website with cinematic envelope-opening experience, Apple-aesthetic design, scroll-driven event showcase, live countdown, and RSVP form.

**Changed:**
- `package.json` — Next.js 14 project with Framer Motion, @vercel/kv, Tailwind CSS
- `tsconfig.json` — TypeScript configuration with path aliases
- `next.config.ts` — Next.js config
- `postcss.config.js` — PostCSS + Tailwind
- `tailwind.config.ts` — Custom palette: ink, gold, cream; Playfair/Cormorant/Inter font vars
- `.env.example` — KV_REST_API_URL and KV_REST_API_TOKEN placeholders
- `vercel.json` — Vercel deployment config (nextjs framework)
- `lib/events.ts` — All event data and couple config (UPDATE names/venues before publishing)
- `app/layout.tsx` — Root layout with Google Fonts and Open Graph metadata
- `app/globals.css` — Base styles, shimmer animation, custom scrollbar
- `app/page.tsx` — Main orchestrator: envelope scene → full invitation
- `app/api/rsvp/route.ts` — POST endpoint; stores in Vercel KV if configured, logs to console otherwise
- `components/EnvelopeScene.tsx` — Cinematic dark envelope with wax seal, floating particles, card-rise animation, fade-to-black transition
- `components/HeroCard.tsx` — Full-viewport hero with parallax couple names and scroll indicator
- `components/EventsTimeline.tsx` — 4 events with scroll-driven reveal and decorative timeline
- `components/Countdown.tsx` — Live countdown to Anand Karaj with animated digit rollover
- `components/RSVPForm.tsx` — Minimal RSVP form with event checkboxes and success animation

**Unchanged:** N/A (new project)
**Execution model:** Next.js SSR + client components for animations; serverless API route
**Breaking changes:** none
**New dependencies:** next@14.2.15, react@18, framer-motion@11, @vercel/kv@3, lucide-react, tailwindcss@3
