import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#050813",
        panel: "#09101F",
        text: "#F4F6FF",
        muted: "#929BB0",
        cyan: "#67D8FF",
        violet: "#9381FF",
        green: "#62F59B"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-sc)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 38px rgba(103, 216, 255, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
