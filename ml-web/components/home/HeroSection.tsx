import { ArrowRight } from 'lucide-react';

interface HeroProps {
  contactEmail?: string;
}

export default function HeroSection({ contactEmail = 'info@mundologico.com' }: HeroProps) {
  return (
    <section className="relative py-24 md:py-40 px-4 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #176BEC 0%, #04BCA6 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/logo-mundologico.png" 
              alt="Mundológico" 
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-white bg-opacity-20 rounded-full">
            <span className="text-white text-sm font-semibold">Curiosidad Digital</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automatización Inteligente y Empleados AI para tu Negocio
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white opacity-95 mb-10 leading-relaxed max-w-2xl">
            Transforma tus procesos con Make.com, Monday.com y tu fuerza laboral digital impulsada por IA. Somos irreverentes en cómo imaginamos el futuro.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            
          // ✅ BUENO
          <a href={`mailto:${contactEmail}`} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-all hover:scale-105" style={{ background: 'white', color: '#176BEC' }}>
              Descubre cómo funciona
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <button className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:opacity-80 transition-all duration-300">
              Agenda tu diagnóstico gratuito
            </button>
          </div>

          {/* Tagline */}
          <p className="mt-16 text-white opacity-80 text-sm">
            ✨ Más de 20 años transformando la forma en que las empresas trabajan
          </p>
        </div>
      </div>
    </section>
  );
}