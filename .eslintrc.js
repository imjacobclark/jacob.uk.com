module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jest"
    ],
    "env": {
        "jest/globals": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "global-require": 0,
        "max-len": 0
    }
};