import React from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  FileCheck2,
  Figma,
  Code2,
  Rocket,
  Sparkles,
  ArrowDown,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProcessProps {
  lang: Language;
}

export const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = translations[lang].process;

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageCircle className="w-5 h-5 text-teal-600" />;
      case 1:
        return <FileCheck2 className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Figma className="w-5 h-5 text-purple-600" />;
      case 3:
        return <Code2 className="w-5 h-5 text-pink-600" />;
      case 4:
        return <Rocket className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section
      id="process"
      aria-label="Workflow and Process"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-700 text-xs font-bold tracking-wide uppercase mb-3 dark:bg-teal-500/15 dark:border-teal-500/30 dark:text-teal-400 transition-colors duration-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 dark:text-slate-100 transition-colors duration-200">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed dark:text-slate-400 transition-colors duration-200">
            {t.subtitle}
          </p>
        </div>

        {/* 5-Step Connected Timeline */}
        <div className="relative">
          {/* Subtle Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-teal-200 via-pink-200 to-amber-200 -translate-y-6 -z-10 rounded-full dark:from-teal-500/30 dark:via-pink-500/30 dark:to-amber-500/30 transition-colors duration-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group dark:bg-[#10283E] dark:border-slate-700 dark:hover:shadow-lg"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF2FB] border border-slate-200/80 flex items-center justify-center p-2.5 shadow-2xs group-hover:scale-105 transition-transform dark:bg-slate-800/80 dark:border-slate-700 transition-colors duration-200">
                      {getStepIcon(index)}
                    </div>
                    <span className="text-sm font-black text-teal-600 font-mono dark:text-teal-400">
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-teal-600 transition-colors dark:text-slate-100 dark:group-hover:text-teal-400">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <span className="text-xs font-semibold text-slate-600 block mb-3 dark:text-slate-400 transition-colors duration-200">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400 transition-colors duration-200">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom connector hint for mobile/tablet */}
                {index < 4 && (
                  <div className="lg:hidden flex justify-center pt-3 text-slate-300 dark:text-slate-600">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
