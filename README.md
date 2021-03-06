<h1 align="center">Jay's Tax Estimator</h1>

<br />

A simple form to estimate your tax liability.\
Useful if you have many incomes or are a 1099 contract employee.

## ๐ง๐  Don't mind the mess, Work in Progress!  ๐๐ง

## Next steps:
### Finish writing tests for >90% coverage
### Remove unused code/directories from create-react-app
### Once project is ready to ship, add features with branches and pull requests
   ### Next feature: Find and implement an API to GET tax brackets from instead of using hardcoded data

<br />

# ๐  Available Scripts

```
npm install
```

or

```
yarn install
```

# ๐ Available Scripts

In the project directory, you can run:

## ๐  Installation


```
npm install
```
or

```
yarn install
```
<br />

## โก๏ธ start

```
npm start
```

or

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />

## ๐งช test

```
npm test
```

or

```
yarn test
```

Launches the test runner in the interactive watch mode.

<br />

## ๐ฆพ build

```
npm build
```

or

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

<br />

# ๐งฌ Project structure

This is the structure of the files in the project:

```sh
    โ
    โโโ public                  # public files (favicon, .htaccess, manifest, ...)
    โโโ src                     # source files
    โ   โโโ components
    โ   โโโ pages
    โ   โโโ resources           # images, constants and other static resources
    โ   โโโ store               # Redux store
    โ   โ   โโโ actions         # store's actions
    โ   โ   โโโ reducers        # store's reducers
    โ   โ   โโโ slices          # redux-toolkit slices
    โ   โโโ styles
    โ   โโโ tests               # all test files
    โ   โ   โโโ components      # component tests
    โ   โ   โโโ pages           # page tests
    โ   โโโ types               # data interfaces
    โ   โโโ utility             # utilities functions and custom components
    โ   โโโ App.tsx
    โ   โโโ index.tsx
    โ   โโโ react-app-env.d.ts
    โ   โโโ RootComponent.tsx   # React component with all the routes
    โ   โโโ serviceWorker.ts
    โ   โโโ setupTests.ts
    โโโ .eslintrc.js
    โโโ .gitignore
    โโโ .prettierrc
    โโโ package.json
    โโโ README.md
    โโโ tsconfig.json
```

<p align="center">Bootstrapped with Create React App using complete-web-app template.</p>
