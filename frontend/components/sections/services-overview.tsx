'use client';

import { useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Stethoscope,
  Activity,
  Hospital,
  X,
  Phone,
} from 'lucide-react';
import { AnimatedCard } from '@/components/animations/animated-card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { AnimatedSection } from '@/components/animations/animated-section';
import { useEmblaAutoplay } from '@/components/carousel/use-embla-autoplay';
import { CallbackForm } from '@/components/callback-form';

const services = [
  {
    title: 'Home Nursing Services',
    icon: Building2,
    image: '/images/services/new_expert-clinical-procedure.jpeg',
    description:
      'Professional nurses for injections, wound care, medication management, and patient monitoring at home.',
  },
  {
    title: 'Patient Attendant Services',
    icon: Activity,
    image: '/images/services/new_patient-attendant-service.jpeg',
    description:
      'Trained caregivers assisting patients with daily activities such as bathing, mobility, feeding, and recovery support.',
  },
  {
    title: 'ICU Setup at Home',
    icon: Hospital,
    image: '/images/services/new_icu-at-home.jpeg',
    description:
      'Advanced medical equipment and trained nurses providing critical care monitoring in the comfort of home.',
  },
  {
    title: 'Physiotherapy at Home',
    icon: Activity,
    image: '/images/services/new_physiotherapy-rehabilitation.jpeg',
    description:
      'Personalized physiotherapy sessions designed to improve mobility, reduce pain, and support recovery.',
  },
  {
    title: 'Doctor-Guided Home Care',
    icon: Stethoscope,
    image: '/images/services/doctor-at-home.jpg',
    description:
      'A trained nurse visits the patient\'s home, checks vital signs, and connects with a doctor through video consultation for medical advice and treatment guidance.',
  },
];

export function ServicesOverview() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  });

  useEmblaAutoplay(emblaApi, 3800);

  return (
    <AnimatedSection className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
            Homecare Services
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl md:text-4xl">
            Home Healthcare Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Professional nursing and patient care services delivered at home by trained healthcare professionals.
          </p>
        </ScrollReveal>

        <div className="relative">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous services"
            className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#0F0961]/95 text-white shadow-[0_14px_35px_rgba(15,9,97,0.28)] transition-transform hover:scale-105 active:scale-95 md:left-2 md:h-11 md:w-11"
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden px-8 md:px-12" ref={emblaRef}>
            <div className="-ml-4 flex touch-pan-y">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="min-w-0 pl-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] 2xl:flex-[0_0_25%]"
                  >
                    <AnimatedCard className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                        <Image
                          src={service.image}
                          alt={`${service.title} home healthcare service`}
                          fill
                          className="object-contain object-center p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
                        />

                        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white text-[#0B2C6A] shadow-lg">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="rounded-full border border-sky-200 bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 shadow-sm">
                            Home Visit
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold leading-tight text-slate-950 sm:text-2xl">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => setIsFormOpen(true)}
                            className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                          >
                            Know More
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2C6A] text-white transition-transform group-hover:translate-x-0.5">
                              <ArrowRight size={16} />
                            </span>
                          </button>

                          <a
                            href="tel:+919560505355"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-[#0B2C6A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#081f4b]"
                          >
                            <Phone className="h-4 w-4" />
                            Call Now
                          </a>
                        </div>
                      </div>
                    </AnimatedCard>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next services"
            className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#0F0961]/95 text-white shadow-[0_14px_35px_rgba(15,9,97,0.28)] transition-transform hover:scale-105 active:scale-95 md:right-2 md:h-11 md:w-11"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 px-4 py-8">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto">
            <button
              type="button"
              aria-label="Close callback form"
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-md"
            >
              <X className="h-5 w-5" />
            </button>
            <CallbackForm />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}
