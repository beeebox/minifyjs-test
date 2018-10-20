class Aux {
    get t() {
        return "getter";
    }
}

Object.defineProperty(Aux.prototype, "u", {
    get: function() {
        return "single";
    },
    l: !0,
    g: !1
}), Object.defineProperties(Aux.prototype, {
    multiple: {
        get: function() {
            return "multiple";
        },
        l: !0,
        g: !1
    }
});

var a = new Aux();

console.log(a.multiple, a.u, a.t);