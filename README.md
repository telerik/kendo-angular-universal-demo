## Overview

This repository contains two applications, featuring Angular Universal and Kendo UI for Angular.

## To run the Node based application:

```
# use npm (or yarn) to install the dependencies
npm install

# dev build (SPA / lean Angular)
npm run build:spa-dev
# prod build (SPA / lean Angular)
npm run build:spa-prod

# start the server (SPA / lean Angular)
npm run serve:spa
# start the server (SPA / lean Angular, with HMR support)
npm run serve:spa-hmr

# dev build (Universal)
npm run build:universal-dev
# prod build (Universal)
npm run build:universal-prod

# start the server (Angular Universal)
npm run serve
```

## To run the ASP.NET Core based application:

```
# install the ASP.NET Core packages
dotnet restore

# use npm (or yarn) to install the dependencies
npm install

# build the application using Webpack
webpack --config webpack.config.vendor.js
webpack

# run the application
dotnet run
```