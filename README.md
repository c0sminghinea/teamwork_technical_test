# Teamwork Project

This project is a [Playwright](https://playwright.dev/) automation project for testing e2e scenarios.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- [Playwright](https://playwright.dev/docs/intro) installed as a dependency.

### Installation

1. Clone the repository:

```
git clone <repository-url>

```

2. Install dependencies:

```
npm install (this command has to be ran in the terminal)

```

## Running the tests

- To run all tests:

```
npx playwright test --workers=1

```

The tests are made to be ran against a clean project, without any task list or milestone.

- To run a specific test file:

```
npx playwright test landing-page.spec.js

```

- To run tests in headful mode:

```
npx test --headed

```

- To run tests in headless mode:

```
npx test --headless

```

## Test structure

The tests are located in the `tests` directory and are written using the [Jest](https://jestjs.io/) testing framework.

## Playwright Configuration

The `playwright.config.js` file contains the configuration for running tests with Playwright.

## Contributing

We welcome contributions! If you would like to contribute to this project, please open a pull request.
