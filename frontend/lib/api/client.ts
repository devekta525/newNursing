import {
  API_PROXY_BASE_PATH,
  LOCAL_API_BASE_URL,
  normalizeApiBaseUrl,
} from '@/lib/api/url';

export function getClientApiBaseUrl() {
  const configuredBaseUrl = normalizeApiBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);

  if (process.env.NODE_ENV === 'production') {
    return API_PROXY_BASE_PATH;
  }

  return configuredBaseUrl ?? LOCAL_API_BASE_URL;
}
