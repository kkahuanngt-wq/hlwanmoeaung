import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutArtist } from './components/AboutArtist';
import { BandSection } from './components/BandSection';
import { InteractivePiano } from './components/InteractivePiano';
import { MediaRepertoire } from './components/MediaRepertoire';
import { PerformanceGallery } from './components/PerformanceGallery';
import { AcademyServices } from './components/AcademyServices';
import { BookingEngine } from './components/BookingEngine';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import type { Language } from './data/translations';
import { jukeboxAudio, TRACK_LIST } from './utils/audioTracks';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [currentTrackTitle, setCurrentTrackTitle] = useState<string>('');
  const [preselectedPackage, setPreselectedPackage] = useState<string>('');

  useEffect(() => {
    // Subscribe to global jukebox audio engine
    jukeboxAudio.subscribe((playing, track) => {
      setIsPlayingMusic(playing);
      setCurrentTrackTitle(currentLang === 'mm' ? track.titleMm : track.title);
    });
  }, [currentLang]);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'mm' : 'en'));
  };

  const handleOpenBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setPreselectedPackage(packageName);
    handleOpenBooking();
  };

  const handlePlaySpecificTrack = (trackId: string) => {
    const idx = TRACK_LIST.findIndex((t) => t.id === trackId);
    if (idx !== -1) {
      jukeboxAudio.playTrack(idx);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-stone-100 flex flex-col font-sans selection:bg-[#e6c387]/30 selection:text-[#f7e7c4] pb-24">
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        isPlayingMusic={isPlayingMusic}
        currentTrackTitle={currentTrackTitle}
        onOpenBooking={handleOpenBooking}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
          isPlayingMusic={isPlayingMusic}
        />

        {/* Maestro Biography & Milestones */}
        <AboutArtist currentLang={currentLang} />

        {/* Hlwan Music Band (The Live Ensemble & Packages) */}
        <BandSection
          currentLang={currentLang}
          onSelectPackage={handleSelectPackage}
        />

        {/* Interactive Virtual Grand Piano Keyboard */}
        <InteractivePiano currentLang={currentLang} />

        {/* Repertoire, Media & Discography */}
        <MediaRepertoire
          currentLang={currentLang}
          onPlayTrack={handlePlaySpecificTrack}
        />

        {/* Live Performance & Visual Moments Gallery */}
        <PerformanceGallery currentLang={currentLang} />

        {/* Academy & Studio Services */}
        <AcademyServices
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Booking Engine & Price Estimator */}
        <BookingEngine
          currentLang={currentLang}
          preselectedPackage={preselectedPackage}
        />

        {/* Testimonials & Accolades */}
        <Testimonials currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Persistent Floating Audio Jukebox Player Bar */}
      <AudioPlayerBar currentLang={currentLang} />
    </div>
  );
}

export default App;
