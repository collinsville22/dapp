/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  /* ⬇️  ONLY run tests that live in YOUR repo (~/work/tests) */
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],

  /* ⬇️  Completely ignore the JuliaOS checkout and anything in node_modules */
  testPathIgnorePatterns: [
    '/node_modules/',
    '/JuliaOS/'
  ],
  transformIgnorePatterns: [
    '/node_modules/'
  ]
};
