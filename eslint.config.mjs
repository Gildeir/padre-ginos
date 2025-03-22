// Import ESLint's recommended JavaScript rules
import js from "@eslint/js";

// Import a list of predefined global variables (e.g., `window`, `document`, `process`)
import globals from "globals";

// Import Prettier's ESLint configuration, which disables ESLint rules that conflict with Prettier
import prettier from "eslint-config-prettier";

// Import the ESLint React plugin, which provides linting rules for React
import reactPlugin from "eslint-plugin-react";

import pluginQuery from "@tanstack/eslint-plugin-query";

/**
 * Define the export as an array of ESLint configuration objects.
 * This JSDoc comment helps editors like VS Code provide autocompletion and type checking.
 */
export default [
  // Apply the recommended ESLint rules for JavaScript.
  js.configs.recommended,

  // Apply the recommended React rules from the ESLint React plugin.
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detect the React version to apply the correct linting rules
      },
    },
  },

  // Apply the JSX runtime rules, which ensure JSX is handled correctly.
  reactPlugin.configs.flat["jsx-runtime"],
  ...pluginQuery.configs["flat/recommended"],

  // Custom ESLint settings for JavaScript and JSX files
  {
    files: ["**/*.js", "**/*.jsx"], // Apply these settings to all `.js` and `.jsx` files
    languageOptions: {
      globals: {
        ...globals.browser, // Enable global variables for browser environments (e.g., `window`, `document`)
        ...globals.node, // Enable global variables for Node.js (e.g., `process`, `__dirname`)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable support for JSX syntax in JavaScript files
        },
      },
    },
    rules: {
      // Turn off the rule that warns about unescaped characters in JSX (e.g., `'&apos;'`)
      "react/no-unescaped-entites": "off",

      // Disable the rule that enforces the use of PropTypes (useful if using TypeScript instead)
      "react/prop-types": "off",
    },
  },

  // Apply Prettier as the final configuration. This ensures that any formatting rules from ESLint
  // that conflict with Prettier will be disabled, allowing Prettier to handle all code formatting.
  prettier,
];
