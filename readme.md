# @bemoje/arr-indexes-of

Node library template package with full ESM support. All features available as npm scripts: Jest testing. Rollup build. Rename package - affecting all relevant files. Readme generator. Markdown and HTML API-documentation. Npm publish and version bumping. Github repository create, delete and commit. Jsdoc block comment description triggers package description updates. Package keyword-extraction from block comments in source code.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-indexes-of" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-indexes-of" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-indexes-of" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-indexes-of.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-indexes-of" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-indexes-of.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-indexes-of" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-indexes-of" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-indexes-of/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-indexes-of" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-indexes-of
npm install --save @bemoje/arr-indexes-of
npm install --save-dev @bemoje/arr-indexes-of
```

## Usage

```javascript
import arrIndexesOf from '@bemoje/arr-indexes-of'

const arr = ['a', 'b', 'c', 'a']

arrIndexesOf(arr, 'a')
//=> [0, 3]

arrIndexesOf(arr, 'b')
//=> [1]

arrIndexesOf(arr, 'd')
//=> []

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
#s