
class Aux {
  get getter() { return 'getter' }
}

Object.defineProperty(Aux.prototype, 'single', {
  get: function() {
    return 'single'
  },
  configurable: true,
  enumerable: false,
})

Object.defineProperties(Aux.prototype, {
  multiple: {
    get: function() {
      return 'multiple';
    },
    configurable: true,
    enumerable: false,
  }
});

var a = new Aux

console.log(a.multiple, a.single, a.getter)
