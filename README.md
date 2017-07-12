# sphinx-js
sphinx-js provides a minimal higher-level wrapper around Sphinx's API.

## Usage

```javascript
/*
   Data can be retrieved from the API either using callbacks (as in versions < 1.0)
   or using a new promise-based API. The promise-based API returns the raw Axios
   request promise.
 */
var Sphinx = require('sphinx-js');

const spx = new Sphinx();
let auth = spx.getAuthenticate(); 
auth.authenticate('github')
    .then(res => {
      // Promise !
      // Do something
      })
```

## API Documentation

https://bluehack-core.github.io/sphinx-js/


## Installation
sphinx-js is available from `npm` or [unpkg][unpkg].

```shell
npm install sphinx-js
```

```html
<!-- just sphinx-js source (5.3kb) -->
<script src="https://unpkg.com/sphinx-js@0.0.4/dist/Sphinx.min.js"></script>


<!-- standalone (20.3kb) -->
<script src="https://unpkg.com/sphinx-js@0.0.4/dist/Sphinx.bundle.min.js"></script>
```

## Compatibility
`sphinx-js` is tested on Node.js:
* 6.x

Note: `sphinx-js` uses Promise, hence it will not work in Node.js < 4 without polyfill.

