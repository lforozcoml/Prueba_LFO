import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-light to-accent py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Automatización Inteligente y Empleados AI para tu Negocio
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Transforma tus procesos con Make.com, Monday.com y tu fuerza laboral digital impulsada por IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Descubre cómo funciona
              </Button>
              <Button variant="outline" size="lg">
                Agenda tu diagnóstico gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Beneficios"
            title="Soluciones que Piensan y Actúan Contigo"
            align="center"
            description="Ahorra tiempo, integra herramientas y toma decisiones basadas en datos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              icon={<Zap className="text-accent" />}
              title="40 horas semanales"
              description="Ahorra con tu equipo de Empleados AI"
              variant="elevated"
            />
            <Card
              icon={<Users className="text-accent" />}
              title="Equipos Conectados"
              description="Integra todas tus herramientas en una plataforma"
              variant="elevated"
            />
            <Card
              icon={<BarChart3 className="text-accent" />}
              title="Datos en Tiempo Real"
              description="Toma decisiones más rápidas y efectivas"
              variant="elevated"
            />
            <Card
              icon={<ArrowRight className="text-accent" />}
              title="Escalabilidad"
              description="Crece sin fricción ni complejidad técnica"
              variant="elevated"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-dark text-white py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu operación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda una sesión con nuestro equipo y descubre cómo los Empleados AI pueden revolucionar tu negocio.
          </p>
          <Button variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Agendar Demo Gratuita
          </Button>
        </div>
      </section>
    </div>
  );
}