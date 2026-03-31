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
    badge: '12 / 24 HOUR CARE PLAN',
    subtitle: 'Daily support for senior citizens with comfort, safety, and dignity',
    shortDescription:
      'Daily support for senior citizens at home with bathing, feeding, mobility, companionship, and basic observation.',
    description:
      'Nursing Sarathi provides trained caregivers for elderly patients who need daily assistance at home. Our caregivers support routine care, emotional comfort, and safer living so seniors can stay at home with dignity and dependable help.',
    services: [
      'Bathing & hygiene assistance',
      'Feeding support',
      'Mobility & walking help',
      'Bed positioning',
      'Companionship',
      'Basic health observation',
    ],
    highlights: [
      'Available in 12-hour and 24-hour care plans',
      'Helpful for seniors living alone or needing daily assistance',
      'Focused on comfort, dignity, and safer home routines',
    ],
    faqs: [
      {
        question: 'Who is this service best for?',
        answer:
          'It is ideal for seniors living alone, bedridden elderly patients, and families who need dependable daily support at home.',
      },
      {
        question: 'Can families choose full-day or live-in support?',
        answer:
          "Yes. We can align care as 12-hour or 24-hour support based on the patient's condition, routine, and family preference.",
      },
      {
        question: 'What kind of help is included in elder care?',
        answer:
          'The care plan can include hygiene support, feeding help, mobility assistance, bed positioning, companionship, and basic observation.',
      },
    ],
  },
  {
    slug: 'icu-trained-nurse-at-home',
    title: 'ICU-Trained Nurse at Home',
    badge: 'HIGH PRIORITY CARE',
    subtitle: 'Advanced medical care for critical patients at home',
    shortDescription:
      'ICU-level monitoring, tracheostomy care, tube feeding support, and advanced nursing care at home.',
    description:
      'Nursing Sarathi provides ICU-trained nurses for patients who need continuous monitoring and advanced clinical care at home. This service is built for serious conditions where hospital-level attention, disciplined observation, and skilled handling are required outside the hospital.',
    services: [
      'ICU-level monitoring',
      'Tracheostomy care',
      'Tube feeding support',
      'Medication administration',
      'Critical patient handling',
      'Advanced nursing support',
    ],
    highlights: [
      'Available in 12-hour and 24-hour plans',
      'Suitable after ICU discharge and for high-dependency cases',
      'Focused on close monitoring, escalation readiness, and clinical discipline',
    ],
    faqs: [
      {
        question: 'When should a family choose an ICU-trained nurse?',
        answer:
          'This is the right fit when a patient needs advanced monitoring, airway or feeding-tube care, or close nursing oversight beyond routine home visits.',
      },
      {
        question: 'Can ICU care really be managed at home?',
        answer:
          'Yes. With the right equipment, doctor guidance, and an ICU-trained nurse, many patients can receive structured critical care safely at home.',
      },
      {
        question: 'What kind of support does the nurse provide?',
        answer:
          'Support can include vitals monitoring, tracheostomy care, tube feeding support, medication administration, and critical patient handling.',
      },
    ],
  },
  {
    slug: 'japa-care-mother-baby',
    title: 'Japa Care (Mother & Baby)',
    badge: 'MOTHER & BABY CARE',
    subtitle: 'Complete care for mother and newborn after delivery',
    shortDescription:
      'Newborn baby care, mother recovery support, feeding assistance, and routine help after delivery.',
    description:
      'Nursing Sarathi provides experienced caregivers for post-delivery care of mother and baby. We support newborn handling, hygiene, recovery routines, and feeding assistance so families feel confident during the first days and weeks after delivery.',
    services: [
      'Baby bathing & care',
      'Mother hygiene support',
      'Feeding assistance',
      'Sleep & routine management',
      'Basic monitoring',
    ],
    highlights: [
      'Available in 12-hour and 24-hour plans',
      "Supports both newborn care and the mother's recovery",
      'Helpful for families who need experienced post-delivery support at home',
    ],
    faqs: [
      {
        question: 'Who is this service best for?',
        answer:
          'It is ideal for new mothers, newborn babies, and families who want experienced help during post-delivery recovery at home.',
      },
      {
        question: 'What kind of care is included in Japa support?',
        answer:
          'The plan can include baby care, mother hygiene support, feeding assistance, routine management, and basic monitoring.',
      },
      {
        question: 'Can families choose day or full-time support?',
        answer:
          "Yes. We can arrange 12-hour or 24-hour care based on the family's schedule and support needs.",
      },
    ],
  },
  {
    slug: 'home-nursing-services',
    title: 'Home Nursing Services',
    badge: 'MEDICAL PROCEDURES',
    subtitle: 'Medical procedures at home by trained nurses',
    shortDescription:
      'Injection and IV support, wound dressing, catheter care, and feeding tube support at home.',
    description:
      'Nursing Sarathi offers professional nursing services at home for patients who need medical procedures without repeated hospital visits. Our nurses follow hygiene protocols and documented care steps to deliver safe, comfortable treatment at home.',
    services: [
      'Injection administration',
      'IV drip support',
      'Wound dressing',
      'Catheter care',
      'Feeding tube support',
    ],
    highlights: [
      'Available as flexible visits and plan-based support',
      'Useful for patients who need procedures without hospital travel',
      'Focused on safe, hygienic, and skilled nursing execution at home',
    ],
    faqs: [
      {
        question: 'What services are included in home nursing?',
        answer:
          'Home nursing can include injection support, IV drip administration, wound dressing, catheter care, and feeding tube support.',
      },
      {
        question: 'Can this service be booked for repeat visits?',
        answer:
          "Yes. We support one-time procedures as well as scheduled repeat visits depending on the patient's treatment plan.",
      },
      {
        question: 'Is a hospital visit necessary for routine nursing procedures?',
        answer:
          'Not always. Many prescribed nursing procedures can be handled safely at home by trained nurses with proper precautions.',
      },
    ],
  },
  {
    slug: 'post-surgery-care',
    title: 'Post Surgery Care',
    badge: 'RECOVERY CARE',
    subtitle: 'Smooth recovery after hospital discharge',
    shortDescription:
      'Wound care, mobility support, infection monitoring, and recovery observation after surgery.',
    description:
      'Nursing Sarathi helps patients recover safely at home after surgery with professional care and monitoring. The service is built to reduce stress after discharge and support healing through structured recovery assistance.',
    services: [
      'Wound dressing',
      'Infection monitoring',
      'Mobility assistance',
      'Medication support',
      'Recovery observation',
    ],
    highlights: [
      'Available in 12-hour and 24-hour care plans',
      'Useful after orthopedic, abdominal, or general surgery discharge',
      'Helps families manage recovery safely without repeated hospital trips',
    ],
    faqs: [
      {
        question: 'Who should choose post-surgery care at home?',
        answer:
          'It is ideal for patients returning home after surgery who need monitoring, wound care, mobility help, or structured recovery support.',
      },
      {
        question: 'What kind of support is included after discharge?',
        answer:
          'Support can include wound dressing, infection monitoring, mobility assistance, medication help, and recovery observation.',
      },
      {
        question: 'Can recovery care start immediately after discharge?',
        answer:
          'Yes. The care plan can begin as soon as the patient reaches home, based on discharge instructions and support requirements.',
      },
    ],
  },
];

export function getSpecialityProgram(slug: string) {
  return specialityPrograms.find((program) => program.slug === slug);
}
