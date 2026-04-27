import { readAuthSession } from '@/lib/userAuth/storage';
import type { ApiResponse, AuthUser } from '@/lib/userAuth/types';
import { getClientApiBaseUrl } from '@/lib/api/client';

function buildUrl(path: string) {
  return `${getClientApiBaseUrl()}${path}`;
}

function normalizeErrorMessage(message: string, errors?: ApiResponse<unknown>['errors']) {
  if (errors && errors.length > 0) {
    const detail = errors[0];
    return detail.msg || detail.message || message;
  }

  return message;
}

async function authenticatedRequest<T>(path: string, init: RequestInit): Promise<ApiResponse<T>> {
  const session = readAuthSession();

  if (!session?.accessToken) {
    throw new Error('You must be logged in to continue.');
  }

  const response = await fetch(buildUrl(path), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.accessToken}`,
      ...(init.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    const message = normalizeErrorMessage(
      payload?.message ?? 'Request failed.',
      payload?.errors
    );
    throw new Error(message);
  }

  return payload;
}

type ProfileResponseData = {
  user: AuthUser;
};

export type UpdateProfilePayload = {
  name?: string;
  phone?: string | null;
  qualification?: string | null;
  workExperience?: string | null;
  currentlyWorking?: boolean;
  currentCompany?: string | null;
  currentRole?: string | null;
};

export async function getMyProfile() {
  return authenticatedRequest<ProfileResponseData>('/userprofile/', {
    method: 'GET',
  });
}

export async function updateMyProfile(payload: UpdateProfilePayload) {
  return authenticatedRequest<ProfileResponseData>('/userprofile/update', {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}
