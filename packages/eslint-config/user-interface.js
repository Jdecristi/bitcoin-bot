const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "./base.cjs",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    // react rules
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/self-closing-comp": "warn",
    "react-hooks/rules-of-hooks": "error",

    //next rules
    "@next/next/no-img-element": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      // overide "no-default-export" for pages & layouts
      files: ["./src/app/**/*.tsx"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
