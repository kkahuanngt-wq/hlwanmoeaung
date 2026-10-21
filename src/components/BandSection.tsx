import React from 'react';
import { Users, Music2, ShieldCheck, Calendar } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface BandSectionProps {
  currentLang: Language;
}

export const BandSection: React.FC<BandSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="band" className="py-16 sm:py-24 relative bg-[var(--bg-secondary)] border-t border-[var(--border-card)] overflow-hidden w-full max-w-full">
      {/* Background Lighting */}
      <div className="hidden sm:block absolute top-1/2 right-0 w-[400px] h-[400px] bg-[var(--accent-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-[var(--accent-gold)] text-xs font-semibold uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{t.band.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] tracking-tight mb-4">
            {t.band.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-4">
            {t.band.subtitle}
          </p>
          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            {t.band.description}
          </p>
        </div>

        {/* Hero Banner of the Band */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl mb-20 group">
          <img
            src="./images/activity-3.jpg"
            alt="KB Hlwan Moe Aung Live Band Performance"
            className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-[var(--accent-gold)] text-stone-950 font-sans inline-block mb-2 shadow">
                Live On Tour
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Sound of Extraordinary Celebrations
              </h3>
              <p className="text-xs sm:text-sm text-stone-300">
                Led by KB Hlwan Moe Aung • 7-Piece Master Collective
              </p>
            </div>

            <a
              href="#booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#fbe2a0] to-[#e6c387] text-stone-950 text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-stone-950" />
              <span>Check Tour Availability</span>
            </a>
          </div>
        </div>

        {/* Band Lineup & Key Members */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Music2 className="w-5 h-5 text-[var(--accent-gold)]" />
              <span>{t.band.lineupTitle}</span>
            </h3>
            <span className="text-xs text-[var(--text-muted)] hidden sm:inline">
              Full Ensemble Instrumentation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.band.lineup.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-subtle)] transition-all duration-300 group hover:-translate-y-1 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-card)] text-[var(--accent-gold)]">
                    {member.role}
                  </span>
                  <span className="text-[var(--text-muted)] font-mono text-xs">0{idx + 1}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors mb-1.5">
                  {member.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Rider & Stage Standards */}
        <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[var(--accent-gold)] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.band.riderTitle}</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Studio-Grade Fidelity on Every Stage
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {t.band.riderDesc}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <span className="px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
              Yamaha Montages & Stage Grands
            </span>
            <span className="px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
              Roland RD Flagship Workstations
            </span>
            <span className="px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)]">
              Shure Axient Wireless Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
