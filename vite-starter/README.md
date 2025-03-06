# Starter with Vite, React Testing Library and Vitest

Created for the Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library)

## How this project was created

This project was created using this command:

```sh
npm create vite@latest vite-starter -- --template react
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.jsx
- this README file 😄

## Installing Vitest and React Testing Library in a Vite project

### Install dependencies

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```

## Add test script to package.json `test` object

```json
  "test": "vitest --watch",
```

## Add a setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
1. add these contents:

```js
import "@testing-library/jest-dom";
```

## A note about ESLint versions

When the course was written, `create-vite-app` came with ESLint v8. So the files in this repo have an _.eslintrc.cjs_ file that uses ESLint v8 conventions.

The instructions in this file are for **ESLint v9**, which comes with the latest version of `create-vite-app`. ESLint v9 uses an _eslint.config.js_ file instead, with different conventions.

## Add Vitest plugin to ESLint

In _.eslint.config.js_:

1. Add this import at the top of the file:

   ```js
   import vitest from "eslint-plugin-vitest";
   ```

1. Add this items to to the `plugins` object:

   ```js
     vitest,
   ```

1. Add this item to the `rules` object

   ```js
      ...vitest.configs.recommended.rules,
   ```

1. This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

Replace

```js
      globals: globals.browser,
```

with

```js
      globals: { ...globals.browser, ...vitest.environments.env.globals },
```

**Note**: if you're having issues getting ESLint to work properly with VSCode, please see [this troubleshooting guide](https://dev.to/bonnie/eslint-prettier-and-vscode-troubleshooting-ljh).

## Update vite configuration for tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/2f0eee8e83d82f887a3f0cbe44e5aa774411e654/examples/react-testing-lib/vite.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file that we created earlier
    setupFiles: "./src/setupTests.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here becasue often people want to parse CSS in tests.
    css: true,
  },
```

## Command to run tests

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/2f0eee8e83d82f887a3f0cbe44e5aa774411e654/examples/react-testing-lib) (Note: this example has been deprecated since the course was published, but the configuration is still valid)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)
