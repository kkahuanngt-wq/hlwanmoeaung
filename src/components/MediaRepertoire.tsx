import React, { useState } from 'react';
import { Music2, Compass, Clock } from 'lucide-react';
import type { Language } from '../data/translations';
import { REPERTOIRE_ITEMS } from '../data/repertoireData';
import type { RepertoireItem } from '../data/repertoireData';

interface MediaRepertoireProps {
  currentLang: Language;
}

export const MediaRepertoire: React.FC<MediaRepertoireProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'solo' | 'band' | 'traditional' | 'orchestral'>('all');
  const [activeItem, setActiveItem] = useState<RepertoireItem | null>(null);

  const filteredItems = REPERTOIRE_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const categories = [
    { key: 'all', label: currentLang === 'mm' ? 'အားလုံး' : 'All Compositions' },
    { key: 'solo', label: currentLang === 'mm' ? 'စန္ဒရား တစ်ကိုယ်တော်' : 'Solo Grand Piano' },
    { key: 'band', label: currentLang === 'mm' ? 'Live Band တီးဝိုင်း' : 'Hlwan Band Live' },
    { key: 'traditional', label: currentLang === 'mm' ? 'ရိုးရာ မဟာဂီတ' : 'Traditional Heritage' },
    { key: 'orchestral', label: currentLang === 'mm' ? 'သံစုံတေးသရုပ်ဖော်' : 'Symphonic Suite' },
  ];

  return (
    <section id="repertoire" className="py-16 sm:py-24 relative bg-[var(--bg-primary)] border-t border-[var(--border-card)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-[var(--accent-gold)] text-xs font-semibold uppercase tracking-widest mb-3">
            <Music2 className="w-3.5 h-3.5" />
            <span>{currentLang === 'mm' ? 'တေးလက်ရာများ' : 'Master Repertoire'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] tracking-tight mb-4">
            {currentLang === 'mm' ? 'စန္ဒရားလက်ရာများနှင့် သံစဉ်များ' : 'Signature Piano Works & Arrangements'}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {currentLang === 'mm'
              ? 'ဆရာလွှမ်းမိုးအောင်၏ နာမည်ကျော် တစ်ကိုယ်တော် စန္ဒရားလက်ရာများနှင့် လွှမ်း Music Band ၏ သံစုံတေးများ'
              : 'Original compositions, classical adaptations, and dynamic ensemble orchestrations created by KB Hlwan Moe Aung.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key as typeof selectedCategory)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
                selectedCategory === c.key
                  ? 'bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 font-bold shadow-md'
                  : 'bg-[var(--bg-card)] hover:border-[var(--accent-gold)] text-[var(--text-secondary)] border border-[var(--border-card)]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 2-Column / 3-Column Luxury Repertoire Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="rounded-3xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-subtle)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg cursor-pointer"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-black/20 to-transparent opacity-90"></div>

                  {/* Year & Category Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 text-[#fbe2a0] backdrop-blur-sm border border-stone-800">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] backdrop-blur-sm border border-[var(--border-subtle)]">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors mb-2 line-clamp-1">
                    {currentLang === 'mm' ? item.titleMm : item.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6 line-clamp-3">
                    {currentLang === 'mm' ? item.descriptionMm : item.description}
                  </p>

                  {/* Musical Technical Specifications */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[var(--border-card)] mb-4 text-[11px]">
                    <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                      <Compass className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                      <span className="truncate">{item.keySignature}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                      <span className="truncate">{item.tempo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-card)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Repertoire Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-card)] z-10"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#fbe2a0] bg-black/75 px-3 py-1 rounded-full">
                  {activeItem.year} • {activeItem.category}
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">
              {currentLang === 'mm' ? activeItem.titleMm : activeItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              {currentLang === 'mm' ? activeItem.descriptionMm : activeItem.description}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] mb-6 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">Key Signature</span>
                <span className="font-semibold text-[var(--text-primary)]">{activeItem.keySignature}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">Tempo / Movement</span>
                <span className="font-semibold text-[var(--text-primary)]">{activeItem.tempo}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-2">
                {activeItem.tags.map((t, idx) => (
                  <span key={idx} className="text-[11px] text-[var(--accent-gold)]">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-xl bg-[var(--accent-gold)] text-stone-950 font-bold text-xs uppercase tracking-wider shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
