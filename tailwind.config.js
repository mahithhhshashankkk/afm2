/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Forest / primary green ramp
        forest: {
          50: '#f0f7f0',
          100: '#dcecdb',
          200: '#bbd8b8',
          300: '#8fbd8b',
          400: '#5e9b59',
          500: '#3d7e38',
          600: '#2d6329',
          700: '#244f21',
          800: '#1e3f1c',
          900: '#193416',
          950: '#0c1d0a',
        },
        // Earth / warm brown ramp
        earth: {
          50: '#faf6f0',
          100: '#f0e6d6',
          200: '#e0ccae',
          300: '#cdaa7d',
          400: '#b88a54',
          500: '#a06f3e',
          600: '#855733',
          700: '#6b4429',
          800: '#553824',
          900: '#462f20',
          950: '#261910',
        },
        // Sand / neutral cream ramp
        sand: {
          50: '#fbf9f5',
          100: '#f5f0e8',
          200: '#ebe3d5',
          300: '#dcd0bc',
          400: '#c4b598',
          500: '#ab9b76',
          600: '#8f7f5e',
          700: '#716349',
          800: '#4b4133',
          900: '#2e2920',
        },
        // Sage accent
        sage: {
          50: '#f4f7f4',
          100: '#e3ece3',
          200: '#c7d8c7',
          300: '#9fbc9f',
          400: '#739a73',
          500: '#527a52',
          600: '#3e613f',
          700: '#334d34',
          800: '#2b3e2c',
          900: '#1f2d20',
        },
        // Moss accent (deeper green)
        moss: {
          50: '#f3f6ef',
          100: '#e2ead8',
          200: '#c5d5b5',
          300: '#9bbb90',
          400: '#729a64',
          500: '#567d49',
          600: '#43643a',
          700: '#365030',
          800: '#2d4028',
          900: '#1a261a',
        },
        // Accent amber (for warnings / CTAs highlight)
        amber2: {
          400: '#f5b342',
          500: '#e89c25',
          600: '#c97f16',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'blob': 'blob 14s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'grow-bar': 'growBar 1.2s ease-out forwards',
        'count-up': 'countUp 1.5s ease-out forwards',
        'leaf-fall': 'leafFall 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' },
          '33%': { borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' },
          '66%': { borderRadius: '50% 50% 40% 60% / 40% 60% 50% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        growBar: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        leafFall: {
          '0%': { transform: 'translate(0, -20px) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '0.7' },
          '100%': { transform: 'translate(60px, 120vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
