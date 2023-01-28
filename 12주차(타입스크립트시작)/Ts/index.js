"use strict";
function f1(a, b) {
    if (a === void 0) { a = "abc"; }
    if (b === void 0) { b = 10; }
    return a.length + b;
}
f1(3, 6);
var v1 = f1("a", 1);
function f2(value) {
    if (value < 10) {
        return value;
    }
    else {
        return "too big";
    }
}
var v2 = f2(5);
var v3 = f2(35);
var v4 = f2(5);
