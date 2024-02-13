/** @type {import('eslint').Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: { project: ["tsconfig.json"] },
      node: { project: ["tsconfig.json"] },
    },
  },
  rules: {
    "import/default": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": [
      "error",
    ],
    "unused-imports/no-unused-vars": [
      "error",
    ],
  },
};

module.exports = config;
