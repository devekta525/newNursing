import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { getSpecialityProgram, specialityPrograms } from '@/lib/speciality-data';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return specialityPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export default async function SpecialityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getSpecialityProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-18 bg-linear-to-br from-muted/30 via-white to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b28630f_1px,transparent_1px),linear-gradient(to_bottom,#0b28630f_1px,transparent_1px)] bg-[size:26px_26px]" />

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-10">
          <p className="text-sm text-gray-500 mb-4">
            Speciality / <span className="text-gray-700">{program.title}</span>
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  {program.badge}
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h1>

                <p className="font-semibold text-gray-700 mb-3">
                  {program.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Included services</h3>

                <div className="space-y-3">
                  {program.services.map((service) => (
                    <div key={service} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <StatCard title="SERVICE ITEMS" value={String(program.services.length)} />
              <StatCard title="KEY HIGHLIGHTS" value={String(program.highlights.length)} />
              <StatCard title="CARE FORMAT" value="At Home" />
            </div>

            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 mb-2">
                WHAT THIS PROGRAM COVERS
              </p>
              <h2 className="text-xl font-bold mb-6">
                Complete service description
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.services.map((service, index) => (
                  <FeatureCard
                    key={service}
                    number={String(index + 1)}
                    title={service}
                    desc={`${program.title} includes ${service.toLowerCase()} as part of the planned home care support.`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Why families choose this</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Need help choosing care?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We can help you compare care levels and match the right home
                  support plan for the patient.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  <Phone className="w-4 h-4" />
                  Talk to care advisor
                </Link>
              </div>
            </div>

            <div className="mt-14">
              <p className="text-xs font-semibold text-gray-500 mb-2">QUESTIONS</p>
              <h2 className="text-xl font-bold mb-4">
                Frequently asked about {program.title.toLowerCase()}
              </h2>

              {program.faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/speciality"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all specialities
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border rounded-xl p-6 text-center shadow-sm">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border rounded-xl mb-3 overflow-hidden group">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-gray-800">
        {question}
      </summary>
      <div className="px-4 pb-4 text-sm text-gray-600">{answer}</div>
    </details>
  );
}
