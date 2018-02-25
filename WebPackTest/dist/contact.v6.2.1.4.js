var WebPackTest =
webpackJsonpWebPackTest([2],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(0);
var ContctModule;
(function (ContctModule) {
    var Contact = /** @class */ (function () {
        function Contact() {
        }
        Contact.prototype.Log = function () {
            $(".navbar").css({ "background-color": "red" });
            console.log("Contact");
        };
        return Contact;
    }());
    ContctModule.Contact = Contact;
})(ContctModule = exports.ContctModule || (exports.ContctModule = {}));
var Index = ContctModule.Contact;
var contact = new Index();
contact.Log();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[6]);