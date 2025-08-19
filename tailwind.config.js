/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["16px", "20px"],
        base: ["22px"],
        lg: ["24px", "30px"],
        xl: ["30px", "30px"],
        "2xl": ["32px", "29.26px"],
        "3xl": ["36px", "50px"],
        "4xl": ["50px", "58px"],
        "8xl": ["55px", "80px"],
      },
      fontFamily: {
        baloo: ["Baloo Bhai 2", "serif"],
        afacad: ["DM Sans", "serif"],
        anek: ["Anek Devanagari", "serif"],
      },
      colors: {
        primary: "#CCF8E1",
        "deep-green": "#004739",
        "accent-green": "EDFDF5D",
        "highlight-green": "rgba(2, 216, 102, 0.1)",
        "peridot-green": "#02D866",
        primary2: "#DAC4FD",
        "deep-purple": "#4B4BB2",
        "peridot-purple": "#F5EFFF",
        "highlight-purple": "rgba(235, 221, 255, 0.16)",
        "accent-purple": "#FBF9FF",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        custom: "1058px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
