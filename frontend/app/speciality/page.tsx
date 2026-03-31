import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { specialityPrograms } from '@/lib/speciality-data';

const PHONE = 'tel:+919560505355';
const PHONE_DISPLAY = '+91 95605 05355';
const WHATSAPP_HOME_CARE =
  'https://wa.me/919560505355?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20home%20care%20plan.%20Please%20assist.';

const HERO_SERVICES = [
  'Elderly Care (GDA)',
  'ICU Trained Nurse at Home',
  'Japa Care (Mother & Baby)',
  'Home Nursing Services',
  'Post Surgery Care',
];

const TRUST_ITEMS = [
  {
    icon: BadgeCheck,
    title: '35,000+ Care Plans Delivered',
    desc: 'Structured support trusted by families across India.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified & Trained Nurses',
    desc: 'Every care plan is assigned with skill-matched professionals.',
  },
  {
    icon: HeartPulse,
    title: 'Condition-Based Care Paths',
    desc: 'Support is designed around the patient, not a generic package.',
  },
  {
    icon: Clock3,
    title: '24 x 7 Support Available',
    desc: 'Fast response when families need urgent guidance.',
  },
];

const PLANNING_POINTS = [
  'Different conditions need different care, and choosing the wrong service creates avoidable risk.',
  'Families often need clarity between daily assistance, nursing procedures, post-surgery recovery, and critical care.',
  'Structured home care plans help patients receive the right level of support without repeated hospital visits.',
];

const CARE_DURATION = [
  {
    title: '12 Hour Care',
    desc: 'Planned day or night support for patients who need active help in a defined care slot.',
  },
  {
    title: '24 Hour Care',
    desc: 'Full-time assistance for patients who need continuous observation, comfort, and bedside support.',
  },
];

const CARE_AUDIENCE = [
  'Elderly patients who need daily assistance',
  'Critical care patients who require closer monitoring',
  'Post-surgery recovery cases after hospital discharge',
  'New mothers and newborns needing structured support',
  'Patients with long-term illness or mobility limitations',
];

type CardTone = {
  border: string;
  glow: string;
  iconShell: string;
  badge: string;
  action: string;
};

type CarePlanCardData = {
  title: string;
  badge: string;
  description: string;
  benefits: string[];
  detailHref?: string;
  detailLabel?: string;
  actionHref: string;
  actionLabel: string;
  priority?: string;
  icon: LucideIcon;
  tone: CardTone;
};

const CARD_TONES: Record<string, CardTone> = {
  emerald: {
    border: 'border-emerald-100',
    glow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    iconShell: 'bg-emerald-100 text-emerald-700',
    badge: 'bg-emerald-600 text-white',
    action: 'bg-emerald-700 text-white hover:bg-emerald-800',
  },
  rose: {
    border: 'border-rose-100',
    glow: 'from-rose-500/20 via-rose-500/5 to-transparent',
    iconShell: 'bg-rose-100 text-rose-700',
    badge: 'bg-rose-600 text-white',
    action: 'bg-rose-700 text-white hover:bg-rose-800',
  },
  amber: {
    border: 'border-amber-100',
    glow: 'from-amber-400/20 via-amber-400/5 to-transparent',
    iconShell: 'bg-amber-100 text-amber-700',
    badge: 'bg-amber-500 text-slate-900',
    action: 'bg-amber-500 text-slate-900 hover:bg-amber-400',
  },
  cyan: {
    border: 'border-cyan-100',
    glow: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    iconShell: 'bg-cyan-100 text-cyan-700',
    badge: 'bg-cyan-600 text-white',
    action: 'bg-cyan-700 text-white hover:bg-cyan-800',
  },
  violet: {
    border: 'border-violet-100',
    glow: 'from-violet-500/20 via-violet-500/5 to-transparent',
    iconShell: 'bg-violet-100 text-violet-700',
    badge: 'bg-violet-600 text-white',
    action: 'bg-violet-700 text-white hover:bg-violet-800',
  },
  slate: {
    border: 'border-slate-200',
    glow: 'from-slate-500/15 via-slate-500/5 to-transparent',
    iconShell: 'bg-slate-100 text-slate-700',
    badge: 'bg-slate-800 text-white',
    action: 'bg-slate-900 text-white hover:bg-slate-800',
  },
};

const HOME_CARE_CARDS: CarePlanCardData[] = [
  {
    title: 'Elderly Care (GDA)',
    badge: 'DAILY SUPPORT',
    description: 'Daily support for senior citizens at home with routine help, comfort, and dignity.',
    benefits: ['Bathing & hygiene', 'Feeding & mobility', 'Companionship'],
    detailHref: '/speciality/elderly-care-gda',
    detailLabel: 'View Details',
    actionHref:
      'https://wa.me/919560505355?text=Hi%2C%20I%20need%20elderly%20care%20at%20home.%20Please%20assist.',
    actionLabel: 'Book Now',
    icon: Users,
    tone: CARD_TONES.emerald,
  },
  {
    title: 'ICU Trained Nurse at Home',
    badge: 'CRITICAL CARE',
    description: 'Advanced medical care for serious patients who need ICU-level attention at home.',
    benefits: ['Vitals monitoring', 'Tracheostomy care', 'Advanced nursing support'],
    detailHref: '/speciality/icu-trained-nurse-at-home',
    detailLabel: 'View Details',
    actionHref: PHONE,
    actionLabel: 'Talk to Expert',
    priority: 'High Priority Care',
    icon: HeartPulse,
    tone: CARD_TONES.rose,
  },
  {
    title: 'Japa Care (Mother & Baby)',
    badge: 'MOTHER & BABY',
    description: 'Complete care for mother and newborn after delivery with experienced support at home.',
    benefits: ['Baby care', 'Mother recovery support', 'Feeding assistance'],
    detailHref: '/speciality/japa-care-mother-baby',
    detailLabel: 'View Details',
    actionHref:
      'https://wa.me/919560505355?text=Hi%2C%20I%20need%20Japa%20care%20for%20mother%20and%20baby.%20Please%20assist.',
    actionLabel: 'Book Now',
    icon: UserRound,
    tone: CARD_TONES.amber,
  },
  {
    title: 'Home Nursing Services',
    badge: 'MEDICAL PROCEDURES',
    description: 'Medical procedures at home by trained nurses for planned clinical support.',
    benefits: ['Injection & IV', 'Wound dressing', 'Catheter & tube care'],
    detailHref: '/speciality/home-nursing-services',
    detailLabel: 'View Details',
    actionHref: '/all-services',
    actionLabel: 'Book Now',
    icon: Stethoscope,
    tone: CARD_TONES.cyan,
  },
  {
    title: 'Post Surgery Care',
    badge: 'RECOVERY SUPPORT',
    description: 'Recovery support after hospital discharge with monitoring, comfort, and guided healing.',
    benefits: ['Wound care', 'Mobility support', 'Monitoring'],
    detailHref: '/speciality/post-surgery-care',
    detailLabel: 'View Details',
    actionHref:
      'https://wa.me/919560505355?text=Hi%2C%20I%20need%20post%20surgery%20care%20at%20home.%20Please%20assist.',
    actionLabel: 'Book Now',
    icon: CheckCircle2,
    tone: CARD_TONES.violet,
  },
  {
    title: 'Special Care (Coming Soon)',
    badge: 'UPCOMING',
    description: 'Advanced care solutions for more specific conditions are being added next.',
    benefits: ['Condition-focused care lines', 'Expanded home support', 'Priority launch updates'],
    actionHref:
      'https://wa.me/919560505355?text=Hi%2C%20please%20share%20updates%20about%20upcoming%20special%20care%20services.',
    actionLabel: 'Get Updates',
    icon: Sparkles,
    tone: CARD_TONES.slate,
  },
];

export default function SpecialityPage() {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_38%,#f8fafc_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630d_1px,transparent_1px),linear-gradient(to_bottom,#0b28630d_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="mx-auto mt-18 max-w-7xl px-4 py-10 sm:py-12">
          <section className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_top_left,#2563eb,transparent_34%),linear-gradient(135deg,#0f172a_0%,#1d4ed8_54%,#0f766e_100%)] px-6 py-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:px-8 lg:px-10 lg:py-10">
            <div className="absolute -right-16 top-6 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-200/15 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/90 uppercase">
                  Home Care Plans
                </span>

                <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Specialized Home Care Services by Nursing Sarathi
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg">
                  Get expert medical and daily care at home with trained professionals.
                  Every plan is designed around real patient needs, from elder care to
                  ICU-level support.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {HERO_SERVICES.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/90 backdrop-blur"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <HeroPoint text="Available in 12 Hour & 24 Hour Care Plans" />
                  <HeroPoint text="Verified, trained, and skill-assigned professionals" />
                  <HeroPoint text="Daily, recovery, and critical care options" />
                  <HeroPoint text="Fast coordination with expert care guidance" />
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <SmartLink
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Book Care Now
                    <ArrowRight className="h-4 w-4" />
                  </SmartLink>

                  <SmartLink
                    href={PHONE}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    <Phone className="h-4 w-4" />
                    Talk to Expert
                  </SmartLink>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[30px] border border-white/15 bg-white/10 p-4 shadow-inner backdrop-blur-sm">
                  <div className="rounded-[24px] bg-white p-6 text-slate-900 shadow-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      Structured support
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-900">
                      Choose the right home care plan before the condition becomes harder to manage.
                    </h2>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {CARE_DURATION.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <MiniStat value={String(specialityPrograms.length)} label="Live speciality plans" />
                      <MiniStat value="35,000+" label="Care plans delivered" />
                      <MiniStat value="24 x 7" label="Support availability" />
                      <MiniStat value="India" label="Trusted by families" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-3 rounded-[28px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Why this page exists
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900">
                Finding the right care for your loved one is not easy.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Different conditions need different care, and choosing the wrong
                service can create risk. Nursing Sarathi uses structured home care
                plans so families can quickly understand what level of support fits
                the patient best.
              </p>
            </div>

            <div className="rounded-[28px] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff,#ffffff,#ecfeff)] p-6 shadow-[0_20px_50px_rgba(14,116,144,0.08)]">
              <h3 className="text-xl font-semibold text-slate-900">
                Structured care gives families clarity
              </h3>
              <div className="mt-5 space-y-4">
                {PLANNING_POINTS.map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-sm leading-6 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Home Care Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Choose the care service your family needs
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Each card gives a clear care type, 2 to 3 core benefits, and a fast
                way to view details or connect with the Nursing Sarathi team.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {HOME_CARE_CARDS.map((card) => (
                <CarePlanCard key={card.title} card={card} />
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <InfoPanel
              eyebrow="Care Duration"
              title="Choose your care duration"
              description="Flexible plans are available with Nursing Sarathi so families can match support hours to the patient's routine, recovery stage, and medical complexity."
              items={CARE_DURATION.map((item) => ({
                title: item.title,
                desc: item.desc,
              }))}
            />

            <InfoPanel
              eyebrow="Who Should Take This"
              title="Best for families planning structured home support"
              description="These care plans are designed for families that need clarity before booking. They work especially well when the patient needs routine, recovery, or continuous assistance at home."
              items={CARE_AUDIENCE.map((item) => ({
                title: item,
                desc: 'A care advisor can help match the right plan before service starts.',
              }))}
            />
          </section>

          <section className="mt-16 rounded-[32px] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff,#ffffff,#f0fdf4)] p-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Need Help Choosing?
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Not sure which care is right?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Talk to a Nursing Sarathi expert now and get help selecting the
              safest and most suitable care plan for your loved one.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <SmartLink
                href={PHONE}
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <Phone className="h-4 w-4" />
                Call Now {PHONE_DISPLAY}
              </SmartLink>

              <SmartLink
                href={WHATSAPP_HOME_CARE}
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </SmartLink>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
              <span>Trusted by families across India</span>
              <span>Verified & trained nurses</span>
              <span>Fast response & support</span>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function HeroPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
      <p className="text-sm leading-6 text-white/90">{text}</p>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
    </div>
  );
}

function CarePlanCard({ card }: { card: CarePlanCardData }) {
  const Icon = card.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border ${card.tone.border} bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]`}
    >
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${card.tone.glow}`} />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.tone.iconShell}`}>
            <Icon className="h-6 w-6" />
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${card.tone.badge}`}>
              {card.badge}
            </span>
            {card.priority ? (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-800">
                {card.priority}
              </span>
            ) : null}
          </div>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>

        <div className="mt-5 space-y-3">
          {card.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {card.detailHref && card.detailLabel ? (
            <SmartLink
              href={card.detailHref}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {card.detailLabel}
              <ArrowRight className="h-4 w-4" />
            </SmartLink>
          ) : null}

          <SmartLink
            href={card.actionHref}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${card.tone.action}`}
          >
            {card.actionLabel}
          </SmartLink>
        </div>
      </div>
    </div>
  );
}

function InfoPanel({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const isWebUrl = href.startsWith('http');

  return (
    <a
      href={href}
      className={className}
      target={isWebUrl ? '_blank' : undefined}
      rel={isWebUrl ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
