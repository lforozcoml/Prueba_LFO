'use client';

import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'featured' | 'elevated';
  children?: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  icon,
  variant = 'default',
  children,
  className = '',
}: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-200',
    featured: 'bg-gradient-to-br from-primary-light to-accent text-white',
    elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow',
  };

  return (
    <div className={`rounded-xl p-6 ${variants[variant]} ${className}`}>
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-sm opacity-80 mb-4">{description}</p>}
      {children}
    </div>
  );
}