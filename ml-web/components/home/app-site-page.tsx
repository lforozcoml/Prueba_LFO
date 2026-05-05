'use client';

import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const contactEmail = 'info@mundologico.com';

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection contactEmail={contactEmail} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Services Section */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* CTA Section */}
      <CTASection contactEmail={contactEmail} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
