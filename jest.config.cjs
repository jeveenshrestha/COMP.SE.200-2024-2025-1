module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['node_modules', '.internal'],
  coverageThreshold: {
    global: {
      lines: 5,
      functions: 5,
      branches: 5,
      statements: 5,
    },
  },
  transform: {},
  testPathIgnorePatterns: ['node_modules'],
};
