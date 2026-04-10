import { AppData } from './types';

export const DEFAULT_DATA: AppData = {
  groupName: "Kas Kaplingan Wonogiri",
  groupDescription: "Iuran Wajib Bulanan Warga Kaplingan",
  cashAmount: 10000,
  adminPassword: "admin123",
  members: [
    {
      id: "m1",
      name: "Bapak Ahmad",
      payments: { "2024-1": "paid", "2024-2": "paid", "2024-3": "unpaid", "2024-4": "unpaid" }
    },
    {
      id: "m2",
      name: "Ibu Budi",
      payments: { "2024-1": "paid", "2024-2": "unpaid", "2024-3": "paid", "2024-4": "unpaid" }
    },
    {
      id: "m3",
      name: "Bapak Candra",
      payments: { "2024-1": "paid", "2024-2": "paid", "2024-3": "paid", "2024-4": "paid" }
    },
    {
      id: "m4",
      name: "Ibu Dewi",
      payments: { "2024-1": "unpaid", "2024-2": "unpaid", "2024-3": "unpaid", "2024-4": "unpaid" }
    },
    {
      id: "m5",
      name: "Bapak Eko",
      payments: { "2024-1": "paid", "2024-2": "paid", "2024-3": "exempt", "2024-4": "exempt" }
    },
    {
      id: "m6",
      name: "Ibu Fitri",
      payments: { "2024-1": "paid", "2024-2": "unpaid", "2024-3": "unpaid", "2024-4": "paid" }
    }
  ],
  periods: [
    { id: "2024-1", label: "Jan 2024", month: 1, year: 2024, amount: 10000 },
    { id: "2024-2", label: "Feb 2024", month: 2, year: 2024, amount: 10000 },
    { id: "2024-3", label: "Mar 2024", month: 3, year: 2024, amount: 10000 },
    { id: "2024-4", label: "Apr 2024", month: 4, year: 2024, amount: 10000 }
  ]
};

export const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
];
