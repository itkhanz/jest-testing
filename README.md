# JEST

This repo contains the coding snippets to understand and experiment with the JEST javascript testing library.

## Resources

-   [Official Documentation](https://jestjs.io/docs/getting-started)
-   [Jest Crash Course - Laith Academy](https://www.youtube.com/watch?v=ajiAl5UNzBU)
-   [JavaScript Testing Basics with Jest](https://www.youtube.com/watch?v=__QEPUdnJS0)

### Setting up Project

1. Initialize a basic project with `npm init -y`
2. Run the `npm install --save-dev jest` to install the jest
3. Add the following to your `package.json`
    ```
    {
    "scripts": {
        "test": "jest"
    }
    }
    ```
4. Create and execute a test script with `.test.js` at the end.
5. Run the tests with a command `npm test` or `npm t`.
6. To run a specific test, run the command with the name of file for example. `npm run test async`.
7. Initialize a git repositry, and run the following command `npm t -- --watch`. This will add the `--watch` command to our test runs automatically. It is the same as calling `npx jest --watch`.
8. `npm t -- --coverage` command will give us an overvirew of statements, branches, functions and code coverage in command line. You can also preview the coverage report by going into the coverage folder that is created and open the index.html in browser. `-- --coverage` at the end of command will produce the coverage report.
9. `npm run test woof -- --coverage` will just give the coverage for tests in `woof.test.js`. To inspect the coverage in detail, click on the tests in html report and it will show which line has not been covered.
10. Jest also provides utilities like `only`, `skip`, `todo` to run only specified tests, skip any test, and mention any remaining tests.
