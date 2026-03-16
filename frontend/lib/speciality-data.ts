export type SpecialityProgram = {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  services: string[];
  highlights: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const specialityPrograms: SpecialityProgram[] = [
  {
    slug: 'elderly-care-gda',
    title: 'Elderly Care (GDA)',
    badge: 'DAILY LIVING SUPPORT',
    subtitle: 'Dependable day-to-day support for seniors at home',
    shortDescription:
      'Bathing support, feeding help, mobility assistance, companionship, and basic wellbeing observation for older adults.',
    description:
      'This care program is designed for seniors who need steady physical support, emotional reassurance, and safe daily routines at home. Families get dependable caregivers trained to assist with comfort, mobility, hygiene, and observation.',
    services: [
      'Bathing & hygiene assistance',
      'Feeding support',
      'Mobility & walking assistance',
      'Bed positioning',
      'Companionship',
      'Basic condition observation',
    ],
    highlights: [
      'Best suited for seniors who need help with daily routines',
      'Focused on comfort, dignity, and safe movement inside the home',
      'Helpful for long-term elder support and family relief',
    ],
    faqs: [
      {
        question: 'Who is this service best for?',
        answer:
          'It is ideal for elderly patients who need regular non-clinical support with hygiene, meals, mobility, and companionship at home.',
      },
      {
        question: 'Can families choose full-day or live-in support?',
        answer:
          "Yes. We can align caregiving hours based on the patient's routine, dependency level, and family preference.",
      },
    ],
  },
  {
    slug: 'home-nursing-services',
    title: 'Home Nursing Services',
    badge: 'CLINICAL CARE AT HOME',
    subtitle: 'Doctor-prescribed nursing procedures delivered safely at home',
    shortDescription:
      'Injection administration, IV support, wound dressing, catheter care, vitals monitoring, and medication support as prescribed.',
    description:
      'This service is for patients who need skilled nursing procedures without repeated hospital visits. Our nurses follow clinical protocols and documented care plans so treatment continues safely and consistently at home.',
    services: [
      'Injection administration',
      'IV support',
      'Wound dressing',
      'Catheter care',
      'Vitals monitoring',
      'Medication administration (as prescribed only)',
    ],
    highlights: [
      'Built for short-term treatments and recurring nursing procedures',
      'Suitable after discharge, during illness, or for chronic care needs',
      'Clear documentation and observation with every scheduled visit',
    ],
    faqs: [
      {
        question: 'Do you administer medicines without a prescription?',
        answer:
          'No. Medication administration is provided only when it is part of a doctor-prescribed treatment plan.',
      },
      {
        question: 'Can this service be booked for repeat visits?',
        answer:
          'Yes. We support one-time visits as well as recurring nursing schedules depending on the treatment plan.',
      },
    ],
  },
  {
    slug: 'post-surgery-care',
    title: 'Post-Surgery Care',
    badge: 'RECOVERY SUPPORT',
    subtitle: 'Structured post-operative care for smoother healing at home',
    shortDescription:
      'Wound management, recovery supervision, mobility support, infection monitoring, and doctor-prescribed care execution.',
    description:
      'This program helps patients recover safely after surgery with close attention to wound care, mobility, infection risk, and physician instructions. It reduces the burden on families while keeping recovery organized at home.',
    services: [
      'Wound management',
      'Recovery supervision',
      'Mobility support',
      'Infection monitoring',
      'Doctor-prescribed care execution',
    ],
    highlights: [
      'Useful after orthopedic, abdominal, or general surgery discharge',
      'Combines supervision, comfort support, and care-plan follow-through',
      'Helps families catch recovery concerns early',
    ],
    faqs: [
      {
        question: 'Can this service start immediately after discharge?',
        answer:
          'Yes. We can align the care plan around discharge instructions so support begins as soon as the patient returns home.',
      },
      {
        question: 'Do you monitor for post-operative infection signs?',
        answer:
          'Yes. Nurses watch for warning signs such as redness, swelling, fever, discharge changes, and delayed healing, then escalate concerns promptly.',
      },
    ],
  },
  {
    slug: 'icu-trained-nurse-at-home',
    title: 'ICU-Trained Nurse at Home',
    badge: 'ADVANCED NURSING SUPPORT',
    subtitle: 'High-acuity nursing care for medically complex patients at home',
    shortDescription:
      'Tracheostomy care, tube feeding, critical vitals monitoring, advanced nursing support, and medical record maintenance.',
    description:
      'This program is meant for patients who require advanced nursing oversight after critical illness, prolonged hospitalization, or intensive treatment. ICU-trained nurses help families manage complex clinical needs with discipline and confidence.',
    services: [
      'Tracheostomy care',
      'Tube feeding',
      'Critical vitals monitoring',
      'Advanced nursing support',
      'Medical record maintenance',
    ],
    highlights: [
      'Appropriate for high-dependency or medically complex home care',
      'Supports continuity after ICU discharge or serious illness',
      'Emphasis on close monitoring, documentation, and escalation readiness',
    ],
    faqs: [
      {
        question: 'When should a family choose an ICU-trained nurse?',
        answer:
          'This is the right fit when a patient needs advanced monitoring, airway or feeding-tube care, or close nursing oversight beyond routine home visits.',
      },
      {
        question: 'Do nurses maintain daily clinical notes?',
        answer:
          'Yes. Medical record maintenance is part of the service so families and treating doctors have a clear care history.',
      },
    ],
  },
];

export function getSpecialityProgram(slug: string) {
  return specialityPrograms.find((program) => program.slug === slug);
}
