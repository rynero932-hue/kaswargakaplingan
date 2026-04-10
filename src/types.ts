export type PaymentStatus = 'paid' | 'unpaid' | 'exempt';

export interface Period {
  id: string;
  label: string;
  month: number;
  year: number;
  amount: number;
}

export interface Member {
  id: string;
  name: string;
  payments: Record<string, PaymentStatus>;
}

export interface AppData {
  groupName: string;
  groupDescription: string;
  cashAmount: number;
  adminPassword: string;
  members: Member[];
  periods: Period[];
}
