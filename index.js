module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "import", "prettier"],
  "ignorePatterns": ["**/*.hbs", "**/*.html"],
  "extends": ["prettier"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object"]
      }
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-return-await": "error",
    "semi": "error",
    "no-tabs": "error",
    "no-unused-vars": "warn",
    "object-curly-newline": "off",
    "no-empty-function": "warn",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [2, "always"],
    "key-spacing": [2, { "afterColon": true }],
    "no-empty": "warn",
    "newline-per-chained-call": "off",
    "prefer-destructuring": "warn",
    "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "no-redeclare": "off",
    "max-len": [
      "error",
      120,
      2,
      {
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true,
        "ignorePattern": "^import\\s.+\\sfrom\\s.+;$"
      }
    ],
    "no-undef-init": "error",
    "no-useless-escape": "warn",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }]
  }
}
