# SD NEGERI 050577 - Website Resmi Sekolah

Selamat datang di repository website resmi **SD NEGERI 050577**, sebuah sekolah dasar yang berkomitmen untuk mewujudkan generasi cerdas, berkarakter, dan berprestasi di Binjai, Kabupaten Langkat, Sumatera Utara.

## 🎯 Tentang Website

Website ini dirancang dengan modern, responsif, dan mudah digunakan oleh orang tua siswa. Website menyediakan informasi lengkap tentang sekolah, fasilitas, keunggulan, serta fitur pendaftaran siswa baru secara online.

## 📋 Fitur Utama

### 1. **Beranda (Hero Section)**
- Sambutan yang ramah dan inspiratif
- Tombol CTA untuk pendaftaran dan hubungi sekolah
- Desain modern dengan gradient yang menarik

### 2. **Tentang Sekolah**
- Sejarah singkat SD Negeri 050577
- Visi dan Misi sekolah
- Komitmen pendidikan
- Statistik sekolah (30+ tahun, 400+ siswa, 30+ guru)

### 3. **Keunggulan Sekolah**
- Guru Profesional
- Lingkungan Belajar Nyaman
- Pendidikan Karakter
- Prestasi Siswa

### 4. **Penerimaan Peserta Didik Baru (PPDB)**
- Form pendaftaran online lengkap
- Validasi form realtime
- Kolom yang diminta:
  - Nama Lengkap Siswa
  - Tempat dan Tanggal Lahir
  - Jenis Kelamin
  - Nama Orang Tua / Wali
  - Nomor HP Orang Tua
  - Alamat Rumah
  - Asal Sekolah / TK

### 5. **Galeri Sekolah**
- Grid foto modern dari berbagai kegiatan
- Lightbox modal untuk melihat foto secara detail
- Kategori: Kegiatan Belajar, Upacara, Aktivitas Guru, Lingkungan Sekolah, dll

### 6. **Lokasi Sekolah**
- Embed Google Maps
- Informasi alamat lengkap
- Jam operasional
- Petunjuk arah

### 7. **Kontak Sekolah**
- WhatsApp: 085668269882
- Alamat lengkap
- Jam layanan
- Informasi libur

### 8. **Footer**
- Menu navigasi
- Informasi kontak
- Link social media
- Copyright

## 🎨 Desain & Tema Warna

**Palet Warna:**
- **Hijau Sekolah** (Primary): `oklch(0.35 0.15 140)` - Warna utama brand
- **Kuning Krem** (Secondary/Accent): `oklch(0.88 0.08 80)` - Warna latar belakang
- **Putih** (Card): `oklch(1 0 0)` - Warna kartu dan teks
- **Abu-abu** (Muted): Warna teks sekunder

**Desain:**
- Modern dan bersih
- Responsif di semua ukuran layar
- Mobile-first approach
- Aksesibilitas terjamin
- Navigasi intuitif

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript & React
- **SEO**: Next.js Metadata API
- **Analytics**: Vercel Analytics

## 📱 Responsivitas

Website sepenuhnya responsif dan dioptimalkan untuk:
- **Mobile**: 320px dan keatas
- **Tablet**: 768px dan keatas
- **Desktop**: 1024px dan keatas
- **Large Desktop**: 1280px dan keatas

## ⚙️ Instalasi & Setup

### Prasyarat
- Node.js 18+
- npm atau pnpm

### Instalasi
```bash
# Clone repository
git clone <repository-url>
cd sdnegeri050577

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
# http://localhost:3000
```

## 📦 Struktur Folder

```
.
├── app/
│   ├── layout.tsx          # Root layout dengan metadata
│   ├── page.tsx            # Halaman utama
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── header.tsx          # Header navigation
│   └── sections/
│       ├── hero.tsx        # Hero section
│       ├── about.tsx       # About section
│       ├── advantages.tsx  # Keunggulan section
│       ├── ppdb.tsx        # PPDB form section
│       ├── gallery.tsx     # Gallery section
│       ├── location.tsx    # Location section
│       ├── contact.tsx     # Contact section
│       └── footer.tsx      # Footer section
├── public/
│   └── images/            # Gambar-gambar sekolah
└── package.json
```

## 🚀 Deployment

Website dapat di-deploy dengan mudah ke berbagai platform:

### Deploy ke Vercel (Recommended)
```bash
# Ensure you have Vercel CLI installed
npm install -g vercel

# Deploy
vercel
```

### Deploy ke platform lain
Kompatibel dengan:
- Netlify
- GitHub Pages
- AWS Amplify
- Any Node.js hosting

## 📞 Informasi Kontak Sekolah

- **Nama Sekolah**: SD NEGERI 050577
- **Alamat**: JLN. P. KEMERDEKAAN, Kecamatan Binjai, Kabupaten Langkat, Provinsi Sumatera Utara, Indonesia
- **WhatsApp**: 085668269882
- **Jam Operasional**: Senin - Jumat, 07:00 - 14:00 WIB

## 📄 Lisensi

Website ini dikembangkan untuk keperluan SD NEGERI 050577.

## 🤝 Kontribusi

Untuk saran, perbaikan, atau fitur tambahan, silahkan hubungi pihak sekolah.

## ✨ Fitur Tambahan

- **Header Navigation**: Navigasi tetap di atas halaman dengan link scroll smooth
- **Mobile Menu**: Menu hamburger untuk mobile dengan sheet drawer
- **WhatsApp Integration**: Integrasi langsung ke WhatsApp sekolah
- **Form Validation**: Validasi form pendaftaran realtime
- **Smooth Scrolling**: Transisi scroll yang halus untuk UX lebih baik
- **Custom Scrollbar**: Scrollbar yang disesuaikan dengan tema
- **SEO Optimized**: Meta tags, Open Graph, dan structured data

## 🎓 Visi & Misi Website

Website ini diciptakan untuk:
1. Menyediakan informasi sekolah yang mudah diakses
2. Memfasilitasi proses pendaftaran siswa baru
3. Meningkatkan transparansi dan komunikasi dengan orang tua
4. Menampilkan prestasi dan keunggulan sekolah
5. Membangun citra positif institusi pendidikan

---

**Dikembangkan dengan ❤️ untuk pendidikan Indonesia**

© 2024 SD NEGERI 050577. Hak Cipta Dilindungi.
