import React from 'react';
import { Award, Music2, Users, Sparkles, Disc3, Sliders, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface AboutArtistProps {
  currentLang: Language;
}

export const AboutArtist: React.FC<AboutArtistProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const workIcons = [
    <Music2 key="0" className="w-5 h-5 text-[var(--accent-gold)]" />,
    <Users key="1" className="w-5 h-5 text-[var(--accent-gold)]" />,
    <Sparkles key="2" className="w-5 h-5 text-[var(--accent-gold)]" />,
    <Disc3 key="3" className="w-5 h-5 text-[var(--accent-gold)]" />,
    <Sliders key="4" className="w-5 h-5 text-[var(--accent-gold)]" />,
    <GraduationCap key="5" className="w-5 h-5 text-[var(--accent-gold)]" />
  ];

  return (
    <section id="about" className="py-24 relative bg-[var(--bg-primary)]">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-[var(--accent-gold)] text-xs font-semibold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] tracking-tight mb-4">
            {t.about.title}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed mb-4">
            {t.about.subtitle}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto"></div>
        </div>

        {/* 2-Column Grid: Left Portrait & Capabilities, Right Active Work Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Real Artist Photo & Core Roles */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl gold-glow group">
              <img
                src="./images/hlwan-moe-aung-profile.jpg"
                alt="KB Hlwan Moe Aung Pianist & Producer"
                className="w-full h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-90"></div>

              {/* Floating Badge in Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-serif text-lg font-bold text-[var(--text-primary)]">
                    KB Hlwan Moe Aung
                  </p>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--accent-gold)] text-stone-950 font-sans shadow">
                    Active Works
                  </span>
                </div>
                <p className="text-xs text-[var(--accent-gold)] font-medium">
                  Concert Pianist • Bandleader • Producer • Arranger
                </p>
              </div>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>Traditional Burmese Melodic Ornamentation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>Full Ensemble Arranging & Stage Direction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>Flagship Yamaha & Roland Synthesizer Voice Crafting</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>Premier Live Acoustic Wedding Marches</span>
              </div>
            </div>

            {/* Inspirational Quote Box */}
            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border-l-4 border-[var(--accent-gold)] border-y border-r border-[var(--border-card)] shadow-md">
              <p className="italic font-serif text-[var(--text-primary)] text-sm sm:text-base leading-relaxed mb-2">
                {t.about.quote}
              </p>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--accent-gold)] block">
                — KB Hlwan Moe Aung
              </span>
            </div>
          </div>

          {/* Right Column: Six Pillars of What He Works On */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.workItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-subtle)] transition-all duration-300 hover:-translate-y-1 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-card)] text-[var(--accent-gold)]">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-xl bg-[var(--bg-secondary)] group-hover:bg-[var(--accent-gold)]/10 transition-colors">
                      {workIcons[idx]}
                    </div>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Numerical Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-center hover:border-[var(--border-subtle)] transition-colors shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[var(--accent-gold)] mb-1">
              15+
            </p>
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
              {t.stats.experience}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-center hover:border-[var(--border-subtle)] transition-colors shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[var(--accent-gold)] mb-1">
              500+
            </p>
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
              {t.stats.shows}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-center hover:border-[var(--border-subtle)] transition-colors shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[var(--accent-gold)] mb-1">
              250K+
            </p>
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
              {t.stats.community}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] text-center hover:border-[var(--border-subtle)] transition-colors shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-black text-[var(--accent-gold)] mb-1">
              100+
            </p>
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
              {t.stats.studio}
            </p>
          </div>
        </div>

        {/* Core Working Disciplines Section */}
        <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent-gold)] text-xs font-bold uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>{t.about.disciplinesTitle}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {t.about.disciplinesSubtitle}
              </p>
            </div>
            <span className="text-[11px] font-mono text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-3 py-1 rounded-full border border-[var(--accent-gold)]/20 w-fit">
              5 Core Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
            {t.about.disciplines.map((d, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)] hover:border-[var(--border-subtle)] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-[var(--accent-gold)] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-card)] inline-block mb-3">
                    {d.tag}
                  </div>
                  <h4 className="font-serif font-bold text-[var(--text-primary)] text-sm sm:text-base mb-1.5 group-hover:text-[var(--accent-gold)] transition-colors">
                    {d.title}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border-card)] text-[10px] font-mono text-[var(--text-muted)]">
                  Discipline 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
