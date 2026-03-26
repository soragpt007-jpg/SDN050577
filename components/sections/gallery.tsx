'use client';

import { Card } from '@/components/ui/card';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      category: 'Kegiatan Belajar',
      title: 'Pembelajaran Interaktif',
      image: '/images/classroom.jpg',
    },
    {
      id: 2,
      category: 'Upacara',
      title: 'Upacara Bendera',
      image: '/images/ceremony.jpg',
    },
    {
      id: 3,
      category: 'Aktivitas Guru',
      title: 'Rapat Guru',
      image: '/images/teachers.jpg',
    },
    {
      id: 4,
      category: 'Lingkungan Sekolah',
      title: 'Taman Sekolah',
      image: '/images/classroom.jpg',
    },
    {
      id: 5,
      category: 'Kegiatan Belajar',
      title: 'Praktik IPA',
      image: '/images/ceremony.jpg',
    },
    {
      id: 6,
      category: 'Olahraga',
      title: 'Turnamen Olahraga',
      image: '/images/teachers.jpg',
    },
  ];

  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galeri Sekolah
          </h2>
          <p className="text-muted-foreground text-lg">
            Jelajahi momen-momen berharga dari berbagai kegiatan di SD Negeri 050577
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-primary">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2">
                  Klik untuk melihat galeri lengkap
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal/Lightbox - Simple version */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Card className="relative max-w-2xl w-full bg-card border-0">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <Image
                  src={galleryItems.find(item => item.id === selectedImage)?.image || ''}
                  alt={galleryItems.find(item => item.id === selectedImage)?.title || ''}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
