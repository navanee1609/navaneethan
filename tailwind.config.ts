import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        Sans: 'var(--font-sans)', // Fixed typo
        serif: 'var(--font-serif)',
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': "move-left 30s linear infinite",
        'move-left-card': "move-left-card 60s linear infinite",
        'move-right-card': "move-right-card 60s linear infinite",
        bounceIn: "bounceIn 1.2s ease-out forwards",
        fadeInZoom: "fadeInZoom 1.5s ease-out forwards",
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          }
        },
        'move-left': {
          '0': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-left-card': {
          '0': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-right-card': {
          '0': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "60%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        fadeInZoom: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      // Add custom class for paused animation on hover
      animationPlayState: {
        paused: 'paused',
        running: 'running',
      }
    },
  },
  plugins: [],
};

export default config;
