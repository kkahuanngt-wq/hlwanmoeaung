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
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm Golden Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#e6c387]/15 via-[#b8934a]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Diagonal Light Beam / Stage Wash */}
        <div className="absolute top-0 right-1/4 w-[2px] h-[600px] bg-gradient-to-b from-transparent via-[var(--accent-gold)]/20 to-transparent rotate-45 transform origin-top blur-sm"></div>

        {/* Subtle decorative grid/musical lines */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--accent-gold)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-md shadow-[var(--accent-gold)]/5 mb-4 sm:mb-6 group hover:border-[var(--accent-gold)] transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--accent-gold)] font-medium">
            {t.hero.statusBadge}
          </span>
        </div>

        {/* Real Artist Portrait Centerpiece in Hero */}
        <div className="relative mb-4 sm:mb-5 group">
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#fbe2a0] via-[#e6c387] to-[#b8934a] shadow-xl gold-glow group-hover:scale-105 transition-transform duration-500">
            <img
              src="./images/hlwan-moe-aung-profile.jpg"
              alt="KB Hlwan Moe Aung Pianist"
              className="w-full h-full rounded-full object-cover object-top border-2 border-[var(--bg-primary)]"
            />
          </div>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 sm:px-2.5 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[9px] sm:text-[10px] font-bold text-[var(--accent-gold)] shadow flex items-center gap-1 whitespace-nowrap">
            <Award className="w-3 h-3 text-[var(--accent-gold)]" />
            <span>Verified Artist</span>
          </span>
        </div>

        {/* Main Name & Title */}
        <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-5">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[var(--accent-gold)] font-serif">
            {currentLang === 'en' ? 'Concert Pianist & Musical Director' : 'စန္ဒရားနှင့် တေးဂီတပညာရှင်'}
          </p>

          {/* TWO BIG LETTERS / LOGOTYPE */}
          <div className="flex flex-col items-center justify-center pt-1">
            <span className="text-6xl sm:text-8xl md:text-9xl font-black font-serif tracking-widest gold-gradient-text leading-none select-none drop-shadow-xl">
              KB
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-serif tracking-tight text-[var(--text-primary)] uppercase mt-1 sm:mt-2">
              {currentLang === 'en' ? 'Hlwan Moe Aung' : 'လွှမ်းမိုးအောင်'}
            </h1>
          </div>

          {currentLang === 'en' && (
            <p className="font-burmese text-base sm:text-2xl text-[var(--accent-gold-light)]/85 font-medium tracking-wide">
              လွှမ်းမိုးအောင်
            </p>
          )}
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-xs sm:text-base font-light text-[var(--text-primary)] tracking-wide mb-2 px-2 leading-relaxed">
          {t.hero.tagline}
        </p>

        {/* Description */}
        <p className="max-w-xl text-[11px] sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed mb-5 sm:mb-6 px-3">
          {t.hero.subtext}
        </p>

        {/* Feature Badges Pill Row */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-[11px] sm:text-xs text-[var(--text-secondary)] font-medium max-w-xl px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
            <Award className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
            <span>Concert Grand Pianist</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
            <Users className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
            <span>Hlwan Music Band</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm">
            <Disc3 className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
            <span>Hlwan Music Studio</span>
          </div>
        </div>

        {/* Clean Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10 px-4 sm:px-0">
          {/* Primary CTA: Book Band */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#e6c387]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-stone-950" />
            <span>{t.hero.bookBandBtn}</span>
          </button>

          {/* Secondary CTA: Explore Repertoire */}
          <a
            href="#repertoire"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[var(--bg-card)] hover:border-[var(--accent-gold)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-gold)]" />
            <span>{t.hero.exploreRepertoireBtn}</span>
          </a>

          {/* About Artist Link */}
          <a
            href="#about"
            className="w-auto flex items-center justify-center gap-1.5 py-1.5 text-[var(--text-muted)] hover:text-[var(--accent-gold)] font-medium text-xs sm:text-sm transition-colors"
          >
            <span>{t.hero.meetArtistBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Followers / Community Trust Stat */}
        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
          <div className="flex -space-x-2">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--bg-primary)] object-cover" src="./images/hlwan-moe-aung-profile.jpg" alt="KB Hlwan Moe Aung" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--bg-primary)] object-cover" src="./images/activity-3.jpg" alt="Band Performance" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[var(--bg-primary)] object-cover" src="./images/activity-8.jpg" alt="Wedding Duet" />
          </div>
          <span>{t.hero.activeListeners}</span>
        </div>
      </div>

      {/* Down Scroll Indicator (Desktop Only) */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors pointer-events-auto">
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <a href="#about" aria-label="Scroll down to About section">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
