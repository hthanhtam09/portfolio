import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
        tertiary: "#151030",
        light: "#8EACCD",
        dark: "#D2E0FB",
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)",
        stars: "url('../assets/images/stars.png')",
        twinkling: "url('../assets/images/twinkling.png')",
        clouds2: "url('../assets/images/clouds_2.png')",
        clouds3: "url('../assets/images/clouds_3.png')",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254,254,91, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254,254,91, 0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        twinkling: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-10000px 5000px" },
        },
        clouds: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "10000px 0" },
        },
        radiate: {
          '0%': { boxShadow: '0 0 0 0 rgba(32, 105, 149, 0.6)' },
          '100%': { boxShadow: '0 0 0 1.25em rgba(32, 105, 149, 0)' },
        },
        bop: {
          '0%': { transform: 'scale(0.9)' },
          '50%, 100%': { transform: 'scale(1)' },
        },
        bopB: {
          '0%': { transform: 'scale(0.9)' },
          '80%, 100%': { transform: 'scale(1) rotateZ(-3deg)' },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
        twinkling: "twinkling 200s linear infinite",
        clouds: "clouds 200s linear infinite",
        radiate: 'radiate 2s infinite',
        bop: 'bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate',
        bopB: 'bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate',
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
