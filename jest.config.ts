export default {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>", "./src"],
  moduleNameMapper: {
    "^@data-layer/(.*)$": "<rootDir>/src/data-layer/$1",
    "^@web/(.*)$": "<rootDir>/src/web/$1",
    "^@business-logic/(.*)$": "<rootDir>/src/business-logic/$1",
  },
};
