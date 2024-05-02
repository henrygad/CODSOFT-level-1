/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
       'primary-color': '#1A8ECF',
       'secondary-color': '#C22626',
      },
      fontFamily: {
       'primary-font':  'Volkhov, sans-serif, serif',
       'secondary-font': 'Google Sans',
       'backup-font': 'roboto',
       'text-font': 'poppins',
      }
    },
  },
  plugins: [],
}

