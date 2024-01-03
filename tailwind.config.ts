import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-base": "#181818",
        "dark-highlight": "#202020",
        "light-base": "#FCFBFA",
        "light-highlight": "#FFFFFF",
        spotify: "#1ED760",
        kinzen: "#FFFFFF",
        axonista: "#2A34F5",
      },
    },
  },
  plugins: [],
};
export default config;
