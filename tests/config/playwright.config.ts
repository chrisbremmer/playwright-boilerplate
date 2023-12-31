import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // Specify the directory where test files are located
    testDir: '../', // relative path to the tests from this config file

    // Set up any overrides or additional settings for tests in this directory
    use: {
        baseURL: 'https://vuoriclothing.com/',
        // Example: set headless to false if these tests should be observed during development
        headless: false,
    },

    // Define any custom reporter(s) you want to use for these tests
    reporter: 'html',

    // You could also include specific timeout settings, if different from the main config
    timeout: 20000, // example of increasing the timeout for these tests

    // Add any other configurations that are specific to the tests within this directory
};

export default config;
