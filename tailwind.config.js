/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#ffb4ab",
        "surface-tint": "#435b9f",
        "on-tertiary-fixed-variant": "#574500",
        "on-error": "#ffffff",
        "primary": "#00113a",
        "surface-container": "#eeeef0",
        "on-background": "#1a1c1d",
        "on-secondary-fixed-variant": "#93000b",
        "on-primary-fixed": "#00174a",
        "surface-container-high": "#e8e8ea",
        "on-tertiary-container": "#4f3e00",
        "inverse-surface": "#2f3132",
        "error": "#ba1a1a",
        "surface-bright": "#f9f9fb",
        "on-surface-variant": "#444650",
        "on-primary": "#ffffff",
        "outline-variant": "#c5c6d2",
        "secondary": "#b51a1b",
        "surface": "#f9f9fb",
        "tertiary-container": "#cca830",
        "primary-container": "#002366",
        "tertiary-fixed": "#ffe088",
        "on-secondary": "#ffffff",
        "tertiary": "#735c00",
        "on-secondary-fixed": "#410002",
        "surface-container-low": "#f3f3f5",
        "inverse-on-surface": "#f0f0f2",
        "on-secondary-container": "#fffbff",
        "background": "#f9f9fb",
        "on-primary-fixed-variant": "#2a4386",
        "surface-variant": "#e2e2e4",
        "primary-fixed-dim": "#b3c5ff",
        "secondary-container": "#d93630",
        "on-tertiary": "#ffffff",
        "surface-dim": "#d9dadc",
        "inverse-primary": "#b3c5ff",
        "error-container": "#ffdad6",
        "secondary-fixed": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#1a1c1d",
        "tertiary-fixed-dim": "#e9c349",
        "surface-container-highest": "#e2e2e4",
        "outline": "#757682",
        "on-error-container": "#93000a",
        "on-primary-container": "#758dd5",
        "on-tertiary-fixed": "#241a00",
        "primary-fixed": "#dbe1ff"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}
