import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { TESTIMONIALS } from '../data/repertoireData';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-24 relative bg-[var(--bg-primary)] border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-[var(--accent-gold)] text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-subtle)] transition-all duration-300 flex flex-col justify-between shadow-lg relative group"
            >
              {/* Gold Star Ratings */}
              <div>
                <div className="flex gap-1 text-[var(--accent-gold)] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="italic font-serif text-[var(--text-primary)] text-sm sm:text-base leading-relaxed mb-6">
                  "{currentLang === 'mm' ? item.quoteMm : item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-card)]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[var(--accent-gold)]/40"
                />
                <div>
                  <h4 className="font-serif font-bold text-[var(--text-primary)] text-sm">
                    {currentLang === 'mm' ? item.nameMm : item.name}
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    {currentLang === 'mm' ? item.roleMm : item.role}
                  </p>
                  <span className="text-[10px] text-[var(--accent-gold)] font-semibold">
                    {item.event}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
