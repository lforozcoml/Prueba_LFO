import { Zap, Users, BarChart3, TrendingUp } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export default function BenefitsSection() {
  const benefits: BenefitItem[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '40 horas semanales',
      description: 'Ahorra con tu equipo de Empleados AI',
      gradient: 'from-mundoPrimary to-mundoTeal',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipos Conectados',
      description: 'Integra todas tus herramientas en una plataforma',
      gradient: 'from-mundoPurple to-mundoPrimary',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Datos en Tiempo Real',
      description: 'Toma decisiones más rápidas y efectivas',
      gradient: 'from-mundoTeal to-mundoPurple',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Escalabilidad',
      description: 'Crece sin fricción ni complejidad técnica',
      gradient: 'from-mundoPrimary to-mundoPurple',
    },
  ];

  return (
    <section className="py-24 md:py-40 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-mundoPrimary text-sm font-semibold mb-2 uppercase tracking-widest">
            Beneficios
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-mundoDark mb-4">
            Soluciones que Piensan y Actúan Contigo
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ahorra tiempo, integra herramientas y toma decisiones basadas en datos reales.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer`}
            >
              {/* Efecto overlay sutil */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Contenido */}
              <div className="relative z-10">
                <div className="mb-4 opacity-90">{benefit.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-sm opacity-95 leading-relaxed">{benefit.description}</p>
              </div>

              {/* Decoración esquina */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
