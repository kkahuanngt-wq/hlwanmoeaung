import React from 'react';
import { Award, Clock, CheckCircle2 } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface AboutArtistProps {
  currentLang: Language;
}

export const AboutArtist: React.FC<AboutArtistProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-24 relative bg-[var(--bg-primary)]">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-[var(--accent-gold)] text-xs font-semibold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] tracking-tight mb-4">
            {t.about.title}
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mx-auto"></div>
        </div>

        {/* 2-Column Grid: Left Portrait & Signature, Right Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Stylized Artist Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl gold-glow group">
              <img
                src="./images/hlwan-moe-aung-profile.jpg"
                alt="KB Hlwan Moe Aung Pianist"
                className="w-full h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-90"></div>

              {/* Floating Badge in Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-lg">
                <p className="font-serif text-lg font-bold text-[var(--text-primary)] flex items-center justify-between">
                  <span>KB Hlwan Moe Aung</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] font-sans">
                    Maestro
                  </span>
                </p>
                <p className="text-xs text-[var(--accent-gold)] mt-0.5">
                  Concert Pianist & Founder of Hlwan Music Band
                </p>
              </div>
            </div>

            {/* Decorative Golden Accent Frame Behind */}
            <div className="absolute -inset-2 rounded-3xl border border-[var(--border-subtle)]/40 -z-10 translate-x-3 translate-y-3 pointer-events-none"></div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[var(--accent-gold)] first-letter:mr-2 first-letter:float-left">
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
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border-l-4 border-[var(--accent-gold)] border-y border-r border-[var(--border-card)] shadow-lg relative my-6">
              <p className="italic font-serif text-[var(--text-primary)] text-base sm:text-lg leading-relaxed mb-3">
                {t.about.quote}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent-gold)]">
                  — KB Hlwan Moe Aung
                </span>
              </div>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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

        {/* Milestones Horizontal Timeline */}
        <div className="mt-12 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-lg">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-[var(--accent-gold)]" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {t.about.milestoneTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {t.about.milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="text-xs font-serif font-black text-[var(--accent-gold)] bg-[var(--accent-gold)]/15 inline-block px-2.5 py-1 rounded-full mb-3 border border-[var(--border-subtle)]">
                  {m.year}
                </div>
                <h4 className="font-serif font-bold text-[var(--text-primary)] text-sm sm:text-base mb-1.5 group-hover:text-[var(--accent-gold)] transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
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
