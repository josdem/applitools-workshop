## Applitools with WebdriverIO

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a workshop to show features around [Applitools](https://applitools.com/) with [Webdriver.io](https://webdriver.io/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version: `v16.13.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### Setting up environment on Linux/Mac

```bash
export APPLITOOLS_API_KEY=${apiKey}
```

#### Setting up environment on Windows

```bash
 Set-Item -Path Env:APPLITOOLS_API_KEY -Value ${apiKey}
```

where:

- `${apiKey}` Is your Applitools api key

#### To run the project locally

```bash
npx wdio run wdio.conf.js
```

#### To run a single test

```bash
npx wdio run wdio.conf.js --spec=test/specs/${test}.spec.js
```

where:

`${test}` is the test spec name you want to run

#### Read this as reference

- https://josdem.io/techtalk/ux/webdriverio_getting_started/
