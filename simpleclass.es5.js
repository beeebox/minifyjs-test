function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

let Apple =
/*#__PURE__*/
function () {
  function Apple() {}

  var _proto = Apple.prototype;

  _proto.mycall = function mycall() {
    return 'method';
  };

  _createClass(Apple, [{
    key: "val",
    get: function () {
      return 1;
    }
  }]);

  return Apple;
}();

var instance = new Apple();
console.log(instance.val);
console.log(instance.mycall());
