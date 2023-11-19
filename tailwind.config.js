/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        work: `hsl(15, 100%, 70%)`,
        play: `hsl(195, 74%, 62%)`,
        study: `hsl(348, 100%, 68%)`,
        exercise: `hsl(145, 58%, 55%)`,
        social: `hsl(264, 64%, 52%)`,
        "selfCare": `hsl(43, 84%, 65%)`,
        PrimaryBlue: `hsl(246, 80%, 60%)`,
        "Very-darkblue": `hsl(226, 43%, 10%)`,
        Darkblue: `hsl(235, 46%, 20%)`,
        "Desaturated-blue": `hsl(235, 45%, 61%)`,
        "Pale-Blue": `hsl(236, 100%, 87%)`,
      },
      fontFamily: {
        Rubik: `p'Rubik', sans-serif`
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'main': 'repeat(4, minmax(0, 1fr))',
      }

    },
  },
  plugins: [],
}

