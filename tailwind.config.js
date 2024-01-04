/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea580c",
          secondary: "#f6d860",
          accent: "#ea580c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "text-primary": "#000000",
          ".tab-active": {
            color: "#ffffff",
          },
        },
      },
    ],
  },
};
