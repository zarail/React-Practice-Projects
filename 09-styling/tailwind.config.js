/** @type {import('tailwindcss').Config} */
// overwrite the "content" entry according to the tailwind docs:
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
