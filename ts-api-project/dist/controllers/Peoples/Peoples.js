"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("../Main"));
const shema_1 = __importDefault(require("./shema"));
const validator_1 = require("../../common/validator");
class Peoples extends Main_1.default {
    constructor() { super(); }
    static get() {
        return new Promise((resolve) => resolve({
            id: 'testId',
            name: 'Name'
        }));
    }
    static create(people) {
        return new Promise((resolve) => resolve(people));
    }
}
Peoples.shema = "asdal'ksd;ak";
__decorate([
    validator_1.postValidate(shema_1.default)
], Peoples, "create", null);
exports.default = Peoples;
//# sourceMappingURL=Peoples.js.map