import "@testing-library/jest-dom";
// src/setupTests.js
import setupServer from "./mocks/server";
// Establish API mocking before all tests.
beforeAll(() => setupServer.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => setupServer.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => setupServer.close());
