import { WEDDING_DETAILS } from '../data/weddingData';

export function TraditionalCardReplica() {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="text-center mb-8">
        <h2 className="font-marcellus text-xl sm:text-3xl text-[#3D0A11] font-bold">
          The Wedding Invitation Letter
        </h2>
        <div className="w-16 h-0.5 bg-[#C59B4B] mx-auto mt-2" />
        <p className="font-cormorant italic text-[#751B27] text-base sm:text-lg mt-1">
          In keeping with our sacred tradition & timeless customs
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-[#F7F2E7] p-7 sm:p-14 rounded-2xl shadow-2xl relative border-2 border-[#5B131D]">
        {/* Double fine maroon & gold inner border lines */}
        <div className="absolute inset-2 border border-[#C59B4B]/70 pointer-events-none rounded-lg" />
        <div className="absolute inset-3.5 border border-[#3D0A11]/30 pointer-events-none rounded-md" />

        {/* Top Mangala Stamp */}
        <div className="text-center mb-6 pt-2">
          <div className="font-kannada text-[#5B131D] font-bold text-base sm:text-lg">
            {WEDDING_DETAILS.shlokas.venkataramana}
          </div>
          <div className="w-20 h-0.5 bg-[#5B131D]/40 mx-auto my-1.5" />
          <div className="font-kannada text-xs sm:text-sm text-[#751B27]">
            {WEDDING_DETAILS.shlokas.kuladevata}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="font-cormorant italic text-lg sm:text-xl text-[#3D0A11] leading-relaxed max-w-lg mx-auto">
            {WEDDING_DETAILS.shlokas.traditionalEnglish}
          </p>

          {/* Groom Block */}
          <div className="py-2">
            <h3 className="font-marcellus text-2xl sm:text-3xl text-[#3D0A11] font-bold tracking-tight">
              {WEDDING_DETAILS.groom.fullName}
            </h3>
            <p className="font-cormorant text-sm text-[#5B131D] italic mt-0.5">
              (Groom)
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 text-[#C59B4B]">
            <div className="h-px w-16 sm:w-24 bg-[#C59B4B]" />
            <span className="font-cormorant text-xl text-[#5B131D] italic font-semibold">with</span>
            <div className="h-px w-16 sm:w-24 bg-[#C59B4B]" />
          </div>

          {/* Bride Block */}
          <div className="py-2">
            <h3 className="font-marcellus text-2xl sm:text-3xl text-[#3D0A11] font-bold tracking-tight">
              {WEDDING_DETAILS.bride.fullName}
            </h3>
            <p className="font-cormorant text-sm text-[#5B131D] italic mt-0.5">
              (Bride)
            </p>
          </div>

          {/* Traditional Ceremony Details */}
          <div className="mt-6 pt-6 border-t border-[#5B131D]/20 text-center font-marcellus text-[#3D0A11]">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#855E19]">
              Sumuhurtham
            </p>
            <p className="text-lg sm:text-xl font-bold mt-1">
              Sunday, 18th October 2026
            </p>
            <p className="text-sm sm:text-base text-[#5B131D] font-medium">
              at 11:00 AM to 11:40 AM (Dhanur Lagna)
            </p>

            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#855E19] mt-5">
              Venue
            </p>
            <p className="text-base sm:text-lg font-bold">
              {WEDDING_DETAILS.venue.name}
            </p>
            <p className="text-xs font-kannada text-[#751B27] mt-0.5">
              {WEDDING_DETAILS.venue.kannadaName}
            </p>
            <p className="text-xs sm:text-sm text-[#5B131D] mt-0.5">
              {WEDDING_DETAILS.venue.area}, {WEDDING_DETAILS.venue.districtState}
            </p>
          </div>

          {/* Respectful Closing */}
          <div className="pt-6 font-cormorant italic text-base sm:text-lg text-[#5B131D]">
            "Your presence and blessings will be our greatest honour and gift."
          </div>
        </div>
      </div>
    </section>
  );
}
