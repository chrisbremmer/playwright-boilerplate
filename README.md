# Playwright Testing Suite Boilerplate

This repository provides a boilerplate setup for a Playwright testing suite. It is structured to support end-to-end, API, and integration testing for web applications. Below is the project structure with descriptions for each part.

## Project Structure

```plaintext
project-root/
│
├── src/                             # Main application source code.
│   ├── components/
│   ├── pages/
│   └── ...
|
├── tests/						     # Playwright test suite.
│   ├── api/
│   │   ├── requests/
│   │   └── tests/
│   ├── config/
│   │   └── environments/           # Environment specific configurations.
│   │   └── playwright.config.ts    # Specific Playwright configuration for tests.
│   ├── e2e/
│   │   ├── pages/                   # Page Object Models (POM) for E2E testing.
│   │   └── tests/
│   ├── fixtures/
│   ├── integration/
│   │   └── tests/
│   ├── utils/
│   └── run_tests.ts                 # Custom test runner script (for complex scenarios).
│   └── ...
│
└── playwright.config.ts             # Global Playwright configuration file.
```

Each directory and file has a specific purpose:

-   `tests/`: Root directory for all Playwright test cases and related files.
    -   `api/`:
        -   `requests/`: Functions that encapsulate API requests.
        -   `tests/`: API test specs
    -   `config/`:
        -   `environments/`: Environment-specific configurations.
        -   `playwright.config.ts`: Playwright configuration specific to the test suite.
    -   `e2e/`:
        -   `pages/`: Page Object Models for use in E2E tests.
        -   `tests/`: E2E test specs.
    -   `fixtures/`: Contains static data files used within tests.
    -   `integration/`: Integration tests to check the combined functionality of different application modules.
    -   `utils/`: Utility scripts and helpers that support test implementation.
    -   `run_tests.ts`: A custom Node.js script for running tests with additional logic or in a specific sequence.
-   `playwright.config.ts` (at the root): The global Playwright configuration file that sets default options for all tests.

## Running Tests

To run the tests, use the npm scripts defined in `package.json` or the custom `run_tests.ts` script for complex scenarios.
