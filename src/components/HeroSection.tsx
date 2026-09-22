import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Heart, Send } from 'lucide-react';
import { WEDDING_DETAILS, getGoogleCalendarUrl, downloadIcsFile } from '../data/weddingData';

interface HeroSectionProps {
  onOpenRsvp: () => void;
  onOpenCover: () => void;
}

export function HeroSection({ onOpenRsvp, onOpenCover }: HeroSectionProps) {
  // Target: 18 October 2026, 11:00 AM IST (UTC+05:30)
  const targetTime = new Date('2026-10-18T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const padZero = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <section className="mb-14 sm:mb-20">
      {/* Top Auspicious Invocation Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-3 text-[#C59B4B] mb-2.5">
          <div className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-[#C59B4B]" />
          <span className="text-xl">🪷</span>
          <span className="font-kannada text-[#5B131D] font-semibold tracking-wide text-lg sm:text-2xl">
            {WEDDING_DETAILS.shlokas.ganesha}
          </span>
          <span className="text-xl">🪷</span>
          <div className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-[#C59B4B]" />
        </div>
        <p className="font-cormorant italic text-base sm:text-lg text-[#751B27]/80 max-w-xl mx-auto px-4">
          "Vakratunda Mahakaya Suryakoti Samaprabha | Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada"
        </p>
      </div>

      {/* Main Royal Invitation Card Frame */}
      <div
        id="wedding-hero-card"
        className="relative bg-[#FDFBF7] rounded-3xl p-6 sm:p-12 md:p-14 royal-border-box shadow-xl text-center overflow-hidden"
      >
        {/* Decorative Golden Corner Flourishes */}
        <div className="absolute top-3 left-3 text-[#C59B4B] opacity-70 pointer-events-none">
          <svg width="34" height="34" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L35,0 C25,12 12,25 0,35 Z" />
            <circle cx="8" cy="8" r="3.5" />
          </svg>
        </div>
        <div className="absolute top-3 right-3 text-[#C59B4B] opacity-70 pointer-events-none transform rotate-90">
          <svg width="34" height="34" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L35,0 C25,12 12,25 0,35 Z" />
            <circle cx="8" cy="8" r="3.5" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 text-[#C59B4B] opacity-70 pointer-events-none transform -rotate-90">
          <svg width="34" height="34" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L35,0 C25,12 12,25 0,35 Z" />
            <circle cx="8" cy="8" r="3.5" />
          </svg>
        </div>
        <div className="absolute bottom-3 right-3 text-[#C59B4B] opacity-70 pointer-events-none transform rotate-180">
          <svg width="34" height="34" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L35,0 C25,12 12,25 0,35 Z" />
            <circle cx="8" cy="8" r="3.5" />
          </svg>
        </div>

        {/* View Envelope Cover Button for guests who want to see the cover again */}
        <div className="flex justify-end mb-2">
          <button
            onClick={onOpenCover}
            className="text-xs font-marcellus text-[#751B27] hover:text-[#3D0A11] bg-[#FAF6EE] border border-[#C59B4B]/40 px-3 py-1 rounded-full hover:bg-[#F4ECE0] transition-colors cursor-pointer"
          >
            ✉️ View Cover Card
          </button>
        </div>

        {/* Traditional Kalasha & Coconut Illustration */}
        <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 text-[#C59B4B] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="currentColor">
            <path d="M40 70 L60 70 L66 50 L34 50 Z" fill="#C59B4B" />
            <circle cx="50" cy="42" r="14" fill="#9E8975" />
            <path d="M50 18 L43 33 L57 33 Z" fill="#751B27" />
            <path d="M33 40 Q24 28 32 18 Q42 30 37 40" fill="#4B6343" />
            <path d="M67 40 Q76 28 68 18 Q58 30 63 40" fill="#4B6343" />
            <rect x="34" y="70" width="32" height="4" rx="2" fill="#855E19" />
            <circle cx="50" cy="58" r="3" fill="#FAF6EE" />
          </svg>
        </div>

        <p className="font-cormorant italic text-lg sm:text-2xl text-[#5B131D] tracking-wide max-w-xl mx-auto leading-relaxed">
          Together with their families, we invite you to celebrate the wedding of
        </p>

        {/* Couple Names */}
        <div className="my-6 sm:my-8 space-y-2">
          <div className="inline-block">
            <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-[#855E19] font-marcellus mb-1 font-semibold">
              {WEDDING_DETAILS.groom.role}
            </span>
            <h1 className="font-marcellus text-2xl sm:text-4xl md:text-5xl text-[#3D0A11] font-bold tracking-tight">
              {WEDDING_DETAILS.groom.fullName}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 py-1.5">
            <div className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent to-[#C59B4B]" />
            <span className="text-[#912635] text-2xl sm:text-3xl animate-pulse">♥️</span>
            <div className="h-px w-14 sm:w-24 bg-gradient-to-l from-transparent to-[#C59B4B]" />
          </div>

          <div className="inline-block">
            <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-[#855E19] font-marcellus mb-1 font-semibold">
              {WEDDING_DETAILS.bride.role}
            </span>
            <h1 className="font-marcellus text-2xl sm:text-4xl md:text-5xl text-[#3D0A11] font-bold tracking-tight">
              {WEDDING_DETAILS.bride.fullName}
            </h1>
          </div>
        </div>

        {/* Auspicious Wedding Date Badge */}
        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-[#3D0A11] text-[#F5E3B3] border border-[#C59B4B]/70 shadow-md">
          <span className="text-[#E5C378]">📅</span>
          <span className="font-marcellus text-sm sm:text-lg font-medium tracking-wide">
            {WEDDING_DETAILS.date.formattedDate}
          </span>
        </div>

        {/* LIVE COUNTDOWN TIMER */}
        <div className="mt-10 sm:mt-12 pt-7 border-t border-[#C59B4B]/30">
          <p className="font-marcellus text-xs uppercase tracking-widest text-[#855E19] mb-5 font-semibold">
            Auspicious Muhurtham Countdown
          </p>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {/* Days */}
            <div className="bg-[#FAF6EE] border border-[#C59B4B]/40 rounded-xl p-2.5 sm:p-4 text-center shadow-xs">
              <span className="font-marcellus text-2xl sm:text-3xl md:text-4xl text-[#3D0A11] font-bold block">
                {padZero(timeLeft.days)}
              </span>
              <span className="text-[10px] sm:text-xs font-marcellus uppercase text-[#855E19] tracking-widest mt-1 block">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="bg-[#FAF6EE] border border-[#C59B4B]/40 rounded-xl p-2.5 sm:p-4 text-center shadow-xs">
              <span className="font-marcellus text-2xl sm:text-3xl md:text-4xl text-[#3D0A11] font-bold block">
                {padZero(timeLeft.hours)}
              </span>
              <span className="text-[10px] sm:text-xs font-marcellus uppercase text-[#855E19] tracking-widest mt-1 block">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-[#FAF6EE] border border-[#C59B4B]/40 rounded-xl p-2.5 sm:p-4 text-center shadow-xs">
              <span className="font-marcellus text-2xl sm:text-3xl md:text-4xl text-[#3D0A11] font-bold block">
                {padZero(timeLeft.minutes)}
              </span>
              <span className="text-[10px] sm:text-xs font-marcellus uppercase text-[#855E19] tracking-widest mt-1 block">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-[#FAF6EE] border border-[#C59B4B]/40 rounded-xl p-2.5 sm:p-4 text-center shadow-xs">
              <span className="font-marcellus text-2xl sm:text-3xl md:text-4xl text-[#751B27] font-bold block">
                {padZero(timeLeft.seconds)}
              </span>
              <span className="text-[10px] sm:text-xs font-marcellus uppercase text-[#855E19] tracking-widest mt-1 block">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Ribbon */}
        <div className="mt-8 pt-6 border-t border-[#C59B4B]/20 flex flex-wrap items-center justify-center gap-3">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF6EE] hover:bg-[#F4ECE0] text-[#3D0A11] font-marcellus text-xs uppercase tracking-wider rounded-xl border border-[#C59B4B]/50 transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={downloadIcsFile}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF6EE] hover:bg-[#F4ECE0] text-[#3D0A11] font-marcellus text-xs uppercase tracking-wider rounded-xl border border-[#C59B4B]/50 transition-colors shadow-xs cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>Download iCal (.ics)</span>
          </button>

          <button
            onClick={onOpenRsvp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C59B4B] to-[#E5C378] text-[#3D0A11] font-marcellus text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs hover:brightness-105 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#3D0A11]" />
            <span>Confirm RSVP</span>
          </button>
        </div>
      </div>
    </section>
  );
}
