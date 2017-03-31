# cb-topromise-wrapper - Easily add retry logic to any function returning a Promise.

## Reason

Easily turn a function that takes a callback to instead returning a promise.

## Requirements

The callback must be the last parameter and the function must return node style parameters.
```javascript
function cb(error, result){
    if(error){
        // handle error
    } else{
        // handle result
    }
}
```
## Usage

```bash
$ npm install -S cb-topromise-wrapper
```

```javascript
// var promiseWrapper = require(cb.topromise-wrapper).promiseWrapper;
import { promiseWrapper } from 'cb-topromise-wrapper';
const fs = require('fs');

const readFile = promiseWrapper(fs.readFile);
readFile('JsonData/yourfile.json', 'utf8')
    .then(console.log.bind(console))
    .catch(console.error.bind(console));

```

If you like node style result.

```javascript
// var promiseWrapper = require(cb.topromise-wrapper).promiseWrapper;
import { promiseWrapper } from 'cb-topromise-wrapper';
const fs = require('fs');

function resultHandler({error, result}){
    if(error){
        // handle error
    } else{
        // handle result
    }
}
const readFile = promiseWrapper(fs.readFile);
readFile('JsonData/yourfile.json', 'utf8')
    .then(result => resultHandler({error: null, result}))
    .catch(error => resultHandler({error, result: null}));
```
