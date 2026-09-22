import { motion } from 'motion/react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface InvitationCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function InvitationCover({ isOpen, onOpen }: InvitationCoverProps) {
  if (isOpen) {
    return null;
  }

  return (
    <motion.div
      id="invitation-cover-backdrop"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper-texture p-4 sm:p-6 overflow-y-auto"
      style={{
        backgroundImage: `
          radial-gradient(#C59B4B 0.75px, transparent 0.75px),
          radial-gradient(#C59B4B 0.75px, #FAF6EE 0.75px)
        `,
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px',
      }}
    >
      {/* Central Royal Maroon Card matching Image 1.png exactly */}
      <motion.div
        id="royal-invitation-cover-card"
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative w-full max-w-sm sm:max-w-md mx-auto bg-gradient-to-b from-[#3D0A11] via-[#480E17] to-[#2E070D] text-[#FAF6EE] rounded-2xl shadow-[0_20px_50px_rgba(61,10,17,0.45)] p-7 sm:p-9 border-[1.5px] border-[#C59B4B]/80 overflow-hidden flex flex-col items-center justify-between text-center min-h-[520px] sm:min-h-[580px]"
      >
        {/* Ornate Golden Filigree Corner Triangles & Flourishes */}
        <div className="absolute top-2.5 left-2.5 text-[#E5C378] opacity-80 pointer-events-none">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
            <path d="M0,0 L24,0 C18,8 8,18 0,24 Z" />
            <circle cx="5" cy="5" r="2.5" />
          </svg>
        </div>
        <div className="absolute top-2.5 right-2.5 text-[#E5C378] opacity-80 pointer-events-none transform rotate-90">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
            <path d="M0,0 L24,0 C18,8 8,18 0,24 Z" />
            <circle cx="5" cy="5" r="2.5" />
          </svg>
        </div>
        <div className="absolute bottom-2.5 left-2.5 text-[#E5C378] opacity-80 pointer-events-none transform -rotate-90">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
            <path d="M0,0 L24,0 C18,8 8,18 0,24 Z" />
            <circle cx="5" cy="5" r="2.5" />
          </svg>
        </div>
        <div className="absolute bottom-2.5 right-2.5 text-[#E5C378] opacity-80 pointer-events-none transform rotate-180">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
            <path d="M0,0 L24,0 C18,8 8,18 0,24 Z" />
            <circle cx="5" cy="5" r="2.5" />
          </svg>
        </div>

        {/* Fine gold inner framing line */}
        <div className="absolute inset-2 border border-[#C59B4B]/30 rounded-xl pointer-events-none" />

        {/* 1. Auspicious Shlokas at the top */}
        <div className="pt-2 z-10 space-y-1">
          <div className="text-[#F5E3B3] font-kannada text-base sm:text-lg font-medium tracking-wide">
            {WEDDING_DETAILS.shlokas.ganesha}
          </div>
          <div className="text-[#E5C378]/70 font-kannada text-xs sm:text-sm">
            {WEDDING_DETAILS.shlokas.guru}
          </div>
        </div>

        {/* 2. Central Golden Flame / Lotus Sacred Emblem matching the design in Image 1 */}
        <div className="my-5 z-10 flex flex-col items-center">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#55141E]/90 to-[#2A060C] border border-[#C59B4B]/50 flex items-center justify-center shadow-inner animate-lotus">
            {/* Soft radial golden aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#C59B4B]/15 to-transparent pointer-events-none" />

            {/* Stylized layered sacred flame / lotus SVG */}
            <svg
              viewBox="0 0 160 160"
              className="w-20 h-20 sm:w-24 sm:h-24 text-[#E5C378] drop-shadow-[0_2px_10px_rgba(229,195,120,0.55)]"
              fill="none"
            >
              <defs>
                <linearGradient id="goldPetal1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2B2" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9C742A" />
                </linearGradient>
                <linearGradient id="goldPetal2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F5E3B3" />
                  <stop offset="50%" stopColor="#C59B4B" />
                  <stop offset="100%" stopColor="#754E15" />
                </linearGradient>
              </defs>

              {/* Central Flame / Lotus Spire */}
              <path
                d="M80 20 C72 45 68 75 80 112 C92 75 88 45 80 20 Z"
                fill="url(#goldPetal1)"
              />
              {/* Inner Petals Left & Right */}
              <path
                d="M74 36 C55 54 52 82 74 112 C65 85 68 60 74 36 Z"
                fill="url(#goldPetal2)"
              />
              <path
                d="M86 36 C105 54 108 82 86 112 C95 85 92 60 86 36 Z"
                fill="url(#goldPetal2)"
              />
              {/* Mid Layer Petals */}
              <path
                d="M65 52 C38 70 42 96 70 114 C56 96 58 72 65 52 Z"
                fill="url(#goldPetal1)"
              />
              <path
                d="M95 52 C122 70 118 96 90 114 C104 96 102 72 95 52 Z"
                fill="url(#goldPetal1)"
              />
              {/* Outer Base Wings */}
              <path
                d="M56 74 C26 88 34 116 66 117 C46 110 46 92 56 74 Z"
                fill="url(#goldPetal2)"
              />
              <path
                d="M104 74 C134 88 126 116 94 117 C114 110 114 92 104 74 Z"
                fill="url(#goldPetal2)"
              />

              {/* Diya / Pedestal Plate */}
              <ellipse cx="80" cy="120" rx="34" ry="5" fill="#C59B4B" />
              <ellipse cx="80" cy="122" rx="24" ry="3" fill="#855E19" />
            </svg>
          </div>

          <p className="font-cormorant italic text-[#E5C378] text-base sm:text-lg tracking-wider mt-3">
            With the blessings of our families
          </p>

          {/* Couple Names */}
          <div className="mt-2 space-y-0.5">
            <h2 className="font-marcellus text-xl sm:text-2xl text-[#FAF6EE] font-semibold tracking-wide">
              {WEDDING_DETAILS.groom.fullName}
            </h2>
            <div className="text-[#E5C378] font-script text-2xl sm:text-3xl leading-none py-1">
              &
            </div>
            <h2 className="font-marcellus text-xl sm:text-2xl text-[#FAF6EE] font-semibold tracking-wide">
              {WEDDING_DETAILS.bride.fullName}
            </h2>
          </div>
        </div>

        {/* 3. Tap to Open Invitation Pill Button */}
        <div className="w-full pb-2 z-10">
          <motion.button
            id="tap-to-open-invitation-btn"
            onClick={onOpen}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#C59B4B] via-[#F5E3B3] to-[#C59B4B] text-[#3D0A11] font-marcellus text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-[0_4px_16px_rgba(197,155,75,0.45)] border border-[#FFF6CC] flex items-center justify-center mx-auto gap-2 transition-all cursor-pointer group"
          >
            <span>TAP TO OPEN INVITATION</span>
            <span className="text-base group-hover:translate-y-0.5 transition-transform duration-200">
              ↓
            </span>
          </motion.button>

          <p className="text-[10px] sm:text-xs text-[#E5C378]/60 mt-3 font-marcellus tracking-widest uppercase">
            TRADITIONAL ROYAL KARNATAKA WEDDING
          </p>
        </div>

        {/* Subtle royal background mandala watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <svg className="w-80 h-80 text-[#E5C378]" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M50 6 L50 94 M6 50 L94 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
