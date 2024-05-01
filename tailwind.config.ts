import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      purple: '#7631FE',
      white: '#FFFFFF',
      gray: '#E0E0E0',
      'gray-600': '#757575',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
