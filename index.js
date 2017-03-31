"use strict";
function promiseWrapper(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            args.push(function (error, body) {
                if (error) {
                    return reject(error);
                }
                return resolve(body);
            });
            fn.apply(void 0, args);
        });
    };
}
exports.promiseWrapper = promiseWrapper;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = promiseWrapper;
