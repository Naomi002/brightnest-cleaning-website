import React from 'react';
import { Container } from '../ui';
import { BUSINESS_META, NAV_ITEMS, CONTACT_INFO } from '../../constants/theme';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-16 text-slate-400">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg min-h-[44px]"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-400/40 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {BUSINESS_META.name}
              </span>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {BUSINESS_META.description}
            </p>
            <span className="text-xs font-semibold text-emerald-400/90 block">
              Serving Local Homes & Small Businesses
            </span>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cleaning Services List */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Regular Home Cleaning</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Move-In / Move-Out Cleaning</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Small Office Cleaning</a></li>
            </ul>
          </div>

          {/* Contact Information Placeholders */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Portfolio Demo Disclosure Banner */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center text-xs text-slate-400 leading-relaxed mb-8">
          <span className="font-semibold text-slate-300">Portfolio Demo:</span> BrightNest Cleaning is a fictional business concept created to demonstrate responsive web design, frontend development, form interactions, and conversion-focused user experience.
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_META.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Upwork Project Catalog Demo — Responsive Service Business Website
          </p>
        </div>
      </Container>
    </footer>
  );
};
