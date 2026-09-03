import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Theme } from '../theme';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, activeSection, theme, onToggleTheme }) => {
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
          className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 border-2 ${
            isScrolled
              ? 'py-2.5 bg-[#EAF2FB]/90 backdrop-blur-md border-teal-400/70 shadow-md shadow-teal-500/10 dark:bg-[#0E2236]/90 dark:border-teal-500/50 dark:shadow-teal-500/10'
              : 'py-3 bg-[#EAF2FB]/70 backdrop-blur-xs border-teal-400/60 shadow-sm shadow-teal-500/5 dark:bg-[#0E2236]/70 dark:border-teal-500/40'
          }`}
        >
          {/* Logo */}
          <a
            id="brand-logo"
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-xs shadow-teal-500/25 group-hover:scale-105 transition-transform duration-200">
              <span className="text-base font-black">A</span>
            </div>
            <div className="flex flex-col text-start">
              <span className="font-bold text-slate-900 tracking-tight leading-none group-hover:text-teal-600 transition-colors dark:text-slate-100 dark:group-hover:text-teal-400">
                {lang === 'fa' ? 'آرشا گودرزی' : 'Arsha G.'}
              </span>
              <span className="text-[10px] text-slate-600 font-medium tracking-wide dark:text-slate-400">
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
                      ? 'text-teal-600 font-semibold dark:text-teal-400'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-teal-50 border border-teal-200/50 rounded-full -z-10 dark:bg-teal-500/15 dark:border-teal-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions: Theme Toggle, Language Switcher & Quick CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? (lang === 'fa' ? 'حالت روشن' : 'Switch to light mode') : (lang === 'fa' ? 'حالت شب' : 'Switch to dark mode')}
              className="p-2 rounded-full bg-white/70 border border-slate-300/60 text-slate-700 hover:text-teal-600 hover:border-teal-300 transition-all duration-200 dark:bg-slate-800/70 dark:border-slate-600 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:border-teal-500 cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Language Switcher Pill: FA | EN */}
            <div
              id="language-switcher"
              className="inline-flex items-center p-1 rounded-full bg-slate-200/70 border border-slate-300/60 text-xs font-semibold dark:bg-slate-800/70 dark:border-slate-600"
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
                    ? 'bg-white text-teal-700 shadow-xs font-bold dark:bg-slate-100 dark:text-teal-700'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
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
                    ? 'bg-white text-teal-700 shadow-xs font-bold dark:bg-slate-100 dark:text-teal-700'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
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
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-600 to-slate-800 text-white hover:from-teal-500 hover:to-slate-700 hover:shadow-lg hover:shadow-teal-500/30 active:scale-95 transition-all duration-300 shadow-md shadow-teal-600/20 dark:from-teal-500 dark:to-slate-700 dark:text-white dark:hover:shadow-teal-500/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.hireMe}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-300 dark:hover:bg-slate-700/60"
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
            className="lg:hidden mx-4 mt-2 p-5 rounded-3xl bg-[#EAF2FB]/98 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-slate-900/5 max-w-lg sm:mx-auto dark:bg-[#0E2236]/98 dark:border-slate-700/80"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-teal-50 text-teal-700 font-semibold dark:bg-teal-500/15 dark:text-teal-400'
                      : 'text-slate-700 hover:bg-slate-100/80 dark:text-slate-300 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}

                <div className="pt-3 mt-2 border-t border-slate-200/80 flex items-center justify-between dark:border-slate-700/60">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'fa' ? 'تغییر زبان:' : 'Language:'}
                </span>
                <div className="inline-flex items-center p-1 rounded-full bg-slate-200/70 text-xs font-semibold dark:bg-slate-800/80">
                  <button
                    type="button"
                    onClick={() => {
                      onLanguageChange('fa');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full ${
                      lang === 'fa' ? 'bg-white text-teal-700 shadow-xs dark:text-teal-500' : 'text-slate-600 dark:text-slate-400'
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
                      lang === 'en' ? 'bg-white text-teal-700 shadow-xs dark:text-teal-500' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Mobile Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="mt-2 flex items-center justify-between w-full px-4 py-2.5 rounded-2xl bg-white/60 border border-slate-200/80 text-sm font-medium text-slate-700 dark:bg-slate-800/60 dark:border-slate-700/70 dark:text-slate-300"
              >
                <span className="flex items-center gap-2">
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-teal-600" />}
                  <span>{theme === 'dark' ? (lang === 'fa' ? 'حالت روشن' : 'Light mode') : (lang === 'fa' ? 'حالت شب' : 'Dark mode')}</span>
                </span>
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 shadow-xs"
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
