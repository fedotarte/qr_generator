module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended'
    ],
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "globals":{"Atomics": "readonly", "SharedArrayBuffer": "readonly"},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module",
        project: ['./tsconfig.json']
    },
    "rules": {
        "linebreak-style": "off",
        "prettier/prettier":[
            "error",
            {
                "endOfFile": "auto"
            }
        ]
    }
};
