import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Initialize language from URL hash or localStorage, default to 'fa'
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('/en') || hash === '#en') return 'en';
      if (hash.includes('/fa') || hash === '#fa') return 'fa';
      const stored = localStorage.getItem('arsha_portfolio_lang');
      if (stored === 'en' || stored === 'fa') return stored;
    }
    return 'fa';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle language change: persist to localStorage & update URL hash & HTML root
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('arsha_portfolio_lang', newLang);
    window.location.hash = `#/${newLang}`;
  };

  // Sync document direction, lang attribute, and SEO title/description
  useEffect(() => {
    const isRtl = lang === 'fa';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    if (lang === 'fa') {
      document.title = 'آرشا گودرزی | طراح و توسعه‌دهنده وب — Arsha Goudarzi';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'سایت شخصی و نمونه‌کارهای آرشا گودرزی، طراح و توسعه‌دهنده وب. ساخت وب‌سایت‌های مدرن، سریع، زیبا و اختصاصی.'
        );
      }
    } else {
      document.title = 'Arsha Goudarzi — Web Designer & Developer Portfolio';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Personal portfolio of Arsha Goudarzi, a young freelance web designer & developer crafting modern, playful, and high-performance websites.'
        );
      }
    }
  }, [lang]);

  // Section observer to track active nav item
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'services', 'about', 'skills', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-[#FAF9F5] text-[#1E2024] flex flex-col font-${lang === 'fa' ? 'persian' : 'sans'}`}>
      {/* Top Floating / Sticky Header */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero lang={lang} />
        <Portfolio lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Process lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onLanguageChange={handleLanguageChange} />
    </div>
  );
}
