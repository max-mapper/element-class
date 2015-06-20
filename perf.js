var elementClass = require('./')

var div = document.createElement('div')
document.body.appendChild(div)

console.time('test')
for(var i = 0;i < 1000000; i++) {
  elementClass(div).add('foo')
  elementClass(div).has('foo')
  elementClass(div).remove('foo')
}
console.timeEnd('test')