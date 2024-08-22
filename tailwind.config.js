/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.800rem',
        base: '1rem',
        xl: '1.250rem',
        '2xl': '1.563rem',
        '3xl': '1.954rem',
        '4xl': '2.442rem',
        '5xl': '3.053rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        'text': 'hsl(var(--text))',
        'background': 'hsl(var(--background))',
        'backgroundSc': 'hsl(var(--background-sc))',
        'secondary': 'hsl(var(--secondary))',
        'accent': 'hsl(var(--accent))',
        'onSecondary': 'hsl(var(--on-secondary))',
        'onPrimary': 'hsl(var(--on-primary))',
        'primary': 'hsl(var(--primary))',
        'gray': 'hsl(var(--gray))',
      },
      borderRadius: {
        sm: '5px',
        md: '10px',
        lg: '15px',
      }
    },
  },
  plugins: [],
};
