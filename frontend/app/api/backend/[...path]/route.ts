import { NextRequest, NextResponse } from 'next/server';

import { getMissingApiBaseUrlMessage, getServerApiBaseUrl } from '@/lib/api/server';

type RouteContext = {
  params: Promise<{
    path?: string[];
  }>;
};

const BODYLESS_METHODS = new Set(['GET', 'HEAD']);

function buildUpstreamUrl(baseUrl: string, path: string[], request: NextRequest) {
  const encodedPath = path.map((segment) => encodeURIComponent(segment)).join('/');
  const upstreamUrl = new URL(`${baseUrl}/${encodedPath}`);

  request.nextUrl.searchParams.forEach((value, key) => {
    upstreamUrl.searchParams.append(key, value);
  });

  return upstreamUrl;
}

function buildForwardHeaders(request: NextRequest) {
  const headers = new Headers(request.headers);

  headers.delete('host');
  headers.delete('connection');
  headers.delete('content-length');
  headers.delete('accept-encoding');

  return headers;
}

async function proxyRequest(request: NextRequest, context: RouteContext) {
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

  const { path = [] } = await context.params;
  const upstreamUrl = buildUpstreamUrl(apiBaseUrl, path, request);

  try {
    const response = await fetch(upstreamUrl, {
      method: request.method,
      headers: buildForwardHeaders(request),
      body: BODYLESS_METHODS.has(request.method) ? undefined : await request.arrayBuffer(),
      cache: 'no-store',
    });

    const responseHeaders = new Headers(response.headers);
    responseHeaders.delete('content-encoding');
    responseHeaders.delete('content-length');
    responseHeaders.delete('transfer-encoding');

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to connect to the backend API.',
      },
      { status: 502 }
    );
  }
}

export async function GET(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context);
}

export async function POST(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  return proxyRequest(request, context);
}

