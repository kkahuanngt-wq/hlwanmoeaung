import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Phone, Mail, User, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface BookingEngineProps {
  currentLang: Language;
  preselectedPackage?: string;
}

export const BookingEngine: React.FC<BookingEngineProps> = ({ currentLang, preselectedPackage }) => {
  const t = translations[currentLang];

  const [eventType, setEventType] = useState<string>('Wedding Ceremony & Reception');
  const [packageChoice, setPackageChoice] = useState<string>(preselectedPackage || 'Acoustic Romance Trio');
  const [eventDate, setEventDate] = useState<string>('');
  const [locationCity, setLocationCity] = useState<string>('Yangon');
  const [clientName, setClientName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedPackage) {
      setPackageChoice(preselectedPackage);
    }
  }, [preselectedPackage]);

  // Pricing calculations
  const calculateEstimatedRange = () => {
    if (packageChoice.toLowerCase().includes('solo')) {
      return currentLang === 'mm' ? '၁,၅၀၀,၀၀၀ - ၂,၅၀၀,၀၀၀ ကျပ်' : '$600 - $1,000 USD (Approx.)';
    } else if (packageChoice.toLowerCase().includes('trio')) {
      return currentLang === 'mm' ? '၂,၅၀၀,၀၀၀ - ၄,၀၀၀,၀၀၀ ကျပ်' : '$1,200 - $1,800 USD (Approx.)';
    } else if (packageChoice.toLowerCase().includes('full') || packageChoice.toLowerCase().includes('၇')) {
      return currentLang === 'mm' ? '၄,၅၀၀,၀၀၀ - ၇,၅၀၀,၀၀၀ ကျပ်' : '$2,200 - $3,500 USD (Approx.)';
    } else {
      return currentLang === 'mm' ? '၃,၀၀၀,၀၀၀ - ၅,၀၀၀,၀၀၀ ကျပ်' : '$1,500 - $2,500 USD (Approx.)';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fbe2a0', '#e6c387', '#b8934a', '#ffffff']
    });

    setIsSubmitted(true);

    // Prepare message
    const message = `[BOOKING INQUIRY - HLWAN MOE AUNG]
Name: ${clientName || 'N/A'}
Phone: ${phoneNumber || 'N/A'}
Email: ${emailAddress || 'N/A'}
Event Type: ${eventType}
Band Package: ${packageChoice}
Date: ${eventDate || 'TBD'}
Location: ${locationCity}
Notes: ${specialNotes || 'None'}`;

    // WhatsApp / Direct web link
    const waUrl = `https://wa.me/959798000000?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 relative bg-[#090b11]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#e6c387]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.booking.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {t.booking.title}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="rounded-3xl bg-[#10121a]/95 border border-[#e6c387]/30 shadow-2xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {t.booking.successTitle}
              </h3>
              <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                {t.booking.successDesc}
              </p>
              <div className="pt-6">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-[#fbe2a0] text-xs font-semibold"
                >
                  Edit or Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Type & Band Package Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Event Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                    {t.booking.selectEvent}
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387] cursor-pointer"
                  >
                    <option value="Wedding Ceremony & Reception">Wedding Ceremony & Reception (မင်္ဂလာပွဲ)</option>
                    <option value="Grand Gala Dinner">Corporate Gala Dinner (ကုမ္ပဏီ ဧည့်ခံပွဲ)</option>
                    <option value="Private VIP Cocktail Dinner">Private VIP Dinner (သီးသန့် ညစာစားပွဲ)</option>
                    <option value="Shinbyu Auspicious Blessing">Shinbyu Traditional Blessing (ရှင်ပြုအလှူ)</option>
                    <option value="Studio Session & Arranging">Hlwan Studio Recording (တေးသံသွင်း)</option>
                    <option value="Live Concert Showcase">Live Concert / Festival Showcase (တေးဂီတပွဲကြီး)</option>
                  </select>
                </div>

                {/* Band Package */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                    {t.booking.selectPackage}
                  </label>
                  <select
                    value={packageChoice}
                    onChange={(e) => setPackageChoice(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387] cursor-pointer"
                  >
                    <option value="Acoustic Romance Trio">Acoustic Romance Trio (Piano + Strings + Vocals)</option>
                    <option value="Full 7-Piece Hlwan Music Band">Full 7-Piece Hlwan Music Band (Flagship)</option>
                    <option value="Maestro Solo Piano">Maestro Solo Piano (KB Hlwan Moe Aung)</option>
                    <option value="Royal & Traditional Ensemble">Royal & Traditional Heritage Ensemble</option>
                  </select>
                </div>
              </div>

              {/* Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#e6c387]" />
                    <span>{t.booking.dateLabel}</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e6c387]" />
                    <span>{t.booking.locationLabel}</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Novotel Yangon, Sedona, Mandalay..."
                    value={locationCity}
                    onChange={(e) => setLocationCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#e6c387]" />
                    <span>{t.booking.nameLabel}</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#e6c387]" />
                    <span>{t.booking.phoneLabel}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09..."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#e6c387]" />
                    <span>{t.booking.emailLabel}</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387]"
                  />
                </div>
              </div>

              {/* Notes & Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                  {t.booking.notesLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention preferred songs, special guest accompaniment, or timeline details..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 text-sm focus:outline-none focus:border-[#e6c387] resize-none"
                ></textarea>
              </div>

              {/* Estimated Pricing Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-[#e6c387]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#e6c387]" />
                  <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">
                    {t.booking.estPrice}:
                  </span>
                </div>
                <span className="font-serif text-lg font-bold text-[#fbe2a0]">
                  {calculateEstimatedRange()}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#e6c387]/20 cursor-pointer"
              >
                <Send className="w-4 h-4 text-stone-950" />
                <span>{t.booking.submitBtn}</span>
              </button>

              {/* Instant Hotline */}
              <div className="text-center pt-2">
                <p className="text-xs text-stone-400">
                  {t.booking.instantContact}{' '}
                  <a href="tel:+959798000000" className="text-[#fbe2a0] font-bold underline hover:text-white ml-1">
                    +95 9 798 000 000 / +95 9 420 111 222
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
