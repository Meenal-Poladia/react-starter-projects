/*
    Specifying the rules below:
    1. "semi": Enforces the use of semicolons at the end of statements.
    2. "indent": Enforces consistent indentation (e.g., 2 spaces or 4 spaces).
    3. "no-unused-vars": Flags unused variables to avoid clutter and potential bugs.
    4. "no-console": Disallows the use of console.log() statements in production code.
    5. "quotes": Enforces consistent use of single or double quotes.
    6. "no-trailing-spaces": Disallows trailing whitespace at the end of lines.
    7. "no-var": Encourages the use of let or const instead of var.
    8. "prefer-arrow-callback": Encourages the use of arrow function syntax for callbacks.
 */

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "semi": "warn",
        "no-unused-vars": "warn",
        "no-empty": "error",
        "no-console": "off",
        "quotes": ["error", "single"],
        "no-trailing-spaces": "error",
        "no-var": "warn",
        "linebreak-style": ["error", "windows"],
        "prefer-arrow-callback": "error"
    }
}
