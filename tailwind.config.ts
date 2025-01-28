import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "services-image": "url('/services.webp')",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      keyframes: {
        "modal-in": {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cookieFadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        cookieFadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "modal-in": "modal-in 0.3s ease-in-out",
        cookieFadeIn: "cookieFadeIn 0.5s ease-in-out",
        cookieFadeOut: "cookieFadeOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
