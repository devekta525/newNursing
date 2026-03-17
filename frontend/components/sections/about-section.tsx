'use client';

import Link from 'next/link';
import { ArrowRight, Clock3, MapPin, Phone, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export function AboutSection() {
  const highlights = [
    'Home Nursing',
    'Patient Attendant Care',
    'ICU Setup at Home',
    'Physiotherapy',
    'Post-Hospital Recovery Care',
    'Elderly Care Support',
  ];

  const stats = [
    { value: '10,000+', label: 'Patients Served', icon: Users },
    { value: '500+', label: 'Verified Caregivers', icon: Users },
    { value: '15+', label: 'Cities Covered', icon: MapPin },
    { value: '24/7', label: 'Care Support', icon: Clock3 },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-4">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              About Nursing Sarathi
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Nursing Sarathi provides professional home healthcare services for patients who need medical care, recovery support, or daily assistance at home.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Our trained nurses, caregivers, and physiotherapists deliver hospital-quality care in the comfort of the patient&apos;s home. From elderly care and post-surgery recovery to ICU-level support, our team ensures safe, reliable, and compassionate care for every patient.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Our services include {highlights.join(', ')}.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 sm:mb-10">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-primary/10 bg-primary/5 px-4 py-4"
                >
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Icon className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                      Nursing Sarathi
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-white font-semibold transition-all hover:bg-primary/90 group"
            >
              <Phone className="w-5 h-5" />
              Talk to Care Advisor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal delay={0.08} className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 p-5 sm:p-12 border border-primary/10 min-h-[300px] sm:h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block mb-6">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-5xl">🏥</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Professional Home Healthcare
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Medical, recovery, and daily care support delivered safely at home by trained professionals
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
