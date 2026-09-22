import { CheckCircle2, Send } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface RsvpSectionProps {
  onOpenModal: () => void;
  rsvpCount?: number;
  hasConfirmed?: boolean;
}

export function RsvpSection({ onOpenModal, rsvpCount = 0, hasConfirmed = false }: RsvpSectionProps) {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="bg-gradient-to-b from-[#3D0A11] via-[#480E17] to-[#2E070D] text-[#FDFBF7] rounded-3xl p-7 sm:p-12 border-4 border-[#C59B4B]/70 shadow-2xl text-center relative overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
          <svg width="220" height="220" viewBox="0 0 100 100" fill="currentColor" className="text-[#E5C378]">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>

        <span className="text-3xl">💌</span>
        <h2 className="font-marcellus text-2xl sm:text-4xl text-[#F5E3B3] font-bold mt-2">
          We Would Be Honoured By Your Presence
        </h2>
        <div className="w-20 h-0.5 bg-[#E5C378] mx-auto my-3" />
        <p className="font-cormorant italic text-base sm:text-xl text-[#F4ECE0] max-w-xl mx-auto mb-7">
          Kindly confirm your attendance so we may accord you our warmest hospitality.
        </p>

        {hasConfirmed && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-[#4B6343]/80 border border-[#A4D49B]/40 rounded-full text-xs font-marcellus text-[#F4ECE0]">
            <CheckCircle2 className="w-4 h-4 text-[#A4D49B]" />
            <span>You have already confirmed attendance! Thank you.</span>
          </div>
        )}

        {/* Action Button: Confirm Attendance */}
        <div className="flex items-center justify-center max-w-xs mx-auto">
          <button
            id="confirm-attendance-modal-trigger"
            onClick={onOpenModal}
            className="w-full px-8 py-3.5 bg-gradient-to-r from-[#C59B4B] via-[#E5C378] to-[#C59B4B] hover:brightness-105 text-[#3D0A11] font-marcellus text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 border border-[#FFF6CC] cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#3D0A11]" />
            <span>{hasConfirmed ? 'Update Attendance' : 'Confirm Attendance'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
