import React, { useState, useEffect } from 'react';
import { Volume2, Music, Menu, X, Globe, Calendar } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { jukeboxAudio } from '../utils/audioTracks';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  isPlayingMusic: boolean;
  currentTrackTitle: string;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  isPlayingMusic,
  currentTrackTitle,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.artist, href: '#about' },
    { label: t.nav.band, href: '#band' },
    { label: t.nav.piano, href: '#piano' },
    { label: t.nav.repertoire, href: '#repertoire' },
    { label: t.nav.academy, href: '#academy' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c13]/90 backdrop-blur-md border-b border-[#e6c387]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fbe2a0] via-[#e6c387] to-[#b8934a] p-[1.5px] shadow-lg shadow-[#e6c387]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#0d0e15] flex items-center justify-center">
              <span className="font-serif font-bold text-sm tracking-tighter text-[#fbe2a0]">KB</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-stone-100 group-hover:text-[#fbe2a0] transition-colors">
              HLWAN MOE AUNG
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#e6c387]/80 font-medium">
              Pianist & Hlwan Music Band
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-stone-300 hover:text-[#fbe2a0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#e6c387] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Audio Playing Pill / Toggle */}
          <button
            onClick={() => jukeboxAudio.togglePlay()}
            title={isPlayingMusic ? 'Pause Music' : 'Play Music'}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs transition-all border ${
              isPlayingMusic
                ? 'bg-[#e6c387]/15 border-[#e6c387]/40 text-[#fbe2a0]'
                : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <div className="flex items-end gap-[2px] h-3.5">
                  <span className="w-1 bg-[#e6c387] rounded-full wave-bar"></span>
                  <span className="w-1 bg-[#e6c387] rounded-full wave-bar"></span>
                  <span className="w-1 bg-[#e6c387] rounded-full wave-bar"></span>
                  <span className="w-1 bg-[#e6c387] rounded-full wave-bar"></span>
                </div>
                <span className="max-w-[110px] truncate text-[11px] font-medium">
                  {currentTrackTitle || t.nav.listenNow}
                </span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-[11px]">{t.nav.listenNow}</span>
              </>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-stone-300 hover:text-white bg-stone-900/50 hover:bg-stone-800/80 border border-stone-800 transition-colors"
            title="Switch Language (မြန်မာ / English)"
          >
            <Globe className="w-3.5 h-3.5 text-[#e6c387]" />
            <span className={currentLang === 'en' ? 'font-burmese text-[11px]' : 'text-xs'}>
              {t.nav.langToggle}
            </span>
          </button>

          {/* Book The Band CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 shadow-md shadow-[#e6c387]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-950" />
            <span>{t.nav.booking}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleLang}
            className="p-2 text-stone-300 hover:text-white"
            title="Toggle Language"
          >
            <span className="text-xs font-semibold px-2 py-1 rounded bg-stone-900 border border-stone-800">
              {currentLang === 'en' ? 'မြန်မာ' : 'EN'}
            </span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-200 hover:text-[#e6c387] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0e15]/98 border-b border-[#e6c387]/20 px-6 py-6 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-stone-300 hover:text-[#fbe2a0] py-2 border-b border-stone-800/60"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  jukeboxAudio.togglePlay();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 text-xs font-medium"
              >
                <Music className="w-4 h-4 text-[#e6c387]" />
                <span>{isPlayingMusic ? 'Pause Music' : t.nav.listenNow}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 font-semibold text-xs tracking-wider uppercase"
              >
                <Calendar className="w-4 h-4 text-stone-950" />
                <span>{t.nav.booking}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
