"use client";

import Image from "next/image";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import InteractiveTimeline from "@/app/about/InteractiveTimeline";
import { Phone, ShieldCheck, Clock, Stethoscope, Users, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mt-16 sm:mt-18 mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4 sm:mb-5">
                WHO WE ARE
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-5">
                About Nursing Sarathi
              </h1>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mb-4">
                Nursing Sarathi provides professional home healthcare services for patients who need medical care, recovery support, or daily assistance at home.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Our trained nurses, caregivers, and physiotherapists deliver hospital-quality care in the comfort of the patient&apos;s home. From elderly care and post-surgery recovery to ICU-level support, our team ensures safe, reliable, and compassionate care for every patient.
              </p>

              {/* FEATURES */}
              <ul className="mt-5 sm:mt-6 space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Home Nursing and Patient Attendant Care
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-700" />
                  ICU Setup at Home and 24/7 Care Support
                </li>
                <li className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-blue-700" />
                  Physiotherapy, Post-Hospital Recovery, and Elderly Care Support
                </li>
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-8">
                <button className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition">
                  Book Home Care
                </button>

                <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                  <Phone className="w-4 h-4" />
                  Talk to Care Advisor
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-xl">
                <Stat label="Patients Served" value="10,000+" icon={Users} />
                <Stat label="Verified Caregivers" value="500+" icon={ShieldCheck} />
                <Stat label="Cities Covered" value="15+" icon={MapPin} />
                <Stat label="Care Support" value="24/7" icon={Clock} />
              </div>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="relative max-w-xl lg:max-w-none mx-auto w-full">
              <div className="bg-white rounded-[24px] sm:rounded-3xl shadow-2xl p-3 sm:p-4">
                <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full rounded-[20px] sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/about.jpg"
                    alt="Home healthcare nurse"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* FLOATING BADGES */}
              <div className="absolute top-3 right-3 sm:top-6 sm:-right-4 bg-white rounded-xl shadow px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold max-w-[150px] sm:max-w-none">
                <span>10,000+</span>
                <p className="text-xs text-gray-500 font-normal">
                  Patients served
                </p>
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:-left-4 bg-blue-700 text-white rounded-xl shadow px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm max-w-[180px] sm:max-w-none">
                <p className="font-semibold">24/7 Care Support</p>
                <p className="text-xs opacity-90">Talk to Care Advisor</p>
              </div>
            </div>
          </div>

          {/* MISSION */}
          <div className="mt-14 sm:mt-20 lg:mt-24 bg-white rounded-[24px] sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-center max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why we exist</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We believe recovery should not require hospital queues,
              unfamiliar rooms, or fragmented care. Our mission is to
              extend hospital-level protocols into homes, safely,
              predictably, and compassionately.
            </p>
          </div>
        </div>
        <InteractiveTimeline />
        <Footer />
      </div>
    </div>
  );
}

/* ---------- COMPONENT ---------- */

function Stat({ label, value, icon: Icon }: any) {
  return (
    <div className="rounded-2xl bg-white/80 px-4 py-4 text-center shadow-sm sm:bg-transparent sm:px-0 sm:py-0 sm:text-left sm:shadow-none">
      {Icon ? <Icon className="mx-auto mb-2 h-4 w-4 text-blue-700 sm:mx-0" /> : null}
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
