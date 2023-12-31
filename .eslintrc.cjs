/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    "rules": {
    // force 4 space tabs
        "indent": ["error", 4, {"SwitchCase": 1}],
        // force semicolon at the end of lines
        "semi": ["error", "always"],
        // forbid spaces after function name or async before parenthesis
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        // padding within blocks such as classes, functions, etc
        "padded-blocks": ["error", "always"],
    }
};
