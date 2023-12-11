/** @type {import('tailwindcss').Config} */
// overwrite the "content" entry according to the tailwind docs:
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [],
}


/*

the "title" is a new name for a new font that is added to Tailwind. And the value for that is an array where we now need to specify the name of our font between double quotes inside of single quotes. (this is how it's required by Tailwind to work.)

--> then, "font-title" among the classes where it gets applied

*/
