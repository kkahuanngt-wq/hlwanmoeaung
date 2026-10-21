import React from 'react';
import { Play, Sparkles, Calendar, ChevronDown, Award, Users, Disc3 } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { jukeboxAudio } from '../utils/audioTracks';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  isPlayingMusic: boolean;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking, isPlayingMusic }) => {
  const t = translations[currentLang];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lighting */}
      <div className="absolute inset-0 bg-[#08090d] pointer-events-none">
        {/* Warm Golden Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#e6c387]/15 via-[#b8934a]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Subtle Stage Ambient Glows */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Diagonal Light Beam / Stage Wash */}
        <div className="absolute top-0 right-1/4 w-[2px] h-[600px] bg-gradient-to-b from-transparent via-[#e6c387]/15 to-transparent rotate-45 transform origin-top blur-sm"></div>

        {/* Subtle decorative grid/musical lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#e6c387_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-[#e6c387]/30 backdrop-blur-md shadow-lg shadow-[#e6c387]/5 mb-6 group hover:border-[#e6c387]/60 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-[#fbe2a0] font-medium">
            {t.hero.statusBadge}
          </span>
        </div>

        {/* Main Name & Title */}
        <div className="space-y-3 mb-6">
          <p className="text-sm sm:text-base font-medium tracking-[0.3em] uppercase text-[#e6c387]/90 font-serif">
            {currentLang === 'en' ? 'Maestro & Band Leader' : 'စန္ဒရားနှင့် တေးဂီတပညာရှင်'}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight text-white">
            <span className="text-[#fbe2a0]">{t.hero.titlePrefix} </span>
            <span className="gold-gradient-text">{t.hero.titleName}</span>
          </h1>
          {currentLang === 'en' && (
            <p className="font-burmese text-xl sm:text-2xl text-stone-300 font-medium tracking-wide">
              လွှမ်းမိုးအောင်
            </p>
          )}
        </div>

        {/* Tagline */}
        <p className="max-w-3xl text-lg sm:text-xl font-light text-stone-200 tracking-wide mb-4">
          {t.hero.tagline}
        </p>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base text-stone-400 font-normal leading-relaxed mb-10">
          {t.hero.subtext}
        </p>

        {/* Feature Badges Pill Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm text-stone-300 font-medium">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <Award className="w-4 h-4 text-[#e6c387]" />
            <span>Concert Grand Pianist</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <Users className="w-4 h-4 text-[#e6c387]" />
            <span>Owner: Hlwan Music Band</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <Disc3 className="w-4 h-4 text-[#e6c387]" />
            <span>Hlwan Music Studio Yangon</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary CTA: Book Band */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#e6c387]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-stone-950" />
            <span>{t.hero.bookBandBtn}</span>
          </button>

          {/* Secondary CTA: Play Virtual Piano */}
          <a
            href="#piano"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-[#e6c387]/40 text-stone-100 font-semibold text-sm tracking-wide backdrop-blur-md hover:border-[#e6c387] transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#e6c387]" />
            <span>{t.hero.playPianoBtn}</span>
          </a>

          {/* Jukebox Quick Listen */}
          <button
            onClick={() => jukeboxAudio.togglePlay()}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-stone-950/70 hover:bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100 font-medium text-sm transition-all"
          >
            <Play className={`w-4 h-4 ${isPlayingMusic ? 'text-emerald-400 fill-emerald-400' : 'text-[#e6c387]'}`} />
            <span>{isPlayingMusic ? 'Pause Music' : t.hero.listenTrack}</span>
          </button>
        </div>

        {/* Followers / Community Trust Stat */}
        <div className="flex items-center gap-3 text-xs text-stone-400">
          <div className="flex -space-x-2">
            <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#08090d]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
            <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#08090d]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
            <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#08090d]" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
          </div>
          <span>{t.hero.activeListeners}</span>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-500 hover:text-[#e6c387] transition-colors pointer-events-auto">
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <a href="#about" aria-label="Scroll down to About section">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
