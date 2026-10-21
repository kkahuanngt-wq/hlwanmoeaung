import React from 'react';
import { Users, Music2, Check, ChevronRight, ShieldCheck, Calendar } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface BandSectionProps {
  currentLang: Language;
  onSelectPackage: (packageName: string) => void;
}

export const BandSection: React.FC<BandSectionProps> = ({ currentLang, onSelectPackage }) => {
  const t = translations[currentLang];

  return (
    <section id="band" className="py-24 relative bg-[var(--bg-secondary)] border-t border-[var(--border-card)]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>

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
            src="./images/band-live.jpg"
            alt="Hlwan Music Band on Stage"
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
        <div className="mb-20">
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

        {/* Live Performance Packages */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
              {t.band.packagesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Customized lineups created for wedding banquets, private dinners, and mega festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.band.packages.map((pkg, idx) => {
              const isPopular = idx === 1 || idx === 2;
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                    isPopular
                      ? 'bg-[var(--bg-card)] border-2 border-[var(--accent-gold)] shadow-xl gold-glow'
                      : 'bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-subtle)]'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#fbe2a0] to-[#e6c387] text-stone-950 font-bold text-[10px] tracking-widest uppercase shadow">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    {!isPopular && (
                      <span className="text-[10px] font-semibold text-[var(--accent-gold)] uppercase tracking-wider block mb-2">
                        {pkg.badge}
                      </span>
                    )}

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 mt-2">
                      {pkg.name}
                    </h4>

                    <div className="text-[11px] font-medium text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-2.5 py-1 rounded-md mb-4 border border-[var(--accent-gold)]/20">
                      {pkg.suitedFor}
                    </div>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                      {pkg.details}
                    </p>

                    <div className="space-y-2 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 hover:brightness-110 shadow-md'
                        : 'bg-[var(--bg-secondary)] hover:bg-[var(--accent-gold)] hover:text-stone-950 text-[var(--text-primary)] border border-[var(--border-card)]'
                    }`}
                  >
                    <span>Inquire for Package</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
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
