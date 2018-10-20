"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aux =
/*#__PURE__*/
function () {
  function Aux() {
    _classCallCheck(this, Aux);
  }

  _createClass(Aux, [{
    key: "getter",
    get: function get() {
      return 'getter';
    }
  }]);

  return Aux;
}();

Object.defineProperty(Aux.prototype, 'single', {
  get: function get() {
    return 'single';
  },
  configurable: true,
  enumerable: false
});
Object.defineProperties(Aux.prototype, {
  multiple: {
    get: function get() {
      return 'multiple';
    },
    configurable: true,
    enumerable: false
  }
});
var a = new Aux();
console.log(a.multiple, a.single, a.getter);
