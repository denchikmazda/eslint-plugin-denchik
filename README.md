# eslint-plugin-denchik

eslint plugin *eslint-plugin-denchik-fsd* for check fsd frontend,
содержит 3 правила:
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-denchik`:

```sh
npm install eslint-plugin-denchik --save-dev
```

## Usage

Add `denchik` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "denchik"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "denchik/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


