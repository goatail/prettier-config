import type { Options } from "prettier";

const config: Options = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  vueIndentScriptAndStyle: true,
};

export default config;
