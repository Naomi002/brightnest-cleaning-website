import {
  NavItem,
  BusinessMeta,
  ContactInfo,
  ServiceItem,
  TestimonialItem,
  WhyUsPoint,
  HowItWorksStep,
  FaqItem,
} from '../types';

export const BUSINESS_META: BusinessMeta = {
  name: 'BrightNest Cleaning',
  tagline: 'A Cleaner Home. More Time for What Matters.',
  description: 'Professional, reliable cleaning for busy homes and small offices. Easy booking, trusted cleaners, and a spotless space every time.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#quote' },
];

export const HERO_TRUST_STRIP = [
  'Background-Checked Cleaners',
  'Eco-Friendly Products',
  'Satisfaction Guarantee',
  'Customer-Focused Service',
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'regular-home-cleaning',
    title: 'Regular Home Cleaning',
    description: 'Consistent recurring cleaning designed to keep your living space fresh, tidy, and organized every week or month.',
    iconName: 'Home',
    includedTasks: [
      'Dusting, vacuuming, and floor mopping',
      'Kitchen counter & appliance exterior wiping',
      'Bathroom sanitization & mirror polishing',
    ],
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'An intensive, detailed top-to-bottom clean focusing on accumulated grime, hidden dust, and hard-to-reach areas.',
    iconName: 'Sparkles',
    includedTasks: [
      'Baseboard, door frame, and vent dusting',
      'Deep kitchen grease removal & appliance detailing',
      'Scrubbing tile grout & fixture descaling',
    ],
  },
  {
    id: 'move-in-move-out',
    title: 'Move-In / Move-Out Cleaning',
    description: 'Thorough preparation cleaning ensuring a pristine, ready-to-live-in home or landlord-ready property handover.',
    iconName: 'ShieldCheck',
    includedTasks: [
      'Inside cabinet, drawer, and shelf cleaning',
      'Oven and refrigerator interior detailing',
      'Complete wall spot cleaning & window sill wiping',
    ],
  },
  {
    id: 'small-office-cleaning',
    title: 'Small Office Cleaning',
    description: 'Professional workspace maintenance creating a healthy, pristine, and welcoming environment for staff and clients.',
    iconName: 'Building2',
    includedTasks: [
      'Desk, workstation, and electronics dusting',
      'Breakroom & restroom sanitization',
      'Trash removal & floor care maintenance',
    ],
  },
];

export const WHY_US_DATA: WhyUsPoint[] = [
  {
    id: 'professional-standards',
    title: 'Professional Cleaning Standards',
    description: 'Our trained cleaning technicians follow standardized checklists to ensure consistent, thorough results every visit.',
    iconName: 'CheckCircle',
  },
  {
    id: 'flexible-scheduling',
    title: 'Flexible Scheduling',
    description: 'Select recurring or single-service appointments that fit your schedule, with hassle-free rescheduling options.',
    iconName: 'Calendar',
  },
  {
    id: 'clear-simple-booking',
    title: 'Clear, Simple Booking',
    description: 'Get transparent pricing estimates without hidden fees or complex long-term contract requirements.',
    iconName: 'Sparkles',
  },
  {
    id: 'satisfaction-focused',
    title: 'Satisfaction-Focused Service',
    description: 'We prioritize your peace of mind. If any area is missed, notify us within 24 hours for a prompt re-clean.',
    iconName: 'Heart',
  },
];

export const HOW_IT_WORKS_DATA: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Request a Free Quote',
    description: 'Tell us about your space and preferred service in under 60 seconds with our online quote form.',
    iconName: 'FileText',
  },
  {
    stepNumber: 2,
    title: 'Choose Your Preferred Time',
    description: 'Pick a convenient date and time window that fits seamlessly into your household or work schedule.',
    iconName: 'CalendarCheck',
  },
  {
    stepNumber: 3,
    title: 'Enjoy Your Clean Space',
    description: 'Relax while our background-checked professionals transform your home or office into a spotless sanctuary.',
    iconName: 'Sparkles',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Sarah M.',
    roleLocation: 'Homeowner • Bi-Weekly Client',
    content: 'BrightNest has been a lifesaver for our family. Coming home after a long workday to a sparkling clean house gives us our weekends back. Reliable and incredibly thorough!',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Daniel R.',
    roleLocation: 'Small Business Owner • Weekly Office Client',
    content: 'We hired BrightNest for our 12-person office space. The team is always punctual, professional, and leaves our breakroom and workspaces spotless. Highly recommended!',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Priya K.',
    roleLocation: 'Renter • Move-Out Cleaning',
    content: 'Booked their Move-Out cleaning service for my apartment. They got every corner, including inside the oven and cabinets. Got my full security deposit back without issue.',
    rating: 5,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is included in a standard cleaning?',
    answer: 'Standard cleaning includes dusting all accessible surfaces, vacuuming carpets, mopping hard floors, wiping kitchen countertops and exterior appliances, cleaning bathroom sinks, toilets, showers, and emptying trash bins.',
  },
  {
    id: 'faq-2',
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No! Our professional cleaning technicians arrive fully equipped with high-grade equipment and non-toxic, eco-friendly cleaning supplies. If you have specific specialty products you prefer us to use, just let us know.',
  },
  {
    id: 'faq-3',
    question: 'Are your cleaners background-checked?',
    answer: 'Yes, background checks and reference verifications are standard in our hiring process, as presented in our service model.',
  },
  {
    id: 'faq-4',
    question: 'Can I reschedule my appointment?',
    answer: 'Of course. You can easily reschedule or cancel your appointment free of charge by notifying us at least 24 hours prior to your scheduled cleaning window.',
  },
  {
    id: 'faq-5',
    question: 'What if I am not satisfied with the service?',
    answer: 'Your peace of mind is our priority. If any area of your home or office falls short of your expectations, contact us within 24 hours of your service and we will send a team member back to re-clean those specific areas free of charge.',
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'hello@brightnestcleaning.com',
  phone: '(555) 123-4567',
  address: 'Serving Metro Area & Nearby Communities',
  hours: 'Monday – Saturday: 7:30 AM – 7:00 PM',
  disclaimer: 'Portfolio Demo: BrightNest Cleaning is a fictional business concept created to demonstrate responsive web design, frontend development, form interactions, and conversion-focused user experience.',
};
