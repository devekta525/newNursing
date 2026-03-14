'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/app/blog/_components/blog-card';
import { BlogModal } from '@/app/blog/_components/blog-modal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { getPublishedBlogs, type PublicBlog } from '@/lib/blogs/api';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<PublicBlog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<PublicBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      setLoading(true);
      setError('');

      try {
        const data = await getPublishedBlogs();
        if (active) {
          setBlogs(data);
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Unable to load blog posts right now.'
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadBlogs();

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden pt-16 sm:pt-20 lg:pt-18  bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.22),_transparent_24%),linear-gradient(180deg,#f5fbff_0%,#ffffff_42%,#eff7ff_100%)] ">
      <Header />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#07152b_0%,#0b2c6a_48%,#38bdf8_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="absolute left-[-6rem] top-12 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
                Nursing Sarathi Blog
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Health insights with fuller visuals and a more immersive reading experience.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/88 sm:text-lg">
                Explore practical healthcare guidance, nursing stories, and recovery-focused
                articles in a cleaner visual layout built around portrait images and smooth motion.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/80">
                  Articles
                </p>
                <p className="mt-3 text-3xl font-bold text-white">
                  {loading ? '...' : blogs.length}
                </p>
              </div>
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/80">
                  Layout
                </p>
                <p className="mt-3 text-3xl font-bold text-white">Portrait</p>
              </div>
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/80">
                  Motion
                </p>
                <p className="mt-3 text-3xl font-bold text-white">Smooth</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8">
            <div className="flex flex-col gap-4 rounded-[30px] border border-sky-100/80 bg-white/90 p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.24)] backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                  Latest Articles
                </p>
                
              </div>
              <div className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-slate-600">
                {loading ? 'Loading posts...' : `${blogs.length} posts available`}
              </div>
            </div>
          </ScrollReveal>

          {loading && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="p-3">
                    <div className="aspect-[4/5] animate-pulse rounded-[24px] bg-slate-200" />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                    <div className="h-7 w-4/5 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                    <div className="h-10 w-full animate-pulse rounded-full bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-[28px] border border-red-200 bg-red-50 p-8 text-center">
              <h3 className="text-xl font-semibold text-red-900">Unable to load blog posts</h3>
              <p className="mt-3 text-sm leading-7 text-red-700">{error}</p>
            </div>
          )}

          {!loading && !error && blogs.length === 0 && (
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">No published blogs yet</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Please check back later for new healthcare articles and updates.
              </p>
            </div>
          )}

          {!loading && !error && blogs.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <ScrollReveal key={blog._id} y={28}>
                  <BlogCard blog={blog} onReadMore={setSelectedBlog} />
                </ScrollReveal>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="mt-6 flex justify-center">
              <Button type="button" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          )}
        </div>
      </section>

      {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}

      <Footer />
    </main>
  );
}
