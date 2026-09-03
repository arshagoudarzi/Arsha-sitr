import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowUpRight, Sparkles } from 'lucide-react';
import { Project, Language } from '../types';
import { translations } from '../data/translations';
import { projectsData } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';
import { ProjectDetailsModal } from './ProjectDetailsModal';

interface PortfolioProps {
  lang: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const t = translations[lang].portfolio;

  const filteredProjects = projectsData;

  return (
    <section
      id="projects"
      aria-label="Portfolio Projects"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-700 text-xs font-bold tracking-wide uppercase mb-3 dark:bg-teal-500/15 dark:border-teal-500/30 dark:text-teal-400 transition-colors duration-200">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 dark:text-slate-100 transition-colors duration-200">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed dark:text-slate-400 transition-colors duration-200">
            {t.subtitle}
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Featured cards take 12 columns on large screens for dynamic editorial hierarchy
              const isWide = project.featured;
              const colSpanClass = isWide ? 'lg:col-span-12' : 'lg:col-span-6';

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`${colSpanClass} group`}
                >
                  <div
                    onClick={() => setActiveProject(project)}
                    className={`h-full rounded-[32px] bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-teal-200/90 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col dark:bg-[#10283E] dark:border-slate-700/90 dark:hover:border-teal-500/30 dark:hover:shadow-teal-500/10 ${
                      isWide ? 'lg:flex-row' : 'flex-col'
                    }`}
                  >
                    {/* Visual Preview Half */}
                    <div
                      className={`p-4 sm:p-6 flex items-center justify-center ${
                        isWide ? 'lg:w-7/12' : 'w-full'
                      }`}
                    >
                      <ProjectMockup project={project} lang={lang} />
                    </div>

                    {/* Content Half */}
                    <div
                      className={`p-6 sm:p-8 flex flex-col justify-between ${
                        isWide ? 'lg:w-5/12 border-t lg:border-t-0 lg:border-s border-slate-100 dark:border-slate-700' : 'border-t border-slate-100 dark:border-slate-700'
                      }`}
                    >
                      <div>
                        {/* Badges: Category & Featured */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold dark:bg-slate-700/50 dark:text-slate-300 transition-colors duration-200">
                            {project.categoryLabel[lang]}
                          </span>
                          {project.featured && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/70 text-[11px] font-bold flex items-center gap-1 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30 transition-colors duration-200">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              <span>{t.featuredBadge}</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-teal-600 transition-colors dark:text-slate-100 dark:group-hover:text-teal-400">
                          {project.title[lang]}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-3 dark:text-slate-400 transition-colors duration-200">
                          {project.subtitle[lang]}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3 dark:text-slate-400 transition-colors duration-200">
                          {project.description[lang]}
                        </p>
                      </div>

                      <div>
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium dark:bg-slate-700/50 dark:text-slate-300 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 rounded-lg bg-slate-50 text-slate-500 text-[11px] font-medium dark:bg-slate-700/30 dark:text-slate-500 transition-colors duration-200">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* View Project Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700 transition-colors duration-200">
                          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-600 group-hover:text-teal-800 group-hover:underline dark:text-teal-400 dark:group-hover:text-teal-300 transition-colors">
                            <span>{t.viewProject}</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>

                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 transition-colors duration-200">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectDetailsModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
