'use client';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const maxWidthClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 ${alignClass[align]}`}>
      {subtitle && (
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-gray-600 text-lg max-w-2xl ${maxWidthClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}