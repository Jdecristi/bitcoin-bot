/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  extends: "./base.mjs",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
