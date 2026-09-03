import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Send, Eye, CheckCircle2, Code2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Mascot } from './Mascot';
import { ChatBot } from './ChatBot';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Soft cute gradient background blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-200/40 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-pink-200/35 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-100/50 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start"
          >
            {/* Availability Status Pill */}
            <motion.div
              id="hero-status-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs shadow-emerald-500/5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.statusBadge}</span>
            </motion.div>

            {/* Greeting */}
            <motion.h2
              id="hero-greeting"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight dark:text-slate-200"
            >
              {t.greeting}
            </motion.h2>

            {/* Main Headline */}
            <motion.h1
              id="hero-main-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.2] sm:leading-[1.18] tracking-tight mb-5 max-w-2xl"
            >
              {lang === 'fa' ? (
                <>
                  <span className="text-slate-900 dark:text-white">طراح و سازنده </span>
                  <span className="text-teal-600 dark:text-teal-400">سایت‌های مدرن</span>
                  <span className="text-slate-900 dark:text-white"> و </span>
                  <span className="text-teal-700 dark:text-teal-300">جذاب</span>
                </>
              ) : (
                <>
                  <span className="text-slate-900 dark:text-white">I design &amp; build </span>
                  <span className="text-teal-600 dark:text-teal-400">modern websites</span>
                  <span className="text-slate-900 dark:text-white"> people </span>
                  <span className="text-teal-700 dark:text-teal-300">love to use.</span>
                </>
              )}
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-8 dark:text-slate-400"
            >
              {t.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto mb-10"
            >
              {/* Primary CTA */}
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => scrollToElement('projects')}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-slate-800 hover:from-teal-500 hover:to-slate-700 active:scale-95 text-white font-bold text-base shadow-lg shadow-teal-600/30 hover:shadow-teal-500/40 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Moving sheen highlight */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{t.viewWork}</span>
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-secondary-cta"
                type="button"
                onClick={() => scrollToElement('contact')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-white active:scale-95 text-slate-800 font-bold text-base border border-slate-200 shadow-md shadow-slate-200/40 hover:shadow-lg hover:border-teal-300 transition-all duration-300 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700 dark:hover:border-teal-500/60"
              >
                <Send className="w-4 h-4 text-teal-600 transition-transform group-hover:translate-x-0.5" />
                <span>{t.letsTalk}</span>
              </button>
            </motion.div>

            {/* Specialties & Tech Stack Pills */}
            <motion.div
              id="hero-specialties-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 border-t border-slate-200/70 dark:border-slate-700/60"
            >
              <span className="text-xs font-semibold text-slate-600 me-2 flex items-center gap-1 dark:text-slate-400">
                <Code2 className="w-3.5 h-3.5 text-teal-500" />
                {lang === 'fa' ? 'تخصص‌ها:' : 'Stack:'}
              </span>
              {t.specialties.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-white/80 border border-slate-200/80 text-slate-700 text-xs font-medium shadow-2xs hover:border-teal-200 hover:text-teal-600 transition-colors dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive Mascot & Brand Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Cute backdrop card container */}
            <div className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-[36px] bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm shadow-teal-100/40 flex flex-col items-center dark:bg-[#0E2236]/80 dark:border-slate-700/70 dark:shadow-black/20">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between w-full mb-4 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-slate-600 tracking-wide dark:text-slate-400">
                  arsha-studio ~ v2.4
                </span>
              </div>

              {/* The Living Mascot Component */}
              <div className="my-2">
                <Mascot lang={lang} size="lg" />
              </div>

              {/* Stats Bar inside Card */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-2xl bg-[#EAF2FB] border border-slate-200/60 text-center transition-colors duration-200 dark:bg-slate-800/70 dark:border-slate-700"
                >
                  <span className="block text-lg sm:text-xl font-black text-teal-600 leading-tight dark:text-teal-400">
                    {t.statsProjects}
                  </span>
                  <span className="text-[11px] text-slate-600 font-medium dark:text-slate-400">
                    {lang === 'fa' ? 'طراحی و تحویل اختصاصی' : 'Modern & Responsive'}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-2xl bg-[#EAF2FB] border border-slate-200/60 text-center transition-colors duration-200 dark:bg-slate-800/70 dark:border-slate-700"
                >
                  <span className="block text-lg sm:text-xl font-black text-pink-500 leading-tight">
                    {t.statsSatisfaction}
                  </span>
                  <span className="text-[11px] text-slate-600 font-medium dark:text-slate-400">
                    {lang === 'fa' ? 'پایبندی به زمان و کیفیت' : 'Speed & Detail'}
                  </span>
                </motion.div>
              </div>

              {/* AI Chat Assistant */}
              <div className="w-full mt-4">
                <ChatBot lang={lang} />
              </div>
            </div>

            {/* Floating cute mini badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-3 sm:-left-5 px-3.5 py-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'fa' ? 'طراحی مدرن' : 'Modern UX'}</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-3 -right-3 sm:-right-4 px-3.5 py-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{lang === 'fa' ? 'کدنویسی تمیز' : 'Clean Code'}</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Down arrow scroll hint */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <button
          type="button"
          onClick={() => scrollToElement('projects')}
          className="p-2.5 rounded-full text-slate-400 hover:text-teal-600 hover:bg-slate-100 transition-colors animate-bounce cursor-pointer dark:text-slate-500 dark:hover:text-teal-400 dark:hover:bg-slate-800"
          aria-label={lang === 'fa' ? 'اسکرول به پروژه‌ها' : 'Scroll down to projects'}
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
