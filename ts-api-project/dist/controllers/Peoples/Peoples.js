"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("../Main"));
// const PeopleV = validate.object<People>({
//   id: validate.string(),
//   name: validate.string()
// });
class Peoples extends Main_1.default {
    static get() {
        console.log('Get');
        return new Promise((resolve) => resolve({
            id: 'testId',
            name: 'Name'
        }));
    }
    static create(people) {
        // console.log(PeopleV(people));
        return new Promise((resolve) => resolve(people));
    }
}
exports.default = Peoples;
//# sourceMappingURL=Peoples.js.map