"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { CheckCircle, Phone, ChevronDown, MessageCircle } from "lucide-react";

export default function InjectionAdministrationPage() {
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
            Services / <span className="text-gray-700">IV Injection at Home</span>
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
                  IV Injection at Home
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  Safe, hygienic injection service by verified nurses at your doorstep.
                </p>

                <ul className="space-y-1 text-sm text-gray-600 mb-4">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> Same-day visit available</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> Hospital-grade sterile process</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> 7+ years experienced nurses</li>
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
                    src="/injection_img.png"
                    alt="Injection at Home"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* TRUST BAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <StatCard title="CARE PLANS DELIVERED" value="35,000+" />
              <StatCard title="ON-TIME VISITS" value="98%" />
              <StatCard title="VERIFIED NURSES" value="Background" />
              <StatCard title="SUPPORT" value="24×7" />
            </div>

            {/* SHORT DESCRIPTION */}
            <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Looking for a nurse for injection at home?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Nursing Sarathi provides safe and professional injection services at home, ensuring
                comfort, hygiene, and expert care without visiting a hospital.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our trained nurses follow strict medical protocols for all types of injections
                including antibiotics, vitamins, insulin, and post-surgery medications.
              </p>
            </div>

            {/* WHO IS THIS FOR */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">WHO IS THIS FOR</p>
              <h2 className="text-xl font-bold mb-4">This service is ideal for:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Elderly patients who cannot travel",
                  "Post-surgery recovery patients",
                  "Patients requiring regular injections",
                  "Individuals needing home-based medical care",
                  "Families looking for safe and convenient treatment",
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
                    "Nurse arrives at your home on time",
                    "Reviews prescription and medical condition",
                    "Performs injection using sterile equipment",
                    "Ensures safe disposal of medical waste",
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

            {/* TYPES OF INJECTIONS */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">TYPES WE COVER</p>
              <h2 className="text-xl font-bold mb-4">We provide:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { n: "1", title: "IV / IM / SC Injections", desc: "All routes of injection safely administered at home." },
                  { n: "2", title: "Antibiotic & Vitamin Injections", desc: "Prescribed antibiotic courses and vitamin booster shots." },
                  { n: "3", title: "Insulin & Hormonal Injections", desc: "Regular insulin and hormonal therapy injections." },
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
                  "Experienced nurses (7+ years average)",
                  "Strict hygiene and safety protocols",
                  "Quick response and same-day service",
                  "Transparent process and documentation",
                  "Dedicated support team",
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
                  { n: "1", text: "Book your service online or via call" },
                  { n: "2", text: "Nurse is assigned based on your requirement" },
                  { n: "3", text: "Nurse visits your home at scheduled time" },
                  { n: "4", text: "Injection is safely administered" },
                ].map((step) => (
                  <div key={step.n} className="border rounded-xl p-4 text-center">
                    <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                      {step.n}
                    </div>
                    <p className="text-sm text-gray-600">{step.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Done in minutes, safely at home.</p>
            </div>

            {/* CTA BLOCK */}
            <div className="mt-12 bg-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-xl font-bold mb-2">Need a nurse today?</h2>
              <p className="text-blue-100 mb-6">Get safe injection service at your home.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2.5 rounded-full hover:bg-blue-50 transition font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  Book Nurse Now
                </button>
                <a
                  href="https://wa.me/919560505355?text=Hi%2C%20I%20need%20injection%20service%20at%20home.%20Please%20assist."
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
                  "Use of sterile, single-use equipment",
                  "WHO-compliant injection practices",
                  "Proper medical waste disposal",
                  "Patient comfort and hygiene maintained",
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
              <FAQItem question="Are your nurses certified?" answer="Yes, all our nurses are trained and verified professionals." />
              <FAQItem question="Can I book same-day service?" answer="Yes, same-day visits are available based on location." />
              <FAQItem question="What types of injections do you provide?" answer="We cover all major injections including IV, IM, insulin, antibiotics, etc." />
              <FAQItem question="Do I need a doctor's prescription?" answer="Yes, a valid prescription is required for safety." />
              <FAQItem question="Is it safe to take injections at home?" answer="Yes, our nurses follow strict medical protocols to ensure safety." />
            </div>

            {/* FINAL CTA */}
            <div className="mt-12 border rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-2">Book a nurse for injection at home today.</h2>
              <p className="text-gray-500 mb-6">Safe. Convenient. Trusted.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  Book Now
                </button>
                <a
                  href="https://wa.me/919560505355?text=Hi%2C%20I%20need%20injection%20service%20at%20home.%20Please%20assist."
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
