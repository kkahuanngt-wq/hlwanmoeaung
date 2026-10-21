import React from 'react';
import { Sparkles, Calendar, ChevronDown, Award, Users, Disc3, ArrowRight } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm Golden Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#e6c387]/15 via-[#b8934a]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Diagonal Light Beam / Stage Wash */}
        <div className="absolute top-0 right-1/4 w-[2px] h-[600px] bg-gradient-to-b from-transparent via-[var(--accent-gold)]/20 to-transparent rotate-45 transform origin-top blur-sm"></div>

        {/* Subtle decorative grid/musical lines */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--accent-gold)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-lg shadow-[var(--accent-gold)]/5 mb-6 group hover:border-[var(--accent-gold)] transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-[var(--accent-gold)] font-medium">
            {t.hero.statusBadge}
          </span>
        </div>

        {/* Main Name & Title */}
        <div className="space-y-3 mb-6">
          <p className="text-sm sm:text-base font-medium tracking-[0.3em] uppercase text-[var(--accent-gold)] font-serif">
            {currentLang === 'en' ? 'Concert Pianist & Musical Director' : 'စန္ဒရားနှင့် တေးဂီတပညာရှင်'}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight text-[var(--text-primary)]">
            <span className="text-[var(--accent-gold-light)]">{t.hero.titlePrefix} </span>
            <span className="gold-gradient-text">{t.hero.titleName}</span>
          </h1>
          {currentLang === 'en' && (
            <p className="font-burmese text-xl sm:text-2xl text-[var(--text-muted)] font-medium tracking-wide">
              လွှမ်းမိုးအောင်
            </p>
          )}
        </div>

        {/* Tagline */}
        <p className="max-w-3xl text-lg sm:text-xl font-light text-[var(--text-primary)] tracking-wide mb-4">
          {t.hero.tagline}
        </p>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed mb-10">
          {t.hero.subtext}
        </p>

        {/* Feature Badges Pill Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
            <Award className="w-4 h-4 text-[var(--accent-gold)]" />
            <span>Concert Grand Pianist</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
            <Users className="w-4 h-4 text-[var(--accent-gold)]" />
            <span>Founder: Hlwan Music Band</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
            <Disc3 className="w-4 h-4 text-[var(--accent-gold)]" />
            <span>Hlwan Music Studio Yangon</span>
          </div>
        </div>

        {/* Clean Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary CTA: Book Band */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#e6c387]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-stone-950" />
            <span>{t.hero.bookBandBtn}</span>
          </button>

          {/* Secondary CTA: Explore Repertoire */}
          <a
            href="#repertoire"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--bg-card)] hover:border-[var(--accent-gold)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-sm tracking-wide transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-gold)]" />
            <span>{t.hero.exploreRepertoireBtn}</span>
          </a>

          {/* About Artist Link */}
          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium text-sm transition-all"
          >
            <span>{t.hero.meetArtistBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Followers / Community Trust Stat */}
        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
          <div className="flex -space-x-2">
            <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[var(--bg-primary)] object-cover" src="./images/artist-hero.jpg" alt="Avatar" />
            <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[var(--bg-primary)] object-cover" src="./images/wedding-stage.jpg" alt="Avatar" />
            <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[var(--bg-primary)] object-cover" src="./images/piano-keys.jpg" alt="Avatar" />
          </div>
          <span>{t.hero.activeListeners}</span>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors pointer-events-auto">
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <a href="#about" aria-label="Scroll down to About section">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
