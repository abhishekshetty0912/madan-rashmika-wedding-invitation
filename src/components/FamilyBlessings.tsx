import { WEDDING_DETAILS, FAMILY_BLESSINGS } from '../data/weddingData';

export function FamilyBlessings() {
  return (
    <section className="mb-14 sm:mb-20 text-center">
      <div className="bg-[#FDFBF7] p-7 sm:p-12 rounded-3xl royal-border-box shadow-md relative overflow-hidden">
        {/* Subtle sacred background mandala */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <svg className="w-96 h-96 text-[#855E19]" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative z-10">
          <span className="text-2xl">🪷</span>
          <h2 className="font-marcellus text-2xl sm:text-4xl text-[#3D0A11] font-bold mt-2">
            With the Blessings of Our Families
          </h2>
          <div className="w-20 h-0.5 bg-[#C59B4B] mx-auto my-3" />

          <p className="font-cormorant italic text-lg sm:text-xl text-[#751B27] max-w-xl mx-auto mb-8">
            Guided by sacred tradition, enriched by elder benedictions, and united in eternal love.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-center">
            {FAMILY_BLESSINGS.map((item) => (
              <div
                key={item.side}
                className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#C59B4B]/35 shadow-xs flex flex-col items-center justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest font-marcellus text-[#855E19] font-semibold block mb-1">
                    {item.sideLabel}
                  </span>
                  <h4 className="font-marcellus text-lg sm:text-xl text-[#3D0A11] font-bold">
                    {item.familyTitle}
                  </h4>
                  <p className="font-cormorant italic text-[#5B131D] text-sm sm:text-base mt-2 leading-relaxed">
                    {item.blessingText}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#C59B4B]/20 w-full text-xs font-sans text-[#751B27]">
                  {item.contactName} • <span className="font-medium">{item.phone}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#C59B4B]/25 text-xs sm:text-sm font-kannada text-[#751B27]">
            {WEDDING_DETAILS.shlokas.shanti}
          </div>
        </div>
      </div>
    </section>
  );
}
