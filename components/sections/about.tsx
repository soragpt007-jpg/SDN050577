'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tentang Sekolah Kami
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Sejarah */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Sejarah Singkat</h3>
              <p className="text-muted-foreground leading-relaxed">
                SD Negeri 050577 telah berdiri sejak tahun 1985 dan terus berkembang menjadi salah satu sekolah dasar terkemuka di Kecamatan Binjai, Kabupaten Langkat. Dengan dedikasi pendidik yang tinggi, kami terus berinovasi dalam memberikan pendidikan berkualitas.
              </p>
            </div>

            {/* Visi */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Visi</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Mewujudkan generasi yang cerdas, berkarakter mulia, dan siap menghadapi tantangan global dengan berlandaskan nilai-nilai keislaman dan kearifan lokal."}
              </p>
            </div>

            {/* Misi */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Misi</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Memberikan pendidikan bermutu yang mengembangkan potensi akademik dan non-akademik siswa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Membina karakter siswa melalui pendidikan agama dan budi pekerti</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Menciptakan lingkungan belajar yang aman, nyaman, dan inspiratif</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Melibatkan orang tua dan masyarakat dalam proses pendidikan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Key Points */}
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Tahun Melayani Pendidikan</p>
            </Card>

            <Card className="p-6 bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <p className="text-muted-foreground">Siswa Aktif</p>
            </Card>

            <Card className="p-6 bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Guru Profesional</p>
            </Card>

            <Card className="p-6 bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Komitmen Kualitas</p>
            </Card>
          </div>
        </div>

        {/* Komitmen */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Komitmen Kami</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20">
              <h4 className="font-bold text-primary mb-3">Keunggulan Akademik</h4>
              <p className="text-sm text-muted-foreground">Kurikulum modern yang disesuaikan dengan perkembangan zaman dan kebutuhan industri</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20">
              <h4 className="font-bold text-primary mb-3">Pengembangan Karakter</h4>
              <p className="text-sm text-muted-foreground">Pembinaan nilai-nilai akhlak mulia dan kepribadian yang kuat sejak dini</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20">
              <h4 className="font-bold text-primary mb-3">Dukungan Penuh</h4>
              <p className="text-sm text-muted-foreground">Kemitraan aktif dengan orang tua dan masyarakat untuk kesuksesan siswa</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
