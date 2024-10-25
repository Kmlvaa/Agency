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
        background: "#fff6ec",
        foreground: "#f1e8d9",
        MainOrange: "#ff4500",
        DarkGray: "#4f4f4f",
        Brown: "#460d04",
      },
    },
  },
  plugins: [],
};
export default config;
