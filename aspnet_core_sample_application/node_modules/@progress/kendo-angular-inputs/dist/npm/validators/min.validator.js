"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
exports.createMinValidator = function (minValue) {
    return function (c) {
        var err = {
            minError: {
                minValue: minValue,
                value: c.value
            }
        };
        return (c.value !== null && c.value < minValue) ? err : null;
    };
};
