'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#about' },
    { label: 'Keunggulan', href: '#advantages' },
    { label: 'PPDB', href: '#ppdb' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Kontak', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/685668269882', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
            SD
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-primary text-sm">SD NEGERI</span>
            <span className="text-xs text-muted-foreground">050577</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handleWhatsApp}
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            size="sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">Hubungi</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    SD
                  </div>
                  <div>
                    <p className="font-bold text-primary">SD NEGERI 050577</p>
                    <p className="text-xs text-muted-foreground">Binjai, Langkat</p>
                  </div>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <Button
                  onClick={() => {
                    handleWhatsApp();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi Sekolah
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
