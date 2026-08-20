import React from 'react';
import { Container, Button, Badge } from '../ui';
import { HERO_TRUST_STRIP } from '../../constants/theme';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle, Home, CalendarCheck, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 lg:py-28 overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/60">
      {/* Background Glow Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 blur-[110px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <Badge variant="brand" className="gap-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Professional Local Cleaning Care
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              A Cleaner Home.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                More Time for What Matters.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Professional, reliable cleaning for busy homes and small offices. Easy booking, trusted cleaners, and a spotless space every time.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                size="lg"
                variant="primary"
                className="gap-2 text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white min-h-[48px] focus-visible:ring-2 focus-visible:ring-emerald-400"
                onClick={() => handleScrollTo('#quote')}
              >
                Get My Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold border-slate-700 text-slate-200 hover:bg-slate-900 min-h-[48px] focus-visible:ring-2 focus-visible:ring-emerald-400"
                onClick={() => handleScrollTo('#services')}
              >
                View Cleaning Services
              </Button>
            </div>

            {/* Realistic Trust Strip */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HERO_TRUST_STRIP.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Cleaning Composition Visual (Zero Stock Images) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">BrightNest Standard Care</h3>
                      <p className="text-xs text-slate-400">Residential & Office Maintenance</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                    Quality Care
                  </span>
                </div>

                {/* Service Cards Stack */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Regular & Deep Clean Options</div>
                        <div className="text-[11px] text-slate-400">Eco-Friendly Solutions</div>
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Background-Checked Cleaners</div>
                        <div className="text-[11px] text-slate-400">Trained Professional Staff</div>
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <CalendarCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Flexible Scheduling</div>
                        <div className="text-[11px] text-slate-400">Easy Rescheduling Options</div>
                      </div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Honesty Fix Rating / Trust Banner */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Heart className="w-4 h-4 text-emerald-400" />
                    <span>Satisfaction-Focused Service</span>
                  </div>
                  <span className="text-xs text-slate-400">Reliable Local Team</span>
                </div>
              </div>

              {/* Accent Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-20 blur-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
