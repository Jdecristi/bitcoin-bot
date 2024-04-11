// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/base.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
