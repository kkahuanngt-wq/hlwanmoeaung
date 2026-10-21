import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar, Moon, Sun, Sparkles } from 'lucide-react';
import type { Language, ThemeMode } from '../data/translations';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  currentTheme,
  onSelectTheme,
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
    { label: t.nav.repertoire, href: '#repertoire' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.academy, href: '#academy' },
    { label: t.nav.booking, href: '#booking' },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#fbe2a0] via-[#e6c387] to-[#b8934a] p-[1.5px] shadow-md group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full rounded-full bg-[var(--bg-secondary)] flex items-center justify-center">
              <span className="font-serif font-bold text-xs sm:text-sm tracking-tighter text-[#e6c387]">KB</span>
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors whitespace-nowrap">
              HLWAN MOE AUNG
            </span>
            <span className="hidden sm:block text-[9px] sm:text-[10px] tracking-widest uppercase text-[var(--accent-gold)] font-medium whitespace-nowrap">
              Concert Pianist & Bandleader
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Toggle */}
          <div className="flex items-center rounded-full p-1 bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm">
            <button
              onClick={() => onSelectTheme('dark')}
              className={`p-1.5 rounded-full transition-all ${
                currentTheme === 'dark'
                  ? 'bg-[#e6c387] text-stone-950 shadow'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              title="Dark Mode (Obsidian Gold)"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTheme('light')}
              className={`p-1.5 rounded-full transition-all ${
                currentTheme === 'light'
                  ? 'bg-[#b38628] text-white shadow'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              title="Light Mode (Concert Ivory)"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectTheme('royal')}
              className={`p-1.5 rounded-full transition-all ${
                currentTheme === 'royal'
                  ? 'bg-[#f3ce7a] text-blue-950 shadow'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              title="Royal Mode (Midnight Velvet)"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-subtle)] transition-colors"
            title="Switch Language (မြန်မာ / English)"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
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

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] transition-colors"
            title="Toggle Language"
          >
            {currentLang === 'en' ? 'မြန်မာ' : 'EN'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--accent-gold)]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--border-subtle)] px-6 py-6 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-[var(--text-secondary)] hover:text-[var(--accent-gold)] py-2 border-b border-[var(--border-card)]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              {/* Theme selector in mobile menu */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] text-xs">
                <span className="text-[var(--text-muted)]">Theme Mode:</span>
                <div className="flex gap-1">
                  {(['dark', 'light', 'royal'] as ThemeMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => onSelectTheme(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium capitalize ${
                        currentTheme === m
                          ? 'bg-[var(--accent-gold)] text-stone-950 font-bold'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

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
