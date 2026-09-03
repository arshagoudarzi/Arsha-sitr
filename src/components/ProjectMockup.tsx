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
        className={`w-full bg-white rounded-xl sm:rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col transition-all duration-300 ${
          isMobile ? 'max-w-[240px] shadow-md' : 'max-w-full'
        }`}
      >
        {/* Browser / Device Header Bar */}
        <div className="bg-stone-100/90 px-3 py-2 border-b border-stone-200/80 flex items-center justify-between text-[10px] text-stone-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          </div>

          <div className="px-3 py-0.5 rounded-md bg-white border border-stone-200/60 font-mono text-[9px] text-stone-600 truncate max-w-[140px]">
            {project.slug}.dev
          </div>

          <span className="text-[9px] font-semibold text-indigo-600">
            {project.mockup.badge}
          </span>
        </div>

        {/* Mockup Screen Content Based on Type */}
        <div className="p-3 sm:p-4 bg-[#FAF9F5]/70 space-y-3">
          {project.mockup.type === 'car-platform' && (
            <div className="space-y-2.5">
              {/* Search & Filter Bar */}
              <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-stone-200/70 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-stone-800">
                    {lang === 'fa' ? 'کاوشگر خودرو' : 'Vehicle Finder'}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-[10px] font-bold text-indigo-700">
                  {lang === 'fa' ? 'فیلتر آنی' : 'Live Filter'}
                </span>
              </div>

              {/* Comparison Cards Mini Preview */}
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-2`}>
                <div className="p-2.5 rounded-xl bg-white border border-indigo-100 shadow-2xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-bold text-stone-900">Peugeot 207i MC</span>
                    <span className="text-[9px] font-black text-indigo-600">TU5P</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-stone-500 mb-2">
                    <span>{lang === 'fa' ? 'شتاب: ۹.۸ ثانیه' : '0-100: 9.8s'}</span>
                    <span className="text-emerald-600 font-bold">★ 4.8</span>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-4/5 rounded-full" />
                  </div>
                </div>

                {!isMobile && (
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-stone-900">Tara V4 LX</span>
                      <span className="text-[9px] font-black text-pink-600">6-AT</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-stone-500 mb-2">
                      <span>{lang === 'fa' ? 'شتاب: ۱۰.۴ ثانیه' : '0-100: 10.4s'}</span>
                      <span className="text-emerald-600 font-bold">★ 4.6</span>
                    </div>
                    <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-pink-500 h-full w-3/4 rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* Price Graph Pill */}
              <div className="bg-white p-2 rounded-xl border border-stone-200/70 flex items-center justify-between text-[10px]">
                <span className="text-stone-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  {lang === 'fa' ? 'روند قیمت بازار ۶ ماهه' : 'Market Price Telemetry'}
                </span>
                <span className="font-bold text-emerald-600 font-mono">+۱۴٪ رشد</span>
              </div>
            </div>
          )}

          {project.mockup.type === 'coffee-shop' && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-stone-200/70 shadow-2xs">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-bold text-stone-800">
                    {lang === 'fa' ? 'کافه نبات | دانه‌های تازه‌رست' : 'Nabat Specialty Roast'}
                  </span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-pink-50 text-pink-700 font-bold">
                  89/100 SCA
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-pink-100/80 shadow-2xs">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-stone-900 block">Ethiopia Yirgacheffe</span>
                    <span className="text-[9px] text-stone-500">Floral, Bergamot, Honey</span>
                  </div>
                  <span className="text-[11px] font-bold text-pink-600">$18.50</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[9px]">
                  <span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">V60 Grind</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700">Light Roast</span>
                  <span className="ms-auto text-emerald-600 font-bold">In Stock</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-1.5 rounded-xl bg-stone-900 text-white text-[10px] font-bold text-center"
              >
                {lang === 'fa' ? 'افزودن به سبد خرید 🛒' : 'Add to Cart 🛒'}
              </button>
            </div>
          )}

          {project.mockup.type === 'creative-studio' && (
            <div className="space-y-2.5">
              <div className="bg-stone-900 text-white p-3 rounded-xl">
                <span className="text-[9px] text-blue-400 font-mono uppercase tracking-widest block mb-1">
                  Creative Direction
                </span>
                <span className="text-xs font-bold leading-tight block">
                  Crafting Iconic Brands in Motion.
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
                <div className="p-2 bg-white rounded-lg border border-stone-200/80 font-bold">3D Web</div>
                <div className="p-2 bg-white rounded-lg border border-stone-200/80 font-bold">Identity</div>
                <div className="p-2 bg-white rounded-lg border border-stone-200/80 font-bold">Motion</div>
              </div>
            </div>
          )}

          {project.mockup.type === 'kanban-app' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Kanban className="w-3.5 h-3.5 text-emerald-600" />
                  Sprint 14
                </span>
                <span className="text-[10px] text-stone-500">8/10 Done</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-white border border-stone-200 text-[10px]">
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[8px] font-bold block w-max mb-1">
                    In Progress
                  </span>
                  <span className="font-semibold text-stone-800 block">Supabase Auth Hook</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-emerald-200 text-[10px]">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[8px] font-bold block w-max mb-1">
                    Complete ✓
                  </span>
                  <span className="font-semibold text-stone-800 block">Drag Physics Polish</span>
                </div>
              </div>
            </div>
          )}

          {project.mockup.type === 'telehealth' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-violet-100">
                <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-xs">
                  DR
                </div>
                <div>
                  <span className="text-[11px] font-bold text-stone-900 block">Dr. Sarah Vance</span>
                  <span className="text-[9px] text-stone-500">Cardiology Specialist</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] p-2 bg-violet-50/60 rounded-xl text-violet-900">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-violet-600" />
                  Today, 4:30 PM
                </span>
                <span className="font-bold text-emerald-700">Confirmed</span>
              </div>
            </div>
          )}

          {project.mockup.type === 'minimal-blog' && (
            <div className="space-y-2 text-start">
              <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wide">
                Typography & Design
              </span>
              <h5 className="text-xs font-bold text-stone-900 leading-snug">
                The Geometric Rhythm of Persian Glyphs in Modern Digital Interfaces
              </h5>
              <div className="flex items-center gap-2 text-[9px] text-stone-500">
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
