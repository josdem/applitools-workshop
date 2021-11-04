## Applitools with WebdriverIO

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a workshop to show features around [Applitools](https://applitools.com/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version: `17.0.1`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### To run the project locally

```bash
npx wdio run test/config/wdio.conf.js
```

#### To run a single test

```bash
npx wdio run test/config/wdio.conf.js --spec=test/specs/${test}.spec.js
```

where:

`${test}` is the test spec name you want to run

#### Read this as reference

- https://josdem.io/techtalk/ux/webdriverio_getting_started/
