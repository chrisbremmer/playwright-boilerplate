import { defineConfig, devices } from '@playwright/test';
import path from 'path';
require('dotenv').config();

export const STORAGE_STATE = path.join(__dirname, '.auth/user.json');

export default defineConfig({
    testDir: './tests',
    // Configure the reporter
    reporter: 'html',
    // Retry on CI only
    retries: process.env.CI ? 2 : 0,
    // Run tests in files in parallel
    fullyParallel: true,

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://kitchen.applitools.com',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'setup',
            testMatch: '**/*global-setup.ts',
        },
        {
            name: 'e2e tests logged in',
            dependencies: ['setup'],
            use: {
                storageState: STORAGE_STATE,
            },
            testMatch: ['loggedIn.spec.ts'],
            // testIgnore: ['**/*paymentIntegration.spec.ts'],
        },
        {
            name: 'api tests',
            testIgnore: [
                '**/*loggedIn.spec.ts',
                '**/*.setup.ts',
                '**/*paymentIntegration.spec.ts',
            ],
        },
        {
            name: 'recipe tests',
            use: {
                ...devices['iPhone 12'],
            },
            testIgnore: [
                '**/*loggedIn.spec.ts',
                '**/*.setup.ts',
                '**/*paymentIntegration.spec.ts',
                '**/*recipesApi.spec.ts',
            ],
        },
    ],
});
