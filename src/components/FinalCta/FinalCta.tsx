import React from 'react';
import { Container, Button } from '../ui';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const handleQuoteClick = () => {
    const quoteSection = document.querySelector('#quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      <Container size="md">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Book With Confidence
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready for a Cleaner, Stress-Free Space?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tell us what you need and get a free, no-obligation quote today.
          </p>

          <div className="pt-2 flex justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={handleQuoteClick}
              className="gap-2 font-bold bg-emerald-600 hover:bg-emerald-500 text-white min-h-[48px]"
            >
              <span>Get My Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
