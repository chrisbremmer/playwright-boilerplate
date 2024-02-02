# WIP Playwright Boilerplate

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
