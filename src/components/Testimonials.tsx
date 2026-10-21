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
    <section className="py-24 relative bg-[#08090d] border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#11131c] border border-stone-800/80 hover:border-[#e6c387]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              {/* Gold Star Ratings */}
              <div>
                <div className="flex gap-1 text-[#e6c387] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e6c387]" />
                  ))}
                </div>

                <p className="italic font-serif text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
                  "{currentLang === 'mm' ? item.quoteMm : item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#e6c387]/40"
                />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    {currentLang === 'mm' ? item.nameMm : item.name}
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    {currentLang === 'mm' ? item.roleMm : item.role}
                  </p>
                  <span className="text-[10px] text-[#e6c387] font-semibold">
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
