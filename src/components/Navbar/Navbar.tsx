import React, { useState, useEffect } from 'react';
import { Container, Button } from '../ui';
import { NAV_ITEMS, BUSINESS_META, CONTACT_INFO } from '../../constants/theme';
import { Sparkles, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'why-us', 'reviews', 'faq', 'quote'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 150) {
        setActiveSection('#');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('#');
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(href);
      }
    }
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    const quoteSection = document.querySelector('#quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('#quote');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1 min-h-[44px]"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-400/40 transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {BUSINESS_META.name}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400/80">
                Residential & Office Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md px-2 py-1 min-h-[44px] flex items-center ${
                    isActive ? 'text-emerald-400 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Action & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-slate-900 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <Button
              size="sm"
              variant="primary"
              onClick={handleQuoteClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25 min-h-[44px] focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-800/80 bg-slate-950 space-y-4 px-2">
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-medium rounded-lg px-4 py-3 transition-colors min-h-[44px] flex items-center ${
                      isActive ? 'bg-slate-900 text-emerald-400 font-bold' : 'text-slate-200 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-sm font-semibold text-slate-300 flex items-center justify-center gap-2 py-3 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Us: {CONTACT_INFO.phone}</span>
              </a>
              <Button
                size="md"
                variant="primary"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white min-h-[44px]"
                onClick={handleQuoteClick}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
