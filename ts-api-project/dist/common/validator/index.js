"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv = ajv_1.default({ allErrors: true });
exports.postValidate = (scheme) => {
    return (target, key, value) => {
        return {
            value: (args) => {
                const valid = ajv.validate(scheme, args);
                if (valid)
                    return value.value.call(target, args);
                return Promise.reject(`Wrong parameters in class "${target.name}" method "${key}"`);
            }
        };
    };
};
//# sourceMappingURL=index.js.map