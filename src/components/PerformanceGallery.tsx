import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Language } from '../data/translations';
import { GALLERY_ITEMS } from '../data/repertoireData';

interface PerformanceGalleryProps {
  currentLang: Language;
}

export const PerformanceGallery: React.FC<PerformanceGalleryProps> = ({ currentLang }) => {
  const [filter, setFilter] = useState<'all' | 'concert' | 'wedding' | 'studio' | 'backstage'>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const categories = [
    { key: 'all', label: currentLang === 'mm' ? 'အားလုံး' : 'All Moments' },
    { key: 'concert', label: currentLang === 'mm' ? 'ဖျော်ဖြေပွဲကြီးများ' : 'Concerts & Galas' },
    { key: 'wedding', label: currentLang === 'mm' ? 'မင်္ဂလာဧည့်ခံပွဲများ' : 'Royal Weddings' },
    { key: 'studio', label: currentLang === 'mm' ? 'စတူဒီယို လက်ရာများ' : 'Studio Tracking' },
    { key: 'backstage', label: currentLang === 'mm' ? 'စင်နောက်ကွယ်' : 'Backstage & Rehearsals' },
  ];

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const nextLightbox = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-24 relative bg-[#090a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{currentLang === 'mm' ? 'အမှတ်တရ ဓာတ်ပုံများ' : 'Visual Gallery'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {currentLang === 'mm' ? 'စင်တင်နှင့် မင်္ဂလာပွဲ မှတ်တမ်းများ' : 'Stage Moments & Live Atmosphere'}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {currentLang === 'mm'
              ? 'လွှမ်းမိုးအောင် နှင့် လွှမ်း Music Band တို့၏ စင်တင်အမှတ်တရ ဓာတ်ပုံများကို ရှုစားပါ။'
              : 'Glimpses of live tour arenas, grand ballrooms, and focused studio sessions.'}
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key as typeof filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === c.key
                  ? 'bg-[#e6c387] text-stone-950 font-bold shadow'
                  : 'bg-stone-900 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative rounded-3xl overflow-hidden cursor-pointer group h-80 border border-stone-800 hover:border-[#e6c387]/50 transition-all duration-500 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-stone-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#fbe2a0]" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6c387] mb-1 block">
                  {item.date} • {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#fbe2a0] transition-colors line-clamp-1">
                  {currentLang === 'mm' ? item.titleMm : item.title}
                </h4>
                <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                  {currentLang === 'mm' ? item.captionMm : item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-stone-900/90 text-stone-300 hover:text-white border border-stone-800 z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 border border-stone-700 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 border border-stone-700 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[activeItemIndex].image}
              alt={filteredItems[activeItemIndex].title}
              className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl border border-stone-800"
            />
            <div className="text-center mt-4 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#e6c387] font-semibold">
                {filteredItems[activeItemIndex].date}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                {currentLang === 'mm'
                  ? filteredItems[activeItemIndex].titleMm
                  : filteredItems[activeItemIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                {currentLang === 'mm'
                  ? filteredItems[activeItemIndex].captionMm
                  : filteredItems[activeItemIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
