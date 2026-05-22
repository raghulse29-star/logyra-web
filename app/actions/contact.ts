'use server';

import { headers } from 'next/headers';

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

// In-memory IP -> timestamps[] map. Resets on server restart — fine for low traffic.
// For multi-instance deployments, swap for Redis/Upstash.
const ipHits = new Map<string, number[]>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_MAX) return false;
  hits.push(now);
  ipHits.set(ip, hits);
  return true;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function validate(p: ContactPayload): string | null {
  if (!p.firstName.trim() || p.firstName.length > 80) return 'Please enter your first name.';
  if (!p.lastName.trim()  || p.lastName.length  > 80) return 'Please enter your last name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))    return 'Please enter a valid email.';
  if (p.phone && !/^[+\d\s\-()]{7,20}$/.test(p.phone)) return 'Please enter a valid phone number.';
  if (!p.subject)                                     return 'Please choose a subject.';
  if (p.message.trim().length < 10)                   return 'Your message is too short (min 10 chars).';
  if (p.message.length > 2000)                        return 'Your message is too long (max 2000 chars).';
  return null;
}

export async function submitContactForm(payload: ContactPayload): Promise<ContactFormState> {
  const validationError = validate(payload);
  if (validationError) return { status: 'error', message: validationError };

  const h = await headers();
  const ip =
    h.get('x-forwarded-for')?.split(',')[0].trim() ||
    h.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return { status: 'error', message: 'Too many submissions. Please try again in an hour.' };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('[contact] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured');
    return { status: 'error', message: 'Server not configured. Please email us instead.' };
  }

  const text = [
    '<b>📬 New contact form submission</b>',
    '',
    `<b>Name:</b> ${escapeHtml(payload.firstName)} ${escapeHtml(payload.lastName)}`,
    `<b>Email:</b> ${escapeHtml(payload.email)}`,
    payload.phone ? `<b>Phone:</b> ${escapeHtml(payload.phone)}` : null,
    `<b>Subject:</b> ${escapeHtml(payload.subject)}`,
    '',
    '<b>Message:</b>',
    escapeHtml(payload.message),
  ]
    .filter(Boolean)
    .join('\n');

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
      console.error('[contact] Telegram API error:', res.status, body);
      return { status: 'error', message: 'Could not send right now. Please try again shortly.' };
    }
    return { status: 'success' };
  } catch (err) {
    console.error('[contact] Telegram fetch failed:', err);
    return { status: 'error', message: 'Network error. Please try again.' };
  }
}
