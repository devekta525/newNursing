'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

const testimonials = [
  {
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop',
    name: 'Priya Sharma',
    role: 'Daughter of patient',
    text:
      'Nursing Sarathi has been a blessing for our family. Their nurse Sister Meera provided exceptional care for my elderly mother during her recovery. The professionalism and compassion went beyond our expectations.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?w=800&h=600&fit=crop',
    name: 'Rajesh Kumar',
    role: 'Son of patient',
    text:
      'The 24/7 support and quick response team made all the difference. We felt reassured knowing our father was in capable hands.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=500&fit=crop',
    name: 'Anita Verma',
    role: 'Daughter of patient',
    text:
      'From doctor visits to daily nursing care, everything was handled with precision and empathy. Truly stress-free healthcare.',
  },
];

export function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-14 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl md:text-4xl">
            What Families Say About Our Care
          </h2>
        </ScrollReveal>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <ScrollReveal className="relative mx-auto h-[340px] w-full max-w-[320px] sm:h-[380px] md:mx-0">
            {testimonials.map((t, i) => {
              const offset = (i - index + testimonials.length) % testimonials.length;

              if (offset > 2) return null;

              return (
                <img
                  key={i}
                  src={t.image}
                  alt={t.name}
                  className="absolute h-full w-full rounded-2xl object-cover shadow-xl transition-all duration-500"
                  style={{
                    transform: `translate(${offset * 20}px, ${-offset * 20}px)`,
                    zIndex: 10 - offset,
                    opacity: offset === 0 ? 1 : 0.6,
                  }}
                />
              );
            })}
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="text-center md:text-left">
            <h3 className="mb-1 text-xl font-bold sm:text-2xl">
              {testimonials[index].name}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {testimonials[index].role}
            </p>

            <p className="mb-8 text-base leading-relaxed sm:mb-10 sm:text-lg">
              {testimonials[index].text}
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105 active:scale-95"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105 active:scale-95"
              >
                <ChevronRight />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
