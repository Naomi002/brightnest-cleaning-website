import React from 'react';
import { Container, Card, Badge } from '../ui';
import { SERVICES_DATA } from '../../constants/theme';
import { Home, Sparkles, ShieldCheck, Building2, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';

const iconMap = {
  Home: Home,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Building2: Building2,
};

export const Services: React.FC = () => {
  const handleLearnMoreClick = (serviceId: string) => {
    const quoteSection = document.querySelector('#quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch a custom event or trigger select change
      setTimeout(() => {
        const selectElement = document.querySelector('#cleaningType') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = serviceId;
          const event = new Event('change', { bubbles: true });
          selectElement.dispatchEvent(event);
        }
      }, 300);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 border-b border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="brand" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Professional Cleaning Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Cleaning Solutions Tailored to Your Space
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you need recurring maintenance for your home, an intensive deep clean, or workspace care for your office, our team delivers spotless results.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <Card
                key={service.id}
                hoverEffect
                className="flex flex-col justify-between p-6 sm:p-8 group border-slate-800/90 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="p-3.5 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Included Tasks List */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Included Tasks:
                    </span>
                    {service.includedTasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More / Request Quote Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={() => handleLearnMoreClick(service.id)}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-950/80 border border-slate-800 group-hover:border-emerald-500/40 text-xs font-semibold text-emerald-400 hover:text-white flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-[44px]"
                  >
                    <span>Request Quote For This</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
