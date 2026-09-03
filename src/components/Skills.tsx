import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Sparkles,
  Layers,
  Atom,
  FileCode2,
  Palette,
  Database,
  Server,
  Eye,
  GitBranch,
  Terminal,
  Cpu,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { skillsData } from '../data/projects';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'design' | 'tools'>('all');
  const t = translations[lang].skills;

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-sky-500" />;
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5 text-blue-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-cyan-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-amber-600" />;
      case 'Figma':
        return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-rose-500" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-orange-600" />;
      default:
        return <Terminal className="w-5 h-5 text-stone-600" />;
    }
  };

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      aria-label="Skills and Technologies"
      className="py-16 sm:py-24 bg-stone-100/40 border-y border-stone-200/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: lang === 'fa' ? 'همه مهارت‌ها' : 'All Skills' },
            { key: 'frontend', label: t.categories.frontend },
            { key: 'backend', label: t.categories.backend },
            { key: 'design', label: t.categories.design },
            { key: 'tools', label: t.categories.tools },
          ].map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-sm hover:border-indigo-200 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon, Name & Level Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-stone-200/70 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-stone-900 group-hover:text-indigo-600 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] text-stone-600 font-medium">
                        {t.yearsBadge}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      skill.level === 'Expert'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-200/60'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
                  {skill.description[lang]}
                </p>
              </div>

              {/* Cute interactive indicator pill */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600 font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {lang === 'fa' ? 'در پروژه‌های واقعی' : 'Production Ready'}
                </span>
                <span className="text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">
                  ✦
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center p-4 rounded-2xl bg-white border border-stone-200/70 max-w-xl mx-auto text-xs sm:text-sm text-stone-700 font-medium shadow-2xs">
          {t.learningNote}
        </div>
      </div>
    </section>
  );
};
