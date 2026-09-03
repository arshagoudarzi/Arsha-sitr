import React from 'react';
import {
  Car,
  Coffee,
  Sparkles,
  Kanban,
  Activity,
  BookOpen,
  TrendingUp,
  Star,
  CheckCircle2,
  Calendar,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { Project, Language } from '../types';

interface ProjectMockupProps {
  project: Project;
  lang: Language;
  viewMode?: 'desktop' | 'mobile';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  project,
  lang,
  viewMode = 'desktop',
}) => {
  const isMobile = viewMode === 'mobile';

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.bgGradient} p-3 sm:p-5 flex items-center justify-center select-none`}
      style={{ minHeight: isMobile ? '380px' : '280px' }}
    >
      {/* Device Chrome Frame */}
      <div
        className={`w-full bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col transition-all duration-300 dark:bg-[#0E2236] dark:border-slate-700 ${
          isMobile ? 'max-w-[240px] shadow-md' : 'max-w-full'
        }`}
      >
        {/* Browser / Device Header Bar */}
        <div className="bg-slate-100/90 px-3 py-2 border-b border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 dark:bg-slate-800/90 dark:border-slate-700 dark:text-slate-500 transition-colors duration-200">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          </div>

          <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200/60 font-mono text-[9px] text-slate-600 truncate max-w-[140px] dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 transition-colors duration-200">
            {project.slug}.dev
          </div>

          <span className="text-[9px] font-semibold text-teal-600 dark:text-teal-400">
            {project.mockup.badge}
          </span>
        </div>

        {/* Mockup Screen Content Based on Type */}
        <div className="p-3 sm:p-4 bg-[#EAF2FB]/70 space-y-3 dark:bg-slate-900/50 transition-colors duration-200">
          {project.mockup.type === 'car-platform' && (
            <div className="space-y-2.5">
              {/* Real Screenshot of KhodroBin homepage */}
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-2xs dark:border-slate-700">
                <img
                  src="/assets/khodrobin-home.png"
                  alt={project.title[lang]}
                  loading="lazy"
                  className={`w-full object-cover object-top ${isMobile ? 'max-h-[520px]' : 'max-h-[420px]'}`}
                />
              </div>
            </div>
          )}

          {project.mockup.type === 'coffee-shop' && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200/70 shadow-2xs dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors duration-200">
                    {lang === 'fa' ? 'کافه نبات | دانه‌های تازه‌رست' : 'Nabat Specialty Roast'}
                  </span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-pink-50 text-pink-700 font-bold dark:bg-pink-500/15 dark:text-pink-400 transition-colors duration-200">
                  89/100 SCA
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-pink-100/80 shadow-2xs dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block dark:text-slate-100 transition-colors duration-200">Ethiopia Yirgacheffe</span>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400">Floral, Bergamot, Honey</span>
                  </div>
                  <span className="text-[11px] font-bold text-pink-600">$18.50</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[9px]">
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400 transition-colors duration-200">V60 Grind</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400 transition-colors duration-200">Light Roast</span>
                  <span className="ms-auto text-emerald-600 font-bold">In Stock</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-1.5 rounded-xl bg-slate-900 text-white text-[10px] font-bold text-center dark:bg-teal-600 transition-colors duration-200"
              >
                {lang === 'fa' ? 'افزودن به سبد خرید 🛒' : 'Add to Cart 🛒'}
              </button>
            </div>
          )}

          {project.mockup.type === 'creative-studio' && (
            <div className="space-y-2.5">
              <div className="bg-slate-900 text-white p-3 rounded-xl">
                <span className="text-[9px] text-blue-400 font-mono uppercase tracking-widest block mb-1">
                  Creative Direction
                </span>
                <span className="text-xs font-bold leading-tight block">
                  Crafting Iconic Brands in Motion.
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
                <div className="p-2 bg-white rounded-lg border border-slate-200/80 font-bold dark:bg-[#0E2236] dark:border-slate-700 dark:text-slate-200 transition-colors duration-200">3D Web</div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/80 font-bold dark:bg-[#0E2236] dark:border-slate-700 dark:text-slate-200 transition-colors duration-200">Identity</div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/80 font-bold dark:bg-[#0E2236] dark:border-slate-700 dark:text-slate-200 transition-colors duration-200">Motion</div>
              </div>
            </div>
          )}

          {project.mockup.type === 'kanban-app' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors duration-200">
                <span className="flex items-center gap-1.5">
                  <Kanban className="w-3.5 h-3.5 text-emerald-600" />
                  Sprint 14
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">8/10 Done</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-[10px] dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200">
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[8px] font-bold block w-max mb-1 dark:bg-amber-500/15 dark:text-amber-400 transition-colors duration-200">
                    In Progress
                  </span>
                  <span className="font-semibold text-slate-800 block dark:text-slate-200 transition-colors duration-200">Supabase Auth Hook</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-emerald-200 text-[10px] dark:bg-[#0E2236] dark:border-emerald-500/30 transition-colors duration-200">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[8px] font-bold block w-max mb-1 dark:bg-emerald-500/15 dark:text-emerald-400 transition-colors duration-200">
                    Complete ✓
                  </span>
                  <span className="font-semibold text-slate-800 block dark:text-slate-200 transition-colors duration-200">Drag Physics Polish</span>
                </div>
              </div>
            </div>
          )}

          {project.mockup.type === 'telehealth' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-violet-100 dark:bg-[#0E2236] dark:border-slate-700 transition-colors duration-200">
                <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-xs dark:bg-violet-500/15 dark:text-violet-400 transition-colors duration-200">
                  DR
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-900 block dark:text-slate-100 transition-colors duration-200">Dr. Sarah Vance</span>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400">Cardiology Specialist</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] p-2 bg-violet-50/60 rounded-xl text-violet-900 dark:bg-violet-500/10 dark:text-violet-300 transition-colors duration-200">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                  Today, 4:30 PM
                </span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">Confirmed</span>
              </div>
            </div>
          )}

          {project.mockup.type === 'minimal-blog' && (
            <div className="space-y-2 text-start">
              <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wide">
                Typography & Design
              </span>
              <h5 className="text-xs font-bold text-slate-900 leading-snug dark:text-slate-100 transition-colors duration-200">
                The Geometric Rhythm of Persian Glyphs in Modern Digital Interfaces
              </h5>
              <div className="flex items-center gap-2 text-[9px] text-slate-500 dark:text-slate-400">
                <span>4 min read</span>
                <span>•</span>
                <span>Vazirmatn Scale</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
