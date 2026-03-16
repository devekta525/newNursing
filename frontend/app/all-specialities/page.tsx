import Link from 'next/link';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { specialityPrograms } from '@/lib/speciality-data';

export default function AllSpecialitiesPage() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-muted/30 via-white to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-7xl mt-18 mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full mb-4">
                COMPLETE SERVICE DESCRIPTIONS
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All speciality programs in one place
              </h1>

              <p className="text-gray-600 max-w-xl mb-6">
                This page brings together every speciality category now used in
                the header so visitors can review the full service descriptions
                before choosing the right care page.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <h3 className="font-semibold mb-4">Included speciality lines</h3>

              <ul className="space-y-3 text-sm text-gray-600">
                {specialityPrograms.map((program) => (
                  <li key={program.slug} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span>{program.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialityPrograms.map((program) => (
              <div key={program.slug} className="bg-white border rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-semibold text-indigo-600 mb-2">
                  {program.badge}
                </p>
                <h2 className="text-xl font-bold mb-2">{program.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>

                <div className="space-y-2 mb-5">
                  {program.services.map((service) => (
                    <div key={service} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/speciality/${program.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:underline"
                >
                  Open speciality page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
