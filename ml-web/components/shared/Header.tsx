export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mundológico</h1>
        <nav className="flex gap-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contacto</a>
        </nav>
      </div>
    </header>
  );
}