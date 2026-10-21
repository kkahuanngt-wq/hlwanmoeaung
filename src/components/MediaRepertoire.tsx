import React, { useState } from 'react';
import { Disc, Play, ExternalLink, Music, Eye, X, Volume2 } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { REPERTOIRE_ITEMS } from '../data/repertoireData';
import type { RepertoireItem } from '../data/repertoireData';

interface MediaRepertoireProps {
  currentLang: Language;
  onPlayTrack: (trackId: string) => void;
}

export const MediaRepertoire: React.FC<MediaRepertoireProps> = ({ currentLang, onPlayTrack }) => {
  const t = translations[currentLang];
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'solo' | 'band' | 'tutorial' | 'traditional'>('all');
  const [activeModalItem, setActiveModalItem] = useState<RepertoireItem | null>(null);

  const filteredItems = REPERTOIRE_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const filterButtons = [
    { key: 'all', label: t.repertoire.filterAll },
    { key: 'solo', label: t.repertoire.filterSolo },
    { key: 'band', label: t.repertoire.filterBand },
    { key: 'tutorial', label: t.repertoire.filterTutorial },
    { key: 'traditional', label: t.repertoire.filterTraditional },
  ];

  return (
    <section id="repertoire" className="py-24 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <Disc className="w-3.5 h-3.5" />
            <span>{t.repertoire.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {t.repertoire.title}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {t.repertoire.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setSelectedFilter(btn.key as typeof selectedFilter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === btn.key
                  ? 'bg-gradient-to-r from-[#fbe2a0] to-[#e6c387] text-stone-950 shadow-md font-bold'
                  : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-[#11131c] border border-stone-800/80 hover:border-[#e6c387]/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Thumbnail Preview Area */}
                <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => setActiveModalItem(item)}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-black/30 to-transparent"></div>

                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-black/60 border border-[#e6c387] flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#fbe2a0] fill-[#fbe2a0] ml-1" />
                    </div>
                  </div>

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#fbe2a0] backdrop-blur-sm border border-stone-800">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-2 text-[10px] text-stone-300 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.views && (
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-stone-400" />
                        {item.views}
                      </span>
                    )}
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#fbe2a0] transition-colors mb-2 line-clamp-1">
                    {currentLang === 'mm' ? item.titleMm : item.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4 line-clamp-2">
                    {currentLang === 'mm' ? item.descriptionMm : item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-stone-900 text-stone-400 border border-stone-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-800/60 flex items-center justify-between gap-3">
                {item.audioTrackId ? (
                  <button
                    onClick={() => {
                      if (item.audioTrackId) {
                        onPlayTrack(item.audioTrackId);
                      }
                    }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#fbe2a0] hover:text-white transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-[#e6c387]" />
                    <span>{t.repertoire.listenTrack}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-white transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 text-[#e6c387]" />
                    <span>{t.repertoire.watchVideo}</span>
                  </button>
                )}

                <a
                  href="https://www.youtube.com/@KBHlwanMoeAung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-red-400 hover:text-red-300 font-medium"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Banner Promotion */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-red-950/30 via-[#12141c] to-[#12141c] border border-red-900/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 fill-red-500" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-white mb-1">
                KB Hlwan Moe Aung Official Channel
              </h4>
              <p className="text-xs text-stone-400">
                Over 250,000 subscribers, 500+ piano tutorials, live band concert recordings, and sheet music.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@KBHlwanMoeAung"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-red-600/30 transition-all shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit YouTube Channel</span>
          </a>
        </div>
      </div>

      {/* Video Modal Preview */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#11131c] rounded-3xl border border-[#e6c387]/30 p-6 shadow-2xl">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#e6c387]/20 text-[#fbe2a0] mb-2 inline-block">
                {activeModalItem.category} Performance
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {currentLang === 'mm' ? activeModalItem.titleMm : activeModalItem.title}
              </h3>
            </div>

            {/* Video Player Emulation */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black mb-6 border border-stone-800 flex items-center justify-center">
              <img
                src={activeModalItem.thumbnail}
                alt={activeModalItem.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <a
                  href="https://www.youtube.com/@KBHlwanMoeAung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 mb-3"
                >
                  <Play className="w-7 h-7 fill-white ml-1" />
                </a>
                <p className="text-sm font-semibold text-white">
                  Watch Full HD Performance on YouTube
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Official release by KB Hlwan Moe Aung & Hlwan Music Band
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
              {currentLang === 'mm' ? activeModalItem.descriptionMm : activeModalItem.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800">
              <div className="flex gap-2">
                {activeModalItem.tags.map((t, i) => (
                  <span key={i} className="text-xs text-stone-400 bg-stone-900 px-2 py-1 rounded">
                    #{t}
                  </span>
                ))}
              </div>

              {activeModalItem.audioTrackId && (
                <button
                  onClick={() => {
                    if (activeModalItem.audioTrackId) {
                      onPlayTrack(activeModalItem.audioTrackId);
                      setActiveModalItem(null);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#fbe2a0] to-[#e6c387] text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Music className="w-4 h-4 text-stone-950" />
                  <span>Play Music Now</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
