import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Monitor,
  Smartphone,
  Trophy,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { Project, Language } from '../types';
import { translations } from '../data/translations';
import { ProjectMockup } from './ProjectMockup';

interface ProjectDetailsModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  lang,
  onClose,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const t = translations[lang].portfolio.caseStudy;

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-details-backdrop"
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          id="project-details-card"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
          className="relative w-full max-w-4xl bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden my-auto dark:bg-[#10283E] dark:border-slate-700 transition-colors duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between dark:bg-[#10283E]/95 dark:border-slate-700 transition-colors duration-200">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold dark:bg-teal-500/15 dark:text-teal-400 transition-colors duration-200">
                {project.categoryLabel[lang]}
              </span>
              <span className="text-xs text-slate-600 font-medium dark:text-slate-400 transition-colors duration-200">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Device Preview Toggle */}
              <div className="hidden sm:flex items-center p-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs dark:bg-slate-800 dark:border-slate-700 transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                    deviceView === 'desktop'
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold dark:bg-slate-700 dark:text-slate-100'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>{t.deviceDesktop}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('mobile')}
                  className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                    deviceView === 'mobile'
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold dark:bg-slate-700 dark:text-slate-100'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>{t.deviceMobile}</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                id="btn-close-modal"
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700"
                aria-label={t.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto space-y-8">
            {/* Title & Subtitle Banner */}
            <div>
              <h1
                id="modal-project-title"
                className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 dark:text-slate-100 transition-colors duration-200"
              >
                {project.title[lang]}
              </h1>
              <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed dark:text-slate-400 transition-colors duration-200">
                {project.subtitle[lang]}
              </p>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs sm:text-sm hover:bg-teal-700 transition-colors shadow-xs"
                  >
                    <span>{t.livePreview}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t.sourceCode}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Visual Interactive Screen Mockup */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 p-2 sm:p-4 dark:border-slate-700 dark:bg-slate-800/50 transition-colors duration-200">
              <ProjectMockup project={project} lang={lang} viewMode={deviceView} />
            </div>

            {/* Impact Results Cards */}
            {project.results && project.results.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/50 border border-teal-100 dark:bg-teal-500/10 dark:border-teal-500/20 transition-colors duration-200">
                <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-4 flex items-center gap-2 dark:text-teal-300 transition-colors duration-200">
                  <Trophy className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{t.resultsTitle}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results.map((res, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-teal-100/80 shadow-2xs dark:bg-[#0E2236] dark:border-teal-500/20 transition-colors duration-200">
                      <div className="text-2xl font-black text-teal-600 mb-0.5 dark:text-teal-400" style={{ fontFamily: lang === 'fa' ? 'var(--font-persian)' : 'var(--font-latin)' }}>
                        {res.metric}
                      </div>
                      <div className="text-xs text-slate-600 font-medium dark:text-slate-400 transition-colors duration-200">
                        {res.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview & Problem & Solution (Editorial Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-5 rounded-2xl bg-[#EAF2FB] border border-slate-200/80 dark:bg-slate-800/60 dark:border-slate-700 transition-colors duration-200">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5 dark:text-slate-100 transition-colors duration-200">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>{t.problemTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400 transition-colors duration-200">
                  {project.problem[lang]}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-[#EAF2FB] border border-slate-200/80 dark:bg-slate-800/60 dark:border-slate-700 transition-colors duration-200">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5 dark:text-slate-100 transition-colors duration-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{t.solutionTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-400 transition-colors duration-200">
                  {project.solution[lang]}
                </p>
              </div>
            </div>

            {/* My Role */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 dark:text-slate-400 transition-colors duration-200">
                {t.myRoleTitle}
              </h4>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-200">
                {project.role[lang]}
              </p>
            </div>

            {/* Key Highlights / Features */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3.5 flex items-center gap-2 dark:text-slate-100 transition-colors duration-200">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{t.featuresTitle}</span>
              </h4>
              <div className="space-y-2.5">
                {project.features[lang].map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#EAF2FB] border border-slate-200/60 dark:bg-slate-800/60 dark:border-slate-700 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium dark:text-slate-300 transition-colors duration-200">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 transition-colors duration-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 dark:text-slate-400 transition-colors duration-200">
                {t.techStackTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold dark:bg-slate-700/60 dark:text-slate-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              {lang === 'fa' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.backToProjects}</span>
            </button>

            <a
              href="#contact"
              onClick={() => onClose()}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-teal-600 transition-colors dark:bg-slate-700 dark:hover:bg-teal-600"
            >
              {lang === 'fa' ? 'سفارش پروژه‌ای مشابه' : 'Request a Similar Project'}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
