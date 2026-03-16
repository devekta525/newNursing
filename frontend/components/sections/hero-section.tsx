'use client';

import { CallbackForm } from '@/components/callback-form';
import { Heart, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedButton } from '@/components/animations/animated-button';

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const featureBadges = [
    '100% Verified Staff',
    'Background Checked',
    'Doctor Prescribed Care',
    'Transparent Pricing',
    '24/7 Availability',
  ];

  return (
    <section className="relative bg-cover bg-center overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? {} : { scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(13, 27, 77, 0.4) 0%, rgba(69, 122, 184, 0.2) 100%), url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <Heart className="w-5 h-5 text-white fill-white" />
              <span className="text-xs font-semibold tracking-widest uppercase letter-spacing">HOME CARE</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5 text-balance"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              Professional Home Nursing & Elder Care Services Across India
            </motion.h1>

            <motion.p
              className="text-white text-sm sm:text-base lg:text-lg mb-6 max-w-2xl leading-relaxed font-light"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             Certified Nurses | Verified Caregivers | 24/7 Support | Multi-State Presence
            </motion.p>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-7 max-w-2xl">
              {featureBadges.map((badge, index) => (
                <div
                  key={badge}
                  className="flex items-center gap-2.5 text-black bg-white/30 backdrop-blur-sm px-3 py-2 rounded-full w-full"
                >
                  {index === 0 ? (
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <Clock className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span className="font-semibold text-xs sm:text-sm">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <AnimatedButton className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                Book Free Consultation
              </AnimatedButton>
              <AnimatedButton className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/20 px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold bg-transparent backdrop-blur-sm transition-colors">
                Talk to Care Advisor
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Callback Form */}
          <div className="hidden lg:block">
            <CallbackForm className="max-w-md p-4 xl:p-5" />
          </div>
        </div>

        {/* Mobile Callback Form */}
        <div className="lg:hidden mt-8 sm:mt-10">
          <CallbackForm className="max-w-md p-4" />
        </div>
      </div>
    </section>
  );
}
