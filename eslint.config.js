import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  globalIgnores(["dist", "coverage", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      /* Imports */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "eol-last": ["error", "always"],

      /* Unused Imports */
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      /* General */
      "no-duplicate-imports": "error",
      "object-curly-spacing": ["error", "always"],
      "no-trailing-spaces": "error",
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "object-shorthand": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      /* Complexity */
      complexity: ["warn", 10],
      "max-params": ["error", 4],
      "max-depth": ["warn", 4],
      "max-lines-per-function": [
        "warn",
        {
          max: 510,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-lines": [
        "warn",
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
]);
