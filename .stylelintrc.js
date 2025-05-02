module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-css-modules",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "color-hex-length": "long",
    "function-no-unknown": null,
    "scss/function-no-unknown": null,
    "import-notation": "string",
    "rule-empty-line-before": null,
    "value-keyword-case": null,
    "declaration-empty-line-before": null,
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      {
        message: "Expected class selector to be camelCase",
      },
    ],
  },
};
