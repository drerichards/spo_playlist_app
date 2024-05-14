import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["variant", "&:not(.light *)"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #191919, #111111)',
      },
    },
    colors: {
      "theme-green": {
        DEFAULT: "#1ED760",
        dark: "#169F46",
        light: "#23FF70",
      },
      "theme-blue": {
        DEFAULT: "#4D7EA8",
        dark: "#395F80",
        light: "#5C95C7",
      },
      "theme-yellow": {
        DEFAULT: "#FFBC42",
        dark: "#CC9601",
        light: "#FFD45E",
      },
      "theme-black": {
        DEFAULT: "#383838",
        light: "#51514F",
        dark: "#1d1d1d"
      },
    },
    height: {
      "108": "42vh",
    },
    maxHeight: {
      "108": "42vh",
    },
  },
  plugins: [],
};
export default config;
