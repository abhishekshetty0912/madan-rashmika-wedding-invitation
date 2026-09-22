import { useState } from 'react';
import { Phone, MessageSquare, Share2, Check, MapPin } from 'lucide-react';
import { FAMILY_BLESSINGS, WEDDING_DETAILS } from '../data/weddingData';

export function FamilyContact() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Wedding Invitation: Madan & Rashmika',
      text: 'With the blessings of our families, we invite you to the wedding of Madan & Rashmika on 18 October 2026.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="mb-14 sm:mb-20">
      <div className="text-center mb-8">
        <h3 className="font-marcellus text-xl sm:text-3xl text-[#3D0A11] font-bold">
          Contact & Hospitality
        </h3>
        <p className="font-cormorant italic text-[#751B27] text-base sm:text-lg mt-1">
          For travel assistance and venue enquiries, please feel free to reach out
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {FAMILY_BLESSINGS.map((item) => (
          <div
            key={item.side}
            className="bg-[#FDFBF7] p-6 rounded-2xl royal-border-box text-center shadow-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-marcellus text-[#855E19] font-semibold block mb-1">
                {item.sideLabel}
              </span>
              <h4 className="font-marcellus text-lg text-[#3D0A11] font-bold">
                {item.contactName}
              </h4>
            </div>

            <div className="mt-4 space-y-2 text-sm font-sans text-[#3D0A11]">
              <a
                href={`tel:${item.phone}`}
                className="flex items-center justify-center gap-2 p-2 rounded-xl hover:bg-[#FAF6EE] border border-transparent hover:border-[#C59B4B]/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C59B4B]" />
                <span className="font-medium text-[#3D0A11]">{item.phone}</span>
              </a>

              <a
                href={`https://wa.me/${item.whatsapp}?text=${encodeURIComponent(
                  `Namaste, I am reaching out regarding Madan & Rashmika's wedding on 18 October 2026.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2 rounded-xl bg-[#1B6F45]/10 text-[#1B6F45] hover:bg-[#1B6F45]/15 transition-colors text-xs uppercase tracking-wider font-marcellus"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Share invitation bar */}
      <div className="mt-8 text-center max-w-md mx-auto">
        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FAF6EE] hover:bg-[#F4ECE0] text-[#3D0A11] border border-[#C59B4B]/50 rounded-full font-marcellus text-xs uppercase tracking-wider shadow-2xs transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#1B6F45]" />
              <span className="text-[#1B6F45] font-semibold">Link Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-[#C59B4B]" />
              <span>Share Wedding Invitation Link</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
