module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};