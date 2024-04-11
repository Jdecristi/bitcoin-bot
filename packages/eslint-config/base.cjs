const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
const allJSFileExtensions = ["js", "ts", "cjs", "mjs", "jsx", "tsx"];

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "eslint-config-turbo"],
  plugins: ["prettier", "import", "simple-import-sort", "@typescript-eslint"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  rules: {
    // general rules
    "no-unused-expressions": "error",

    // imports rules
    "import/no-unresolved": "warn",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "error",
    "import/no-default-export": "error",

    // typescript rules
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],

    // prettier rules
    "prettier/prettier": "error",

    // simple import sort rules
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ...allJSFileExtensions.map((extension) => `.*.${extension}`),

    // Ignore config files
    ...allJSFileExtensions.map((extension) => `*.config.${extension}`),
    "node_modules/",
    "dist/",

    // Ignore .d.ts files
    "*.d.ts",
  ],
  overrides: [
    { files: ["*.js?(x)", "*.ts?(x)"] },
    {
      // override "simple-import-sort" config
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // External packages
              ["^@?\\w"],

              // Repo packages
              ["^(@repo)"],

              // Internal packages
              ["^(@src)"],

              // Relative imports
              ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

              // Style/JSON imports
              ["^.+\\.?(css)$", "^.+\\.?(json)$"],

              // External package types
              ["^@?\\w.*\\u0000$"],

              // Repo package types
              ["^(@repo)\\w.*\\u0000$"],

              // Internal package types
              ["^(@src)\\w.*\\u0000$"],

              // Relative import types
              ["^@?\\w.*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$"],
            ],
          },
        ],
      },
    },
  ],
};
