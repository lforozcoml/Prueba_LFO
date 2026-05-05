/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores primarios de Mundológico (del manual de marca)
        mundoPrimary: '#176BEC',      // Azul principal
        mundoDark: '#23274C',         // Azul oscuro (60% de paleta)
        mundoPurple: '#513EF5',       // Púrpura (15% de paleta)
        mundoPurpleMid: '#6F6DFB',    // Púrpura medio (secundario)
        mundoTeal: '#04BCA6',         // Teal/Turquesa (25% de paleta)
        
        // Mantener colores legacy si es necesario
        primary: '#176BEC',
        'primary-light': '#176BEC',
        'primary-dark': '#23274C',
        secondary: {
          purple: '#6F6DFB',
          'purple-dark': '#513EF5',
        },
        accent: '#04BCA6',
      },
      fontFamily: {
        sans: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['VAGrounded', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient-shift': 'gradientShift 4s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-mundo': 'linear-gradient(135deg, #176BEC 0%, #04BCA6 100%)',
        'gradient-mundo-alt': 'linear-gradient(135deg, #513EF5 0%, #176BEC 100%)',
        'gradient-mundo-vibrant': 'linear-gradient(135deg, #176BEC 0%, #513EF5 50%, #04BCA6 100%)',
      },
    },
  },
  plugins: [],
};