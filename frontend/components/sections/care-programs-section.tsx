'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

const programs = [
  {
    image: '/images/services/Stroke_Rehabilitation.jpeg',
    title: 'Stroke Rehabilitation at Home',
    description:
      'Stroke recovery requires structured rehabilitation and continuous monitoring. Our stroke rehabilitation program provides physiotherapy, nursing care, and caregiver assistance to help patients regain mobility, balance, and independence.',
    details:
      'Our trained professionals support patients with daily therapy sessions, medication management, mobility exercises, and recovery monitoring.',
    benefits: [
      'Physiotherapy for mobility recovery',
      'Assistance with daily activities',
      'Medication and health monitoring',
      'Emotional and family support',
    ],
    tag: 'REHABILITATION',
    accent: 'from-[#123D7A] via-[#2055A2] to-[#4F85D9]',
    stats: 'Physio-led recovery plans',
    cta: 'Book Stroke Recovery Consultation',
  },
  {
    image: '/images/services/Elder_Care.jpeg',
    title: 'Comprehensive Elder Care at Home',
    description:
      'Our elder care program provides compassionate daily support for senior citizens who need medical care, mobility assistance, or companionship.',
    details:
      'Trained caregivers and nurses assist elderly patients with medication management, hygiene care, mobility support, and health monitoring to ensure safety and comfort at home.',
    benefits: [
      'Personal caregiver assistance',
      'Medication reminders',
      'Mobility and hygiene support',
      'Regular health monitoring',
    ],
    tag: 'ELDER CARE',
    accent: 'from-[#0B6B61] via-[#0D8B7A] to-[#53B6A8]',
    stats: 'Daily living and medical support',
    cta: 'Book Elder Care Consultation',
  },
  {
    image: '/images/services/new_expert-clinical-procedure.jpeg',
    title: 'Post-Surgery Recovery Care at Home',
    description:
      'Recover comfortably at home after surgery with professional nursing and physiotherapy support.',
    details:
      'Our team assists with wound care, medication management, physiotherapy exercises, and monitoring to ensure a safe and faster recovery process.',
    benefits: [
      'Wound dressing and monitoring',
      'Physiotherapy rehabilitation',
      'Medication supervision',
      'Mobility assistance',
    ],
    tag: 'RECOVERY',
    accent: 'from-[#7A3412] via-[#A25520] to-[#D98E4F]',
    stats: 'Post-hospital recovery care',
    cta: 'Book Post-Surgery Care',
  },
];

export function CareProgramsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5f1_48%,#fdf8f2_100%)] py-14 sm:py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(82,146,255,0.18),transparent_62%)]" />
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="mb-12 text-center sm:mb-16 md:mb-20">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
            Programs
          </span>
          <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl md:text-5xl">
            Specialized Home Care Programs
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} delay={index * 0.08} className="h-full">
              <motion.div
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
              >
                <Card className="group relative flex h-full overflow-hidden rounded-[30px] border border-white/60 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${program.accent}`} />
                  <div className="flex h-full min-h-full w-full flex-col">
                    <div className="relative overflow-hidden bg-slate-100">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.03)_0%,rgba(2,6,23,0.12)_38%,rgba(2,6,23,0.34)_100%)]" />

                        <motion.div
                          className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md"
                          animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          {program.tag}
                        </motion.div>

                        <motion.div
                          className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/20 bg-white/12 p-4 text-white shadow-lg backdrop-blur-md"
                          animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
                        >
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                            <Sparkles className="h-4 w-4" />
                            Active Home Support
                          </div>
                          <p className="mt-2 text-sm font-medium leading-6 text-slate-100">
                            {program.stats}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-8">
                      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-100/60 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-70" />

                      <div className="relative flex-1">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                          Care Pathway
                        </div>

                        <h3 className="max-w-sm text-2xl font-bold leading-tight text-slate-950 sm:text-[2rem]">
                          {program.title}
                        </h3>

                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                          {program.description}
                        </p>

                        {program.details ? (
                          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                            {program.details}
                          </p>
                        ) : null}

                        {program.benefits.length ? (
                          <div className="mt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                              Key Benefits
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                              {program.benefits.map((benefit) => (
                                <li key={benefit} className="flex gap-2">
                                  <span className="text-emerald-600">✔</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>

                      <div className="relative mt-8 flex flex-col items-start gap-4 rounded-[24px] bg-slate-50 px-4 py-4 sm:px-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Designed for home recovery
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            Safer routines, better continuity, calmer caregiving.
                          </p>
                        </div>

                        <motion.div
                          className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br px-4 py-3 text-sm font-semibold text-white shadow-lg ${program.accent}`}
                          whileHover={reduceMotion ? {} : { scale: 1.04 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={`/contact?service=${encodeURIComponent(program.title)}`}
                            className="inline-flex items-center gap-2"
                          >
                            {program.cta}
                            <ArrowUpRight className="h-5 w-5" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
