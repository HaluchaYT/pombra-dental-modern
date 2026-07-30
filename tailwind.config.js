/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfbf7",
          100: "#faf6ee",
          200: "#f2ead9",
        },
        teal: {
          50: "#eaf5f6",
          100: "#c9e4e7",
          200: "#8fc4c9",
          300: "#4d9ea6",
          400: "#2a7f89",
          500: "#0a5c66",
          600: "#084a52",
          700: "#063940",
          800: "#04282d",
          900: "#02191c",
        },
        gold: {
          400: "#e0b56b",
          500: "#c9954e",
          600: "#a97a3a",
          700: "#82602f",
        },
        ink: {
          900: "#111a1e",
          800: "#1a2b32",
          700: "#334148",
          600: "#4a5a62",
          500: "#6b7a82",
          400: "#94a3aa",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(6, 57, 64, 0.08)",
        card: "0 10px 40px rgba(6, 57, 64, 0.12)",
        glow: "0 0 60px rgba(10, 92, 102, 0.25)",
      },
      backgroundImage: {
        "mesh-teal":
          "radial-gradient(ellipse at top left, rgba(10,92,102,0.18), transparent 55%), radial-gradient(ellipse at bottom right, rgba(201,149,78,0.14), transparent 55%)",
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.05 0 0 0 0 0.22 0 0 0 0 0.25 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
