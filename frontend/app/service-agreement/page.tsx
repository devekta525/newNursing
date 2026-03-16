import Image from 'next/image';
import Header from '@/components/header';
import { Footer } from '@/components/footer';

const agreementSections = [
  {
    title: '1. Scope of Services',
    body: [
      'Nursing Sarathi provides home healthcare support services such as elderly care, trained attendants, nursing procedures, post-surgery support, and ICU-trained nursing assistance at home, subject to case assessment, availability, and service location.',
      'The exact scope, shift pattern, and care activities shall be confirmed in the booking record, care plan, or quotation shared with the client.',
    ],
  },
  {
    title: '2. Service Charges (Indicative)',
    body: [
      'Charges are indicative and may vary based on city, service complexity, duty hours, patient dependency level, equipment needs, urgency, and staff qualification.',
      'Final service charges are communicated before confirmation. Travel cost, emergency deployment cost, consumables, and third-party medical expenses may be billed separately where applicable.',
    ],
  },
  {
    title: '3. Booking & Token Amount Policy',
    body: [
      'Bookings may require advance confirmation and a token amount to reserve staff, block service slots, or initiate deployment.',
      'A booking is treated as confirmed only after acceptance by Nursing Sarathi and receipt of the applicable token or advance payment.',
    ],
  },
  {
    title: '4. Client Responsibilities',
    body: [
      'The client or family must provide accurate patient information, relevant prescriptions, diagnosis details, discharge summary, emergency contacts, and a safe work environment for the assigned care professional.',
      'The client is also responsible for ensuring availability of prescribed medicines, consumables, utilities, and any equipment required for the booked service.',
    ],
  },
  {
    title: '5. Medical Limitation Clause',
    body: [
      'Nursing Sarathi does not diagnose, prescribe treatment, replace hospital admission, or provide services beyond the legal and clinical scope of the assigned caregiver or nurse.',
      'All advanced care, medication administration, and medically sensitive procedures must be supported by valid doctor instructions, prescriptions, or documented medical advice wherever applicable.',
    ],
  },
  {
    title: '6. Non-Inclusion of Domestic Work',
    body: [
      'The assigned caregiver, attendant, or nurse is engaged strictly for healthcare-related and patient-support duties.',
      'Domestic work such as cooking for the family, house cleaning, laundry for the household, child care unrelated to the patient, errands unrelated to patient care, or general household management is not included unless separately agreed in writing.',
    ],
  },
  {
    title: '7. Refund & Cancellation Policy',
    body: [
      'Cancellation and refund decisions depend on notice period, service category, deployment status, and whether staff allocation or travel arrangements have already been made.',
      'Token amounts or booking advances may be non-refundable once deployment, scheduling, or staffing commitments have started. Approved refunds, if any, are processed as per company policy and timelines.',
    ],
  },
  {
    title: '8. Liability Limitation',
    body: [
      'Nursing Sarathi shall not be liable for outcomes arising from incomplete disclosure of patient condition, refusal of medical advice, emergency deterioration, hospital delays, force majeure events, or use of the service outside agreed scope.',
      'Liability, if any, shall remain limited to the amount actually paid by the client for the relevant service period, to the extent permitted by applicable law.',
    ],
  },
  {
    title: '9. Governing Law',
    body: [
      'This Service Agreement shall be governed by and construed in accordance with the laws of India.',
      'Any dispute arising out of or in connection with the service relationship shall be subject to the jurisdiction of competent courts in India.',
    ],
  },
  {
    title: '10. Signature Section',
    body: [
      'The client, patient representative, and authorized Nursing Sarathi signatory may sign this document or the related service confirmation sheet to record understanding and acceptance of the agreed terms.',
      'Digital acceptance, written confirmation, signed quotation, email approval, or payment against the booking may also be treated as acceptance of the agreement terms where legally permitted.',
    ],
  },
];

const indicativeCharges = [
  ['Elderly Care / GDA Support', 'Shared after assessment'],
  ['Home Nursing Visit', 'Shared after case review'],
  ['Post-Surgery Care Plan', 'Shared after discharge review'],
  ['ICU-Trained Nurse at Home', 'Shared after acuity assessment'],
];

export default function ServiceAgreementPage() {
  return (
    <main className="min-h-screen bg-slate-100 pt-16 sm:pt-20 lg:pt-18">
      <Header />

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="border-b border-slate-200 px-6 py-8 sm:px-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-28">
                    <Image
                      src="/logo_nursing_2.png"
                      alt="Nursing Sarathi"
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.25em] text-primary">
                      SERVICE AGREEMENT
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                      Nursing Sarathi Service Agreement
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                      Final structure for printable use and PDF export.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600">
                  <p><span className="font-semibold text-slate-900">Issued by:</span> Nursing Sarathi</p>
                  <p><span className="font-semibold text-slate-900">Entity:</span> Active Institute of Intensive Medical Services</p>
                  <p><span className="font-semibold text-slate-900">Contact:</span> +91 9560505355</p>
                  <p><span className="font-semibold text-slate-900">Email:</span> care@nursingsarathi.com</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-8">
                <section className="rounded-3xl bg-slate-50 p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Indicative Charges Table
                  </h2>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold">Service</th>
                          <th className="px-4 py-3 text-left font-semibold">Indicative Charge</th>
                        </tr>
                      </thead>
                      <tbody>
                        {indicativeCharges.map(([service, charge]) => (
                          <tr key={service} className="border-t border-slate-200">
                            <td className="px-4 py-3 text-slate-700">{service}</td>
                            <td className="px-4 py-3 text-slate-600">{charge}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {agreementSections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6"
                  >
                    <h2 className="text-xl font-bold text-slate-900 mb-4">
                      {section.title}
                    </h2>

                    <div className="space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-slate-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}

                <section className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Signature Section
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    <SignatureBlock title="Client / Patient Representative" />
                    <SignatureBlock title="Authorized Signatory - Nursing Sarathi" />
                  </div>

                  <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6">
                    <p className="text-sm font-semibold text-slate-900">Company Stamp Section</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Affix company seal / stamp here for printed agreement copies.
                    </p>
                    <div className="mt-4 h-24 rounded-xl border border-dashed border-slate-300 bg-slate-50" />
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900">Addresses</h3>
                  <div className="mt-4 space-y-4 text-sm text-slate-600">
                    <div>
                      <p className="font-semibold text-slate-900">Noida Office</p>
                      <p>E-23 Sector-3, Noida</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Mohali / Chandigarh Office</p>
                      <p>GM Plaza, 3rd Floor, Sector 77, Mohali</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Web</p>
                      <p>nursingsarathi.com</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-slate-900">Document Use</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    This page is structured so it can be reviewed online, printed,
                    or exported as a PDF agreement after client-specific pricing,
                    service details, and signatory information are inserted.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SignatureBlock({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <div className="mt-8 space-y-4 text-sm text-slate-600">
        <div>
          <p>Name:</p>
          <div className="mt-2 h-8 border-b border-slate-300" />
        </div>
        <div>
          <p>Signature:</p>
          <div className="mt-2 h-8 border-b border-slate-300" />
        </div>
        <div>
          <p>Date:</p>
          <div className="mt-2 h-8 border-b border-slate-300" />
        </div>
      </div>
    </div>
  );
}
