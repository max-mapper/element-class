# element-class

exactly like .addClass, .removeClass and .hasClass from jquery but without dependencies

```
npm install element-class
```

```javascript
var elementClass = require('element-class')

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
