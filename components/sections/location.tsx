'use client';

import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Lokasi Sekolah
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan kami dengan mudah di lokasi strategis ini
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <Card className="overflow-hidden bg-card border-0 shadow-lg h-96">
            <iframe
              src="https://maps.app.goo.gl/7xHdeFxgkBPWnPsj7?g_st=ac"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Alamat Lengkap</h3>
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-accent/20 h-fit">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">SD NEGERI 050577</p>
                  <p className="text-muted-foreground leading-relaxed">
                    JLN. P. KEMERDEKAAN<br />
                    Kecamatan Binjai<br />
                    Kabupaten Langkat<br />
                    Provinsi Sumatera Utara<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <p className="text-xs text-muted-foreground mb-1">Jam Operasional</p>
                <p className="font-semibold text-primary">Senin - Sabtu</p>
                <p className="text-sm text-muted-foreground">07:00 - 13:00 WIB</p>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <p className="text-xs text-muted-foreground mb-1">Telepon</p>
                <p className="font-semibold text-primary">085668269882</p>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
              </Card>
            </div>

            {/* Directions Card */}
            <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20">
              <h4 className="font-bold text-primary mb-3">Petunjuk Arah</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Lokasi sekolah kami terletak di jalan utama yang mudah diakses dari berbagai arah. Dekat dengan pusat kota dan memiliki akses transportasi publik yang baik.
              </p>
              <a
                href="https://www.google.com/maps/search/SD+Negeri+050577+Binjai+Langkat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
              >
                Buka di Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
