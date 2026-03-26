'use client';

import { Card } from '@/components/ui/card';
import { Users, Leaf, Heart, Trophy } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      icon: Users,
      title: 'Guru Profesional',
      description: 'Tim pengajar berpengalaman dan tersertifikasi yang berdedikasi dalam memberikan pendidikan terbaik',
    },
    {
      icon: Leaf,
      title: 'Lingkungan Belajar Nyaman',
      description: 'Fasilitas lengkap dan lingkungan sekolah yang hijau, asri, dan kondusif untuk belajar',
    },
    {
      icon: Heart,
      title: 'Pendidikan Karakter',
      description: 'Pembinaan nilai-nilai akhlak, disiplin, dan tanggung jawab melalui program pembelajaran holistik',
    },
    {
      icon: Trophy,
      title: 'Prestasi Siswa',
      description: 'Siswa kami telah meraih berbagai penghargaan akademik dan non-akademik di tingkat lokal dan nasional',
    },
  ];

  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Keunggulan Sekolah Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan layanan pendidikan terbaik dengan fokus pada pengembangan holistik siswa
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
