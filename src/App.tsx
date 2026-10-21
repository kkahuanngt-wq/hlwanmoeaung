import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutArtist } from './components/AboutArtist';
import { BandSection } from './components/BandSection';
import { MediaRepertoire } from './components/MediaRepertoire';
import { PerformanceGallery } from './components/PerformanceGallery';
import { AcademyServices } from './components/AcademyServices';
import { ContactBooking } from './components/ContactBooking';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import type { Language, ThemeMode } from './data/translations';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('hma_theme') as ThemeMode;
    return saved === 'light' || saved === 'royal' || saved === 'dark' ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('hma_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'mm' : 'en'));
  };

  const handleSelectTheme = (selectedTheme: ThemeMode) => {
    setTheme(selectedTheme);
  };

  const handleOpenBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-secondary)] flex flex-col font-sans selection:bg-[var(--accent-gold)]/30 selection:text-[var(--accent-gold-light)] transition-colors duration-300"
    >
      {/* Navigation with Theme Switcher & Language Toggle */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        currentTheme={theme}
        onSelectTheme={handleSelectTheme}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Maestro Biography & Milestones */}
        <AboutArtist currentLang={currentLang} />

        {/* Hlwan Music Band (The Live Ensemble) */}
        <BandSection
          currentLang={currentLang}
        />

        {/* Repertoire, Media & Discography */}
        <MediaRepertoire
          currentLang={currentLang}
        />

        {/* Live Performance & Visual Moments Gallery */}
        <PerformanceGallery currentLang={currentLang} />

        {/* Academy & Studio Services */}
        <AcademyServices
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* VIP Booking & Direct Inquiries */}
        <ContactBooking
          currentLang={currentLang}
        />

        {/* Testimonials & Accolades */}
        <Testimonials currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
