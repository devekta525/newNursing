import { readAuthSession } from '@/lib/userAuth/storage';
import type { AuthUser } from '@/lib/userAuth/types';
import { getClientApiBaseUrl } from '@/lib/api/client';

export type AdminRole = 'ADMIN' | 'SUB_ADMIN';

type ApiErrorDetail = {
  msg?: string;
  message?: string;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: ApiErrorDetail[];
};

export type AdminJob = {
  _id: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: string;
  status: 'OPEN' | 'CLOSED';
  createdAt: string;
};

export type AdminListUser = AuthUser;

export type JobApplication = {
  _id: string;
  status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Hired';
  experience?: string;
  coverLetter?: string;
  createdAt: string;
  applicant: {
    _id: string;
    name: string;
    email: string;
    phone?: string;
  };
};

export type SubAdminUser = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'SUB_ADMIN';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdminBlog = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  featuredImage?: string;
  schemaToggle: boolean;
  status: 'DRAFT' | 'PUBLISHED';
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    _id: string;
    name: string;
    email: string;
  };
};

export type EnquiryStatus = 'PENDING' | 'CONTACTED' | 'RESOLVED';

export type AdminEnquiry = {
  _id: string;
  name: string;
  phone: string;
  state: string;
  city: string;
  serviceRequired: string;
  whenRequired: string;
  patientCondition?: string;
  status: EnquiryStatus;
  remarks?: string;
  createdAt: string;
  updatedAt: string;
};

type JobsResponseData = {
  jobs: AdminJob[];
};

type JobApplicationsResponseData = {
  job: string;
  applications: JobApplication[];
};

type SubAdminsResponseData = {
  subAdmins: SubAdminUser[];
};

type UsersResponseData = {
  users: AdminListUser[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
};

type BlogsResponseData = {
  blogs: AdminBlog[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
};

type EnquiriesResponseData = {
  enquiries: AdminEnquiry[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

function getAdminSession() {
  const session = readAuthSession();

  if (!session?.accessToken || !session.user) {
    throw new Error('Please login to continue.');
  }

  if (session.user.role !== 'ADMIN' && session.user.role !== 'SUB_ADMIN') {
    throw new Error('Admin access is restricted to Admin and Sub-Admin accounts.');
  }

  return session;
}

function normalizeErrorMessage(message: string, errors?: ApiErrorDetail[]) {
  if (!errors || errors.length === 0) {
    return message;
  }

  return errors[0].msg || errors[0].message || message;
}

function extractFilenameFromDisposition(contentDisposition: string | null) {
  if (!contentDisposition) {
    return null;
  }

  const utf8Match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8Match?.[1]) {
    return decodeURIComponent(utf8Match[1]);
  }

  const fallbackMatch = contentDisposition.match(/filename="?([^"]+)"?/i);
  return fallbackMatch?.[1] ?? null;
}

async function request<T>(path: string, init: RequestInit = {}) {
  const session = getAdminSession();

  const response = await fetch(`${getClientApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.accessToken}`,
      ...(init.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new Error(
      normalizeErrorMessage(payload?.message ?? 'Request failed.', payload?.errors)
    );
  }

  return payload;
}

export function isAdminUser(user: AuthUser | null | undefined): user is AuthUser & { role: AdminRole } {
  return Boolean(user && (user.role === 'ADMIN' || user.role === 'SUB_ADMIN'));
}

export async function getAdminJobs() {
  const response = await request<JobsResponseData>('/jobs/admin/all');
  return response.data?.jobs ?? [];
}

export async function createAdminJob(payload: {
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: string;
  status?: 'OPEN' | 'CLOSED';
}) {
  return request('/jobs', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateAdminJob(
  id: string,
  payload: {
    title?: string;
    description?: string;
    requirements?: string;
    location?: string;
    salary?: string;
    status?: 'OPEN' | 'CLOSED';
  }
) {
  return request(`/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export async function deleteAdminJob(id: string) {
  return request(`/jobs/${id}`, {
    method: 'DELETE',
  });
}

export async function getApplicationsForJob(jobId: string) {
  const response = await request<JobApplicationsResponseData>(`/applications/job/${jobId}`);
  return response.data?.applications ?? [];
}

export async function updateJobApplicationStatus(
  id: string,
  status: JobApplication['status']
) {
  return request(`/applications/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  });
}

export async function getSubAdmins() {
  const response = await request<SubAdminsResponseData>('/admin/subadmins');
  return response.data?.subAdmins ?? [];
}

export async function getAdminUsers(params?: {
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();

  if (params?.page) {
    query.set('page', String(params.page));
  }

  if (params?.limit) {
    query.set('limit', String(params.limit));
  }

  const suffix = query.toString() ? `?${query.toString()}` : '';
  const response = await request<UsersResponseData>(`/admin/users${suffix}`);

  return {
    users: response.data?.users ?? [],
    pagination: response.data?.pagination ?? {
      total: 0,
      page: params?.page ?? 1,
      limit: params?.limit ?? 10,
      pages: 1,
    },
  };
}

export async function downloadAdminUsersReport() {
  const session = getAdminSession();

  const response = await fetch(`${getClientApiBaseUrl()}/admin/users/report`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      Accept: 'text/csv',
    },
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as ApiResponse<never> | null;

    throw new Error(
      normalizeErrorMessage(
        payload?.message ?? 'Unable to download users report.',
        payload?.errors
      )
    );
  }

  return {
    blob: await response.blob(),
    filename:
      extractFilenameFromDisposition(response.headers.get('content-disposition')) ??
      'users-report.csv',
  };
}

export async function getAdminBlogs(params?: {
  page?: number;
  limit?: number;
  status?: AdminBlog['status'];
}) {
  const query = new URLSearchParams();

  if (params?.page) {
    query.set('page', String(params.page));
  }

  if (params?.limit) {
    query.set('limit', String(params.limit));
  }

  if (params?.status) {
    query.set('status', params.status);
  }

  const suffix = query.toString() ? `?${query.toString()}` : '';
  const response = await request<BlogsResponseData>(`/blogs${suffix}`);

  return {
    blogs: response.data?.blogs ?? [],
    pagination: response.data?.pagination ?? {
      total: 0,
      page: params?.page ?? 1,
      limit: params?.limit ?? 10,
      pages: 1,
    },
  };
}

export async function createAdminBlog(payload: {
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  featuredImage?: string;
  schemaToggle?: boolean;
  status?: 'DRAFT' | 'PUBLISHED';
}) {
  return request('/blogs', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateAdminBlog(
  id: string,
  payload: {
    title?: string;
    slug?: string;
    content?: string;
    metaTitle?: string;
    metaDescription?: string;
    featuredImage?: string;
    schemaToggle?: boolean;
    status?: 'DRAFT' | 'PUBLISHED';
  }
) {
  return request(`/blogs/id/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export async function deleteAdminBlog(id: string) {
  return request(`/blogs/id/${id}`, {
    method: 'DELETE',
  });
}

export async function createSubAdmin(payload: {
  name: string;
  email: string;
  phone?: string;
  password: string;
}) {
  return request('/admin/create-subadmin', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateSubAdminStatus(id: string, isActive: boolean) {
  return request(`/admin/subadmin/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ isActive }),
  });
}

export async function deleteSubAdmin(id: string) {
  return request(`/admin/subadmin/${id}`, {
    method: 'DELETE',
  });
}

export async function getAdminEnquiries(params?: {
  page?: number;
  limit?: number;
  status?: EnquiryStatus;
  search?: string;
}) {
  const query = new URLSearchParams();

  if (params?.page) {
    query.set('page', String(params.page));
  }

  if (params?.limit) {
    query.set('limit', String(params.limit));
  }

  if (params?.status) {
    query.set('status', params.status);
  }

  if (params?.search?.trim()) {
    query.set('search', params.search.trim());
  }

  const suffix = query.toString() ? `?${query.toString()}` : '';
  const response = await request<EnquiriesResponseData>(`/enquiries${suffix}`);

  return {
    enquiries: response.data?.enquiries ?? [],
    pagination: response.data?.pagination ?? {
      total: 0,
      page: params?.page ?? 1,
      pages: 1,
    },
  };
}

export async function updateAdminEnquiryStatus(
  id: string,
  payload: {
    status: EnquiryStatus;
    remarks?: string;
  }
) {
  return request<AdminEnquiry>(`/enquiries/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function deleteAdminEnquiry(id: string) {
  return request(`/enquiries/${id}`, {
    method: 'DELETE',
  });
}
