import React from 'react';
import { Award, Music, Clock, CheckCircle2 } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface AboutArtistProps {
  currentLang: Language;
}

export const AboutArtist: React.FC<AboutArtistProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-24 relative bg-[#08090d]">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#e6c387]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {t.about.title}
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#e6c387] to-transparent mx-auto"></div>
        </div>

        {/* 2-Column Grid: Left Portrait & Signature, Right Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Stylized Artist Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-[#e6c387]/30 shadow-2xl gold-glow group">
              <img
                src="https://images.unsplash.com/photo-1520523839898-507121c17240?auto=format&fit=crop&w=800&q=80"
                alt="KB Hlwan Moe Aung Pianist"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-black/30 to-transparent"></div>

              {/* Floating Badge in Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-[#e6c387]/30">
                <p className="font-serif text-lg font-bold text-white flex items-center justify-between">
                  <span>KB Hlwan Moe Aung</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded bg-[#e6c387]/20 text-[#fbe2a0] font-sans">
                    Maestro
                  </span>
                </p>
                <p className="text-xs text-[#e6c387] mt-0.5">
                  Concert Pianist & Founder of Hlwan Music Band
                </p>
              </div>
            </div>

            {/* Decorative Golden Accent Frame Behind */}
            <div className="absolute -inset-2 rounded-3xl border border-[#e6c387]/15 -z-10 translate-x-3 translate-y-3 pointer-events-none"></div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#fbe2a0] first-letter:mr-2 first-letter:float-left">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>

            {/* Inspirational Quote Box */}
            <div className="p-6 rounded-2xl bg-[#12141c]/80 border-l-4 border-[#e6c387] border-y border-r border-stone-800/80 shadow-lg relative my-6">
              <p className="italic font-serif text-stone-200 text-base sm:text-lg leading-relaxed mb-3">
                {t.about.quote}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#e6c387]">
                  — KB Hlwan Moe Aung
                </span>
                <div className="flex gap-1 text-[#e6c387]">
                  <Music className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#e6c387] shrink-0" />
                <span>Traditional Burmese Melodic Ornamentation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#e6c387] shrink-0" />
                <span>Full Ensemble Arranging & Stage Direction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#e6c387] shrink-0" />
                <span>Flagship Yamaha & Roland Synthesizer Voice Crafting</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#e6c387] shrink-0" />
                <span>Premier Live Acoustic Wedding Marches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Numerical Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141f] to-[#0c0d14] border border-stone-800 text-center hover:border-[#e6c387]/40 transition-colors">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[#fbe2a0] mb-1">
              15+
            </p>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">
              {t.stats.experience}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141f] to-[#0c0d14] border border-stone-800 text-center hover:border-[#e6c387]/40 transition-colors">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[#fbe2a0] mb-1">
              500+
            </p>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">
              {t.stats.shows}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141f] to-[#0c0d14] border border-stone-800 text-center hover:border-[#e6c387]/40 transition-colors">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[#fbe2a0] mb-1">
              250K+
            </p>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">
              {t.stats.community}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12141f] to-[#0c0d14] border border-stone-800 text-center hover:border-[#e6c387]/40 transition-colors">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[#fbe2a0] mb-1">
              100+
            </p>
            <p className="text-xs uppercase tracking-wider text-stone-400 font-medium">
              {t.stats.studio}
            </p>
          </div>
        </div>

        {/* Milestones Horizontal Timeline */}
        <div className="mt-12 p-8 rounded-3xl bg-[#0f1118]/80 border border-stone-800/80">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-[#e6c387]" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {t.about.milestoneTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {t.about.milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="text-xs font-serif font-black text-[#fbe2a0] bg-[#e6c387]/15 inline-block px-2.5 py-1 rounded-full mb-3 border border-[#e6c387]/30">
                  {m.year}
                </div>
                <h4 className="font-serif font-bold text-white text-sm sm:text-base mb-1.5 group-hover:text-[#fbe2a0] transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
