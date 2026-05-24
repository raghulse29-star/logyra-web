const PRODUCTION_URL = 'https://logyra.in';

function normalizeUrl(url: string) {
  return url.replace(/\/+$/, '');
}

export const SITE_URL = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL,
);

export const IS_PRODUCTION_HOST = SITE_URL === PRODUCTION_URL;
