import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';

const PHONE = 'tel:+919560505355';
const PHONE_DISPLAY = '+91 95605 05355';

type ServiceTone = {
  badge: string;
  button: string;
  glow: string;
};

type ServiceCard = {
  title: string;
  description: string;
  stat: string;
  href: string;
  image: string;
  highlights: string[];
  audience: string;
  waMessage: string;
  tone: ServiceTone;
};

const SERVICE_TONES: Record<string, ServiceTone> = {
  sky: {
    badge: 'bg-sky-100 text-sky-800',
    button: 'bg-sky-700 text-white hover:bg-sky-800',
    glow: 'from-sky-500/20 via-sky-500/5 to-transparent',
  },
  cyan: {
    badge: 'bg-cyan-100 text-cyan-800',
    button: 'bg-cyan-700 text-white hover:bg-cyan-800',
    glow: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
  rose: {
    badge: 'bg-rose-100 text-rose-800',
    button: 'bg-rose-700 text-white hover:bg-rose-800',
    glow: 'from-rose-500/20 via-rose-500/5 to-transparent',
  },
  emerald: {
    badge: 'bg-emerald-100 text-emerald-800',
    button: 'bg-emerald-700 text-white hover:bg-emerald-800',
    glow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-800',
    button: 'bg-amber-500 text-slate-900 hover:bg-amber-400',
    glow: 'from-amber-400/20 via-amber-400/5 to-transparent',
  },
};

const TRUST_ITEMS = [
  {
    icon: BadgeCheck,
    title: '35,000+ Care Plans Delivered',
    desc: 'Families trust Nursing Sarathi for structured home procedures and responsive coordination.',
  },
  {
    icon: Clock3,
    title: '98% On-Time Visits',
    desc: 'Fast scheduling and same-day service support in most active locations.',
  },
  {
    icon: ShieldCheck,
    title: 'Background Verified Nurses',
    desc: 'Every visit is assigned to trained professionals with hygiene-first execution.',
  },
  {
    icon: Stethoscope,
    title: '24 x 7 Emergency Support',
    desc: 'Care advisors stay available for urgent questions and booking assistance.',
  },
];

const HERO_POINTS = [
  'Same-day visit available in most locations',
  'Sterile, single-use equipment with safe disposal',
  'Verified nurses with 7+ years average experience',
  'Prescription-led care with clear visit guidance',
];

const SERVICES: ServiceCard[] = [
  {
    title: 'Injection at Home',
    description: 'Safe, hygienic injection service by verified nurses at your doorstep.',
    stat: '98% On-Time Visits',
    href: '/injection',
    image: '/injection_img.png',
    highlights: [
      'IV, IM, and SC injections',
      'Antibiotic, vitamin, insulin, and hormonal support',
      'Sterile disposal and post-visit notes',
    ],
    audience:
      'Best for elderly patients, post-surgery medication schedules, and families avoiding hospital travel.',
    waMessage: 'Hi, I need injection service at home. Please assist.',
    tone: SERVICE_TONES.sky,
  },
  {
    title: 'IV Drip at Home',
    description: 'Safe and comfortable IV fluid therapy at home by experienced nurses.',
    stat: '93% First Attempt Success',
    href: '/iv-cannulation',
    image: '/iv_drop.png',
    highlights: [
      'Hydration and IV medication support',
      'Pain-aware cannulation and vein assessment',
      'Continuous monitoring during the drip',
    ],
    audience:
      'Helpful for weakness, dehydration, post-illness recovery, and prescribed IV medication at home.',
    waMessage: 'Hi, I need IV drip service at home. Please assist.',
    tone: SERVICE_TONES.cyan,
  },
  {
    title: 'Wound Care at Home',
    description: 'Expert wound dressing and healing care at home by certified nurses.',
    stat: '92% Infection Control Success',
    href: '/wound-dressing',
    image: '/wound_care.png',
    highlights: [
      'Post-operative and diabetic wound dressing',
      'Disinfection and healing progress monitoring',
      'Family guidance for safe recovery',
    ],
    audience:
      'Ideal for post-surgery recovery, chronic wound management, injury care, and repeat dressing needs.',
    waMessage: 'Hi, I need wound dressing service at home. Please assist.',
    tone: SERVICE_TONES.rose,
  },
  {
    title: 'Catheter Care at Home',
    description: 'Safe, hygienic, and private catheter care by trained nurses at your home.',
    stat: 'Male & Female Support',
    href: '/catheterization',
    image: '/catherCare.png',
    highlights: [
      'Insertion, replacement, and urine bag management',
      'Long-term catheter support with privacy',
      'Sterile handling and infection prevention',
    ],
    audience:
      'Designed for patients needing short-term or long-term catheter care without repeated hospital visits.',
    waMessage: 'Hi, I need catheter care service at home. Please assist.',
    tone: SERVICE_TONES.emerald,
  },
  {
    title: 'Feeding Tube Support',
    description: 'Safe NG tube placement and feeding care at home by trained nurses.',
    stat: 'NG Tube Setup & Guidance',
    href: '/nasogastric-intubation',
    image: '/feeding.png',
    highlights: [
      'NG tube placement and comfort-focused handling',
      'Liquid nutrition setup and feeding method guidance',
      'Caregiver support for daily feeding routines',
    ],
    audience:
      'Useful for recovery patients and families who need guided short-term feeding support at home.',
    waMessage: 'Hi, I need feeding tube support at home. Please assist.',
    tone: SERVICE_TONES.amber,
  },
];

const VISIT_SUPPORT = [
  'Prescription and condition review before the procedure begins',
  'Sterile, single-use equipment and proper infection-control handling',
  'Safe medical waste disposal after every visit',
  'Patient comfort checks and practical guidance for the family',
];

const PATIENT_GROUPS = [
  'Elderly patients who cannot travel easily',
  'Post-surgery recovery cases needing repeat procedures',
  'Patients on regular injection or IV medication schedules',
  'Home recovery cases needing wound, catheter, or tube support',
];

const BOOKING_STEPS = [
  'Choose the service and share your requirement by call or WhatsApp.',
  'Our team assigns a skill-matched nurse for the procedure.',
  'The nurse arrives on time with the required sterile supplies.',
  'The treatment is completed safely and guidance is shared before closing the visit.',
];

export default function AllServicesPage() {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#ffffff_38%,#f8fafc_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630d_1px,transparent_1px),linear-gradient(to_bottom,#0b28630d_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="mx-auto mt-18 max-w-7xl px-4 py-10 sm:py-12">
          <section className="relative overflow-hidden rounded-[34px] bg-[radial-gradient(circle_at_top_left,#38bdf8,transparent_26%),linear-gradient(135deg,#0f172a_0%,#1d4ed8_58%,#0f766e_100%)] px-6 py-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:px-8 lg:px-10 lg:py-10">
            <div className="absolute -left-12 top-8 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                  Nursing Procedures at Home
                </span>

                <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Professional nursing services at home with hospital-grade care standards.
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg">
                  Injection support, IV drips, wound dressing, catheter care, and feeding
                  tube procedures are delivered by verified nurses at your doorstep with
                  hygiene, comfort, and fast coordination.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {HERO_POINTS.map((point) => (
                    <HeroPoint key={point} text={point} />
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <SmartLink
                    href={PHONE}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    <Phone className="h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </SmartLink>

                  <SmartLink
                    href={buildWhatsAppUrl('Hi, I need nursing care at home. Please assist.')}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Talk to Care Expert
                  </SmartLink>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[30px] border border-white/15 bg-white/10 p-4 shadow-inner backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-[24px] bg-slate-950 shadow-2xl">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                    <Image
                      src="/injection_img.png"
                      alt="Nurse giving an injection at home to an elderly patient"
                      width={1004}
                      height={669}
                      priority
                      className="h-[360px] w-full object-cover object-center"
                    />

                    <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                      <div className="grid gap-3 sm:grid-cols-3">
                        <ImageStat value="5" label="Procedures live" />
                        <ImageStat value="7+" label="Years avg. nurse exp." />
                        <ImageStat value="Same Day" label="Limited slots" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-3 rounded-[28px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <TrustCard key={item.title} item={item} />
            ))}
          </section>

          <section className="mt-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Choose Your Nursing Service
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Safe procedures at home, matched to the patient&apos;s actual need
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Each service card gives you the core procedure, what it includes, and
                the fastest way to book a verified nurse for home treatment.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {SERVICES.map((service) => (
                <ServiceCardItem key={service.href} service={service} />
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <InfoPanel
              eyebrow="What To Expect"
              title="What a Nursing Sarathi visit usually includes"
              description="The procedure is planned to stay simple, safe, and clear for the family from arrival to completion."
              items={VISIT_SUPPORT}
            />

            <InfoPanel
              eyebrow="Who It Helps"
              title="Who usually books these nursing services"
              description="These home procedures are most useful when the patient needs treatment support but hospital travel adds stress, delay, or unnecessary discomfort."
              items={PATIENT_GROUPS}
            />
          </section>

          <section className="mt-6 rounded-[30px] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff,#ffffff,#ecfeff)] p-6 shadow-[0_20px_50px_rgba(14,116,144,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              How It Works
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              Quick 4-step booking and visit flow
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {BOOKING_STEPS.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[32px] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff,#ffffff,#f0fdf4)] p-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Need Help Choosing?
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Not sure which nursing service fits the case?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Speak with a Nursing Sarathi expert now and get help selecting the
              safest home procedure for the patient&apos;s condition.
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
                href={buildWhatsAppUrl('Hi, I need help choosing the right nursing service at home. Please assist.')}
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </SmartLink>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
              <span>Verified & trained nurses</span>
              <span>Strict hygiene and sterile protocols</span>
              <span>Fast response and same-day support</span>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function TrustCard({
  item,
}: {
  item: { icon: LucideIcon; title: string; desc: string };
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          <item.icon className="h-5 w-5" />
        </div>
        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
    </div>
  );
}

function HeroPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
      <p className="text-sm leading-6 text-white/90">{text}</p>
    </div>
  );
}

function ImageStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 backdrop-blur">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-100/80">{label}</p>
    </div>
  );
}

function ServiceCardItem({ service }: { service: ServiceCard }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${service.tone.glow}`} />

      <div className="relative flex h-full flex-col">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            width={1004}
            height={669}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${service.tone.badge}`}
          >
            {service.stat}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>

          <div className="mt-5 space-y-3">
            {service.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Best for
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.audience}</p>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-3">
              <SmartLink
                href={buildWhatsAppUrl(service.waMessage)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${service.tone.button}`}
              >
                Book Now
              </SmartLink>

              <SmartLink
                href={service.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                View Details
                <ArrowRight className="h-4 w-4" />
              </SmartLink>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Phone className="h-4 w-4 text-emerald-600" />
              <SmartLink href={PHONE} className="font-medium text-slate-700 transition hover:text-slate-900">
                {PHONE_DISPLAY}
              </SmartLink>
            </div>
          </div>
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
  items: string[];
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
          <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <p className="text-sm leading-6 text-slate-600">{item}</p>
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

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/919560505355?text=${encodeURIComponent(message)}`;
}
