import { WEDDING_DETAILS } from '../data/weddingData';

export function PreciousMoments() {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="text-center mb-10">
        <h2 className="font-marcellus text-2xl sm:text-4xl text-[#3D0A11] font-bold">
          Precious Moments
        </h2>
        <div className="w-24 h-0.5 bg-[#C59B4B] mx-auto mt-2" />
        <p className="font-cormorant italic text-[#751B27] text-lg sm:text-xl mt-2">
          Glimpses of their journey toward forever
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
        {/* 1. Bride Portrait Frame */}
        <div className="relative group bg-[#FAF6EE] rounded-2xl p-3 border-2 border-[#E5C378] shadow-md">
          <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#5B131D]/10 via-[#C59B4B]/10 to-[#5B131D]/20 border border-[#C59B4B]/40 flex flex-col items-center justify-center text-center p-6 relative">
            <div className="w-16 h-16 rounded-full bg-[#E5C378]/25 border border-[#C59B4B]/50 flex items-center justify-center text-[#855E19] text-2xl mb-3 shadow-inner">
              🌸
            </div>
            <h4 className="font-marcellus text-lg text-[#3D0A11] font-bold">
              The Bride
            </h4>
            <p className="font-cormorant text-sm text-[#5B131D] italic mt-1">
              {WEDDING_DETAILS.bride.fullName}
            </p>
            <span className="mt-4 px-3 py-1 bg-[#FDFBF7]/90 rounded-full text-[11px] font-sans text-[#855E19] border border-[#C59B4B]/30 shadow-2xs">
              Bride Portrait
            </span>
          </div>
        </div>

        {/* 2. Center Main Couple Photo Frame (Elevated) */}
        <div className="relative group bg-[#FAF6EE] rounded-2xl p-4 border-4 border-[#C59B4B] shadow-xl md:-translate-y-2">
          <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#5B131D]/15 via-[#C59B4B]/15 to-[#5B131D]/25 border-2 border-[#E5C378] flex flex-col items-center justify-center text-center p-6 relative">
            <div className="w-20 h-20 rounded-full bg-[#3D0A11]/10 border-2 border-[#C59B4B] flex items-center justify-center text-3xl mb-4 text-[#5B131D] shadow-inner">
              🪷
            </div>
            <h3 className="font-marcellus text-2xl sm:text-3xl text-[#3D0A11] font-bold">
              Madan & Rashmika
            </h3>
            <p className="font-script text-2xl text-[#855E19] mt-1">
              Together in Love
            </p>
            <p className="font-cormorant text-sm sm:text-base text-[#5B131D] italic mt-2 font-medium">
              {WEDDING_DETAILS.date.formattedDate}
            </p>
            <span className="mt-5 px-4 py-1.5 bg-[#3D0A11] text-[#F5E3B3] rounded-full text-xs font-marcellus uppercase tracking-widest border border-[#E5C378]/60 shadow-sm">
              Couple Portrait
            </span>
          </div>
        </div>

        {/* 3. Groom Portrait Frame */}
        <div className="relative group bg-[#FAF6EE] rounded-2xl p-3 border-2 border-[#E5C378] shadow-md">
          <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#5B131D]/10 via-[#C59B4B]/10 to-[#5B131D]/20 border border-[#C59B4B]/40 flex flex-col items-center justify-center text-center p-6 relative">
            <div className="w-16 h-16 rounded-full bg-[#E5C378]/25 border border-[#C59B4B]/50 flex items-center justify-center text-[#855E19] text-2xl mb-3 shadow-inner">
              ⚜️
            </div>
            <h4 className="font-marcellus text-lg text-[#3D0A11] font-bold">
              The Groom
            </h4>
            <p className="font-cormorant text-sm text-[#5B131D] italic mt-1">
              {WEDDING_DETAILS.groom.fullName}
            </p>
            <span className="mt-4 px-3 py-1 bg-[#FDFBF7]/90 rounded-full text-[11px] font-sans text-[#855E19] border border-[#C59B4B]/30 shadow-2xs">
              Groom Portrait
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
