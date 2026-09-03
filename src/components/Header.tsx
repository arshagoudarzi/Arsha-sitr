import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang].nav;

  // Listen to scroll to shrink header slightly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.home, href: '#hero' },
    { id: 'projects', label: t.projects, href: '#projects' },
    { id: 'services', label: t.services, href: '#services' },
    { id: 'about', label: t.about, href: '#about' },
    { id: 'skills', label: t.skills, href: '#skills' },
    { id: 'process', label: t.process, href: '#process' },
    { id: 'contact', label: t.contact, href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2.5' : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav
          id="navbar"
          aria-label="Main Navigation"
          className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 ${
            isScrolled
              ? 'py-2.5 bg-[#FAF9F5]/90 backdrop-blur-md border border-stone-200/80 shadow-sm'
              : 'py-3 bg-[#FAF9F5]/70 backdrop-blur-xs border border-stone-200/50'
          }`}
        >
          {/* Logo */}
          <a
            id="brand-logo"
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-xs shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <span className="text-base font-black">A</span>
            </div>
            <div className="flex flex-col text-start">
              <span className="font-bold text-stone-900 tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
                {lang === 'fa' ? 'آرشا گودرزی' : 'Arsha G.'}
              </span>
              <span className="text-[10px] text-stone-600 font-medium tracking-wide">
                {lang === 'fa' ? 'طراح و برنامه‌نویس وب' : 'Web Designer & Dev'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-indigo-600 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-indigo-50 border border-indigo-200/50 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions: Language Switcher & Quick CTA */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher Pill: FA | EN */}
            <div
              id="language-switcher"
              className="inline-flex items-center p-1 rounded-full bg-stone-200/70 border border-stone-300/60 text-xs font-semibold"
              role="radiogroup"
              aria-label="Language selection"
            >
              <button
                id="btn-lang-fa"
                type="button"
                onClick={() => onLanguageChange('fa')}
                aria-pressed={lang === 'fa'}
                className={`relative px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === 'fa'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                فا
              </button>
              <button
                id="btn-lang-en"
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={lang === 'en'}
                className={`relative px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick "Hire Me" button (Desktop) */}
            <a
              id="header-cta-btn"
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-stone-900 text-white hover:bg-indigo-600 active:scale-95 transition-all duration-200 shadow-xs shadow-stone-900/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.hireMe}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-stone-700 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={t.menu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 p-5 rounded-3xl bg-[#FAF9F5]/98 backdrop-blur-xl border border-stone-200/90 shadow-lg shadow-stone-900/5 max-w-lg sm:mx-auto"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100/80'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  {lang === 'fa' ? 'تغییر زبان:' : 'Language:'}
                </span>
                <div className="inline-flex items-center p-1 rounded-full bg-stone-200/70 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => {
                      onLanguageChange('fa');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full ${
                      lang === 'fa' ? 'bg-white text-indigo-700 shadow-xs' : 'text-stone-600'
                    }`}
                  >
                    فارسی
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onLanguageChange('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full ${
                      lang === 'en' ? 'bg-white text-indigo-700 shadow-xs' : 'text-stone-600'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-xs"
              >
                <span>{t.hireMe}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
