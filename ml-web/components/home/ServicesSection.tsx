import { Brain, Zap, Code2 } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
  accentColor: string;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: 'IA-LAB',
      description: 'Laboratorio de innovación intensivo',
      details: [
        '8-12 semanas de transformación',
        'Identificación de casos de uso reales',
        'Prototipos de IA funcionales',
        'Implementación rápida de valor',
      ],
      icon: <Brain className="w-10 h-10" />,
      color: 'bg-mundoPrimary',
      accentColor: 'text-mundoPrimary',
    },
    {
      title: 'Automatización',
      description: 'Ecosistemas de trabajo completos',
      details: [
        'Business OS con No-Code/Low-Code',
        'Integración Monday.com + Make.com',
        'Workflows automáticos inteligentes',
        'Escalabilidad sin código complejo',
      ],
      icon: <Zap className="w-10 h-10" />,
      color: 'bg-gradient-mundo',
      accentColor: 'text-mundoPurple',
    },
    {
      title: 'Ingeniería',
      description: 'Soluciones personalizadas robustas',
      details: [
        'Desarrollo de agentes IA custom',
        'Integraciones complejas y seguras',
        'Arquitectura escalable',
        'Soporte y mantenimiento',
      ],
      icon: <Code2 className="w-10 h-10" />,
      color: 'bg-mundoTeal',
      accentColor: 'text-mundoTeal',
    },
  ];

  return (
    <section className="py-24 md:py-40 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-mundoPrimary text-sm font-semibold mb-2 uppercase tracking-widest">
            Nuestros Servicios
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-mundoDark mb-4">
            Transformación Digital Irreverente
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tres líneas de servicio diseñadas para llevar tu empresa al futuro de forma rápida y audaz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 ${service.color} opacity-100`}></div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col text-white">
                {/* Icon */}
                <div className="mb-6 opacity-90">{service.icon}</div>

                {/* Title */}
                <h3 className="font-heading text-3xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-sm opacity-95 mb-8 font-sans">{service.description}</p>

                {/* Details List */}
                <ul className="space-y-3 flex-1 mb-6">
                  {service.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start text-sm opacity-90">
                      <span className="mr-3 mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="inline-flex items-center justify-start text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity group-hover:translate-x-1">
                  Conocer más →
                </button>
              </div>

              {/* Hover overlay subtle */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
