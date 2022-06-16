module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        dark: {
          300: "#1B2B32",
          500: "#17252B"
        },
        light: {
          300: "#F4F6F5"
        },
        primary: {
          300: "#3CB0C6"
        },
        secondary: {
          300: "#ED3B2B"
        }
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
