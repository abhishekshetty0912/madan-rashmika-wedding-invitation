import { useState, useEffect } from 'react';
import { PetalsCanvas } from './components/PetalsCanvas';
import { InvitationCover } from './components/InvitationCover';
import { AudioController } from './components/AudioController';
import { HeroSection } from './components/HeroSection';
import { VenueSection } from './components/VenueSection';
import { TraditionalCardReplica } from './components/TraditionalCardReplica';
import { FamilyBlessings } from './components/FamilyBlessings';
import { PreciousMoments } from './components/PreciousMoments';
import { TimelineSection } from './components/TimelineSection';
import { RsvpSection } from './components/RsvpSection';
import { RsvpModal } from './components/RsvpModal';
import { FamilyContact } from './components/FamilyContact';
import { Footer } from './components/Footer';
import { weddingAudio } from './utils/audioSynth';
import { RsvpEntry } from './types';

export default function App() {
  const [isCoverOpen, setIsCoverOpen] = useState<boolean>(false);
  const [petalTrigger, setPetalTrigger] = useState<number>(0);
  const [isPetalFalling, setIsPetalFalling] = useState<boolean>(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState<boolean>(false);
  const [hasConfirmedRsvp, setHasConfirmedRsvp] = useState<boolean>(false);
  const [savedRsvps, setSavedRsvps] = useState<RsvpEntry[]>([]);

  // Load existing RSVPs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('madan_rashmika_rsvp');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedRsvps(parsed);
        if (parsed.length > 0) {
          setHasConfirmedRsvp(true);
        }
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    // Start 5-second petal shower upon opening
    setPetalTrigger((prev) => prev + 1);
    setIsPetalFalling(true);
    // Start auspicious wedding music on user gesture
    weddingAudio.play().catch(() => {});
  };

  const handleManualShower = () => {
    setPetalTrigger((prev) => prev + 1);
    setIsPetalFalling(true);
  };

  const handlePetalComplete = () => {
    setIsPetalFalling(false);
  };

  const handleSaveRsvp = (entry: RsvpEntry) => {
    const updated = [...savedRsvps, entry];
    setSavedRsvps(updated);
    setHasConfirmedRsvp(true);
    try {
      localStorage.setItem('madan_rashmika_rsvp', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  return (
    <div className="bg-paper-texture min-h-screen text-[#2A1A1D] font-sans relative selection:bg-[#5B131D] selection:text-[#F5E3B3] overflow-x-hidden">
      {/* 1. Auspicious 5-Second Floral Shower Canvas (Opens for 5 seconds when card is opened) */}
      <PetalsCanvas
        trigger={petalTrigger}
        durationMs={5000}
        onComplete={handlePetalComplete}
      />

      {/* 2. Opening Screen: Cover Card matching Image 1.png exactly */}
      <InvitationCover
        isOpen={isCoverOpen}
        onOpen={handleOpenInvitation}
      />

      {/* 3. Audio Controller Floating Widget */}
      <AudioController />

      {/* 4. Shower Petals Button (Triggers 5-second auspicious floral shower) */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={handleManualShower}
          disabled={isPetalFalling}
          className={`px-3 py-1.5 rounded-full text-xs font-marcellus shadow-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            isPetalFalling
              ? 'bg-[#3D0A11] text-[#F5E3B3] border border-[#E5C378]/70 ring-2 ring-[#C59B4B]/30'
              : 'bg-[#FAF6EE]/90 hover:bg-[#F4ECE0] text-[#751B27] border border-[#C59B4B]/40'
          }`}
          title="Shower auspicious petals for 5 seconds"
        >
          <span>{isPetalFalling ? '🌸 Petals Falling (5s)...' : '🌸 Shower Petals (5s)'}</span>
        </button>
      </div>

      {/* 5. Main Invitation Content (Visible once cover is opened) */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 transition-opacity duration-700">
        {/* Top Hero with Couple names & Muhurtham Countdown */}
        <HeroSection
          onOpenRsvp={() => setIsRsvpOpen(true)}
          onOpenCover={() => setIsCoverOpen(false)}
        />

        {/* Sacred Muhurtham & Venue Details */}
        <VenueSection />

        {/* Traditional Physical Invitation Card Replica */}
        <TraditionalCardReplica />

        {/* Family Blessings */}
        <FamilyBlessings />

        {/* Precious Moments Photo Frame Gallery */}
        <PreciousMoments />

        {/* Wedding Day Timeline */}
        <TimelineSection />

        {/* RSVP & Attendance */}
        <RsvpSection
          onOpenModal={() => setIsRsvpOpen(true)}
          rsvpCount={savedRsvps.length}
          hasConfirmed={hasConfirmedRsvp}
        />

        {/* Family Contact & Hospitality */}
        <FamilyContact />

        {/* Footer */}
        <Footer />
      </main>

      {/* 6. RSVP Attendance Modal */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        onSave={handleSaveRsvp}
      />
    </div>
  );
}
