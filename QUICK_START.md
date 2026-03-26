# 🚀 Quick Start Guide - SD NEGERI 050577 Website

## Mulai dalam 5 Menit! ⚡

### 1. Install & Setup (2 menit)

```bash
# 1. Install dependencies
pnpm install

# 2. Jalankan development server
pnpm dev

# 3. Buka browser
# → http://localhost:3000 ✨
```

### 2. Ubah Informasi Sekolah (5 menit)

#### Nomor WhatsApp
Edit `components/header.tsx` (dan file lain yang menggunakan WhatsApp):
```typescript
// Ubah dari:
window.open('https://wa.me/685668269882', '_blank');

// Menjadi:
window.open('https://wa.me/NOMOR_ANDA', '_blank');
```

#### Alamat Sekolah  
Edit `components/sections/location.tsx` → ganti alamat di bagian address

#### Nama & Visi-Misi
Edit `components/sections/about.tsx` → ubah teks sesuai kebutuhan

### 3. Tambah Foto Galeri (3 menit)

1. **Upload foto** ke `/public/images/`
2. **Edit** `components/sections/gallery.tsx`:

```typescript
const galleryItems = [
  {
    id: 7,
    category: 'Kategori',
    title: 'Judul Foto',
    image: '/images/nama-file.jpg',  // ← Tambah di sini
  },
];
```

### 4. Deploy ke Production (5 menit)

#### Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Build untuk production
```bash
pnpm build
pnpm start
```

---

## 📋 Struktur File Penting

```
components/
├── header.tsx              ← Header navigation
└── sections/
    ├── hero.tsx           ← Beranda
    ├── about.tsx          ← Tentang Sekolah
    ├── advantages.tsx     ← Keunggulan
    ├── ppdb.tsx           ← Form Pendaftaran
    ├── gallery.tsx        ← Galeri Foto
    ├── location.tsx       ← Lokasi & Maps
    ├── contact.tsx        ← Kontak
    └── footer.tsx         ← Footer

public/images/            ← Tempat upload foto
```

---

## ⚙️ Customization Cepat

### Ubah Warna Hijau Sekolah
Edit `app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.15 140);  /* ← Ubah di sini */
}
```
Gunakan [oklch.com](https://oklch.com) untuk warna custom.

### Ubah Form Fields
Edit `components/sections/ppdb.tsx` → Tambah/kurangi field di `formData`

### Ubah Jam Operasional
Edit `components/sections/contact.tsx` → Bagian "Jam Layanan"

---

## 🎯 Checklist Launch

- [ ] Ubah nomor WhatsApp
- [ ] Ubah alamat sekolah
- [ ] Update visi & misi
- [ ] Tambah foto galeri
- [ ] Test responsive (F12 → Device Mode)
- [ ] Test WhatsApp link
- [ ] Test form pendaftaran
- [ ] Cek loading speed (DevTools → Lighthouse)
- [ ] Build project (`pnpm build`)
- [ ] Deploy ke Vercel

---

## 🆘 Troubleshooting Cepat

| Masalah | Solusi |
|---------|--------|
| Halaman blank | `pnpm dev` ulang, clear cache browser |
| Foto tidak muncul | Pastikan file di `/public/images/` |
| WhatsApp error | Format nomor: `6285668269882` (tanpa +62) |
| Form tidak submit | Check browser console (F12 → Console) |
| Build error | Jalankan `pnpm install` ulang |

---

## 📞 Informasi Kontak

**SD NEGERI 050577**
- 📍 JLN. P. KEMERDEKAAN, Binjai, Langkat
- 📱 WhatsApp: 085668269882
- ⏰ Senin-Jumat: 07:00-14:00 WIB

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Deploy](https://vercel.com)

---

## ✨ Fitur Siap Pakai

✅ Mobile responsive  
✅ WhatsApp integration  
✅ Form validation  
✅ Image gallery  
✅ Google Maps  
✅ SEO optimized  
✅ Fast loading  
✅ Production ready  

---

**Happy coding! 🎉**

Untuk bantuan lebih lanjut, lihat:
- `README_ID.md` - Dokumentasi lengkap
- `PANDUAN_PENGGUNAAN.md` - User guide detail
