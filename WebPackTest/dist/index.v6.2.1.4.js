var WebPackTest =
webpackJsonpWebPackTest([1],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(0);
var IndexModule;
(function (IndexModule) {
    var Index = /** @class */ (function () {
        function Index() {
        }
        Index.prototype.Log = function () {
            $(".navbar").css({ "background-color": "red" });
            console.log("Index");
        };
        return Index;
    }());
    IndexModule.Index = Index;
})(IndexModule = exports.IndexModule || (exports.IndexModule = {}));
var Index = IndexModule.Index;
var index = new Index();
index.Log();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[3]);