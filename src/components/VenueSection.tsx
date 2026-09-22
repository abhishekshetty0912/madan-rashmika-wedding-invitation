import { Calendar, Clock, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export function VenueSection() {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="text-center mb-10">
        <h2 className="font-marcellus text-2xl sm:text-4xl text-[#3D0A11] font-bold">
          Sacred Muhurtham & Venue
        </h2>
        <div className="w-24 h-0.5 bg-[#C59B4B] mx-auto mt-2" />
        <p className="font-cormorant italic text-[#751B27] text-lg sm:text-xl mt-2">
          Seeking your gracious presence and warmest blessings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Auspicious Day Card */}
        <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl royal-border-box text-center shadow-md flex flex-col items-center justify-between">
          <div className="w-14 h-14 rounded-full bg-[#3D0A11]/10 border border-[#C59B4B] flex items-center justify-center text-2xl text-[#3D0A11] mb-4">
            <Calendar className="w-7 h-7 text-[#5B131D]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-marcellus text-[#855E19] font-semibold block mb-1">
              Auspicious Day
            </span>
            <h3 className="font-marcellus text-xl sm:text-2xl text-[#3D0A11] font-bold">
              {WEDDING_DETAILS.date.dayOfWeek}
            </h3>
            <p className="font-cormorant text-xl text-[#5B131D] font-semibold mt-1">
              {WEDDING_DETAILS.date.dateString}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#C59B4B]/20 text-xs font-kannada text-[#751B27]">
            ಶುಭ ವಿವಾಹ ಮಹೋತ್ಸವ
          </div>
        </div>

        {/* 2. Sumuhurtham Card (Special Highlight) */}
        <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl royal-border-box text-center shadow-md flex flex-col items-center justify-between border-2 border-[#C59B4B]">
          <div className="w-14 h-14 rounded-full bg-[#3D0A11] text-[#F5E3B3] border border-[#E5C378] flex items-center justify-center text-2xl mb-4 shadow-sm">
            <Clock className="w-7 h-7 text-[#E5C378]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-marcellus text-[#855E19] font-semibold block mb-1">
              Sumuhurtham
            </span>
            <h3 className="font-marcellus text-xl sm:text-2xl text-[#3D0A11] font-bold">
              {WEDDING_DETAILS.muhurtham.timeRange}
            </h3>
            <p className="font-cormorant text-base text-[#5B131D] italic mt-1">
              In the auspicious {WEDDING_DETAILS.muhurtham.lagna}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#C59B4B]/20 text-xs font-kannada text-[#751B27]">
            {WEDDING_DETAILS.muhurtham.kannadaTime}
          </div>
        </div>

        {/* 3. Venue Card with Google Maps Direct Link */}
        <div className="bg-[#FDFBF7] p-6 sm:p-8 rounded-2xl royal-border-box text-center shadow-md flex flex-col items-center justify-between">
          <div className="w-14 h-14 rounded-full bg-[#3D0A11]/10 border border-[#C59B4B] flex items-center justify-center text-2xl text-[#3D0A11] mb-4">
            <MapPin className="w-7 h-7 text-[#5B131D]" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-marcellus text-[#855E19] font-semibold block mb-1">
              Wedding Venue
            </span>
            <h3 className="font-marcellus text-lg sm:text-xl text-[#3D0A11] font-bold leading-snug">
              {WEDDING_DETAILS.venue.name}
            </h3>
            <p className="text-xs font-kannada text-[#751B27] mt-0.5">
              {WEDDING_DETAILS.venue.kannadaName}
            </p>
            <p className="text-sm font-sans text-[#3D0A11]/80 mt-1">
              {WEDDING_DETAILS.venue.area}, {WEDDING_DETAILS.venue.districtState}
            </p>
          </div>

          <div className="mt-4 w-full pt-3">
            <a
              href={WEDDING_DETAILS.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#5B131D] hover:bg-[#3D0A11] text-[#F5E3B3] font-marcellus text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-[#C59B4B]/50 shadow-xs group"
            >
              <span>View Location on Map</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
