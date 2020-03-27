# simple-i18n-dts
An even simpler implementation of [i18n-dts](https://github.com/quipper/i18n-dts) that generates a `d.ts` file.
This way, you can make your own helper function with the generated types for
 [i18n-js](https://github.com/fnando/i18n-js). 
 
## Installation

#### NPM

```sh
npm install -D simple-i18n-dts
```

#### Yarn

```sh
yarn add -D simple-i18n-dts
```

## Configuration

First of all specify the following settings in root `package.json`.

- `model`: file extension type can be either `.json`, `.ts` or `.js`
- `outputDir`: `d.ts` file will be emitted in specified directory

```json
"simple-i18n-dts": {
  "model": "./src/locale/languages/en.json",
  "outputDir": "./src/locale/typings"
}
```

And add `outputDir` dir into `filesGlob` option in `tsconfig.json`.

```json
"filesGlob": [
  "typings/*.d.ts",
],
```

That's it! Now you can use `simple-i18n-dts` command which generates corresponding `d.ts` file.

We recommend to add scripts below into `package.json`.

```json
"scripts": {
  "simple-i18n-dts": "simple-i18n-dts",
  "simple-i18n-dts:watch": "simple-i18n-dts -w"
},
```

## Options

### Watch mode

You can enable watch mode by adding `--watch` (shorthand `-w`) flag.

In the watch mode, i18n-dts watches update of model file and generates d.ts file when the model is updated.

```sh
simple-i18n-dts --watch
```

## Licence

```
Copyright 2018 Quipper Limited.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
