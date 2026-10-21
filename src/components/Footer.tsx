import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[var(--bg-primary)] border-t border-[var(--border-card)] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Maestro Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fbe2a0] to-[#b8934a] p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[var(--bg-secondary)] flex items-center justify-center">
                  <span className="font-serif font-bold text-sm text-[var(--accent-gold)]">KB</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] tracking-wider">
                  HLWAN MOE AUNG
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[var(--accent-gold)] font-medium">
                  Pianist & Bandleader
                </p>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {t.footer.bio}
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.youtube.com/@HlwanMoeAung"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--bg-secondary)] hover:bg-red-600 text-[var(--text-muted)] hover:text-white flex items-center justify-center transition-colors border border-[var(--border-card)]"
                aria-label="KB Hlwan Moe Aung YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063724255941"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--bg-secondary)] hover:bg-blue-600 text-[var(--text-muted)] hover:text-white flex items-center justify-center transition-colors border border-[var(--border-card)]"
                aria-label="KB Hlwan Moe Aung Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@hlwanmoeaung.com"
                className="w-9 h-9 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--accent-gold)] hover:text-stone-950 text-[var(--text-muted)] flex items-center justify-center transition-colors border border-[var(--border-card)]"
                aria-label="Email Maestro"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[var(--text-muted)]">
              <li>
                <a href="#about" className="hover:text-[var(--accent-gold)] transition-colors">
                  {t.nav.artist}
                </a>
              </li>
              <li>
                <a href="#band" className="hover:text-[var(--accent-gold)] transition-colors">
                  {t.nav.band}
                </a>
              </li>
              <li>
                <a href="#repertoire" className="hover:text-[var(--accent-gold)] transition-colors">
                  {t.nav.repertoire}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[var(--accent-gold)] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-[var(--accent-gold)] transition-colors">
                  {t.nav.academy}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[var(--accent-gold)] transition-colors">
                  {t.nav.booking}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                <span>{t.footer.studioAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <a href="tel:+959798000000" className="hover:text-[var(--accent-gold)] transition-colors">
                  +95 9 798 000 000 (Viber & Call)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <a href="mailto:booking@hlwanmusicband.com" className="hover:text-[var(--accent-gold)] transition-colors">
                  booking@hlwanmusicband.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Performance Guarantee */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]">
              Hlwan Music Band Standard
            </h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Every wedding, gala, and concert performance is backed by dedicated stage sound engineers, redundant instruments, and bespoke musical curation.
            </p>
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] text-[11px] text-[var(--accent-gold)]">
              Official booking contract & rehearsal consultation included with all packages.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-card)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>{t.footer.copyright}</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
