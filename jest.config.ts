/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resolver: 'jest-resolver-enhanced',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  roots: [path.resolve(__dirname, 'src')],
};

export default config;
