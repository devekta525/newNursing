import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
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

const PHONE = 'tel:+919560505355';
const PHONE_DISPLAY = '+91 95605 05355';
const EXPERT_WHATSAPP = buildWhatsAppUrl(
  'Hi, I need help choosing the right home care plan. Please assist.',
);
const BOOK_CARE_WHATSAPP = buildWhatsAppUrl(
  'Hi, I want to book a home care plan with Nursing Sarathi. Please assist.',
);

type PrimaryCard = {
  title: string;
  description: string;
  points: string[];
  note: string;
  href: string;
  actionHref: string;
  actionLabel: string;
  icon: LucideIcon;
  tone: {
    shell: string;
    button: string;
    badge: string;
  };
};

type MiniCard = {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: LucideIcon;
  tone: string;
  soft: string;
};

const HERO_POINTS = [
  'Available in 12 Hour & 24 Hour Care Plans',
  'Verified, trained, and skill-assigned professionals',
  'Daily, recovery, and critical care options',
  'Fast coordination with expert care guidance',
];

const HERO_TAGS = [
  'Elderly Care (GDA)',
  'ICU Trained Nurse at Home',
  'Japa Care (Mother & Baby)',
  'Home Nursing Services',
  'Post Surgery Care',
];

const SUPPORT_OPTIONS = [
  {
    title: '12 Hour Care',
    description:
      'Planned day or night support for patients who need active help in a defined care slot.',
  },
  {
    title: '24 Hour Care',
    description:
      'Full-time assistance for patients who need continuous observation, comfort, and bedside support.',
  },
];

const SUPPORT_STATS = [
  { value: '5', label: 'Live speciality plans' },
  { value: '35,000+', label: 'Care plans delivered' },
  { value: '24 x 7', label: 'Support availability' },
  { value: 'India', label: 'Trusted by families' },
];

const PRIMARY_CARDS: PrimaryCard[] = [
  {
    title: 'Elderly Care (GDA)',
    description: 'Daily support for elderly patients at home with comfort and dignity.',
    points: ['Bathing support', 'Mobility & companionship'],
    note: '12 / 24 hour care plans',
    href: '/speciality/elderly-care-gda',
    actionHref: buildWhatsAppUrl('Hi, I need elderly care at home. Please assist.'),
    actionLabel: 'Book Now',
    icon: Users,
    tone: {
      shell: 'bg-emerald-100 text-emerald-700',
      button: 'bg-emerald-700 text-white hover:bg-emerald-800',
      badge: 'bg-emerald-50 text-emerald-700',
    },
  },
  {
    title: 'ICU Trained Nurse',
    description: 'ICU-level care at home for serious recovery and high-dependency cases.',
    points: ['Ventilator & tracheostomy support', 'Critical vitals monitoring'],
    note: '12 / 24 hour critical care',
    href: '/speciality/icu-trained-nurse-at-home',
    actionHref: PHONE,
    actionLabel: 'Talk to Expert',
    icon: HeartPulse,
    tone: {
      shell: 'bg-rose-100 text-rose-700',
      button: 'bg-rose-700 text-white hover:bg-rose-800',
      badge: 'bg-rose-50 text-rose-700',
    },
  },
  {
    title: 'Japa Newborn Care',
    description: 'Experienced care for mother and baby after delivery at home.',
    points: ['Baby care & bathing', 'Postnatal recovery support'],
    note: '12 / 24 hour mother-baby care',
    href: '/speciality/japa-care-mother-baby',
    actionHref: buildWhatsAppUrl(
      'Hi, I need Japa care for mother and baby at home. Please assist.',
    ),
    actionLabel: 'Book Now',
    icon: UserRound,
    tone: {
      shell: 'bg-amber-100 text-amber-700',
      button: 'bg-amber-500 text-slate-900 hover:bg-amber-400',
      badge: 'bg-amber-50 text-amber-700',
    },
  },
];

const INCLUDED_SERVICES = [
  'Injection administration',
  'IV drip support',
  'Wound dressing',
  'Catheter care',
  'Feeding tube support',
];

const CARE_AUDIENCE = [
  'Elderly patients',
  'Post-surgery recovery',
  'Long-term illness care',
  'Bedridden patients',
  'New mothers & newborns',
];

const MINI_CARDS: MiniCard[] = [
  {
    title: 'Home Nursing Services',
    description: 'Injection, IV, wound dressing, catheter, and feeding tube support at home.',
    href: '/speciality/home-nursing-services',
    actionLabel: 'View Services',
    icon: Stethoscope,
    tone: 'text-cyan-700',
    soft: 'bg-cyan-50',
  },
  {
    title: 'Post Surgery Care',
    description: 'Recovery care after discharge with wound support and monitoring.',
    href: '/speciality/post-surgery-care',
    actionLabel: 'View Plan',
    icon: Activity,
    tone: 'text-violet-700',
    soft: 'bg-violet-50',
  },
  {
    title: 'Special Care',
    description: 'Advanced care lines are coming soon for more condition-specific support.',
    href: buildWhatsAppUrl('Hi, please share updates about upcoming special care services.'),
    actionLabel: 'Stay Updated',
    icon: Sparkles,
    tone: 'text-slate-700',
    soft: 'bg-slate-100',
  },
];

export default function AllSpecialitiesPage() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#f8fafc_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.08),transparent_28%),linear-gradient(to_right,#0b286308_1px,transparent_1px),linear-gradient(to_bottom,#0b286308_1px,transparent_1px)] bg-[size:auto,26px_26px,26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <main className="mx-auto mt-18 max-w-6xl px-4 py-8 sm:px-5 sm:py-10 lg:px-6">
          <section className="relative overflow-hidden rounded-[32px] border border-blue-300/20 bg-[linear-gradient(135deg,#1e3a8a_0%,#1d4ed8_58%,#0f766e_100%)] shadow-[0_32px_80px_rgba(15,23,42,0.22)]">
            <Image
              src="/feeding.png"
              alt="Nursing Sarathi home care support"
              fill
              priority
              className="object-cover object-[84%_center] opacity-40 lg:opacity-60"
            />
            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(15,23,42,0.96)_0%,rgba(29,78,216,0.90)_42%,rgba(37,99,235,0.68)_70%,rgba(15,23,42,0.12)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px]" />

            <div className="relative grid gap-8 p-5 sm:p-8 lg:min-h-[540px] lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:p-10">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/95">
                  Home Care Plans
                </span>

                <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-[3.7rem]">
                  Specialized Home Care Services by Nursing Sarathi
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50/92 sm:text-lg">
                  Get expert medical and daily care at home with trained professionals.
                  Every plan is designed around real patient needs, from elder care to
                  ICU-level support.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {HERO_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-medium text-white/92 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {HERO_POINTS.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/10 px-4 py-3.5 text-white/92 backdrop-blur-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                      <span className="text-sm font-medium leading-7 sm:text-base">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <SmartLink
                    href={BOOK_CARE_WHATSAPP}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Book Care Now
                    <ArrowRight className="h-4 w-4" />
                  </SmartLink>

                  <SmartLink
                    href={EXPERT_WHATSAPP}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    <Phone className="h-4 w-4" />
                    Talk to Expert
                  </SmartLink>
                </div>
              </div>

              <div className="relative lg:justify-self-end">
                <div className="rounded-[30px] border border-white/15 bg-white/10 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-sm sm:p-4">
                  <div className="rounded-[26px] bg-white p-5 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                      Structured Support
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:text-[2rem]">
                      Choose the right home care plan before the condition becomes harder to manage.
                    </h2>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {SUPPORT_OPTIONS.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm"
                        >
                          <p className="text-base font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {SUPPORT_STATS.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-sm"
                        >
                          <p className="text-[2rem] font-semibold leading-none text-slate-900">
                            {stat.value}
                          </p>
                          <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 text-center">
            <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Choose Your Care Service
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Specialized care for 12-hour and 24-hour support plans with responsive
              home service coordination.
            </p>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {PRIMARY_CARDS.map((card) => (
              <PrimaryCareCard key={card.title} card={card} />
            ))}
          </section>

          <section className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_1.1fr_0.92fr]">
            <InfoCard
              title="Services included in care plans:"
              items={INCLUDED_SERVICES}
              accent="text-emerald-600"
            />

            <InfoCard
              title="Who should take care plans:"
              items={CARE_AUDIENCE}
              accent="text-blue-600"
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {MINI_CARDS.map((card) => (
                <MiniServiceCard key={card.title} card={card} />
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-[28px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff,#ffffff,#f0fdf4)] px-5 py-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Not sure which care service is right?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Talk to our care expert now and we&apos;ll help you match the right home
              care plan for your family.
            </p>

            <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
              <SmartLink
                href={PHONE}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <Phone className="h-4 w-4" />
                Call Now {PHONE_DISPLAY}
              </SmartLink>

              <SmartLink
                href={EXPERT_WHATSAPP}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </SmartLink>
            </div>
          </section>

          <section className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Trusted by families across India
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Verified & trained nurses
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Fast response & support
              </span>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function PrimaryCareCard({ card }: { card: PrimaryCard }) {
  const Icon = card.icon;

  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${card.tone.badge}`}>
            Care Plan
          </span>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-slate-900">
            {card.title}
          </h3>
        </div>

        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.tone.shell}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>

      <div className="mt-4 space-y-2.5">
        {card.points.map((point) => (
          <div key={point} className="flex gap-2.5 text-sm text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-slate-50 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
        {card.note}
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <SmartLink
          href={card.actionHref}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${card.tone.button}`}
        >
          {card.actionLabel}
        </SmartLink>

        <SmartLink
          href={card.href}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </SmartLink>
      </div>
    </article>
  );
}

function InfoCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-2.5 text-sm text-slate-600">
            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function MiniServiceCard({ card }: { card: MiniCard }) {
  const Icon = card.icon;

  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
      <div className="flex items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${card.soft} ${card.tone}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{card.description}</p>
        </div>
      </div>

      <div className="mt-4">
        <SmartLink
          href={card.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
        >
          {card.actionLabel}
          <ArrowRight className="h-4 w-4" />
        </SmartLink>
      </div>
    </article>
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

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/919560505355?text=${encodeURIComponent(message)}`;
}
