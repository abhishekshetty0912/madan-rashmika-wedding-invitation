import { TIMELINE_EVENTS } from '../data/weddingData';

export function TimelineSection() {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="text-center mb-10">
        <h2 className="font-marcellus text-2xl sm:text-4xl text-[#3D0A11] font-bold">
          Wedding Day Timeline
        </h2>
        <div className="w-24 h-0.5 bg-[#C59B4B] mx-auto mt-2" />
        <p className="font-cormorant italic text-[#751B27] text-lg sm:text-xl mt-2">
          Program schedule for Sunday, 18 October 2026
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative px-2">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#C59B4B]/40" />

        <div className="space-y-8">
          {TIMELINE_EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.title}
                className="relative flex items-center justify-between"
              >
                {/* Left side */}
                <div
                  className={`w-5/12 ${
                    isEven ? 'text-right pr-4 sm:pr-6' : 'text-right pr-4 sm:pr-6 hidden sm:block'
                  }`}
                >
                  {isEven ? (
                    <div>
                      <span className="font-marcellus text-xs uppercase tracking-wider text-[#855E19] font-bold block">
                        {event.period}
                      </span>
                      <h4 className="font-marcellus text-base sm:text-lg text-[#3D0A11] font-bold mt-0.5">
                        {event.title}
                      </h4>
                      <p className="font-kannada text-xs text-[#751B27] mt-0.5">
                        {event.subtitle}
                      </p>
                      <p className="font-cormorant text-xs sm:text-sm text-[#5B131D] mt-1 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs font-sans text-[#751B27] font-semibold">
                      {event.time}
                    </div>
                  )}
                </div>

                {/* Central Time Badge */}
                <div
                  className={`z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold shadow-md shrink-0 transition-transform ${
                    event.highlight
                      ? 'bg-[#C59B4B] text-[#3D0A11] border-[#FFF2B2] ring-4 ring-[#C59B4B]/30 scale-110'
                      : 'bg-[#3D0A11] text-[#F5E3B3] border-[#E5C378]'
                  }`}
                >
                  <span className="text-base">{event.icon}</span>
                </div>

                {/* Right side */}
                <div
                  className={`w-5/12 ${
                    !isEven ? 'pl-4 sm:pl-6' : 'pl-4 sm:pl-6 hidden sm:block'
                  }`}
                >
                  {!isEven ? (
                    <div
                      className={`p-3.5 sm:p-4 rounded-xl border ${
                        event.highlight
                          ? 'bg-[#FDFBF7] border-[#C59B4B] shadow-sm'
                          : 'bg-[#FAF6EE] border-[#C59B4B]/30'
                      }`}
                    >
                      <span
                        className={`font-marcellus text-xs uppercase tracking-wider font-bold block ${
                          event.highlight ? 'text-[#751B27]' : 'text-[#855E19]'
                        }`}
                      >
                        {event.period}
                      </span>
                      <h4 className="font-marcellus text-base sm:text-lg text-[#3D0A11] font-bold mt-0.5">
                        {event.title}
                      </h4>
                      <p className="font-kannada text-xs text-[#751B27] mt-0.5">
                        {event.subtitle}
                      </p>
                      <p className="font-cormorant text-xs sm:text-sm text-[#5B131D] mt-1 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs font-sans text-[#751B27] font-semibold">
                      {event.time}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
