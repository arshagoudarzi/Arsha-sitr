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
        className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
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
          className="relative w-full max-w-4xl bg-white rounded-[32px] border border-stone-200 shadow-2xl overflow-hidden my-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                {project.categoryLabel[lang]}
              </span>
              <span className="text-xs text-stone-600 font-medium">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Device Preview Toggle */}
              <div className="hidden sm:flex items-center p-1 rounded-full bg-stone-100 border border-stone-200/80 text-xs">
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                    deviceView === 'desktop'
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-500 hover:text-stone-800'
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
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-500 hover:text-stone-800'
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
                className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
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
                className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight mb-2"
              >
                {project.title[lang]}
              </h1>
              <p className="text-base sm:text-xl text-stone-600 font-medium leading-relaxed">
                {project.subtitle[lang]}
              </p>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 transition-colors shadow-xs"
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 text-stone-800 font-semibold text-xs sm:text-sm hover:bg-stone-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t.sourceCode}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Visual Interactive Screen Mockup */}
            <div className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50 p-2 sm:p-4">
              <ProjectMockup project={project} lang={lang} viewMode={deviceView} />
            </div>

            {/* Impact Results Cards */}
            {project.results && project.results.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-indigo-600" />
                  <span>{t.resultsTitle}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results.map((res, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white border border-indigo-100/80 shadow-2xs">
                      <div className="text-2xl font-black text-indigo-600 mb-0.5">
                        {res.metric}
                      </div>
                      <div className="text-xs text-stone-600 font-medium">
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
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-stone-200/80">
                <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>{t.problemTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {project.problem[lang]}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-stone-200/80">
                <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{t.solutionTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {project.solution[lang]}
                </p>
              </div>
            </div>

            {/* My Role */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200/80">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                {t.myRoleTitle}
              </h4>
              <p className="text-sm font-semibold text-stone-900">
                {project.role[lang]}
              </p>
            </div>

            {/* Key Highlights / Features */}
            <div>
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{t.featuresTitle}</span>
              </h4>
              <div className="space-y-2.5">
                {project.features[lang].map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F5] border border-stone-200/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-stone-700 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                {t.techStackTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1.5"
            >
              {lang === 'fa' ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.backToProjects}</span>
            </button>

            <a
              href="#contact"
              onClick={() => onClose()}
              className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-indigo-600 transition-colors"
            >
              {lang === 'fa' ? 'سفارش پروژه‌ای مشابه' : 'Request a Similar Project'}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
