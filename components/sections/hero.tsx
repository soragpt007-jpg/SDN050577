'use client';

import { Button } from '@/components/ui/button';
import { Phone, LogIn } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/685668269882', '_blank');
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-secondary via-background to-background flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold">
          SD
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
          Selamat Datang di
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            SD NEGERI 050577
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Bersama kami, anak Anda akan berkembang menjadi individu yang cerdas, berkarakter kuat, dan siap menghadapi masa depan dengan percaya diri.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById('ppdb')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Daftar Siswa Baru
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={handleWhatsApp}
          >
            <Phone className="mr-2 h-5 w-5" />
            Hubungi Sekolah
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
