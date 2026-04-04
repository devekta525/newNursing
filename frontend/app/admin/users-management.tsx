'use client';

import { useEffect, useState } from 'react';
import { Download, Eye, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  downloadAdminUsersReport,
  getAdminUsers,
  type AdminListUser,
  type AdminRole,
} from '@/lib/admin/api';

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

function formatDate(value?: string) {
  if (!value) {
    return 'Not available';
  }

  return new Date(value).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function formatText(value?: string | null) {
  return value?.trim() ? value : 'Not provided';
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

export function UsersManagement({ userRole }: { userRole: AdminRole }) {
  const [users, setUsers] = useState<AdminListUser[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(PAGE_SIZE_OPTIONS[0]);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    let isActive = true;

    async function loadUsers() {
      setLoading(true);
      setError('');

      try {
        const data = await getAdminUsers({ page, limit });

        if (!isActive) {
          return;
        }

        setUsers(data.users);
        setTotal(data.pagination.total);
        setPages(Math.max(data.pagination.pages, 1));
        setSelectedUserId((currentSelectedUserId) =>
          data.users.some((user) => user._id === currentSelectedUserId)
            ? currentSelectedUserId
            : ''
        );
      } catch (loadError) {
        if (!isActive) {
          return;
        }

        setError(loadError instanceof Error ? loadError.message : 'Unable to load users.');
        setUsers([]);
        setTotal(0);
        setPages(1);
        setSelectedUserId('');
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    void loadUsers();

    return () => {
      isActive = false;
    };
  }, [limit, page]);

  async function handleDownloadReport() {
    setDownloadingReport(true);
    setError('');

    try {
      const { blob, filename } = await downloadAdminUsersReport();
      const objectUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');

      anchor.href = objectUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(objectUrl);
    } catch (downloadError) {
      setError(
        downloadError instanceof Error
          ? downloadError.message
          : 'Unable to download users report.'
      );
    } finally {
      setDownloadingReport(false);
    }
  }

  const pageStart = total === 0 ? 0 : (page - 1) * limit + 1;
  const pageEnd = Math.min(page * limit, total);
  const selectedUser = users.find((user) => user._id === selectedUserId) ?? null;

  return (
    <div className="grid min-w-0 gap-6">
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle>User Filters</CardTitle>
          <CardDescription>
            Review backend users, adjust pagination, and export the complete users report.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid min-w-0 gap-4 md:grid-cols-[minmax(0,1fr)_220px_auto]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <p>
              Showing {pageStart}-{pageEnd} of {total} users. Page {page} of {pages}.
            </p>
            <p className="mt-1">
              CSV export includes all available user data, not only the current page.
            </p>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Page Size
            <select
              value={limit}
              onChange={(event) => {
                setPage(1);
                setLimit(Number(event.target.value));
              }}
              className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700"
            >
              {PAGE_SIZE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option} users
                </option>
              ))}
            </select>
          </label>

          <Button
            type="button"
            variant="outline"
            onClick={handleDownloadReport}
            disabled={downloadingReport}
            className="w-full md:w-auto md:self-end"
          >
            <Download className="mr-2 h-4 w-4" />
            {downloadingReport ? 'Preparing...' : 'Download CSV'}
          </Button>
        </CardContent>
      </Card>

      <Card className="min-w-0 overflow-hidden">
        <CardHeader>
          <CardTitle>User Listings</CardTitle>
          <CardDescription>
            {userRole === 'ADMIN'
              ? 'Admin can review all user details and export the full users report.'
              : 'Sub-admin can review available users and export the full users report.'}
          </CardDescription>
        </CardHeader>

        <CardContent className="min-w-0 space-y-4">
          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {loading && <p className="text-sm text-slate-600">Loading users...</p>}

          {!loading && users.length === 0 && (
            <p className="text-sm text-slate-600">No users found for the current page.</p>
          )}

          {!loading && users.length > 0 && (
            <>
              <p className="text-xs text-slate-500 sm:hidden">
                Scroll horizontally to view all columns.
              </p>

              <div className="min-w-0 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[1520px] w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Qualification
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Work Experience
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Currently Working
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Current Company
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Current Role
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Role
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Created Date
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Status
                      </th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-700">
                        Details
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {users.map((user) => (
                      <tr
                        key={user._id}
                        onClick={() => setSelectedUserId(user._id)}
                        className={`cursor-pointer transition hover:bg-slate-50 ${
                          selectedUserId === user._id ? 'bg-sky-50/70' : ''
                        }`}
                      >
                        <td className="px-4 py-4 align-top">
                          <div className="min-w-[180px] max-w-[180px]">
                            <p className="break-words font-medium text-slate-900">{user.name}</p>
                            <p className="mt-1 whitespace-nowrap text-xs text-slate-500">
                              {user.phone || 'Phone not added'}
                            </p>
                          </div>
                        </td>

                        <td className="px-4 py-4 align-top text-slate-600">
                          <div className="min-w-[220px] max-w-[220px]">
                            <p className="break-all">{user.email}</p>
                            <p className="mt-1 whitespace-nowrap text-xs text-slate-500">
                              Last login: {formatDate(user.lastLogin)}
                            </p>
                          </div>
                        </td>

                        <td className="px-4 py-4 align-top text-slate-600">
                          <div className="min-w-[180px] max-w-[180px] break-words">
                            {formatText(user.qualification)}
                          </div>
                        </td>

                        <td className="px-4 py-4 align-top text-slate-600">
                          <div className="min-w-[240px] max-w-[240px] whitespace-normal break-words">
                            {formatText(user.workExperience)}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 align-top text-slate-600">
                          {user.currentlyWorking ? 'Yes' : 'No'}
                        </td>

                        <td className="px-4 py-4 align-top text-slate-600">
                          <div className="min-w-[180px] max-w-[180px] break-words">
                            {formatText(user.currentCompany)}
                          </div>
                        </td>

                        <td className="px-4 py-4 align-top text-slate-600">
                          <div className="min-w-[180px] max-w-[180px] break-words">
                            {formatText(user.currentRole)}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 align-top">
                          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
                            {user.role}
                          </span>
                        </td>

                        <td className="px-4 py-4 align-top text-slate-600">
                          <div className="min-w-[120px]">
                            <p className="whitespace-nowrap">{formatDate(user.createdAt)}</p>
                            <p className="mt-1 whitespace-nowrap text-xs text-slate-500">
                              Updated: {formatDate(user.updatedAt)}
                            </p>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 align-top">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                              user.isActive
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {user.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 align-top">
                          <Button
                            type="button"
                            variant={selectedUserId === user._id ? 'default' : 'outline'}
                            size="sm"
                            onClick={(event) => {
                              event.stopPropagation();
                              setSelectedUserId(user._id);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                            {selectedUserId === user._id ? 'Viewing' : 'View'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {pages > 1 && (
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="text-sm text-slate-600">
                    Showing page {page} of {pages} with {total} total users.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      disabled={page <= 1}
                      onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      disabled={page >= pages}
                      onClick={() => setPage((currentPage) => Math.min(pages, currentPage + 1))}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4"
          onClick={() => setSelectedUserId('')}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white px-6 py-5">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.28em] text-sky-700">User Details</p>
                <h3 className="mt-2 break-words text-2xl font-semibold text-slate-900">
                  {selectedUser.name}
                </h3>
                <p className="mt-1 break-all text-sm text-slate-500">{selectedUser.email}</p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setSelectedUserId('')}
                aria-label="Close user details"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
                  {selectedUser.role}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    selectedUser.isActive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {selectedUser.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <DetailItem label="Phone" value={formatText(selectedUser.phone)} />
                <DetailItem label="Created" value={formatDate(selectedUser.createdAt)} />
                <DetailItem label="Last Login" value={formatDate(selectedUser.lastLogin)} />
                <DetailItem label="Qualification" value={formatText(selectedUser.qualification)} />
                <DetailItem
                  label="Currently Working"
                  value={selectedUser.currentlyWorking ? 'Yes' : 'No'}
                />
                <DetailItem
                  label="Current Company"
                  value={
                    selectedUser.currentlyWorking
                      ? formatText(selectedUser.currentCompany)
                      : 'Not currently working'
                  }
                />
                <DetailItem
                  label="Current Role"
                  value={
                    selectedUser.currentlyWorking
                      ? formatText(selectedUser.currentRole)
                      : 'Not currently working'
                  }
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Work Experience
                </p>
                <p className="mt-3 whitespace-pre-line break-words text-sm font-medium text-slate-900">
                  {formatText(selectedUser.workExperience)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
