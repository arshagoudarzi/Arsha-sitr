import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  Code,
  Building2,
  ShoppingCart,
  LayoutGrid,
  Zap,
  Check,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const t = translations[lang].services;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-design':
        return <Palette className="w-6 h-6 text-teal-600" />;
      case 'web-development':
        return <Code className="w-6 h-6 text-pink-600" />;
      case 'business-websites':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'ecommerce':
        return <ShoppingCart className="w-6 h-6 text-amber-600" />;
      case 'ui-ux':
        return <LayoutGrid className="w-6 h-6 text-violet-600" />;
      case 'optimization':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  const getCardBgHover = (id: string) => {
    switch (id) {
      case 'web-design':
        return 'group-hover:bg-teal-50/50 group-hover:border-teal-200 dark:group-hover:bg-teal-500/10 dark:group-hover:border-teal-500/40';
      case 'web-development':
        return 'group-hover:bg-pink-50/50 group-hover:border-pink-200 dark:group-hover:bg-pink-500/10 dark:group-hover:border-pink-500/40';
      case 'business-websites':
        return 'group-hover:bg-blue-50/50 group-hover:border-blue-200 dark:group-hover:bg-blue-500/10 dark:group-hover:border-blue-500/40';
      case 'ecommerce':
        return 'group-hover:bg-amber-50/50 group-hover:border-amber-200 dark:group-hover:bg-amber-500/10 dark:group-hover:border-amber-500/40';
      case 'ui-ux':
        return 'group-hover:bg-violet-50/50 group-hover:border-violet-200 dark:group-hover:bg-violet-500/10 dark:group-hover:border-violet-500/40';
      case 'optimization':
        return 'group-hover:bg-emerald-50/50 group-hover:border-emerald-200 dark:group-hover:bg-emerald-500/10 dark:group-hover:border-emerald-500/40';
      default:
        return 'group-hover:bg-slate-50 dark:group-hover:bg-slate-700/50';
    }
  };

  return (
    <section
      id="services"
      aria-label="Services"
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

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((service, index) => {
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between dark:bg-[#10283E] dark:border-slate-700 dark:hover:shadow-lg ${getCardBgHover(
                  service.id
                )}`}
              >
                <div>
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      animate={isHovered ? { scale: 1.12, rotate: 4 } : { scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-2.5 dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200"
                    >
                      {getServiceIcon(service.id)}
                    </motion.div>
                    
                    <span className="text-xs font-black text-slate-300 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-teal-950 transition-colors dark:text-slate-100 dark:group-hover:text-teal-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 dark:text-slate-400 transition-colors duration-200">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 transition-colors duration-200">
                  <div className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link to Contact */}
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-800 transition-colors group-hover:underline dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
