"use client";

import Link from "next/link";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const PHONE = "tel:+919560505355";
const WA_BASE = "https://wa.me/919560505355?text=";

const SERVICES = [
  {
    title: "IV Injection at Home",
    desc: "Safe, hygienic injection service by verified nurses. Covers IV, IM, SC, antibiotic, insulin, and hormonal injections.",
    tags: ["Same-day visit", "Sterile equipment", "7+ yrs nurses"],
    href: "/injection",
    stat: "98% On-Time",
    waMsg: "Hi, I need injection service at home. Please assist.",
  },
  {
    title: "IV Drip at Home",
    desc: "Professional IV cannulation and drip administration at home. Safe hydration, antibiotic & vitamin infusion therapy.",
    tags: ["Pain-free access", "93% First Attempt", "Hospital-grade"],
    href: "/iv-cannulation",
    stat: "93% First Attempt",
    waMsg: "Hi, I need IV drip service at home. Please assist.",
  },
  {
    title: "Wound Care at Home",
    desc: "Expert wound dressing and healing care using advanced techniques. Covers post-op, diabetic, and chronic wounds.",
    tags: ["Infection control", "Advanced dressing", "Post-surgery"],
    href: "/wound-dressing",
    stat: "92% Infection Control",
    waMsg: "Hi, I need wound dressing service at home. Please assist.",
  },
  {
    title: "Catheter Care at Home",
    desc: "Safe, hygienic and private catheter care. Male & female support with strict infection prevention protocols.",
    tags: ["Male & female", "97% Infection prevention", "Private care"],
    href: "/catheterization",
    stat: "97% Infection Prevention",
    waMsg: "Hi, I need catheter care service at home. Please assist.",
  },
  {
    title: "Feeding Tube Support",
    desc: "NG tube placement, feeding setup and caregiver guidance at home. Safe and accurate tube insertion for recovery patients.",
    tags: ["99% Placement accuracy", "Caregiver training", "NG tube"],
    href: "/nasogastric-intubation",
    stat: "99% Placement Accuracy",
    waMsg: "Hi, I need feeding tube support at home. Please assist.",
  },
];

const GUARANTEES = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    title: "Background verified nurses",
    desc: "All nurses are credential-checked, trained, and skill-assigned for your specific care need.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
    title: "Strict hygiene & sterile protocols",
    desc: "WHO-compliant practices, single-use equipment, and safe medical waste disposal on every visit.",
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    title: "24×7 emergency support",
    desc: "Dedicated support team available round the clock for urgent care and guidance.",
  },
];

export default function AllServicesPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mt-18 mx-auto px-4 py-12">

          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                NURSING SERVICES · HOME CARE
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional nursing care <br />
                at your doorstep
              </h1>

              <p className="text-gray-600 max-w-xl mb-6">
                From injection therapy to wound dressing and feeding tube support —
                every service is delivered by verified nurses following hospital-grade
                protocols, right at your home.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Stat value="35,000+" label="Care plans delivered" />
                <Stat value="98%" label="On-time visits" />
                <Stat value="24×7" label="Emergency support" />
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={PHONE}
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-full hover:bg-blue-800 transition text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Book Nurse Now
                </a>
                <a
                  href={`${WA_BASE}Hi%2C%20I%20need%20nursing%20care%20at%20home.%20Please%20assist.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* TRUST CARD */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h3 className="font-semibold mb-2">Why families trust Nursing Sarathi</h3>
              <p className="text-xs text-gray-500 mb-5">
                Serving patients across homes with care that meets clinical standards.
              </p>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Experienced nurses with 7+ years average — trained for home settings</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Sterile, single-use equipment on every visit — no compromise on hygiene</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Same-day visits available — quick response when you need care most</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Transparent process — visit notes and documentation shared after every visit</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="mt-16">
            <p className="text-xs font-semibold text-gray-500 mb-2">OUR SERVICES</p>
            <h2 className="text-2xl font-bold mb-2">Choose the care you need</h2>
            <p className="text-gray-500 text-sm mb-8">
              All services available at home. Same-day slots in most areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <ServiceCard key={s.href} service={s} />
              ))}
            </div>
          </div>

          {/* GUARANTEES */}
          <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 border">
            <p className="text-xs font-semibold text-gray-500 mb-2">WHAT WE GUARANTEE</p>
            <h2 className="text-xl font-bold mb-8">Every service, every visit</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GUARANTEES.map((g) => (
                <Guarantee key={g.title} icon={g.icon} title={g.title} desc={g.desc} />
              ))}
            </div>
          </div>

          {/* CTA BLOCK */}
          <div className="mt-16 bg-blue-700 rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Need a nurse at home today?</h2>
            <p className="text-blue-100 mb-6">
              Safe. Convenient. Trusted. Limited same-day slots available.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={PHONE}
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2.5 rounded-full hover:bg-blue-50 transition font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                Book Nurse Now
              </a>
              <a
                href={`${WA_BASE}Hi%2C%20I%20need%20nursing%20care%20at%20home.%20Please%20assist.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2.5 rounded-full hover:bg-green-600 transition font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Now
              </a>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border rounded-xl px-4 py-3 shadow-sm">
      <p className="text-lg font-bold text-blue-700">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[0] }) {
  const wa = `https://wa.me/919560505355?text=${encodeURIComponent(service.waMsg)}`;
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition flex flex-col">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{service.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
        >
          View details
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:underline"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function Guarantee({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="border rounded-xl p-6 flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
