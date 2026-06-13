/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:     '#9E1B22',
          'red-dark': '#7B1218',
          'red-deep': '#5C0D12',
          'red-light': '#C4222B',
          yellow:  '#FFD100',
          'yellow-dark': '#E6BC00',
          'yellow-light': '#FFE04D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out forwards',
        'slide-up':      'slideUp 0.6s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeIn:       { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:      { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        bounceGentle: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
    },
  },
  plugins: [],
};
