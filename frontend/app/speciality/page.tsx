import Link from 'next/link';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { specialityPrograms } from '@/lib/speciality-data';

export default function SpecialityPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mt-18 mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                COMPLETE HOMECARE SPECIALITIES
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Speciality care programs built around real home needs
              </h1>

              <p className="text-gray-600 max-w-xl mb-6">
                Explore our focused care categories for elderly support, nursing
                procedures, post-surgery recovery, and advanced clinical care at
                home. Each program is structured around clear service
                descriptions so families know exactly what is covered.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Stat value="4" label="Core speciality programs" />
                <Stat value="22+" label="Included care activities" />
                <Stat value="Home" label="Delivered where recovery happens" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h3 className="font-semibold mb-4">What families can expect</h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  Clearly defined services under each speciality category
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  Programs designed for both routine and complex home care
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  Easy navigation from header dropdown to detailed pages
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-xs font-semibold text-gray-500 mb-2">
              SPECIALITY PROGRAMS
            </p>
            <h2 className="text-2xl font-bold mb-8">
              Choose the care pathway you need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialityPrograms.map((program) => (
                <div
                  key={program.slug}
                  className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {program.badge}
                  </span>

                  <h3 className="font-semibold mt-4 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {program.shortDescription}
                  </p>

                  <div className="space-y-2 mb-5">
                    {program.services.map((service) => (
                      <div key={service} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/speciality/${program.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
                  >
                    View full page
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border rounded-xl px-4 py-3 shadow-sm">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
