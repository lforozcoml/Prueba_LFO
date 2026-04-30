import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mundologico - Automatización Inteligente con IA',
  description: 'Empleados AI que trabajan 24/7 para tu negocio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}