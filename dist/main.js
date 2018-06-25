"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./interfaceVSType");
require("/generics");
var App = /** @class */ (function () {
    function App() {
        this.title = "Test";
    }
    App.prototype.getUsers = function () {
        return [{ name: "Jhon", age: '12' }];
    };
    return App;
}());
var test = new App();
// console.log(test.getUsers());
