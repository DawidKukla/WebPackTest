"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("underscore");
var Test;
(function (Test) {
    var C1 = /** @class */ (function () {
        function C1() {
        }
        C1.prototype.Log = function () {
            console.log("Test", _.range(0, 10));
        };
        ;
        return C1;
    }());
    Test.C1 = C1;
})(Test = exports.Test || (exports.Test = {}));
var C1 = Test.C1;
var c = new C1();
c.Log();
//# sourceMappingURL=nodeTest.js.map