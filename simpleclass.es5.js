"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  var Apple =
  /*#__PURE__*/
  function () {
    function Apple() {
      _classCallCheck(this, Apple);
    }

    _createClass(Apple, [{
      key: "mycall",
      value: function mycall() {
        return 'method';
      }
    }, {
      key: "val",
      get: function get() {
        return 1;
      }
    }]);

    return Apple;
  }();

  var instance = new Apple();
  console.log(instance.val);
  console.log(instance.mycall());
})();
