import { NextRequest, NextResponse } from 'next/server';

import { getMissingApiBaseUrlMessage, getServerApiBaseUrl } from '@/lib/api/server';

export async function GET(request: NextRequest) {
  const apiBaseUrl = getServerApiBaseUrl();

  if (!apiBaseUrl) {
    return NextResponse.json(
      {
        success: false,
        message: getMissingApiBaseUrlMessage(),
      },
      { status: 500 }
    );
  }

  const upstreamUrl = new URL(`${apiBaseUrl}/blogs`);
  const incomingParams = request.nextUrl.searchParams;

  incomingParams.forEach((value, key) => {
    upstreamUrl.searchParams.set(key, value);
  });

  try {
    const response = await fetch(upstreamUrl.toString(), {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    const payload = await response.json().catch(() => null);

    return NextResponse.json(payload, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to connect to the blog service.',
      },
      { status: 502 }
    );
  }
}
