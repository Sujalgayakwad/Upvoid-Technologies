/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"], // Add Inter as the primary font family
      },
      colors: {
        primary: "#4097f5", // Branding color
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontSize: {
        heading: ['22px', '28px'], // Heading 22sp
        subheading: ['18px', '20px'], // Subheading 18/20sp
        body: ['14px', '16px'], // Body 14/16sp
      },
    },
  },
  plugins: [],
};
