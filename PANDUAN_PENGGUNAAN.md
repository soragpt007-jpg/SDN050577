# 📖 Panduan Penggunaan Website SD NEGERI 050577

## 🎯 Untuk Admin/Pengelola Website

### Mengubah Informasi Sekolah

#### 1. Mengubah Nomor WhatsApp
Cari file `components/header.tsx`, `components/sections/hero.tsx`, `components/sections/contact.tsx`, dan `components/sections/footer.tsx`

Ganti nomor lama dengan nomor baru:
```typescript
// Dari:
window.open('https://wa.me/685668269882', '_blank');

// Menjadi:
window.open('https://wa.me/NOMOR_BARU', '_blank');
```

#### 2. Mengubah Alamat Sekolah
Edit file `components/sections/location.tsx` dan `components/sections/footer.tsx`

#### 3. Mengubah Jam Operasional
Edit file `components/sections/contact.tsx` bagian "Jam Layanan Kami"

### Mengubah Warna Sekolah

Edit `app/globals.css` di bagian `:root`:

```css
:root {
  --primary: oklch(0.35 0.15 140);        /* Hijau Sekolah */
  --secondary: oklch(0.88 0.08 80);       /* Kuning Krem */
  /* dan seterusnya */
}
```

Gunakan [oklch.com](https://oklch.com) untuk mencari warna yang diinginkan.

### Menambah Foto Galeri

1. **Tambah Gambar Baru**
   - Upload gambar ke folder `/public/images/`
   - Gunakan format JPG atau PNG
   - Ukuran rekomendasi: 400x300px minimum

2. **Update Gallery Item**
   Edit `components/sections/gallery.tsx`:
   ```typescript
   const galleryItems = [
     // ... item lain
     {
       id: 7,
       category: 'Kegiatan Belajar',
       title: 'Judul Foto Baru',
       image: '/images/nama-file-baru.jpg',
     },
   ];
   ```

### Mengubah Teks Visi & Misi

Edit `components/sections/about.tsx`:

```typescript
// Visi
<p className="text-muted-foreground leading-relaxed">
  Teks visi baru di sini
</p>

// Misi
<li className="flex items-start gap-3">
  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
  <span className="text-muted-foreground">
    Teks misi baru di sini
  </span>
</li>
```

### Mengubah Form Pendaftaran

Edit `components/sections/ppdb.tsx` untuk menambah/mengurangi field:

```typescript
const [formData, setFormData] = useState({
  // Tambah field baru di sini
  namaSekolahAsal: '',
  // ... dst
});
```

---

## 🔧 Troubleshooting

### Halaman Tidak Muncul dengan Benar

1. **Clear cache browser**: Ctrl+Shift+Delete (Windows) atau Cmd+Shift+Delete (Mac)
2. **Rebuild project**: 
   ```bash
   pnpm install
   pnpm dev
   ```

### Gambar Tidak Tampil

1. Pastikan file ada di `/public/images/`
2. Periksa nama file (case-sensitive)
3. Format harus JPG atau PNG

### WhatsApp Link Tidak Bekerja

1. Pastikan nomor format: `62` bukan `+62`
2. Contoh benar: `6285668269882` bukan `+6285668269882`
3. Edit link WhatsApp:
   ```
   https://wa.me/NOMOR_TANPA_PLUS
   ```

### Form Tidak Submit

1. Periksa konsol browser (F12 → Console)
2. Pastikan semua field wajib sudah diisi
3. Check validasi di `components/sections/ppdb.tsx`

---

## 📱 Tips Responsivitas

Website sudah responsif untuk:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px ke atas

**Tips Testing:**
1. Buka DevTools (F12)
2. Klik icon perangkat mobile
3. Test di berbagai ukuran layar

---

## ♿ Aksesibilitas

Website sudah dioptimalkan untuk:
- ✅ Screen readers
- ✅ Keyboard navigation
- ✅ Color contrast
- ✅ ARIA labels
- ✅ Alt text for images

---

## ⚡ Performance Tips

### Optimasi Loading
1. Kompresi gambar sebelum upload
2. Gunakan format WebP untuk gambar yang lebih baru
3. Deploy ke CDN untuk performa maksimal

### Caching
- Browser cache: Already optimized
- CDN cache: Configure di Vercel/Netlify settings

---

## 🔐 Security Tips

1. **Jangan commit secrets** ke git
2. **Gunakan HTTPS** untuk deployment
3. **Validate form input** sebelum submit
4. **Update dependencies** secara berkala:
   ```bash
   pnpm update
   ```

---

## 📊 Analytics & Monitoring

Website sudah dilengkapi Vercel Analytics:
- Page views
- Web vitals
- Performance metrics

Akses di dashboard Vercel Anda.

---

## 🌐 SEO Best Practices

Website sudah optimal untuk SEO:
- ✅ Meta tags yang benar
- ✅ Open Graph tags
- ✅ Structured data ready
- ✅ Mobile-first design
- ✅ Fast loading times

**Tips tambahan:**
1. Submit sitemap ke Google Search Console
2. Monitor keyword rankings
3. Create quality content regularly

---

## 📝 Update Log

### Version 1.0.0 (Initial Release)
- ✅ 8 main sections
- ✅ Mobile responsive
- ✅ PPDB form with validation
- ✅ Image gallery with lightbox
- ✅ Google Maps integration
- ✅ WhatsApp integration
- ✅ SEO optimized

---

## 🆘 Support & Maintenance

### Untuk Bug Report atau Saran:
1. Hubungi pihak pengembang
2. Berikan detail masalah yang ditemukan
3. Screenshot/video demonstrasi sangat membantu

### Schedule Update:
- Monthly: Check dependency updates
- Quarterly: Review analytics & user feedback
- Annually: Major feature additions

---

## 📚 Sumber Pembelajaran

Pelajari lebih lanjut:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [React Documentation](https://react.dev)

---

## ✨ Saran Fitur Tambahan (Masa Depan)

1. **Blog**: Untuk artikel dan berita sekolah
2. **Student Portal**: Untuk siswa check nilai/absensi
3. **Teacher Portal**: Untuk guru manage kelas
4. **Parent Dashboard**: Untuk orang tua monitor perkembangan anak
5. **Event Calendar**: Untuk jadwal kegiatan sekolah
6. **Multi-language**: Dukungan bahasa Inggris/Mandarin
7. **Mobile App**: Aplikasi mobile native
8. **Live Chat**: Chat support realtime

---

**Terima kasih telah menggunakan Website SD NEGERI 050577!**

Untuk pertanyaan lebih lanjut, hubungi admin sekolah.

©️ 2024 SD NEGERI 050577. Semua hak dilindungi.
