module.exports = function(opts) {
  return new ElementClass(opts)
}

function indexOf(arr, prop) {
  if (arr.indexOf) return arr.indexOf(prop)
  for (var i = 0, len = arr.length; i < len; i++)
    if (arr[i] === prop) return i
  return -1
}

function ElementClass(opts) {
  if (!(this instanceof ElementClass)) return new ElementClass(opts)
  var self = this
  if (!opts) opts = {}

  // similar doing instanceof HTMLElement but works in IE8
  if (opts.nodeType) opts = {el: opts}

  this.opts = opts
  this.el = opts.el || document.body
  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
}

ElementClass.prototype.add = function(newName) {
  var el = this.el
  if (!el) return
  var className = getClass(el)
  if (className === "") return el.setAttribute('class', newName)
  var classes = className.split(' ')
  if (indexOf(classes, newName) > -1) return classes
  classes.push(newName)
  el.setAttribute('class', classes.join(' '))
  return classes
}

ElementClass.prototype.remove = function(name) {
  var el = this.el
  if (!el) return
  var className = getClass(el)
  if (className === "") return []
  var classes = className.split(' ')
  var idx = indexOf(classes, className)
  if (idx > -1) classes.splice(idx, 1)
  el.setAttribute('class', classes.join(' '))
  return classes
}

ElementClass.prototype.contains =
ElementClass.prototype.has = function(className) {
  var el = this.el
  if (!el) return
  var classes = getClass(el).split(' ')
  return indexOf(classes, className) > -1
}

function getClass(el) {
  return el.getAttribute('class') || ''
}
