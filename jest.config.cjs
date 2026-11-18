module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['node_modules', '.internal'],
  coverageThreshold: {
    global: {
      lines: 1,
      functions: 1,
      branches: 1,
      statements: 1,
    },
  },
  transform: {},
  testPathIgnorePatterns: ['node_modules'],
};
