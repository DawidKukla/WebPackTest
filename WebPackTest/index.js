"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test;
(function (Test) {
    class C1 {
        constructor() { }
        Log() {
            console.log("Test");
        }
        ;
    }
    Test.C1 = C1;
})(Test = exports.Test || (exports.Test = {}));
var C1 = Test.C1;
var c = new C1();
c.Log();
//# sourceMappingURL=index.js.map