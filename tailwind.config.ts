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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        '3xl': '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      zIndex:{
        '999':'999'
      }
    },
  },
  plugins: [ require('@tailwindcss/forms')],
};
export default config;
