import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-black": "#0B0A07",
        "primary-white": "#FFFFFF",
        "primary-pink": "#FFC0F1",
        "light-gray": "#8A8A8A",
        "dark-gray": "#2B2B2B",
        green: "#CAF4CB",
        yellow: "#F7F272",
        blue: "#83B2F0",
      },
    },
  },
  plugins: [],
};
export default config;
