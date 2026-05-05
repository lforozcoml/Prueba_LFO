'use client';

import HeroSection from '@/components/home/HeroSection';

const contactEmail = 'info@mundologico.com';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <HeroSection contactEmail={contactEmail} />
    </main>
  );
}