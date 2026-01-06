# Cypress Test Automation Framework

This repository contains the end-to-end and API test suite for the Olmero and Bythen applications, built using the [Cypress](https://www.cypress.io/) test automation framework.

## Project Structure

```
├── cypress
│   ├── e2e
│   │   ├── API
│   │   │   └── login
│   │   │       └── login_olmero_api.cy.js  // Olmero API login tests
│   │   └── UI
│   │       ├── bythen
│   │       │   └── homepage.cy.js          // Bythen UI homepage and login tests
│   │       └── login
│   │           └── login_olmero.cy.js      // Olmero UI login tests
│   ├── fixtures
│   │   └── example.json                    // Fixture data
│   ├── pages
│   │   ├── bythen_homepage_page.js         // Page Object for Bythen Homepage
│   │   └── olmero_login_page.js            // Page Object for Olmero Login Page
│   └── support
│       ├── commands.js                     // Custom Cypress commands
│       └── e2e.js                          // Cypress support file
├── cypress.config.js                       // Cypress configuration
├── package.json                            // Project dependencies and scripts
└── README.md
```

## Prerequisites

*   [Node.js](https://nodejs.org/en/) (version 16 or higher)
*   [npm](https://www.npmjs.com/)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd UI
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the tests

To run the Cypress tests, you can use the Cypress Test Runner or run them from the command line.

### Cypress Test Runner

Open the Cypress Test Runner with the following command:
```bash
npx cypress open
```
Then, select the desired test file to run.

### Command Line

To run all tests in headless mode:
```bash
npx cypress run
```

To run a specific test file:
```bash
npx cypress run --spec "cypress/e2e/UI/login/login_olmero.cy.js"
```

## Tests

This framework includes the following tests:

### API Tests

*   **Olmero Login API**:
    *   `cypress/e2e/API/login/login_olmero_api.cy.js`:
        *   Verifies that the Olmero login API endpoint returns the correct status codes and error messages for invalid requests.

### UI Tests

*   **Bythen Homepage & Login**:
    *   `cypress/e2e/UI/bythen/homepage.cy.js`:
        *   Visits the Bythen homepage.
        *   Performs a login and verifies that the login is successful.
*   **Olmero Login**:
    *   `cypress/e2e/UI/login/login_olmero.cy.js`:
        *   Tests the login functionality of the Olmero application with invalid credentials and verifies that an error message is displayed.
