"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.maxValidator = function (maxValue) {
    return function (control) {
        var err = {
            maxError: {
                maxValue: maxValue,
                value: control.value
            }
        };
        if (!maxValue || !control.value) {
            return null;
        }
        return control.value > maxValue ? err : null;
    };
};
