export interface TimelineEvent {
  time: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface FamilyBlessing {
  side: "groom" | "bride";
  sideLabel: string;
  familyTitle: string;
  blessingText: string;
  contactName: string;
  phone: string;
  whatsapp: string;
}

export interface RsvpEntry {
  id: string;
  name: string;
  guests: number;
  phone?: string;
  message?: string;
  timestamp: string;
}
