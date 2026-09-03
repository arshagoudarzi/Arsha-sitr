import React from 'react';
import { motion } from 'motion/react';
import { User, Sparkles, Heart, FileText, CheckCircle, Award, Coffee, Laptop } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-16 sm:py-24 bg-slate-100/50 border-y border-slate-200/60 relative dark:bg-slate-800/40 dark:border-slate-700/60 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-700 text-xs font-bold tracking-wide uppercase mb-3 dark:bg-teal-500/15 dark:border-teal-500/30 dark:text-teal-400 transition-colors duration-200">
            <User className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 dark:text-slate-100 transition-colors duration-200">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed dark:text-slate-400 transition-colors duration-200">
            {t.intro}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Avatar / Stylized Illustration Card */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'fa' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-[32px] p-6 sm:p-8 bg-white border border-slate-200/80 shadow-sm shadow-teal-100/30 dark:bg-[#10283E] dark:border-slate-700 transition-colors duration-200">
              {/* Cute Stylized Avatar Portrait */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-3xl bg-gradient-to-tr from-teal-100 via-pink-50 to-amber-100 p-1.5 shadow-inner border border-slate-100 flex items-center justify-center overflow-hidden group dark:from-teal-500/20 dark:via-pink-500/10 dark:to-amber-500/20 dark:border-slate-700 transition-colors duration-200">
                
                {/* SVG Character / Designer Avatar */}
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background warm circle */}
                  <circle cx="80" cy="80" r="70" fill="#F0FDFA" />
                  
                  {/* Body & Hoodie */}
                  <path
                    d="M36 150 C36 116 54 104 80 104 C106 104 124 116 124 150 Z"
                    fill="#4F46E5"
                  />
                  {/* Hoodie drawstrings */}
                  <path d="M72 108 V126" stroke="#99F6E4" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M88 108 V126" stroke="#99F6E4" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Neck */}
                  <rect x="70" y="86" width="20" height="22" rx="6" fill="#FCD34D" />

                  {/* Head */}
                  <circle cx="80" cy="65" r="28" fill="#FDE68A" />

                  {/* Hair (Modern stylish cut) */}
                  <path
                    d="M52 64 C52 44 64 36 82 36 C100 36 110 46 110 60 C104 52 94 48 80 50 C68 52 58 58 52 64 Z"
                    fill="#1E2024"
                  />
                  {/* Hair side tufts */}
                  <path d="M52 58 Q48 70 54 75" stroke="#1E2024" strokeWidth="4" strokeLinecap="round" />

                  {/* Round Modern Glasses */}
                  <rect x="58" y="58" width="18" height="15" rx="7" fill="none" stroke="#374151" strokeWidth="2.5" />
                  <rect x="84" y="58" width="18" height="15" rx="7" fill="none" stroke="#374151" strokeWidth="2.5" />
                  <path d="M76 65 H84" stroke="#374151" strokeWidth="2.5" />

                  {/* Cheerful Eyes */}
                  <ellipse cx="67" cy="65" rx="2.5" ry="3" fill="#1E2024" />
                  <ellipse cx="93" cy="65" rx="2.5" ry="3" fill="#1E2024" />
                  <circle cx="66" cy="64" r="0.8" fill="#FFFFFF" />
                  <circle cx="92" cy="64" r="0.8" fill="#FFFFFF" />

                  {/* Rosy Cheeks */}
                  <circle cx="58" cy="73" r="4" fill="#F472B6" opacity="0.6" />
                  <circle cx="102" cy="73" r="4" fill="#F472B6" opacity="0.6" />

                  {/* Friendly Smile */}
                  <path d="M74 76 Q80 82 86 76" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>

                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200/80 text-[10px] font-bold text-slate-700 shadow-2xs flex items-center gap-1 dark:bg-[#0E2236]/90 dark:border-slate-700 dark:text-slate-300 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Arsha G.</span>
                </div>
              </div>

              {/* Badges around card */}
              <div className="mt-5 text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-200">
                  {lang === 'fa' ? 'آرشا گودرزی' : 'Arsha Goudarzi'}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 dark:text-slate-400 transition-colors duration-200">
                  {lang === 'fa' ? 'طراح فرانت‌اند و عاشق تایپوگرافی' : 'Frontend Craftsman & UI Enthusiast'}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-teal-50 text-teal-700 text-xs font-semibold dark:bg-teal-500/15 dark:text-teal-400 transition-colors duration-200">
                    <Laptop className="w-3 h-3" />
                    <span>Modern Web</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-pink-50 text-pink-700 text-xs font-semibold dark:bg-pink-500/15 dark:text-pink-400 transition-colors duration-200">
                    <Heart className="w-3 h-3" />
                    <span>Pixel Perfect</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 text-amber-700 text-xs font-semibold dark:bg-amber-500/15 dark:text-amber-400 transition-colors duration-200">
                    <Coffee className="w-3 h-3" />
                    <span>Fast Delivery</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'fa' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8 dark:text-slate-300 transition-colors duration-200">
              <p>{t.body1}</p>
              <p>{t.body2}</p>
            </div>

            {/* Core Approaches Grid */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 dark:text-slate-100 transition-colors duration-200">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{t.approachTitle}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.approaches.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-teal-200 transition-colors dark:bg-[#10283E] dark:border-slate-700 dark:hover:border-teal-500/40"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 transition-colors duration-200">{item.title}</h5>
                        <p className="text-xs text-slate-600 mt-1 leading-normal dark:text-slate-400 transition-colors duration-200">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resume Link / Contact Trigger */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>{t.downloadResume}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Small Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center hover:shadow-xs transition-shadow dark:bg-[#10283E] dark:border-slate-700"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1 tracking-tight dark:text-slate-100 transition-colors duration-200">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
