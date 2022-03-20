module.exports = {
    "transform": {
        "^.+\\.js": "<rootDir>/node_modules/babel-jest"
    },
    "transformIgnorePatterns": [
        "<rootDir>/node_modules/(?!@agm)"
    ]
}