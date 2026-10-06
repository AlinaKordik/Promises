import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from 'eslint-plugin-jest'

export default defineConfig([
  { 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: {...globals.browser, ...globals.node } },
  },
 {
    ignores: ["dist/*", "coverage/*"]
  },
  {
    files: ["src/*"],
    
  }, 

  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
        ...jest.configs["flat/recommended"].rules,
        "jest/prefer-expect-assertions": "off",
        "jest/expect-expect": "error",
    },
  },
]);
