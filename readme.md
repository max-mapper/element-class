# element-class

exactly like .addClass, .removeClass and .hasClass from jquery but with dependencies

```
npm install element-class
```

```javascript
var elementClass = require('elementClass')

// get an element
var foo = document.querySelector('.foo')

// remove a class
elementClass(foo).remove('foo')

// add a class
elementClass(foo).add('foo')

// check if element has a class
elementClass(foo).has('foo')
```

## license

BSD
