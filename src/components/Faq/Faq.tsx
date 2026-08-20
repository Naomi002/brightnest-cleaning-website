import React, { useState } from 'react';
import { Container, Badge } from '../ui';
import { FAQ_DATA } from '../../constants/theme';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../../types';

export const Faq: React.FC = () => {
  // Only one item expanded at a time
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-32 border-b border-slate-800/60 bg-slate-900/40 relative">
      <Container size="md">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <Badge variant="brand" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Everything you need to know about booking, cleaning products, background checks, and our satisfaction guarantee.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq: FaqItem) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 min-h-[52px] transition-colors"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 bg-slate-950/40"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Have additional questions? Feel free to contact our local support team directly via our quote form below or by phone.
        </div>
      </Container>
    </section>
  );
};
