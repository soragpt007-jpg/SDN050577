'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/085668269882', '_blank');
  };

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground text-primary font-bold text-xl">
              SD
            </div>
            <div>
              <h3 className="font-bold text-lg">SD NEGERI 050577</h3>
              <p className="text-sm text-primary-foreground/80">
                Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/90">
              <li><a href="#" className="hover:text-primary-foreground transition">Beranda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Keunggulan</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition">Pendaftaran</a></li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/90">
              <li>
                <p className="font-semibold">📍 Alamat</p>
                <p className="text-xs">JLN. P. KEMERDEKAAN<br />Binjai, Langkat</p>
                <div>
              </li>
              <li>
                <p className="font-semibold">📞 Telepon</p>
                <p className="text-xs">085668269882</p>
              </li>
              <li>
                <p className="font-semibold">⏰ Jam Kerja</p>
                <p className="text-xs">Senin-Sabtu: 07:00-14:00</p>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <p className="text-sm text-primary-foreground/90 mb-4">
              Dapatkan informasi terbaru dan jangan ragu untuk menghubungi kami
            </p>
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              Chat WhatsApp
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-primary-foreground/80 text-center md:text-left">
            <p>© 2026 SD NEGERI 050577. Hak Cipta Dilindungi.</p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Dibuat dengan</span>
            <Heart className="h-4 w-4 fill-current text-accent" />
            <span>untuk pendidikan Indonesia</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.07c0-2.76 1.693-4.26 4.15-4.26 1.177 0 2.19.088 2.49.127v2.888h-1.71c-1.342 0-1.602.637-1.602 1.57V9.25h3.204l-.417 3.54h-2.787V20" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Top Footer Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary-foreground to-accent opacity-20"></div>
    </footer>
  );
}
