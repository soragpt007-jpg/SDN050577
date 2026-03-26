'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/685668269882?text=Halo%20SD%20Negeri%20050577%2C%20saya%20ingin%20mengetahui%20informasi%20lebih%20lanjut', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      info: '085668269882',
      subInfo: 'WhatsApp',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      info: 'JLN. P. KEMERDEKAAN',
      subInfo: 'Binjai, Langkat, Sumatera Utara',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      info: 'Senin - Jumat',
      subInfo: '07:00 - 14:00 WIB',
    },
    {
      icon: MessageCircle,
      title: 'Chat WhatsApp',
      info: 'Hubungi kami sekarang',
      subInfo: 'Respon cepat dari tim kami',
    },
  ];

  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami siap menjawab semua pertanyaan Anda tentang SD Negeri 050577
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isWhatsApp = contact.title === 'Chat WhatsApp';
            
            return (
              <Card
                key={index}
                className={`p-6 bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${isWhatsApp ? 'lg:col-span-2 md:col-span-1' : ''}`}
                onClick={isWhatsApp ? handleWhatsApp : undefined}
              >
                <div className={`flex ${isWhatsApp ? 'flex-row' : 'flex-col'} items-center gap-4`}>
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className={isWhatsApp ? 'flex-1' : ''}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {contact.title}
                    </p>
                    <p className="font-bold text-primary mt-1">{contact.info}</p>
                    {contact.subInfo && (
                      <p className="text-xs text-muted-foreground mt-1">{contact.subInfo}</p>
                    )}
                  </div>
                  {isWhatsApp && (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* WhatsApp CTA Button */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-primary mb-3">Pertanyaan atau Informasi?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami melalui WhatsApp. Tim kami siap membantu Anda 24/7 untuk menjawab semua pertanyaan tentang sekolah kami.
          </p>
          <Button
            onClick={handleWhatsApp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.533.867-2.854 2.035-3.927 3.496C3.6 9.791 3.131 11.39 3.131 13.107c0 1.65.26 3.295.923 4.888.582 1.45 1.413 2.799 2.459 3.986l-2.585 9.955a.749.749 0 001.227.81l9.21-5.331a9.87 9.87 0 004.788-1.148c1.533-.867 2.854-2.035 3.927-3.496 1.074-1.46 1.543-3.06 1.543-4.776 0-1.651-.26-3.295-.923-4.888-.582-1.45-1.413-2.799-2.459-3.986 2.585-9.955a.75.75 0 00-1.227-.81l-9.21 5.331zm10.789 4.047c.922-.23 1.8-.765 2.47-1.516.67-.75 1.165-1.662 1.43-2.609.574-2.008.574-4.084 0-6.092-.265-.947-.76-1.859-1.43-2.609-.67-.75-1.548-1.286-2.47-1.516" />
            </svg>
            Chat WhatsApp Sekolah
          </Button>
        </div>

        {/* Opening Hours */}
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">Jam Layanan Kami</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-0 shadow-lg">
              <h4 className="font-bold text-primary mb-4">Hari Kerja (Senin - Jumat)</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Masuk Sekolah</span>
                  <span className="font-semibold text-card-foreground">07:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Jam Istirahat</span>
                  <span className="font-semibold text-card-foreground">10:00 - 10:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Pulang Sekolah</span>
                  <span className="font-semibold text-card-foreground">14:00</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-0 shadow-lg">
              <h4 className="font-bold text-primary mb-4">Libur</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Sabtu dan Minggu</li>
                <li>✓ Hari Libur Nasional</li>
                <li>✓ Libur Sekolah (sesuai kalender pendidikan)</li>
                <li>✓ Hubungi kami untuk jadwal libur lengkap</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
