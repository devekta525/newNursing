'use client';

import { CallbackForm } from '@/components/callback-form';
import { Heart, MapPin, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedButton } from '@/components/animations/animated-button';

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const emergencyPhone = '+919560505355';
  const whatsappMessage = encodeURIComponent(
    'Hello Nursing Sarathi, I would like to know more about your home care services.'
  );

  const featureBadges = [
    '100% Background Verified Staff',
    'Hospital-Trained Nurses',
    'Transparent Pricing',
    'Same-Day Service',
  ];

  const patientStats = [
    { icon: Heart, value: '10,000+', label: 'Patients Supported' },
    { icon: Users, value: '500+', label: 'Verified Caregivers' },
    { icon: MapPin, value: '15+', label: 'Cities Covered' },
  ];

  return (
    <section className="relative overflow-hidden bg-cover bg-center sm:-mt-2 lg:mt-0">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? {} : { scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(13, 27, 77, 0.55) 0%, rgba(69, 122, 184, 0.25) 100%), url(/hero_img.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      <div className="relative z-10 mx-auto min-h-[85vh] max-w-7xl px-4 py-6 sm:min-h-[90vh] sm:px-6 sm:py-8 md:min-h-[calc(100vh-72px)] md:py-12 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-4">
        <div className="grid w-full grid-cols-1 items-start gap-8 sm:gap-9 md:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-6 xl:gap-10 2xl:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            className="text-white lg:max-w-[720px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* Badge */}
            <motion.div
              className="mb-3 flex items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            >
              <Heart className="w-5 h-5 text-white fill-white" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
                HOME CARE
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="mb-3 max-w-3xl text-[2rem] font-bold leading-[1.03] sm:text-4xl md:text-[2.2rem] lg:text-[2.05rem] xl:text-[2.55rem] 2xl:text-[2.9rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            >
              Professional Nurses & Patient Care Services at Home
              <br className="hidden sm:block" />
              <span className="mt-1.5 block md:mt-1">
                Hospital-Standard Care Without Leaving Your Home
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mb-5 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base md:text-[0.98rem] lg:text-[0.95rem] xl:text-base"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            >
              Certified Nurses • Verified Caregivers • ICU Setup • Physiotherapy • 24/7 Support
            </motion.p>

            {/* Features */}
            <div className="mb-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {featureBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/30 px-3 py-2 text-black backdrop-blur-sm sm:rounded-full"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-xs sm:text-sm">{badge}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mb-5 grid grid-cols-1 gap-3 min-[560px]:grid-cols-3">
              {patientStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/25 bg-white/15 px-3.5 py-3 backdrop-blur-md"
                >
                  <div className="mb-2 flex items-center gap-2 text-white/90">
                    <Icon className="h-4 w-4" />
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                      Patients Served
                    </span>
                  </div>
                  <p className="text-lg font-bold sm:text-xl lg:text-[1.3rem]">{value}</p>
                  <p className="text-xs sm:text-sm text-white/85 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            >
              <AnimatedButton
                onClick={() => {
                  window.location.href = `tel:${emergencyPhone}`;
                }}
                className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg sm:w-auto sm:px-6 sm:py-3"
              >
                📞 Call Now
              </AnimatedButton>

              <AnimatedButton
                onClick={() => {
                  window.open(`https://wa.me/${emergencyPhone.replace('+', '')}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
                }}
                className="w-full rounded-full border-2 border-white px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm sm:w-auto sm:px-6 sm:py-3"
              >
                💬 WhatsApp Care Advisor
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <div className="hidden lg:flex justify-end">
            <CallbackForm className="w-full max-w-[320px] xl:max-w-[340px]" />
          </div>
        </div>

        {/* MOBILE FORM */}
        <div className="mt-8 w-full lg:hidden sm:mt-10">
          <div className="mx-auto max-w-md rounded-[30px] border border-white/15 bg-white/10 p-2 backdrop-blur-sm sm:max-w-lg">
            <CallbackForm className="mx-auto w-full max-w-md md:max-w-[520px] sm:max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
