
## APP Installation
 - Clone the app in your directory
 - inside your project npm install --force
 - npm start
 - after install all the dependencies, navigate to http://localhost:4200/
 - Close the app with control + c in the console 

## Install cypress

[Pre-requirements]

- https://docs.cypress.io/guides/getting-started/installing-cypress
- install node / nvm
- execute in terminal, inside your folder project
  - npm install cypress --save-dev --force
- after installation open cypres 
  - npx cypress open (will open cypres UI)

## Configurations cypress.config.js [inside object e2e]
- add base url 
  -   baseUrl : 'http://localhost:4200',
- exclude folders to test execution (can be an array with more folders)
  - excludeSpecPattern: ["**/advanced-examples"],
- avoid execute with .cy extension pattern
  - specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}" 

## Configurations cypress.config.js [outside object e2e]
- full size resolution in executions
  - viewportHeight: 1080,
  - viewportWidth: 1920,
- avoid record videos 
  - video: false,

# find methods 
- 3 differents method for finds elements
    - find() -->  find child elements by locator
    - get() --> find elements on the page globally by locator
    - contains() --> find html text,  text values and locators
