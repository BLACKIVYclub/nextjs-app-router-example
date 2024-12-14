/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the components directory
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the app directory
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in a src directory if it exists
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1D4ED8', // Example custom primary color
        secondary: '#9333EA', // Example custom secondary color
      },
      spacing: {
        '128': '32rem', // Example custom spacing
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example custom font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Add Tailwind Forms plugin for better form styles
    require('@tailwindcss/typography'), // Add Tailwind Typography plugin for rich text formatting
  ],
};
