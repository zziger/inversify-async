"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryAndThrowErrorIfStackOverflow = exports.isStackOverflowExeption = void 0;
var ERROR_MSGS = require("../constants/error_msgs");
function isStackOverflowExeption(error) {
    return (error instanceof RangeError ||
        error.message === ERROR_MSGS.STACK_OVERFLOW);
}
exports.isStackOverflowExeption = isStackOverflowExeption;
var tryAndThrowErrorIfStackOverflow = function (fn, errorCallback) {
    try {
        return fn();
    }
    catch (error) {
        if (isStackOverflowExeption(error)) {
            error = errorCallback();
        }
        throw error;
    }
};
exports.tryAndThrowErrorIfStackOverflow = tryAndThrowErrorIfStackOverflow;
//# sourceMappingURL=exceptions.js.map