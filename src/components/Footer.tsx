import { WEDDING_DETAILS } from '../data/weddingData';

export function Footer() {
  return (
    <footer className="text-center pt-8 pb-14 border-t border-[#C59B4B]/30">
      <div className="text-2xl text-[#C59B4B] mb-2">🪷</div>
      <p className="font-marcellus text-xs sm:text-sm tracking-widest text-[#3D0A11] uppercase font-semibold">
        Madan & Rashmika Wedding Celebration
      </p>
      <p className="font-cormorant italic text-sm text-[#751B27] mt-1">
        18 October 2026 • {WEDDING_DETAILS.venue.area}, {WEDDING_DETAILS.venue.districtState}
      </p>
      <p className="text-xs text-[#855E19] mt-3 font-kannada font-medium">
        ॥ ಧನ್ಯವಾದಗಳು ॥
      </p>
    </footer>
  );
}
