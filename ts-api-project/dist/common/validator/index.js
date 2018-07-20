"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv = ajv_1.default({ allErrors: true });
function postValidate(scheme) {
    return function (target, key, value) {
        return {
            value: function (args) {
                const valid = ajv.validate(scheme, args);
                if (valid)
                    return value.value.call(this, args);
                return Promise.reject('Wrong parameters');
            }
        };
    };
}
exports.postValidate = postValidate;
//# sourceMappingURL=index.js.map