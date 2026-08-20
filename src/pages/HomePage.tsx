import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';
import { FinalCta } from '../components/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  );
};
