'use client';

import Link from 'next/link';
import { Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mundologico</h3>
            <p className="text-gray-300 text-sm mb-4">
              Automatización inteligente con IA para tu negocio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Make.com
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Monday.com
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Empleados AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/casos-exito" className="hover:text-accent transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Documentación
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@mundologico.com" className="hover:text-accent transition-colors">
                  hola@mundologico.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+573128315581" className="hover:text-accent transition-colors">
                  +57 312 8315581
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Mundologico. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}