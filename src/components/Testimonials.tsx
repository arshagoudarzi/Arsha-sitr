import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote, Star, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonialsData } from '../data/projects';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = translations[lang].testimonials;

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="py-16 sm:py-24 bg-stone-100/40 border-y border-stone-200/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-[28px] bg-white border border-stone-200/80 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{item.quote[lang]}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.avatarColor}`}
                >
                  {item.author[lang].charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {item.author[lang]}
                  </h4>
                  <span className="text-xs text-stone-500 font-medium block">
                    {item.role[lang]} • {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
