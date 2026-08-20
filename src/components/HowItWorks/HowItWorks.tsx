import React from 'react';
import { Container, Card, Badge } from '../ui';
import { HOW_IT_WORKS_DATA } from '../../constants/theme';
import { FileText, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';
import { HowItWorksStep } from '../../types';

const stepIconMap = {
  FileText: FileText,
  CalendarCheck: CalendarCheck,
  Sparkles: Sparkles,
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 border-b border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="brand" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Simple 3-Step Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            How BrightNest Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Getting your home or office professionally cleaned is fast, straightforward, and stress-free.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_DATA.map((step: HowItWorksStep, idx) => {
            const IconComponent = stepIconMap[step.iconName] || Sparkles;

            return (
              <Card
                key={step.stepNumber}
                className="p-8 bg-slate-900/80 border-slate-800 relative space-y-6 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-5">
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-extrabold text-lg flex items-center justify-center">
                      0{step.stepNumber}
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Connector Indicator */}
                {idx < HOW_IT_WORKS_DATA.length - 1 && (
                  <div className="hidden md:flex items-center gap-1 text-slate-700 text-xs font-mono pt-4 border-t border-slate-800/80">
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
