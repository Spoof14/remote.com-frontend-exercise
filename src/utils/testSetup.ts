import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, expect } from 'vitest';
import queryClient from './client';
// import '@testing-library/jest-dom/extend-expect';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
beforeEach(() => {
  queryClient.removeQueries();
});

afterEach(() => {
  cleanup();
});
