"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.less");
require("bootstrap");
require("jquery");
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
//# sourceMappingURL=index.js.map