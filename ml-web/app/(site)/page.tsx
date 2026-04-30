import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-20 md:py-32 px-4 text-white"
        style={{
          background: 'linear-gradient(135deg, #176BEC 0%, #04BCA6 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automatización Inteligente y Empleados AI para tu Negocio
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Transforma tus procesos con Make.com, Monday.com y tu fuerza laboral digital impulsada por IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 transition-colors">
                Descubre cómo funciona
              </button>
              <button className="px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition-colors">
                Agenda tu diagnóstico gratuito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 mb-2">Beneficios</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Soluciones que Piensan y Actúan Contigo
            </h2>
            <p className="text-gray-600 text-lg">
              Ahorra tiempo, integra herramientas y toma decisiones basadas en datos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: '40 horas semanales', desc: 'Ahorra con tu equipo de Empleados AI' },
              { icon: '👥', title: 'Equipos Conectados', desc: 'Integra todas tus herramientas en una plataforma' },
              { icon: '📊', title: 'Datos en Tiempo Real', desc: 'Toma decisiones más rápidas y efectivas' },
              { icon: '📈', title: 'Escalabilidad', desc: 'Crece sin fricción ni complejidad técnica' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 md:py-32 px-4 text-white text-center"
        style={{ backgroundColor: '#23274C' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu operación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una sesión con nuestro equipo y descubre cómo los Empleados AI pueden revolucionar tu negocio.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 transition-colors">
            Agendar Demo Gratuita
          </button>
        </div>
      </section>
    </div>
  );
}