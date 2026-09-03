import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Launch joyful celebratory confetti!
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#14B8A6', '#EC4899', '#FBBF24', '#10B981', '#8B5CF6'],
        disableForReducedMotion: true,
      });
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-700 text-xs font-bold tracking-wide uppercase mb-3 dark:bg-teal-500/15 dark:border-teal-500/30 dark:text-teal-400 transition-colors duration-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.tag}</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight dark:text-slate-100 transition-colors duration-200">
                {t.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 dark:text-slate-400 transition-colors duration-200">
                {t.subtitle}
              </p>

              {/* Fast response time badge */}
              <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100 text-xs font-semibold text-teal-900 mb-8 inline-block dark:bg-teal-500/10 dark:border-teal-500/20 dark:text-teal-300 transition-colors duration-200">
                {t.responseTime}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-sm dark:bg-[#10283E] dark:border-slate-700 transition-colors duration-200">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 animate-bounce dark:bg-emerald-500/20 transition-colors duration-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-2 dark:text-slate-100 transition-colors duration-200">
                      {t.successTitle}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mb-8 leading-relaxed dark:text-slate-400 transition-colors duration-200">
                      {t.successDesc}
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-teal-600 transition-colors dark:bg-slate-700 dark:hover:bg-teal-600"
                    >
                      {t.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Type Pills */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 dark:text-slate-300 transition-colors duration-200">
                        {t.projectTypeLabel}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {t.projectTypes.map((type) => {
                          const isSelected = formData.projectType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-teal-600 text-white shadow-2xs'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700/60 dark:text-slate-300 dark:hover:bg-slate-700'
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 dark:text-slate-300 transition-colors duration-200"
                        >
                          {t.nameLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.namePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-[#EAF2FB] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-400 dark:bg-slate-800/70 dark:border-slate-600 dark:text-slate-100 dark:focus:ring-teal-500/30 dark:focus:border-teal-500 dark:placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 dark:text-slate-300 transition-colors duration-200"
                        >
                          {t.emailLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-[#EAF2FB] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-400 dark:bg-slate-800/70 dark:border-slate-600 dark:text-slate-100 dark:focus:ring-teal-500/30 dark:focus:border-teal-500 dark:placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Budget / Timeline (Optional) */}
                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 dark:text-slate-300 transition-colors duration-200"
                      >
                        {t.budgetLabel}
                      </label>
                      <input
                        id="contact-budget"
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder={t.budgetPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#EAF2FB] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-400 dark:bg-slate-800/70 dark:border-slate-600 dark:text-slate-100 dark:focus:ring-teal-500/30 dark:focus:border-teal-500 dark:placeholder:text-slate-500"
                      />
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 dark:text-slate-300 transition-colors duration-200"
                      >
                        {t.messageLabel} <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#EAF2FB] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-400 resize-none dark:bg-slate-800/70 dark:border-slate-600 dark:text-slate-100 dark:focus:ring-teal-500/30 dark:focus:border-teal-500 dark:placeholder:text-slate-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 active:scale-98 disabled:opacity-70 text-white font-bold text-base shadow-sm shadow-teal-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>{t.sendingBtn}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
