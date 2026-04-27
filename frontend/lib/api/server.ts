import 'server-only';

import {
  LOCAL_API_BASE_URL,
  isLocalApiBaseUrl,
  normalizeApiBaseUrl,
} from '@/lib/api/url';

export function getServerApiBaseUrl() {
  const configuredBaseUrl =
    normalizeApiBaseUrl(process.env.API_BASE_URL) ??
    normalizeApiBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);
  const isProduction = process.env.NODE_ENV === 'production';

  if (configuredBaseUrl && (!isProduction || !isLocalApiBaseUrl(configuredBaseUrl))) {
    return configuredBaseUrl;
  }

  if (isProduction) {
    return null;
  }

  return configuredBaseUrl ?? LOCAL_API_BASE_URL;
}

export function getMissingApiBaseUrlMessage() {
  return 'Backend API URL is not configured. Set API_BASE_URL in your deployment environment to the deployed backend URL, for example https://your-backend.example.com/api.';
}

