import React from 'react';
import { Calendar, Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface ContactBookingProps {
  currentLang: Language;
}

export const ContactBooking: React.FC<ContactBookingProps> = ({ currentLang }) => {
  const t = translations[currentLang];


  return (
    <section id="booking" className="py-16 sm:py-24 relative bg-[var(--bg-secondary)] border-t border-[var(--border-card)] overflow-hidden w-full max-w-full">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[450px] bg-[var(--accent-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-[var(--accent-gold)] text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.booking.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[var(--text-primary)] tracking-tight mb-4">
            {t.booking.title}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* 2-Column VIP Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact & Hotline Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-xl relative overflow-hidden">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <span>Management & Direct Booking</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Phone Hotline Card */}
                <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-gold)]/15 flex items-center justify-center text-[var(--accent-gold)] mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-1">
                    {t.booking.directCall}
                  </span>
                  <a href="tel:+959792970226" className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors block">
                    +95 9 792 970 226
                  </a>
                  <a href="tel:+959422499370" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors block mt-0.5">
                    +95 9 422 499 370
                  </a>
                </div>

                {/* Viber & WhatsApp Card */}
                <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500 mb-3">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-1">
                    {t.booking.viberChat}
                  </span>
                  <a
                    href="https://wa.me/959792970226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline block text-left"
                  >
                    +95 9 792 970 226
                  </a>
                  <span className="text-xs text-[var(--text-muted)] block mt-0.5">
                    Viber & WhatsApp Direct
                  </span>
                </div>

                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500 mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-1">
                    {t.booking.emailInquiry}
                  </span>
                  <a href="mailto:booking@hlwanmusicband.com" className="text-xs font-bold text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors break-all">
                    booking@hlwanmusicband.com
                  </a>
                </div>

                {/* Studio Location Card */}
                <div className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-card)]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-[var(--accent-gold)] mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-1">
                    {t.booking.studioLocation}
                  </span>
                  <p className="text-xs font-medium text-[var(--text-primary)] leading-relaxed">
                    {currentLang === 'mm'
                      ? 'အမှတ် (၉၀၃)၊ မြေညီထပ်၊ မာဃ (၁၂) လမ်း၊ (၁၂) ရပ်ကွက်၊ တောင်ဥက္ကလာပမြို့နယ်၊ ရန်ကုန်မြို့။'
                      : 'No. 903, Ground Floor, Magha (12) St, (12) Ward, South Okkalapa, Yangon'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)] mt-6">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                <span>{t.booking.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Performance Consultation & Guarantees (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent-gold)] block mb-2">
                Bespoke Performance Curation
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
                Tailored for Your Exact Milestone Event
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {t.booking.packageAssistance}
              </p>

              <div className="space-y-3.5 pt-2 mb-8">
                <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--text-primary)]">Pre-Event Song Selection & Consultation</h5>
                    <p className="text-[11px] text-[var(--text-muted)]">Walk-in arrangements, favorite romantic ballads, or customized setlists.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--text-primary)]">Broadcast-Quality Stage Audio Rider</h5>
                    <p className="text-[11px] text-[var(--text-muted)]">Includes dedicated digital mixing and wireless audio engineer.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-card)] flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-xs text-[var(--text-primary)]">Available Nationwide & Regional</h5>
                    <p className="text-[11px] text-[var(--text-muted)]">Yangon, Mandalay, Naypyitaw, Bagan, Taunggyi, and destination events.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] text-center">
              <p className="text-xs font-semibold text-[var(--accent-gold)]">
                Booking 2026/2027 Wedding Seasons & Festival Headline Dates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
