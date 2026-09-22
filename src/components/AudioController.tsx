import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    const newState = weddingAudio.toggle();
    if (newState) {
      showTooltipMessage('Peaceful Romantic Melody 🎶');
    } else {
      showTooltipMessage('Music Paused');
    }
  };

  const showTooltipMessage = (msg: string) => {
    setTooltip(msg);
    setTimeout(() => {
      setTooltip(null);
    }, 3000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {tooltip && (
        <div className="text-xs font-marcellus px-3.5 py-1.5 bg-[#3D0A11]/95 text-[#F5E3B3] rounded-full shadow-lg border border-[#C59B4B]/50 animate-fade-in backdrop-blur-xs">
          {tooltip}
        </div>
      )}

      <button
        id="wedding-audio-toggle-btn"
        onClick={handleToggle}
        className="w-12 h-12 p-3 bg-gradient-to-br from-[#5B131D] to-[#3D0A11] hover:from-[#751B27] hover:to-[#480E17] text-[#E5C378] rounded-full shadow-2xl border-2 border-[#C59B4B]/70 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer relative group"
        title={isPlaying ? 'Pause Romantic Melody' : 'Play Peaceful Romantic Melody'}
        aria-label={isPlaying ? 'Pause Romantic Music' : 'Play Peaceful Romantic Music'}
      >
        {isPlaying ? (
          <>
            <span className="absolute -inset-1 rounded-full border border-[#E5C378]/50 animate-ping pointer-events-none opacity-30" />
            <Volume2 className="w-5 h-5 text-[#FFF2B2]" />
          </>
        ) : (
          <VolumeX className="w-5 h-5 text-[#E5C378]/70" />
        )}
      </button>
    </div>
  );
}
