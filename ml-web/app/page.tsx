export default function Home() {
    return (
      <div className="w-full min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #176BEC 0%, #04BCA6 100%)' }}>
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">Mundológico</h1>
          <p className="text-xl mb-8">Automatización Inteligente y Empleados AI</p>
          <a href="mailto:info@mundologico.com" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100">
            Contacta
          </a>
        </div>
      </div>
    );
  }