module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow: {
        card: '0px 4px 12px rgba(53, 39, 140, 0.16)',
      },
      colors: {
        indigo: {
          100: '#F0F0FF',
          200: '#EAECFF',
          300: '#A3A6FF',
          500: '#8480FF',
          700: '#6354EB',
          900: '#35278C',
        },
        grey: {
          100: '#FAFAFF',
          500: '#AEAEBD',
          700: '#7F7E8F',
          900: '#282733',
        },
        tangerine: {
          300: '#FFC2AD',
          500: '#FC9D79',
          700: '#FA7946',
        },
        yellow: {
          300: '#FFE4B3',
          500: '#FCD690',
          700: '#FAC96E',
        },
        blue: {
          300: '#B0DAFF',
          500: '#67B3F5',
          700: '#238EEB',
        },
        green: {
          700: '#ADF0DE',
          900: '#56C4A7',
        },
        red: {
          700: '#FFB8B3',
          900: '#F5796C',
        },
      },
      fontFamily: {
        sans: ['Spezia', 'sans-serif'],
        serif: ['Cambon', 'serif'],
      },
      spacing: {
        17: '4.25rem',
        21: '5.25rem',
        25: '6.25rem',
        30: '7.5rem',
        35: '8.75rem',
        50: '12.5rem',
        112: '28rem',
        150: '37.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
