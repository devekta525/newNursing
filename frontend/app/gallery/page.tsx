"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

const images = [
  {
    src: "/images/blogs/g1.png",
    height: "md:row-span-2",
    title: "Compassionate bedside support",
  },
  {
    src: "/images/blogs/g2.jpeg",
    height: "md:row-span-1",
    title: "Trusted nursing moments",
  },
  {
    src: "/images/blogs/g3.jpeg",
    height: "md:row-span-2",
    title: "Recovery with attention",
  },
  {
    src: "/images/blogs/g4.jpeg",
    height: "md:row-span-1",
    title: "Professional home care",
  },
  {
    src: "/images/blogs/g5.jpeg",
    height: "md:row-span-2",
    title: "Everyday healing support",
  },
  {
    src: "/images/blogs/g6.jpeg",
    height: "md:row-span-1",
    title: "Warm and careful service",
  },
  {
    src: "/images/blogs/g7.jpeg",
    height: "md:row-span-1",
    title: "Care that feels personal",
  },
  {
    src: "/images/blogs/g9.jpeg",
    height: "md:row-span-1",
    title: "Safe, calm environments",
  },
  {
    src: "/images/blogs/g10.jpeg",
    height: "md:row-span-2",
    title: "Support through recovery",
  },
];

export default function GalleryPage() {
  const revealRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10", "scale-[0.96]");
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
          }
        });
      },
      { threshold: 0.14 }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="relative mt-15 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.24),_transparent_28%),linear-gradient(135deg,#f5fbff_0%,#ffffff_48%,#eef7ff_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,44,106,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,44,106,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="absolute right-[-7rem] top-52 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <section className="mx-auto max-w-7xl px-4 pb-14 pt-20 md:pb-16 md:pt-24">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-800 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Gallery
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Care moments shown with fuller, more immersive visuals.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore real spaces, recovery journeys, and nursing support through
                a more active visual gallery. Each image opens large so the details
                feel clear and complete.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Images
                </p>
                <p className="mt-3 text-3xl font-bold text-slate-950">{images.length}</p>
              </div>
              <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-[#0B2C6A] to-[#123d8b] p-5 text-white shadow-[0_20px_50px_-30px_rgba(11,44,106,0.55)] transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                  View
                </p>
                <p className="mt-3 text-3xl font-bold">Full</p>
              </div>
              <div className="rounded-[28px] border border-sky-100 bg-sky-50/90 p-5 shadow-[0_20px_50px_-30px_rgba(14,165,233,0.35)] transition-transform duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Motion
                </p>
                <p className="mt-3 text-3xl font-bold text-slate-950">Smooth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-28">
          <div className="grid auto-rows-[250px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                ref={(el) => {
                  revealRef.current[i] = el;
                }}
                onClick={() => setSelectedImage(img)}
                className={`group relative overflow-hidden rounded-[30px] border border-white/70 bg-slate-200 text-left opacity-0 translate-y-10 scale-[0.96] shadow-[0_22px_55px_-32px_rgba(15,23,42,0.42)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_70px_-32px_rgba(11,44,106,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/70 ${img.height}`}
                style={{ transitionDelay: `${i * 70}ms` }}
                aria-label={`Open ${img.title}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#041428]/90 via-[#041428]/20 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-5 top-5 flex items-start justify-between">
                  <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    Full View
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="max-w-[16rem] text-xl font-semibold leading-tight">
                    {img.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#07172f] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/70 p-2 text-white transition hover:bg-slate-950"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,520px)_1fr]">
              <div className="relative min-h-[70vh] overflow-hidden bg-slate-900">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Gallery Preview
                  </p>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {selectedImage.title}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col justify-center px-6 py-8 text-white sm:px-8 lg:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                  Full Image Experience
                </p>
                <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  A larger, cleaner image view for your gallery section.
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                  This preview keeps the photo prominent, uses a stronger layout,
                  and gives the page a more active feel with smoother hover and
                  reveal animations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
