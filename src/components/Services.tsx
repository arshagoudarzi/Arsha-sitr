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
        return <Palette className="w-6 h-6 text-indigo-600" />;
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
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  const getCardBgHover = (id: string) => {
    switch (id) {
      case 'web-design':
        return 'group-hover:bg-indigo-50/50 group-hover:border-indigo-200';
      case 'web-development':
        return 'group-hover:bg-pink-50/50 group-hover:border-pink-200';
      case 'business-websites':
        return 'group-hover:bg-blue-50/50 group-hover:border-blue-200';
      case 'ecommerce':
        return 'group-hover:bg-amber-50/50 group-hover:border-amber-200';
      case 'ui-ux':
        return 'group-hover:bg-violet-50/50 group-hover:border-violet-200';
      case 'optimization':
        return 'group-hover:bg-emerald-50/50 group-hover:border-emerald-200';
      default:
        return 'group-hover:bg-stone-50';
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
                className={`group relative p-6 sm:p-7 rounded-[28px] bg-white border border-stone-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${getCardBgHover(
                  service.id
                )}`}
              >
                <div>
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      animate={isHovered ? { scale: 1.12, rotate: 4 } : { scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="w-12 h-12 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-center p-2.5"
                    >
                      {getServiceIcon(service.id)}
                    </motion.div>
                    
                    <span className="text-xs font-black text-stone-300 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2.5 tracking-tight group-hover:text-indigo-950 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link to Contact */}
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors group-hover:underline"
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
