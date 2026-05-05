'use client';

import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ServicesSection from '@/components/home/ServicesSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection contactEmail="info@mundologico.com" />
      <BenefitsSection />
      <ServicesSection />
    </main>
  );
}