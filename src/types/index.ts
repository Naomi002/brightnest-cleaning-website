export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'ShieldCheck' | 'Home' | 'Building2';
  includedTasks: string[];
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: 'CheckCircle' | 'Calendar' | 'Sparkles' | 'Heart';
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: 'FileText' | 'CalendarCheck' | 'Sparkles';
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleLocation: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
  disclaimer: string;
}

export interface BusinessMeta {
  name: string;
  tagline: string;
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  cleaningType: string;
  preferredDate: string;
  message: string;
}

export interface QuoteFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  cleaningType?: string;
  preferredDate?: string;
  message?: string;
}
