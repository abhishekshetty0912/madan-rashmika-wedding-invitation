import { TimelineEvent, FamilyBlessing } from '../types';

export const WEDDING_DETAILS = {
  groom: {
    title: 'Chi. Ry.',
    name: 'Madan M.',
    fullName: 'Chi. Ry. Madan M.',
    role: "The Groom",
    family: "Madan's Family",
    parents: "Smt. & Sri. M. Family",
  },
  bride: {
    title: 'Chi. Sow.',
    name: 'Rashmika R.C.',
    fullName: 'Chi. Sow. Rashmika R.C.',
    role: "The Bride",
    family: "Rashmika's Family",
    parents: "Smt. & Sri. R.C. Family",
  },
  date: {
    dayOfWeek: 'Sunday',
    dateString: '18 October 2026',
    formattedDate: 'Sunday, 18 October 2026',
    kannadaDate: 'ಭಾನುವಾರ, 18 ಅಕ್ಟೋಬರ್ 2026',
    targetIso: '2026-10-18T11:00:00+05:30',
  },
  muhurtham: {
    timeRange: '11:00 AM – 11:40 AM',
    lagna: 'Dhanur Lagna (ಧನುರ್ ಲಗ್ನ)',
    kannadaTime: 'ಬೆಳಿಗ್ಗೆ 11:00 ರಿಂದ 11:40 ರ ಶುಭ ಮುಹೂರ್ತದಲ್ಲಿ',
  },
  venue: {
    name: 'Brahmashree Narayanaguru Samudaya Bhavan',
    kannadaName: 'ಬ್ರಹ್ಮಶ್ರೀ ನಾರಾಯಣಗುರು ಸಮುದಾಯ ಭವನ',
    area: 'Hitturmakki, Koppa',
    districtState: 'Chikkamagaluru Dist, Karnataka',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Brahmashree+Narayanaguru+Samudaya+Bhavan+Hitturmakki+Koppa',
  },
  shlokas: {
    ganesha: '॥ ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ॥',
    guru: '॥ ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ ॥',
    venkataramana: '॥ ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟರಮಣ ಪ್ರಸನ್ನ ॥',
    kuladevata: '॥ ಶ್ರೀ ಕುಲದೇವತಾಯೈ ನಮಃ ॥',
    mangalaSanskrit: 'ವಕ್ರತುಂಡ ಮಹಾಕಾಯ ಸೂರ್ಯಕೋಟಿ ಸಮಪ್ರಭ । ನಿರ್ವಿಘ್ನಂ ಕುರು ಮೇ ದೇವ ಸರ್ವಕಾರ್ಯೇಷು ಸರ್ವದಾ ॥',
    shanti: '॥ ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು । ಸಮಸ್ತ ಸನ್ಮಂಗಳಾನಿ ಭವಂತು ॥',
    traditionalEnglish: 'Heartily solicit your gracious company with family and friends on the auspicious occasion of the marriage solemnisation of our children.',
  },
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: '09:30 AM',
    period: 'Morning',
    title: 'Guest Arrival & Traditional Breakfast',
    subtitle: 'ಸ್ವಾಗತ & ಉಪಾಹಾರ',
    description: 'Welcoming honored guests with auspicious Nadaswaram recital and hot South Indian breakfast.',
    icon: '☕',
  },
  {
    time: '11:00 AM – 11:40 AM',
    period: 'Sumuhurtham',
    title: 'Sacred Wedding Muhurtham',
    subtitle: 'ಮಾಂಗಲ್ಯ ಧಾರಣ & ಸಪ್ತಪದಿ',
    description: 'In the auspicious Dhanur Lagna: Kanyadaana, Mangalya Dharana, Saptapadi & Akshataropana.',
    icon: '🪷',
    highlight: true,
  },
  {
    time: '12:30 PM onwards',
    period: 'Afternoon',
    title: 'Royal Traditional Wedding Feast',
    subtitle: 'ಮಹಾ ಭೋಜನ (ಊಟ)',
    description: 'Authentic Karnataka Malnad wedding oota served traditionally on fresh banana plantain leaves.',
    icon: '🍛',
  },
];

export const FAMILY_BLESSINGS: FamilyBlessing[] = [
  {
    side: 'groom',
    sideLabel: "Groom's Side",
    familyTitle: "Madan's Family",
    blessingText: 'With the divine grace of Almighty, loving guidance of elders, and blessings of our Kuladevata.',
    contactName: 'Madan M. & Family',
    phone: '+91 72598 10180',
    whatsapp: '917259810180',
  },
  {
    side: 'bride',
    sideLabel: "Bride's Side",
    familyTitle: "Rashmika's Family",
    blessingText: 'With heartfelt affection, elder benedictions, and joy welcoming new bonds of kinship.',
    contactName: 'Rashmika R.C. & Family',
    phone: '+91 96112 08180',
    whatsapp: '919611208180',
  },
];

// Helper to generate Google Calendar Link
export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent('Wedding: Madan & Rashmika');
  const details = encodeURIComponent(
    'Auspicious Sumuhurtham (11:00 AM - 11:40 AM) wedding ceremony of Chi. Ry. Madan M. and Chi. Sow. Rashmika R.C. at Brahmashree Narayanaguru Samudaya Bhavan, Hitturmakki, Koppa.'
  );
  const location = encodeURIComponent('Brahmashree Narayanaguru Samudaya Bhavan, Hitturmakki, Koppa, Karnataka');
  // 18 Oct 2026: 09:30 AM to 03:00 PM IST (04:00 to 09:30 UTC)
  const dates = '20261018T040000Z/20261018T093000Z';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

// Helper to generate iCal (.ics) download
export function downloadIcsFile(): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Madan & Rashmika Wedding//EN',
    'BEGIN:VEVENT',
    'UID:wedding-madan-rashmika-20261018@wedding.invitation',
    'DTSTAMP:20260922T000000Z',
    'DTSTART:20261018T040000Z',
    'DTEND:20261018T093000Z',
    'SUMMARY:Wedding Ceremony: Madan & Rashmika',
    'DESCRIPTION:Traditional Karnataka Royal Wedding Ceremony of Chi. Ry. Madan M. and Chi. Sow. Rashmika R.C.',
    'LOCATION:Brahmashree Narayanaguru Samudaya Bhavan, Hitturmakki, Koppa, Karnataka',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Wedding-Madan-and-Rashmika.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
