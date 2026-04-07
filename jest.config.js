module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: [
    "default", // keep default console output
    [ "jest-junit", {
        outputDirectory: "./",
        outputName: "junit.xml"
      }]
  ],
  testMatch: ["**/tests/**/*.test.ts"]
};