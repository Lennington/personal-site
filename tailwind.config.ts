import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'darkGrey-base': '#181818',
        'darkGrey-highlight': '#202020',
        'spotify': '#1ED760',
        'kinzen': '#FFFFFF',
        'axonista': '#2A34F5'
      }
    },
  },
  plugins: [],
}
export default config
