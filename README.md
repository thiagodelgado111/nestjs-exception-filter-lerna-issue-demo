Nestjs Exception Filter issue with Lerna
----------

This repo contains a simple lerna monorepo setup and a demo on how using a local dependency will make the exception filter not to be called by nestjs for exceptions that match the exception filter criteria.

## Installation

Please install the root dependencies first, then bootstrap and build the packages:


```shell
npm i
npx lerna bootstrap --include-dependencies
npx lerna run build
```

## Usage

You can start running the nest app via:

```shell
npm start
```

This should use lerna to run the app

