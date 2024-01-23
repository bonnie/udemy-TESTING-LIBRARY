import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Establish mocking before all tests
beforeAll(() => server.listen());
// Reset any request handlers that we may have added during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// close the server after all tests complete.
afterAll(() => server.close());
