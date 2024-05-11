import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        DEFAULT: "#FCBA04",
        dark: "#CC9601",
        light: "#FFD45E",
      },
      "theme-black": {
        DEFAULT: "#383838"
      }
    },
  },
  plugins: [],
};
export default config;
