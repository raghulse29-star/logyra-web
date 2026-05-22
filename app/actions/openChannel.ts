'use server';

import { headers } from 'next/headers';

export type OpenChannelState =
  | { status: 'success' }
  | { status: 'error'; message: string };

export type OpenChannelPayload = { name: string; phone: string };

const ipHits = new Map<string, number[]>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_MAX = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) return false;
  hits.push(now);
  ipHits.set(ip, hits);
  return true;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function submitOpenChannel(payload: OpenChannelPayload): Promise<OpenChannelState> {
  const name = payload.name.trim();
  const phone = payload.phone.trim();

  if (!name || name.length > 80) {
    return { status: 'error', message: 'Please enter your name.' };
  }
  if (!/^[+\d\s\-()]{7,20}$/.test(phone)) {
    return { status: 'error', message: 'Please enter a valid phone number.' };
  }

  const h = await headers();
  const ip =
    h.get('x-forwarded-for')?.split(',')[0].trim() ||
    h.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return { status: 'error', message: 'Too many tries. Please try again later.' };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('[open-channel] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured');
    return { status: 'error', message: 'Server not configured. Please try again shortly.' };
  }

  const text = [
    '<b>📡 Open Channel Lead</b>',
    '',
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Phone:</b> ${escapeHtml(phone)}`,
    '',
    `<i>Source: open-channel popup</i>`,
  ].join('\n');

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('[open-channel] Telegram API error:', res.status, body);
      return { status: 'error', message: 'Could not send right now. Please try again.' };
    }
    return { status: 'success' };
  } catch (err) {
    console.error('[open-channel] Telegram fetch failed:', err);
    return { status: 'error', message: 'Network error. Please try again.' };
  }
}
