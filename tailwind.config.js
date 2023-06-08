/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white' : 'hsl(0, 0%, 100%)',
        'darkblue' :'hsl(240, 67%, 8%)',
        'darkgray': 'hsl(240, 17%, 26%)',
        'lightgray': 'hsl(240, 6%, 54%)',
        'cyan' : 'hsl(194, 48%, 49%)',
        'mustard': 'hsl(33, 82%, 61%)',
        'jup': 'hsl(27, 75%, 70%)',
        'purple': 'hsl(263, 67%, 51%)',
        'orange': 'hsl(10, 63%, 51%)',
        'red': 'hsl(2, 68%, 53%)',
        'darkorange': 'hsl(17, 73%, 46%)',
        'lightcyan' : 'hsl(169, 73%, 44%)',
        'blue': 'hsl(222, 87%, 56%)',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1100px'
      },
      container: {
        center: true
      },
      fontFamily: {
        ant : ['Antonio', 'sans-serif'],
        spartabold: ['Spartan-bold', 'sans-serif'],
        spartareg: ['Spartan-regular', 'sans-serif'],
      },
      fontWeight : {
        bold : '700',
        reg: '400',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}

