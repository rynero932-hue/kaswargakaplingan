# 💰 Kas Warga Kaplingan

Aplikasi manajemen iuran kas bulanan warga **Kaplingan, Wonogiri** — dibangun dengan React, Firebase, dan di-deploy di Vercel.

🌐 **Live:** [kaswargakaplingan.vercel.app](https://kaswargakaplingan-cok6twat0-navilhealthys-projects.vercel.app)

---

## ✨ Fitur

- 📋 **Tabel Pembayaran** — Lihat status iuran semua anggota per periode secara ringkas
- 📊 **Rekap Periode** — Ringkasan total terkumpul & tunggakan per bulan
- 👥 **Manajemen Anggota** — Kartu profil anggota dengan statistik pembayaran
- 📈 **Grafik** — Visualisasi iuran terkumpul per periode
- 🔐 **Mode Admin** — Login dengan password untuk mengelola data
- ➕ **Tambah/Hapus Anggota & Periode** — Fleksibel sesuai kebutuhan
- 🔄 **Toggle Status** — Klik untuk ubah status: Belum → Lunas → Dibebaskan
- 💾 **Backup & Restore** — Export/import data via file JSON
- 🔗 **Bagikan Link** — Salin link aplikasi untuk dibagikan ke warga
- ☁️ **Real-time Firebase** — Data tersimpan di cloud, bisa diakses dari mana saja

---

## 🛠️ Teknologi

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [React](https://react.dev) | 19 | UI Framework |
| [TypeScript](https://www.typescriptlang.org) | 5.8 | Type Safety |
| [Vite](https://vitejs.dev) | 6 | Build Tool |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [Firebase Firestore](https://firebase.google.com) | 12 | Database Cloud |
| [Lucide React](https://lucide.dev) | 0.546 | Ikon |
| [Recharts](https://recharts.org) | 3 | Grafik |
| [Motion](https://motion.dev) | 12 | Animasi |
| [Vercel](https://vercel.com) | — | Hosting & Deploy |

---

## 🚀 Cara Menjalankan Lokal

### Prasyarat
- Node.js >= 18
- npm >= 9
- Akun Firebase (Firestore aktif)

### Langkah

```bash
# 1. Clone repository
git clone https://github.com/rynero932-hue/kaswargakaplingan.git
cd kaswargakaplingan

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

---

## 🔥 Konfigurasi Firebase

Edit file `src/lib/firebase.js` dan ganti dengan konfigurasi project Firebase kamu:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Pastikan **Firestore Database** sudah diaktifkan di Firebase Console dengan rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ Rules di atas untuk kemudahan development. Untuk produksi, sesuaikan dengan kebutuhan keamanan.

---

## 📁 Struktur Project

```
kaswargakaplingan/
├── public/
│   ├── favicon.svg
│   └── manifest.json
├── src/
│   ├── lib/
│   │   └── firebase.js       # Konfigurasi & inisialisasi Firebase
│   ├── App.tsx               # Komponen utama aplikasi
│   ├── types.ts              # TypeScript type definitions
│   ├── constants.ts          # Data default & konstanta
│   ├── main.tsx              # Entry point React
│   └── index.css             # Global styles & Tailwind
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 📦 Scripts

```bash
npm run dev       # Jalankan development server
npm run build     # Build untuk produksi
npm run preview   # Preview hasil build
npm run lint      # TypeScript type check
```

---

## 🔐 Akses Admin

- Klik tombol **Admin** di pojok kanan atas
- Masukkan password admin (default: `admin123`)
- Ubah password melalui menu **Pengaturan** setelah login

> 💡 Disarankan untuk mengganti password default sebelum digunakan.

---

## ☁️ Deploy ke Vercel

Project ini sudah terhubung ke Vercel melalui GitHub. Setiap `push` ke branch `main` akan otomatis trigger deployment baru.

Deploy manual:

```bash
npm run build
# Upload folder dist/ ke Vercel, atau gunakan Vercel CLI:
npx vercel --prod
```

---

## 🤝 Kontribusi

Project ini dibuat untuk kebutuhan internal warga Kaplingan, Wonogiri. Jika ingin menggunakannya untuk komunitas lain, silakan fork dan sesuaikan.

---

<p align="center">Dibuat dengan ❤️ untuk kemudahan administrasi warga Kaplingan, Wonogiri</p>
