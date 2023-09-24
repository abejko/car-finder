/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#74c0fc",
        blue: {
          4: "#4dabf7",
          0: "#e7f5ff",
        },
        secondary: "#1166a8",
        grey: {
          9: "#212529",
          8: "#343a40",
          5: "#adb5bd",
          4: "#ced4da",
          1: "#f1f3f5",
          0: "#f8f9fa",
        },

        "light-grey": "#F4F4F4",
        "background-gray": "#313232",
      },
      backgroundImage: {
        "hero-bg": "url('./assets/hero-bg.png')",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
