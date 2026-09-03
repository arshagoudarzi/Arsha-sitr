import React from 'react';
import { ArrowUp, Sparkles, Github, Mail, MessagesSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: navT.home, href: '#hero' },
    { label: navT.projects, href: '#projects' },
    { label: navT.services, href: '#services' },
    { label: navT.about, href: '#about' },
    { label: navT.skills, href: '#skills' },
    { label: navT.process, href: '#process' },
    { label: navT.contact, href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      aria-label="Footer"
      className="bg-white border-t border-slate-200/80 pt-16 pb-12 relative dark:bg-[#0B1B2B] dark:border-slate-700/80 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-tight dark:text-slate-100 transition-colors duration-200">
                {lang === 'fa' ? 'آرشا گودرزی' : 'Arsha Goudarzi'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed mb-4 dark:text-slate-400 transition-colors duration-200">
              {t.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold dark:bg-teal-500/15 dark:text-teal-400 transition-colors duration-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available Worldwide & Remote</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 dark:text-slate-400 transition-colors duration-200">
              {t.navigation}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-teal-600 transition-colors py-1 dark:text-slate-400 dark:hover:text-teal-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Language Switcher */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 dark:text-slate-400 transition-colors duration-200">
                {t.connect}
              </h4>
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="mailto:goudarziarsha@gmail.com"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-colors dark:bg-slate-800 dark:text-slate-400 dark:hover:text-teal-400 dark:hover:bg-teal-500/15"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="sms:+989128353856"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors dark:bg-slate-800 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-blue-500/15"
                  aria-label="SMS"
                >
                  <MessagesSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/Arshaholn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700"
                  aria-label="X (formerly Twitter)"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/arshagoudarzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium dark:text-slate-400 transition-colors duration-200">Language:</span>
              <div className="inline-flex items-center p-1 rounded-full bg-slate-100 text-xs font-semibold dark:bg-slate-800 transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => onLanguageChange('fa')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    lang === 'fa' ? 'bg-white text-teal-700 shadow-2xs font-bold dark:bg-slate-700 dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  فا
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    lang === 'en' ? 'bg-white text-teal-700 shadow-2xs font-bold dark:bg-slate-700 dark:text-teal-400' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>{t.craftedWith}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{t.rights}</span>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-teal-600 font-semibold transition-colors cursor-pointer dark:text-slate-300 dark:hover:text-teal-400"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
