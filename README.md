This repo is used as a POC (proof of concept) for usage of a micro-frontend architecture (managing several front applications) that
suites to a human feature team organization.

## Goal considerations

- Create as many `featured applications` (SPA) as required.
- One `main application` will handle all the `featured applications`.
- All applications live in the same repository (MonoRepo).
- A global state is accessible through all the `featured applications` but a `featured application` could have his own
  internal state.
- A global route handle by the `main application` and the possibility for `featured applications` to have their own
  router.

## What will be used 

- **Rush** (https://rushjs.io/) : Rush will be in charge of packages management, on this project, the main goal is to share
  common packages between applications and by the way reduce the whole project size.
- **React** (https://fr.reactjs.org/): All applications are written with React.
- **Webpack** (https://webpack.js.org/): Webpack make it possible with help of module-federation plugin to expose our `featured applications` to the `main application` and give us the possibility to use `featured applications` as a React
  component for `main application`
  
## What will we do 

**3 Applications :**
- **main** is the `main application` using exposed `featured applications`. It has a router and a redux store.
- **account** is a "featured application". It has access to "main application" redux store and has his own redux store.
- **product** is a "featured application". It has his own router.


## Getting started

### Install Rush

```shell
 npm install -g @microsoft/rush
 ```

### Clone de repo

```shell
git clone git@github.com:ez90/poc-microfrontend.git
```

### Use rush to install applications dependencies

Rush will scan all sub-folders package.json files, get all common packages then install them in a global node_modules
folder (in the root directory of the project) and updates applications node_modules folder to add symbolic links
pointing to common packages in the root node_modules folder. The result is a significant reduction in the size of the project.

```shell
rush update 
```

## Run the Demo

Run `npm start` inside each repo respectively.

```shell
# for dev conveniences launch following commands in independent terminal windows
cd main && npm start
cd product && npm start
cd account && npm start
cd blog && npm start
```

This will build and serve your applications on ports 3001, 3002, 3003

- [localhost:3000](http://localhost:3000/) (will use exposed featured applications component)
- [localhost:3001](http://localhost:3001/) (expose featured application "product")
- [localhost:3002](http://localhost:3002/) (expose featured application "settings")
- [localhost:3003](http://localhost:3003/) (expose featured application "blog")
- [localhost:3003](http://localhost:3004/) (expose featured application "shopping")


