import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { ShieldCheck, Lock, FileText, HeartPulse } from 'lucide-react';
import type { ReactNode } from 'react';

const sections = [
  {
    title: '1. Information Collected',
    content: [
      'We may collect personal information such as name, phone number, email address, city, state, service requirement, preferred service timing, and patient condition details submitted through our enquiry and contact forms.',
      'We may also collect basic technical information such as browser type, device information, IP address, pages visited, and interaction data for website security and analytics purposes.',
    ],
  },
  {
    title: '2. Use of Information',
    content: [
      'Information collected is used to respond to enquiries, coordinate home healthcare services, schedule visits, communicate with patients or family members, provide customer support, and improve service quality.',
      'We may also use information for internal record keeping, legal compliance, service updates, safety follow-up, and operational planning.',
    ],
  },
  {
    title: '3. Data Protection',
    content: [
      'Nursing Sarathi uses reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, misuse, loss, alteration, or disclosure.',
      'While we take data protection seriously, no website, software platform, or electronic transmission method can be guaranteed to be completely secure.',
    ],
  },
  {
    title: '4. Third-Party Sharing Policy',
    content: [
      'We do not sell personal information. Information may be shared only on a need-to-know basis with authorized internal teams, assigned care staff, technology providers supporting platform operations, payment partners, or legal and regulatory authorities where required by law.',
      'Where medically necessary and authorized, relevant information may also be shared with treating doctors, hospitals, laboratories, or emergency responders for continuity of care.',
    ],
  },
  {
    title: '5. Medical Disclaimer',
    content: [
      'The website content is for general informational purposes only and does not constitute medical advice, diagnosis, emergency response, or prescription.',
      'Home healthcare services are delivered within the scope of the booked service and, where applicable, under doctor guidance or prescription. In case of emergency, users should immediately contact emergency medical services or the nearest hospital.',
    ],
  },
  {
    title: '6. Consent Clause',
    content: [
      'By submitting an enquiry, booking a service, or sharing patient details through this website, you confirm that you are authorized to provide the information and consent to its collection, processing, and use in accordance with this Privacy Policy.',
      'A consent checkbox is required on the enquiry form before submission. If consent is withdrawn, certain services or follow-up communication may no longer be possible.',
    ],
  },
  {
    title: '7. Jurisdiction',
    content: [
      'This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.',
      'Any disputes relating to privacy, data handling, or use of this website shall be subject to the jurisdiction of the competent courts in India.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 sm:pt-20 lg:pt-18">
      <Header />

      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            FINAL VERSION
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Effective date: March 16, 2026. This policy explains how Nursing
            Sarathi collects, uses, protects, and shares information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4 mb-10">
            <InfoCard
              icon={<FileText className="h-5 w-5 text-primary" />}
              title="What We Collect"
              text="Contact, enquiry, service, and limited technical website data."
            />
            <InfoCard
              icon={<HeartPulse className="h-5 w-5 text-primary" />}
              title="Why We Use It"
              text="To arrange care, support families, document requests, and improve service delivery."
            />
            <InfoCard
              icon={<Lock className="h-5 w-5 text-primary" />}
              title="How We Protect It"
              text="Reasonable safeguards are used to reduce unauthorized access and misuse."
            />
            <InfoCard
              icon={<ShieldCheck className="h-5 w-5 text-primary" />}
              title="Where It Applies"
              text="This policy applies to website use, enquiries, and related service communication."
            />
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="text-gray-600 leading-7">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-8">
            <h2 className="text-2xl font-bold text-red-700 mb-3">
              Contact and Compliance Note
            </h2>
            <p className="text-red-700 leading-7">
              Questions regarding this Privacy Policy may be directed to Nursing
              Sarathi at <span className="font-semibold">care@nursingsarathi.com</span>{' '}
              or by calling <span className="font-semibold">+91 9560505355</span>.
              This page should be reviewed whenever legal, operational, or
              patient-data handling processes are updated.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">{text}</p>
    </div>
  );
}
