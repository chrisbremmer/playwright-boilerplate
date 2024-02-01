# Playwright Boilerplate

This repository provides a comprehensive setup for a Playwright testing suite tailored for an Ecommerce application. It supports end-to-end, API, integration, and load testing to ensure thorough validation of both functionality and performance. Here is the detailed project structure with descriptions for each section.

## Project Structure

```plaintext
vuori-automation/
│
├── .github/                         # CI/CD workflows for GitHub Actions.
│   └── workflows/
│       └── playwright.yml
│
├── tests/
│   ├── api/
│   │   ├── requests/
│   │   └── tests/
│   ├── e2e/
│   │   ├── pages/
│   │   └── tests/
│   ├── integration/
│   │   └── tests/
│   ├── load/
│   │   ├── config/
│   │   ├── data/
│   │   ├── reports/
│   │   ├── scenarios/
│   │   └── scripts/
│   └── utils/
│
├── playwright.config.ts
└── ...
```

Each directory is crafted for a specific testing aspect:

-   `tests/`: The main directory housing all test-related files.
    -   `api/`: Holds API testing specifications and request helpers.
        -   `requests/`: Encapsulated API requests for reuse across test specs.
        -   `tests/`: API test specifications and suites.
    -   `e2e/`: Contains end-to-end test specifications and Page Object Models.
        -   `pages/`: Page Object Models that abstract page details for E2E tests.
        -   `tests/`: End-to-end test specifications.
    -   `integration/`: Integration test specifications to ensure module interoperability.
    -   `load/`: Load testing configurations, data, and scripts.
        -   `config/`: Environment and load test configurations.
        -   `data/`: Data files for dynamic load testing.
        -   `reports/`: Generated reports from load test runs.
        -   `scenarios/`: Defined user scenarios for load testing.
        -   `scripts/`: Playwright scripts for complex user interactions in load tests.
    -   `utils/`: Reusable utilities and helpers for test setup, execution, and teardown.
-   `.github/workflows/playwright.yml`: Defines the CI/CD pipeline that runs tests on every push or pull request.

## Running Tests

Execute the tests with the following commands:

```bash
# Run all tests
npm run test

# Run API tests
npm run test:api

# Run end-to-end tests
npm run test:e2e

# Run load tests
npm run test:load
```

For detailed test execution and additional scripts, refer to the `package.json` scripts section.

## Continuous Integration

This project uses GitHub Actions for continuous integration, automatically triggering tests on push or pull requests to ensure code integrity. The workflow is defined in the `.github/workflows/playwright.yml` file.

Testing workflows
