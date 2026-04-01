/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-violet-500',
    'bg-yellow-500',
    'bg-green-500',
    'text-white',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
