interface CTAProps {
  contactEmail?: string;
}

export default function CTASection({ contactEmail = 'info@mundologico.com' }: CTAProps) {
  return (
    <section className="py-24 md:py-40 px-4 bg-gradient-mundo-alt relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-mundoTeal opacity-20 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-mundoPrimary opacity-15 rounded-full blur-3xl -mr-40 -mb-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu operación?
        </h2>

        <p className="text-xl text-white opacity-95 mb-12 leading-relaxed">
          Agenda una sesión con nuestro equipo y descubre cómo los Empleados AI pueden revolucionar tu negocio.
          <br />
          <span className="font-semibold">Somos irreverentes. Somos digitales. Somos tu futuro.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-mundoTeal bg-white hover:bg-opacity-95 transition-all duration-300 transform hover:scale-105"
          >
            Agendar Demo Gratuita
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          >
            Ver Servicios
          </a>
        </div>

        {/* Trust statement */}
        <p className="mt-12 text-white text-sm opacity-80">
          💡 Desde 2004 creando soluciones digitales de impacto
        </p>
      </div>
    </section>
  );
}
