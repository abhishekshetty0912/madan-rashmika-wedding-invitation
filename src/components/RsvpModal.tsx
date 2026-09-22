import { useState } from 'react';
import { X, Check, Heart, Send } from 'lucide-react';
import { RsvpEntry } from '../types';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (entry: RsvpEntry) => void;
}

export function RsvpModal({ isOpen, onClose, onSave }: RsvpModalProps) {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(2);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newEntry: RsvpEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      guests,
      phone: phone.trim() || undefined,
      message: message.trim() || undefined,
      timestamp: new Date().toISOString(),
    };

    onSave(newEntry);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div
      id="rsvp-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4"
    >
      <div className="bg-[#FAF6EE] w-full max-w-md rounded-2xl royal-border-box p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-[#5B131D] hover:text-[#3D0A11] p-1.5 rounded-full hover:bg-[#EADFCF] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-2xl">🪷</span>
              <h3 className="font-marcellus text-xl sm:text-2xl text-[#3D0A11] font-bold mt-1">
                Confirm Your Attendance
              </h3>
              <p className="font-cormorant italic text-sm text-[#751B27]">
                Wedding of Madan & Rashmika • 18 Oct 2026
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-marcellus text-xs uppercase tracking-wider text-[#855E19] font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Hegde & Family"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59B4B]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B131D] text-sm text-[#2A1A1D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-marcellus text-xs uppercase tracking-wider text-[#855E19] font-semibold mb-1">
                    Number of Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#C59B4B]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B131D] text-sm text-[#2A1A1D]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Family Members</option>
                  </select>
                </div>

                <div>
                  <label className="block font-marcellus text-xs uppercase tracking-wider text-[#855E19] font-semibold mb-1">
                    Mobile / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9880012345"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#C59B4B]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B131D] text-sm text-[#2A1A1D]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-marcellus text-xs uppercase tracking-wider text-[#855E19] font-semibold mb-1">
                  Your Blessings / Warm Message (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Wishing the couple a blessed, joyous married life..."
                  className="w-full px-3.5 py-2 rounded-xl border border-[#C59B4B]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B131D] text-sm text-[#2A1A1D]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#5B131D] hover:bg-[#3D0A11] text-[#F5E3B3] font-marcellus text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition duration-300 border border-[#C59B4B]/50 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Blessing & Attendance</span>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <span className="text-4xl">🙏</span>
            <h4 className="font-marcellus text-xl text-[#3D0A11] font-bold">
              Thank You So Much!
            </h4>
            <p className="font-cormorant text-base text-[#5B131D] leading-relaxed">
              Your confirmation for <span className="font-semibold">{name}</span> ({guests} {guests === 1 ? 'guest' : 'guests'}) has been warmly noted with joy.
            </p>

            <div className="pt-3">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#C59B4B] via-[#E5C378] to-[#C59B4B] text-[#3D0A11] font-marcellus text-sm font-bold uppercase tracking-wider rounded-xl shadow-md hover:brightness-105 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
