"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { CheckCircle, Phone, ChevronDown, MessageCircle } from "lucide-react";

export default function IVCannulationPage() {
  return (
    <div className="relative pt-16 sm:pt-20 lg:pt-18 overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* BREADCRUMB */}
          <p className="text-sm text-gray-500 mb-4">
            Services / <span className="text-gray-700">IV Drip at Home</span>
          </p>

          {/* MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            {/* HERO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  SAME-DAY VISIT AVAILABLE
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  IV Drip at Home
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Safe and comfortable IV fluid therapy at home by experienced nurses.
                </p>

                <ul className="space-y-1 text-sm text-gray-600 mb-4">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> Same-day visit available</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> Pain-free vein access</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> Hospital-grade hygiene</li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition text-sm font-medium">
                    <Phone className="w-4 h-4" />
                    Book Nurse Now
                  </button>
                  <a
                    href="tel:+919560505355"
                    className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-50 transition text-sm font-medium"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* IMAGE */}
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/iv_drop.png"
                    alt="IV Drip at Home"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* TRUST BAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <StatCard title="CARE PLANS DELIVERED" value="35,000+" />
              <StatCard title="FIRST ATTEMPT SUCCESS" value="93%" />
              <StatCard title="VERIFIED NURSES" value="Trained" />
              <StatCard title="SUPPORT" value="24×7" />
            </div>

            {/* SHORT DESCRIPTION */}
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Need IV drip at home?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Nursing Sarathi provides professional IV cannulation and drip administration at home,
                ensuring safe hydration and medication delivery without hospital visits.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our nurses are trained in handling difficult veins and follow strict hygiene protocols
                for safe and effective treatment.
              </p>
            </div>

            {/* WHO IS THIS FOR */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">WHO IS THIS FOR</p>
              <h2 className="text-xl font-bold mb-4">This service is ideal for:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Patients needing hydration therapy",
                  "Weakness, dehydration, or recovery support",
                  "Post-surgery or illness recovery",
                  "Patients requiring IV medications",
                  "Elderly patients needing home care",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT TO EXPECT */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">WHAT TO EXPECT</p>
              <h2 className="text-xl font-bold mb-4">What happens during the visit?</h2>
              <div className="border rounded-xl p-6">
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Nurse visits your home on time",
                    "Assesses vein condition and patient health",
                    "Safely inserts IV cannula",
                    "Starts drip and monitors flow",
                    "Ensures patient comfort throughout",
                    "Shares visit details after completion",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TYPES */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">TYPES WE PROVIDE</p>
              <h2 className="text-xl font-bold mb-4">We provide:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { n: "1", title: "IV Fluid Administration", desc: "Saline and glucose IV fluid administration at home." },
                  { n: "2", title: "IV Antibiotic & Vitamin Infusion", desc: "IV antibiotic support and vitamin infusion as prescribed." },
                  { n: "3", title: "Hydration & Long-Duration IV", desc: "Hydration therapy and long-duration IV support." },
                ].map((item) => (
                  <FeatureCard key={item.n} number={item.n} title={item.title} desc={item.desc} />
                ))}
              </div>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">WHY CHOOSE NURSING SARATHI</p>
              <h2 className="text-xl font-bold mb-4">Why families trust us:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Skilled nurses for difficult vein access",
                  "High first-attempt success rate",
                  "Strict sterile protocols",
                  "Comfortable home-based care",
                  "Fast response and support",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">HOW IT WORKS</p>
              <h2 className="text-xl font-bold mb-4">Simple 4-step process:</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { n: "1", text: "Book your IV service" },
                  { n: "2", text: "Nurse is assigned" },
                  { n: "3", text: "Home visit at scheduled time" },
                  { n: "4", text: "IV drip administered safely" },
                ].map((step) => (
                  <div key={step.n} className="border rounded-xl p-4 text-center">
                    <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                      {step.n}
                    </div>
                    <p className="text-sm text-gray-600">{step.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Quick, safe, and hassle-free.</p>
            </div>

            {/* CTA BLOCK */}
            <div className="mt-12 bg-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-xl font-bold mb-2">Need IV drip at home today?</h2>
              <p className="text-blue-100 mb-6">Avoid hospital visits and get expert care at home.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2.5 rounded-full hover:bg-blue-50 transition font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  Book Nurse Now
                </button>
                <a
                  href="https://wa.me/919560505355?text=Hi%2C%20I%20need%20IV%20drip%20service%20at%20home.%20Please%20assist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2.5 rounded-full hover:bg-green-600 transition font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Now
                </a>
              </div>
              <p className="text-xs text-blue-200 mt-4">Limited same-day slots available</p>
            </div>

            {/* SAFETY & HYGIENE */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">SAFETY & HYGIENE</p>
              <h2 className="text-xl font-bold mb-4">Your safety is our priority:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Sterile cannulation process",
                  "Single-use equipment",
                  "Infection prevention protocols",
                  "Continuous monitoring during drip",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-600 border rounded-lg p-3">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">QUESTIONS</p>
              <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
              <FAQItem question="Is IV drip safe at home?" answer="Yes, our trained nurses ensure complete safety and hygiene." />
              <FAQItem question="Do you handle difficult veins?" answer="Yes, our nurses are experienced in difficult IV access." />
              <FAQItem question="Can I book same-day IV drip?" answer="Yes, based on availability in your location." />
              <FAQItem question="Do I need a doctor's prescription?" answer="Yes, IV therapy requires a valid prescription." />
              <FAQItem question="How long does the IV drip take?" answer="It depends on the fluid type, usually 30–90 minutes." />
            </div>

            {/* FINAL CTA */}
            <div className="mt-12 border rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-2">Book IV drip at home today.</h2>
              <p className="text-gray-500 mb-6">Safe. Comfortable. Professional care.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  Book Now
                </button>
                <a
                  href="https://wa.me/919560505355?text=Hi%2C%20I%20need%20IV%20drip%20service%20at%20home.%20Please%20assist."
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
        </div>

        <Footer />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ title, value }: any) {
  return (
    <div className="border rounded-xl p-4 text-center shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className="text-2xl font-bold text-blue-700">{value}</p>
    </div>
  );
}

function FeatureCard({ number, title, desc }: any) {
  return (
    <div className="border rounded-xl p-6">
      <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mb-4">
        {number}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <p className="text-sm font-medium text-gray-800">{question}</p>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">{answer}</div>
      )}
    </div>
  );
}
