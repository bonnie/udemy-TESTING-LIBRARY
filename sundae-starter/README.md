# Starter code for Sundaes on Demand

Created for the Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library)

## How this project was created

This project was created using this command:

```sh
npm create vite@latest sundae-starter -- --template react
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.jsx
- index.css
- this README file 😄

## Install React Bootstrap, Vitest, and React Testing Library

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react eslint-plugin-jest-dom eslint-plugin-testing-library
npm install bootstrap react-bootstrap
```

## Add Bootstrap

Add this line to _src/main.jsx_:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Update port to 3000

To match the expectation of the sundae server, and avoid CORS errors, add this to the property / value to the `defineConfig` argument in _vite.config.js_:

```js
  server: {
    port: 3000,
    // exit if port 3000 is in use (to avoid CORS errors; server expects port 3000)
    strict: true,
  },
```

## Add `start` script to package.json

In order to match the legacy course videos (which were filmed with create-react-app), add this to the _package.json_ `scripts` array:

```json
    "start": "vite",
```

## Install future dependencies

For folks using this as a starter for adding React code, run these installs:

```sh
npm install -D @testing-library/user-event msw
npm install axios
```

## Add test script to package.json `test` object

```json
  "test": "vitest --watch"
```

## Add a test setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
1. add these contents:

```js
import "@testing-library/jest-dom";
```

## A note about ESLint versions

When the course was written, `create-vite-app` came with ESLint v8. So the sundae-starter template has an _.eslintrc.cjs_ file that uses ESLint v8 conventions.

The instructions in this file are for **ESLint v9**, which comes with the latest version of `create-vite-app`. ESLint v9 uses an _eslint.config.js_ file instead, with different conventions.

## Add ESLint plugins and recommended rules

In _.eslint.config.js_:

1. Add these imports at the top of the file:

   ```js
   import jestDom from "eslint-plugin-jest-dom";
   import testingLibrary from "eslint-plugin-testing-library";
   import vitest from "eslint-plugin-vitest";
   ```

1. Add these items to to the `plugins` object:

   ```js
     "jest-dom": jestDom,
     "testing-library": testingLibrary,
     vitest,
   ```

1. Add these items to the `rules` object

   ```js
      ...jestDom.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
      ...vitest.configs.recommended.rules,
   ```

## Add Vitest globals to ESLint to avoid errors

This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

In _.eslint.config.js_:

Replace

```js
      globals: globals.browser,
```

with

```js
      globals: { ...globals.browser, ...vitest.environments.env.globals },
```

## Add Automatic ESLint and Prettier formatting on save

1. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions in VSCode if they're not already installed.
1. Create _.vscode/settings.json_ file.
1. Add these contents:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

**Note**: if you're having issues getting ESLint to work properly with VSCode, please see [this troubleshooting guide](https://dev.to/bonnie/eslint-prettier-and-vscode-troubleshooting-ljh).

## Update vite configuration for tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/blob/main/examples/react/vitest.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file created earlier
    setupFiles: "./src/setupTests.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here because often people want to parse CSS in tests.
    css: true,
  },
```

## Command to run tests in watch mode

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/2f0eee8e83d82f887a3f0cbe44e5aa774411e654/examples/react-testing-lib) (Note: this example has been deprecated since the course was published, but the configuration is still valid)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)
