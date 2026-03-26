'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Advantages from '@/components/sections/advantages';
import PPDB from '@/components/sections/ppdb';
import Gallery from '@/components/sections/gallery';
import Location from '@/components/sections/location';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Advantages />
        <PPDB />
        <Gallery />
        <Location />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
