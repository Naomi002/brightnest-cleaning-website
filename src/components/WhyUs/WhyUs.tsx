import React from 'react';
import { Container, Badge } from '../ui';
import { WHY_US_DATA } from '../../constants/theme';
import { CheckCircle, Calendar, Sparkles, Heart, CheckCircle2, Shield } from 'lucide-react';
import { WhyUsPoint } from '../../types';

const whyUsIconMap = {
  CheckCircle: CheckCircle,
  Calendar: Calendar,
  Sparkles: Sparkles,
  Heart: Heart,
};

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-32 border-b border-slate-800/60 bg-slate-900/40 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Value Points */}
          <div className="lg:col-span-7 space-y-8">
            <Badge variant="brand" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Why Choose BrightNest
            </Badge>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Designed Around Your Comfort & Peace of Mind
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                We believe a clean home shouldn't come with hassle. Our service is built around reliable standards, flexible scheduling, and dedicated customer care.
              </p>
            </div>

            {/* 4 Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {WHY_US_DATA.map((point: WhyUsPoint) => {
                const IconComponent = whyUsIconMap[point.iconName] || Shield;

                return (
                  <div
                    key={point.id}
                    className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-colors space-y-3"
                  >
                    <div className="p-3 w-fit rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{point.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Trust Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8 shadow-2xl relative">
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Service Standards</span>
                  <h3 className="text-2xl font-extrabold text-white">Why Homeowners Choose BrightNest</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                From weekly family homes to small office workspaces, our team takes pride in maintaining clean, fresh, and welcoming environments.
              </p>

              {/* Service Commitments List */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Professional Cleaning Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clear, Simple Booking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Satisfaction-Focused Service</span>
                </div>
              </div>

              {/* Quote Trigger Link */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-center space-y-2">
                <span className="text-xs text-slate-400 block">Ready to request your personalized quote?</span>
                <a
                  href="#quote"
                  className="inline-block text-xs font-bold text-emerald-400 hover:text-emerald-300 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  Request Your Free Quote Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
