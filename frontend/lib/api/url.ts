export const LOCAL_API_BASE_URL = 'http://localhost:5000/api';
export const API_PROXY_BASE_PATH = '/api/backend';

export function normalizeApiBaseUrl(value: string | undefined | null) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return null;
  }

  return trimmed.replace(/\/+$/, '');
}

export function isLocalApiBaseUrl(value: string) {
  try {
    const url = new URL(value);
    return url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

