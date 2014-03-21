var test = require('tape')
var elementClass = require('./')

test('adds and removes a class', function(t) {
  var div = document.createElement('div')
  document.body.appendChild(div)
  elementClass(div).add('foo')
  var el = document.getElementsByClassName('foo')
  t.equal(el.length, 1)
  elementClass(div).remove('foo')
  el = document.getElementsByClassName('foo')
  t.equal(el.length, 0)
  t.end()
})