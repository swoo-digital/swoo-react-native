module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./build/test/coverage/",
  coverageReporters: ["html", "json", "text-summary"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  collectCoverageFrom: ["**/*.{ts, tsx}", "!**/node_modules/**"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "react-native",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: [
    "./__tests__/config/setupTest.js",
  ],
  testPathIgnorePatterns: ["./__tests__/config/setupTest.js"],

};
