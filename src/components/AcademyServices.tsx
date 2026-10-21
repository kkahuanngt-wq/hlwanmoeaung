import React from 'react';
import { GraduationCap, Headphones, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface AcademyServicesProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const AcademyServices: React.FC<AcademyServicesProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section id="academy" className="py-24 relative bg-[#08090d] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.academy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {t.academy.title}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {t.academy.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Keyboard & Piano Academy */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#12141f] via-[#0d0e16] to-[#12141f] border border-[#e6c387]/30 shadow-2xl relative overflow-hidden group hover:border-[#e6c387]/60 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-12 h-12 rounded-2xl bg-[#e6c387]/15 border border-[#e6c387]/40 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-[#fbe2a0]" />
            </div>

            <span className="text-xs uppercase tracking-widest font-bold text-[#e6c387] mb-2 block">
              Education & Mentorship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.academy.academyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-8">
              {t.academy.academyDesc}
            </p>

            {/* Feature points */}
            <div className="space-y-3 mb-10">
              {t.academy.featuresA.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e6c387] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-stone-800">
              <a
                href="https://www.youtube.com/@KBHlwanMoeAung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#fbe2a0] to-[#e6c387] text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow"
              >
                <span>Free Masterclass Lessons</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-stone-400">
                250k+ Online Students Enrolled
              </span>
            </div>
          </div>

          {/* Card 2: Hlwan Music Studio Yangon */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#12141f] via-[#0d0e16] to-[#12141f] border border-stone-800 shadow-2xl relative overflow-hidden group hover:border-[#e6c387]/60 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-12 h-12 rounded-2xl bg-stone-800 border border-stone-700 flex items-center justify-center mb-6">
              <Headphones className="w-6 h-6 text-[#fbe2a0]" />
            </div>

            <span className="text-xs uppercase tracking-widest font-bold text-[#e6c387] mb-2 block">
              Audio Production & Tracking
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.academy.studioTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-8">
              {t.academy.studioDesc}
            </p>

            {/* Feature points */}
            <div className="space-y-3 mb-10">
              {t.academy.featuresS.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e6c387] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-stone-800">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-[#fbe2a0] border border-[#e6c387]/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>Book Studio Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-stone-400">
                Bahan Township, Yangon, Myanmar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
