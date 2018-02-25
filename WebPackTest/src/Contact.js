"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.less");
require("bootstrap");
require("jquery");
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
//# sourceMappingURL=Contact.js.map