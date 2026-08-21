import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';
import { FinalCta } from '../components/FinalCta';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('regular-home-cleaning');

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    const quoteSection = document.querySelector('#quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <Services onSelectService={handleSelectService} />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Contact selectedService={selectedService} onServiceChange={setSelectedService} />
      <FinalCta />
    </>
  );
};
