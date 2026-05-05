/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mundoPrimary: '#176BEC',
        mundoDark: '#23274C',
        mundoPurple: '#513EF5',
        mundoPurpleMid: '#6F6DFB',
        mundoTeal: '#04BCA6',
      },
      fontFamily: {
        sans: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['VAGrounded', 'sans-serif'],
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