"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, n) {
    for (var t = 0; t < n.length; t++) {
        var r = n[t];
        r.t = r.t || !1, r.i = !0, "value" in r && (r.u = !0), Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, n, t) {
    return n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), e;
}

var Aux = function() {
    function e() {
        _classCallCheck(this, e);
    }
    return _createClass(e, [ {
        key: "getter",
        get: function() {
            return "getter";
        }
    } ]), e;
}();

Object.defineProperty(Aux.prototype, "l", {
    get: function() {
        return "single";
    },
    i: !0,
    t: !1
}), Object.defineProperties(Aux.prototype, {
    multiple: {
        get: function() {
            return "multiple";
        },
        i: !0,
        t: !1
    }
});

var a = new Aux();

console.log(a.multiple, a.l, a.o);