import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_RSVP_ENABLED !== 'true') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  try {
    const data = await req.json()
    const { name, email, attending, message } = data

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const entry = {
      name: name.trim(),
      email: (email || '').trim(),
      attending: Array.isArray(attending) ? attending : [],
      message: (message || '').trim(),
      submittedAt: new Date().toISOString(),
    }

    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      const { kv } = await import('@vercel/kv')
      await kv.lpush('rsvps', JSON.stringify(entry))
    } else {
      console.log('[RSVP received]', entry)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[RSVP error]', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
