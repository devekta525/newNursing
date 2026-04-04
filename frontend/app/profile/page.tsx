'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileText,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from 'lucide-react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/components/auth/auth-provider';
import { getMyApplications, type UserApplication } from '@/lib/careers/api';
import { getMyProfile, updateMyProfile } from '@/lib/userAuth/profile';

const statusStyles: Record<UserApplication['status'], string> = {
  Applied: 'bg-blue-100 text-blue-700',
  Shortlisted: 'bg-amber-100 text-amber-700',
  Rejected: 'bg-red-100 text-red-700',
  Hired: 'bg-emerald-100 text-emerald-700',
};

function OverviewCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof User;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full border-slate-200 bg-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="p-5">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
            <Icon className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 break-words text-lg font-semibold text-slate-900">{value}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isReady, updateUser } = useAuth();
  const [applications, setApplications] = useState<UserApplication[]>([]);
  const [loadingApplications, setLoadingApplications] = useState(true);
  const [applicationsError, setApplicationsError] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [currentCompany, setCurrentCompany] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState('');
  const [profileSuccess, setProfileSuccess] = useState('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isReady, router]);

  useEffect(() => {
    if (user) {
      setName(user.name ?? '');
      setPhone(user.phone ?? '');
      setQualification(user.qualification ?? '');
      setWorkExperience(user.workExperience ?? '');
      setCurrentlyWorking(Boolean(user.currentlyWorking));
      setCurrentCompany(user.currentCompany ?? '');
      setCurrentRole(user.currentRole ?? '');
    }
  }, [user]);

  useEffect(() => {
    if (!isReady || !isAuthenticated) {
      return;
    }

    let active = true;

    async function loadProfile() {
      try {
        const response = await getMyProfile();
        if (!active || !response.data?.user) {
          return;
        }

        updateUser(response.data.user);
        setName(response.data.user.name ?? '');
        setPhone(response.data.user.phone ?? '');
        setQualification(response.data.user.qualification ?? '');
        setWorkExperience(response.data.user.workExperience ?? '');
        setCurrentlyWorking(Boolean(response.data.user.currentlyWorking));
        setCurrentCompany(response.data.user.currentCompany ?? '');
        setCurrentRole(response.data.user.currentRole ?? '');
        setProfileError('');
      } catch (error) {
        if (active) {
          setProfileError(
            error instanceof Error ? error.message : 'Unable to load your profile.'
          );
        }
      } finally {
        if (active) {
          setProfileLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, [isAuthenticated, isReady, updateUser]);

  useEffect(() => {
    if (!isReady || !isAuthenticated) {
      return;
    }

    let active = true;

    async function loadApplications() {
      try {
        const data = await getMyApplications();
        if (active) {
          setApplications(data);
          setApplicationsError('');
        }
      } catch (error) {
        if (active) {
          setApplicationsError(
            error instanceof Error ? error.message : 'Unable to load your application statuses.'
          );
        }
      } finally {
        if (active) {
          setLoadingApplications(false);
        }
      }
    }

    void loadApplications();

    return () => {
      active = false;
    };
  }, [isAuthenticated, isReady]);

  if (!isReady || !isAuthenticated || !user) {
    return (
      <main className="min-h-screen bg-slate-50 pt-16 sm:pt-20 lg:pt-18 ">
        <Header />
        <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center ">
          <p className="text-sm text-slate-600">Loading profile...</p>
        </div>
        <Footer />
      </main>
    );
  }

  const latestApplications = applications.slice(0, 3);
  const normalizedName = name.trim();
  const normalizedPhone = phone.trim();
  const normalizedQualification = qualification.trim();
  const normalizedWorkExperience = workExperience.trim();
  const normalizedCurrentCompany = currentCompany.trim();
  const normalizedCurrentRole = currentRole.trim();

  async function handleProfileUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProfileError('');
    setProfileSuccess('');

    if (normalizedName.length < 2) {
      setProfileError('Name must be at least 2 characters.');
      return;
    }

    if (normalizedPhone && !/^\d{10}$/.test(normalizedPhone)) {
      setProfileError('Phone number must be exactly 10 digits.');
      return;
    }

    if (normalizedQualification.length > 200) {
      setProfileError('Qualification cannot exceed 200 characters.');
      return;
    }

    if (normalizedWorkExperience.length > 1000) {
      setProfileError('Work experience cannot exceed 1000 characters.');
      return;
    }

    if (currentlyWorking && !normalizedCurrentCompany) {
      setProfileError('Current company name is required when you are currently working.');
      return;
    }

    if (currentlyWorking && !normalizedCurrentRole) {
      setProfileError('Current role is required when you are currently working.');
      return;
    }

    if (normalizedCurrentCompany.length > 200) {
      setProfileError('Current company cannot exceed 200 characters.');
      return;
    }

    if (normalizedCurrentRole.length > 200) {
      setProfileError('Current role cannot exceed 200 characters.');
      return;
    }

    setIsSavingProfile(true);

    try {
      const response = await updateMyProfile({
        name: normalizedName,
        phone: normalizedPhone || null,
        qualification: normalizedQualification || null,
        workExperience: normalizedWorkExperience || null,
        currentlyWorking,
        currentCompany: currentlyWorking ? normalizedCurrentCompany || null : null,
        currentRole: currentlyWorking ? normalizedCurrentRole || null : null,
      });

      if (!response.data?.user) {
        throw new Error('Profile update failed.');
      }

      updateUser(response.data.user);
      setName(response.data.user.name ?? '');
      setPhone(response.data.user.phone ?? '');
      setQualification(response.data.user.qualification ?? '');
      setWorkExperience(response.data.user.workExperience ?? '');
      setCurrentlyWorking(Boolean(response.data.user.currentlyWorking));
      setCurrentCompany(response.data.user.currentCompany ?? '');
      setCurrentRole(response.data.user.currentRole ?? '');
      setProfileSuccess(response.message || 'Profile updated successfully.');
    } catch (error) {
      setProfileError(
        error instanceof Error ? error.message : 'Unable to update your profile.'
      );
    } finally {
      setIsSavingProfile(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fbff] pt-16 sm:pt-20 lg:pt-18">
      <Header />
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-5xl rounded-full bg-sky-200/30 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        >
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
            <div className="overflow-hidden rounded-[36px] border border-white/60 bg-white/80 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="grid gap-0 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden bg-[linear-gradient(135deg,#102c57_0%,#1d4ed8_52%,#38bdf8_100%)] px-8 py-12 text-white sm:px-10 sm:py-14">
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
                      <User className="h-3.5 w-3.5" />
                      My Profile
                    </div>
                    <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                      Personal details for your Nursing Sarathi account
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
                      Review your account information, professional background, and application activity in one clean workspace.
                    </p>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-blue-100">Member Name</p>
                        <p className="mt-3 text-xl font-semibold">{user.name}</p>
                      </div>
                      <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-blue-100">Access Role</p>
                        <p className="mt-3 text-xl font-semibold">{user.role}</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link href="/my-applications">
                        <Button className="rounded-full bg-white text-sky-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50">
                          My Applications
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 px-8 py-10 sm:px-10">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Account Overview
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
                      Secure user information
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Your email stays read-only, while the rest of your profile remains editable and synced with the backend.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <OverviewCard icon={Mail} label="Email Address" value={user.email} tone="bg-blue-100 text-blue-700" />
                    <OverviewCard
                      icon={CalendarDays}
                      label="Joined On"
                      value={new Date(user.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                      tone="bg-amber-100 text-amber-700"
                    />
                    <OverviewCard
                      icon={GraduationCap}
                      label="Qualification"
                      value={user.qualification || 'Not added'}
                      tone="bg-sky-100 text-sky-700"
                    />
                    <OverviewCard
                      icon={BriefcaseBusiness}
                      label="Employment Status"
                      value={user.currentlyWorking ? 'Currently working' : 'Not currently working'}
                      tone="bg-violet-100 text-violet-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.3, delay: 0.08 }}
            >
              <Card className="border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Edit Profile</CardTitle>
                  <CardDescription>
                    Update your personal and professional details with the same existing backend integration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">Personal Info</h3>
                          <p className="mt-1 text-sm text-slate-600">Basic identity and contact details.</p>
                        </div>
                      </div>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <label className="grid gap-2">
                          <span className="text-sm font-medium text-slate-700">Full Name</span>
                          <Input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Enter your full name"
                            disabled={profileLoading || isSavingProfile}
                            className="h-12 rounded-2xl border-slate-200 bg-white transition-all duration-300 focus-visible:border-sky-400 focus-visible:ring-sky-100"
                          />
                        </label>
                        <label className="grid gap-2">
                          <span className="text-sm font-medium text-slate-700">Phone Number</span>
                          <Input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={phone}
                            onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="10 digit phone number"
                            disabled={profileLoading || isSavingProfile}
                            className="h-12 rounded-2xl border-slate-200 bg-white transition-all duration-300 focus-visible:border-sky-400 focus-visible:ring-sky-100"
                          />
                        </label>
                      </div>
                      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-sm font-medium text-slate-500">Email Address</p>
                        <p className="mt-2 break-all text-base font-semibold text-slate-900">{user.email}</p>
                        <p className="mt-1 text-xs text-slate-500">Email is read-only in this form.</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">Qualification</h3>
                          <p className="mt-1 text-sm text-slate-600">Academic background, degrees, and certifications.</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <label className="grid gap-2">
                          <span className="text-sm font-medium text-slate-700">Qualification</span>
                          <Input
                            type="text"
                            value={qualification}
                            onChange={(event) => setQualification(event.target.value.slice(0, 200))}
                            placeholder="Degree, diploma, or certification"
                            disabled={profileLoading || isSavingProfile}
                            className="h-12 rounded-2xl border-slate-200 bg-white transition-all duration-300 focus-visible:border-sky-400 focus-visible:ring-sky-100"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">Work Experience</h3>
                          <p className="mt-1 text-sm text-slate-600">Your current status and recent work profile.</p>
                        </div>
                      </div>
                      <div className="mt-5 grid gap-4">
                        <label className="grid gap-2">
                          <span className="text-sm font-medium text-slate-700">Work Experience</span>
                          <Textarea
                            value={workExperience}
                            onChange={(event) => setWorkExperience(event.target.value.slice(0, 1000))}
                            className="min-h-[140px] rounded-2xl border-slate-200 bg-white transition-all duration-300 focus-visible:border-sky-400 focus-visible:ring-sky-100"
                            placeholder="Share total years or a short summary of your experience"
                            disabled={profileLoading || isSavingProfile}
                          />
                        </label>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <span className="text-sm font-medium text-slate-700">Currently Working</span>
                          <div className="mt-3 flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={() => setCurrentlyWorking(true)}
                              disabled={profileLoading || isSavingProfile}
                              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                currentlyWorking
                                  ? 'bg-sky-700 text-white shadow-md'
                                  : 'border border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700'
                              }`}
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setCurrentlyWorking(false);
                                setCurrentCompany('');
                                setCurrentRole('');
                              }}
                              disabled={profileLoading || isSavingProfile}
                              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                !currentlyWorking
                                  ? 'bg-slate-900 text-white shadow-md'
                                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              No
                            </button>
                          </div>
                        </div>
                        {currentlyWorking && (
                          <div className="grid gap-4 rounded-2xl border border-sky-100 bg-sky-50/70 p-4 md:grid-cols-2">
                            <label className="grid gap-2">
                              <span className="text-sm font-medium text-slate-700">Current Company Name</span>
                              <Input
                                type="text"
                                value={currentCompany}
                                onChange={(event) => setCurrentCompany(event.target.value.slice(0, 200))}
                                placeholder="Current organization name"
                                disabled={profileLoading || isSavingProfile}
                                className="h-12 rounded-2xl border-slate-200 bg-white transition-all duration-300 focus-visible:border-sky-400 focus-visible:ring-sky-100"
                              />
                            </label>
                            <label className="grid gap-2">
                              <span className="text-sm font-medium text-slate-700">Current Role / Position</span>
                              <Input
                                type="text"
                                value={currentRole}
                                onChange={(event) => setCurrentRole(event.target.value.slice(0, 200))}
                                placeholder="Current job title"
                                disabled={profileLoading || isSavingProfile}
                                className="h-12 rounded-2xl border-slate-200 bg-white transition-all duration-300 focus-visible:border-sky-400 focus-visible:ring-sky-100"
                              />
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        type="submit"
                        className="rounded-full bg-sky-700 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800"
                        disabled={profileLoading || isSavingProfile}
                      >
                        {isSavingProfile ? 'Saving...' : 'Save Profile'}
                      </Button>
                      {profileLoading && <p className="text-sm text-slate-500">Loading latest profile details...</p>}
                      {!profileLoading && profileError && (
                        <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
                          {profileError}
                        </div>
                      )}
                      {!profileLoading && !profileError && profileSuccess && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                          <CheckCircle2 className="h-4 w-4" />
                          {profileSuccess}
                        </div>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">Quick Overview</CardTitle>
                    <CardDescription>A clean summary of your current account and work profile.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <OverviewCard icon={ShieldCheck} label="Account Type" value={user.role} tone="bg-emerald-100 text-emerald-700" />
                    <OverviewCard icon={Phone} label="Phone Number" value={user.phone || 'Not added'} tone="bg-amber-100 text-amber-700" />
                    <OverviewCard icon={GraduationCap} label="Qualification" value={user.qualification || 'Not added'} tone="bg-sky-100 text-sky-700" />
                    <OverviewCard
                      icon={BriefcaseBusiness}
                      label="Current Role"
                      value={
                        user.currentlyWorking
                          ? `${user.currentRole || 'Role not added'} at ${user.currentCompany || 'company not added'}`
                          : 'Not currently working'
                      }
                      tone="bg-violet-100 text-violet-700"
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: 0.14 }}
              >
                <Card className="border-slate-200 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">Career Applications</CardTitle>
                    <CardDescription>Track your latest job applications and current statuses.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {loadingApplications && <p className="text-sm text-slate-500">Loading application statuses...</p>}
                      {!loadingApplications && applicationsError && <p className="text-sm text-red-600">{applicationsError}</p>}
                      {!loadingApplications && !applicationsError && applications.length === 0 && (
                        <p className="text-sm text-slate-500">No job applications found yet.</p>
                      )}
                      {!loadingApplications &&
                        !applicationsError &&
                        latestApplications.map((application) => (
                          <div
                            key={application._id}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50/60"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium text-slate-900">{application.job?.title ?? 'Job'}</p>
                                <p className="mt-1 text-sm text-slate-500">
                                  {application.job?.location ?? 'Location not available'}
                                </p>
                              </div>
                              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[application.status]}`}>
                                {application.status}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                    <Link href="/my-applications" className="mt-5 inline-block">
                      <Button
                        variant="outline"
                        className="rounded-full border-sky-200 text-sky-700 transition-all duration-300 hover:bg-sky-50"
                      >
                        View Applications
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
