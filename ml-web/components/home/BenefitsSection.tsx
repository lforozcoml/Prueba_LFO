export default function BenefitsSection() {
  const benefits = [
    {
      icon: '🔬',
      title: 'Curiosidad que Escala',
      description: 'No nos quedamos con lo básico; exploramos el límite de la IA para tu beneficio.',
      color: '#176BEC',
    },
    {
      icon: '✨',
      title: 'Simplicidad Digital',
      description: 'Transformamos procesos complejos en flujos de trabajo transparentes.',
      color: '#04BCA6',
    },
    {
      icon: '⚡',
      title: 'Resultados en Semanas',
      description: 'Olvida proyectos de meses. Priorizamos el Mínimo Experimento Viable.',
      color: '#513EF5',
    },
    {
      icon: '🤝',
      title: 'ADN de Partner',
      description: 'No somos consultores, somos partners certificados de Monday, Make y Google.',
      color: '#6F6DFB',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: '#176BEC' }}>
            Beneficios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Soluciones que Piensan y Actúan Contigo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ahorra tiempo, integra herramientas y toma decisiones basadas en datos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-xl border-2 bg-white hover:shadow-xl transition-all duration-300"
              style={{ borderColor: benefit.color }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}