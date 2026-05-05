export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformación Digital Irreverente
          </h2>
          <p className="text-lg text-gray-600">
            Tres líneas de servicio diseñadas para tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">🧪 IA-LAB Xperience</h3>
            <p className="text-gray-600">El laboratorio de innovación para prototipar soluciones de IA personalizadas.</p>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">⚙️ Ecosistemas de Automatización</h3>
            <p className="text-gray-600">Diseño e implementación de procesos en Monday.com y Make.com.</p>
          </div>

          <div className="bg-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">🤖 Ingeniería de IA & Agentes</h3>
            <p className="text-gray-600">Desarrollo técnico de agentes autónomos e integración de LLMs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}