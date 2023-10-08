# README

- [README](#readme)
  - [Outils](#outils)
  - [Brief](#brief)
  - [Installation](#installation)
    - [Démarrage - HTML / CSS / JS](#démarrage---html--css--js)
    - [npm init](#npm-init)
    - [Vite](#vite)
    - [Package.json](#packagejson)
    - [Tests](#tests)
      - [Jest](#jest)
      - [Fichier de tests](#fichier-de-tests)
    - [ESLint](#eslint)
    - [Husky](#husky)

## Outils

- [Outils](docs/tools.md)

## Brief

- [Brief](docs/brief.md)

## Installation

### Démarrage - HTML / CSS / JS

Créer :

- HTML : `index.html`
- CSS : `style.css`
- JS : `script.js`

### npm init

```bash
npm init
```

- Un fichier `package.json` est créé. Il contient la liste des dépendances du projet et leurs versions.

### Vite

```bash
npm install vite
```

- Un dossier `node_modules` est créé.
- Un fichier `package-lock.json` est créé.

### Package.json

```json
"scripts": {
    "dev": "vite"
  }
```

### Tests

#### [Jest](https://jestjs.io/docs/getting-started)

```bash
npm install --save-dev jest
```

- Créé un dossier `__tests__` et un fichier `sum.test.js`.
- Créé un fichier `sum.js`
- `sum.js` et `sum.test.js` sont des exemples qui nous permettent de vérifier que les tests fonctionnent.

#### Fichier de tests

```js
// sum.js

function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```js
// sum.test.js

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

```json
"scripts": {
    "test": "jest"
  }
```

- La commande `npm run test` lance les tests.

### ESLint

```bash
npm install --save-dev eslint
```

- Créer un fichier `.eslintrc.json` à la racine du projet ou utiliser l'interactivité de la commande `eslint --init`.

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```

### [Husky](https://typicode.github.io/husky/getting-started.html)

```bash
npx husky-init && npm install
```

Cela ajoute automatiquement un hook `pre-commit` qui lance `npm test` avant chaque commit.

> ⚠️ For Windows users, if you see the help message when running npx husky add ..., try node node_modules/husky/lib/bin add ... instead. This isn't an issue with husky code.
