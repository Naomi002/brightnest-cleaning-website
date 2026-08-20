import React from 'react';
import { Container, Card, Badge } from '../ui';
import { TESTIMONIALS_DATA } from '../../constants/theme';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-32 border-b border-slate-800/60 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="brand" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Customer Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            What Our Cleaning Clients Say
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Read natural reviews from local homeowners, renters, and office managers who rely on BrightNest Cleaning.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((review: TestimonialItem) => (
            <Card
              key={review.id}
              hoverEffect
              className="flex flex-col justify-between p-8 bg-slate-900/90 border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                {/* Star Rating Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-slate-700 group-hover:text-emerald-500/30 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-300 text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {review.roleLocation}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Rating Summary Banner (Honesty Fix) */}
        <div className="mt-12 text-center text-sm text-slate-300 flex items-center justify-center gap-2 flex-wrap">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-white">Customer Satisfaction Focus</span>
          <span className="text-slate-400">• Dedicated Quality Standards</span>
        </div>
      </Container>
    </section>
  );
};
