import AcademicGrowth from '../assets/AcademicGrowth.png'
import ParentPartnership from '../assets/ParentPartnership.png'
import TeachingStrategy from '../assets/TeachingStrategy.png'
import ValueEducation from '../assets/ValueEducation.png'
export const schoolProfile = {
  name: 'Apex School',
  tagline: 'English Medium | Nursery to X',
  locationShort: 'Jhotwara, Jaipur',
  established: '2024',
  email: 'apexschooljaipur@mailinator.com' /* || import.meta.env.VITE_ENQUIRY_EMAIL || 'apexschooljaipur@gmail.com' */,
  enquiryEndpoint: import.meta.env.VITE_ENQUIRY_ENDPOINT || '',
  address:
    'Niwaru Link Road, Narayan Market, Jhotwara, Jaipur-302012, Rajasthan',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Apex%20School%20Niwaru%20Link%20Road%20Narayan%20Market%20Jhotwara%20Jaipur%20302012',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Apex%20School%20Niwaru%20Link%20Road%20Narayan%20Market%20Jhotwara%20Jaipur%20302012&t=&z=17&ie=UTF8&iwloc=&output=embed',
}

export const navigation = [
  ['About', '#about'],
  ['Academics', '#academics'],
  ['Facilities', '#facilities'],
  ['Admissions', '#admissions'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
] as const

export const heroHighlights = [
  ['Nursery-X', 'Classes offered'],
  ['English', 'Medium of learning'],
  ['2024', 'Established'],
  ['8 AM-2 PM', 'School hours'],
] as const

export const values = [
  {
    title: 'Value Education',
    text: 'A school culture that encourages discipline, punctuality, respect, and responsible habits.',
    image: ValueEducation,
  },
  {
    title: 'Academic Growth',
    text: 'Regular practice, clear classroom routines, and assessments that help students improve steadily.',
    image: AcademicGrowth,
  },
  {
    title: 'Teaching Strategy',
    text: 'Age-appropriate guidance with personal attention for different learning speeds and needs.',
    image: TeachingStrategy,
  },
  {
    title: 'Parent Partnership',
    text: 'Open communication with parents so progress, concerns, and next steps stay visible.',
    image: ParentPartnership,
  },
] as const;

export const programs = [
  {
    title: 'Pre-Primary',
    range: 'Nursery to UKG',
    text: 'Language, numbers, habits, play-based activities, and confidence building for early learners.',
  },
  {
    title: 'Primary School',
    range: 'Class I to V',
    text: 'Strong foundations in English, mathematics, EVS, general awareness, reading, and writing.',
  },
  {
    title: 'Middle School',
    range: 'Class VI to VIII',
    text: 'Concept clarity, regular assignments, revision planning, and guided subject practice.',
  },
  {
    title: 'Senior Classes',
    range: 'Class IX to X',
    text: 'Focused academic preparation, disciplined study routines, and frequent progress reviews.',
  },
] as const

export const facilities = [
  'Modern classrooms',
  'Safe campus environment',
  'Regular assessments',
  'Doubt support',
  'Parent-teacher interaction',
  'Disciplined school routine',
  'Activity-based learning',
  'Clean learning spaces',
] as const

export const admissionSteps = [
  'Share your enquiry through the form or visit the campus.',
  'Discuss class availability, documents, timings, and fee details.',
  'Complete the admission process with the school office.',
] as const

export const timings = [
  ['Monday to Saturday', '8:00 AM - 2:00 PM'],
  ['Sunday', 'Closed'],
  ['Office Visit', 'During school working hours'],
] as const

export const testimonials = [
  {
    quote:
      'The school environment is supportive and focused. Teachers give personal attention and keep parents informed.',
    name: 'Parent Feedback',
  },
  {
    quote:
      'A good campus for children with discipline, learning support, and a clear routine for studies.',
    name: 'Admission Enquiry Parent',
  },
  {
    quote:
      'The staff guided us properly about admission and class details during the campus visit.',
    name: 'Local Parent',
  },
] as const
