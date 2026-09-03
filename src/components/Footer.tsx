import React from 'react';
import { ArrowUp, Heart, Sparkles, Github, Instagram, Mail, MessageCircle } from 'lucide-react';
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
      className="bg-white border-t border-stone-200/80 pt-16 pb-12 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-100">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="font-bold text-stone-900 text-lg tracking-tight">
                {lang === 'fa' ? 'آرشا گودرزی' : 'Arsha Goudarzi'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm leading-relaxed mb-4">
              {t.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available Worldwide & Remote</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">
              {t.navigation}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-600 hover:text-indigo-600 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Language Switcher */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">
                {t.connect}
              </h4>
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="mailto:goudarziarsha@gmail.com"
                  className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/arshagoudarzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="Telegram"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/arshagoudarzi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/arshagoudarzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 font-medium">Language:</span>
              <div className="inline-flex items-center p-1 rounded-full bg-stone-100 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => onLanguageChange('fa')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    lang === 'fa' ? 'bg-white text-indigo-700 shadow-2xs font-bold' : 'text-stone-600'
                  }`}
                >
                  فا
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    lang === 'en' ? 'bg-white text-indigo-700 shadow-2xs font-bold' : 'text-stone-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <span>{t.craftedWith}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{t.rights}</span>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-700 hover:text-indigo-600 font-semibold transition-colors cursor-pointer"
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
