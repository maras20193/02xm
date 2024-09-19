/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/template/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        layout: {
          primary: 'rgba(var(--color-layout-primary), <alpha-value>)',
          secondary: 'rgba(var(--color-layout-secondary), <alpha-value>)',
        },
        // Text colors
        text: {
          primary: 'rgba(var(--color-text-primary), <alpha-value>)',
          secondary: 'rgba(var(--color-text-secondary), <alpha-value>)',
        },
        // Accent colors (e.g., buttons, icons)
        accent: {
          primary: 'rgba(var(--color-accent-primary), <alpha-value>)',
          secondary: 'rgba(var(--color-accent-secondary), <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
