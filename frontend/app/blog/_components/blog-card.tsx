'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PublicBlog } from '@/lib/blogs/api';

const BLOG_FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23dbeafe'/%3E%3Ccircle cx='220' cy='160' r='120' fill='%2393c5fd' fill-opacity='0.35'/%3E%3Ccircle cx='1020' cy='680' r='180' fill='%230ea5e9' fill-opacity='0.2'/%3E%3Ctext x='72' y='420' fill='%230f172a' font-size='72' font-family='Arial, sans-serif' font-weight='700'%3ENursing Sarathi Blog%3C/text%3E%3C/svg%3E";

function stripHtml(content: string) {
  return content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getExcerpt(blog: PublicBlog) {
  const baseText = (blog.metaDescription || stripHtml(blog.content)).trim();
  if (baseText.length <= 160) {
    return baseText;
  }

  return `${baseText.slice(0, 157).trimEnd()}...`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return 'Date unavailable';
  }

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function BlogCard({
  blog,
  onReadMore,
}: {
  blog: PublicBlog;
  onReadMore: (blog: PublicBlog) => void;
}) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-[30px] border-slate-200/80 bg-white py-0 shadow-[0_20px_60px_-32px_rgba(15,23,42,0.24)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_-32px_rgba(11,44,106,0.35)]">
      <button
        type="button"
        onClick={() => onReadMore(blog)}
        className="block w-full text-left"
        aria-label={`Open ${blog.title}`}
      >
        <div className="relative p-3">
          <div className="absolute inset-x-7 top-3 h-24 rounded-full bg-[#7CC6FF]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-slate-100">
            <Image
              src={blog.featuredImage || BLOG_FALLBACK_IMAGE}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071833]/92 via-[#071833]/22 to-white/0 opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent opacity-70" />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-10 text-white">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
                  Featured Post
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-white/75">
                  {formatDate(blog.createdAt)}
                </span>
              </div>
              <h2 className="mt-4 line-clamp-3 text-2xl font-semibold leading-tight text-white">
                {blog.title}
              </h2>
            </div>
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">
            Healthcare Blog
          </span>
          <span>{formatDate(blog.createdAt)}</span>
        </div>

        <h2 className="text-xl font-semibold leading-snug text-slate-900 transition group-hover:text-sky-700">
          {blog.title}
        </h2>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{getExcerpt(blog)}</p>

        <Button
          type="button"
          variant="outline"
          className="mt-6 w-full justify-between rounded-full border-slate-200 transition-transform duration-300 group-hover:translate-y-0.5"
          onClick={() => onReadMore(blog)}
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
