module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.svg$": "<rootDir>/svgTransform.js",
    },
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
    },
};
