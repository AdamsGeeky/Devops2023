# To use ES6 in your project

## Install

```bash
npm init
```
and then

add to your package.json

```json
type: "module"
```
now you can use ES6 syntax  in your project

```js
import {foo} from './foo.js'
// or for munltiple imports
import {foo, bar} from './foo.js'
```

## in ES6
**__dirname** and  **__filename** is not a global variable in ES6, 
so you can use the following code to get the current directory


```js
import {path,} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

``` 




