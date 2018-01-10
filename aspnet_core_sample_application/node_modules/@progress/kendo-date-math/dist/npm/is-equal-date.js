"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_date_1 = require("./get-date");
var is_equal_1 = require("./is-equal");
/**
 * A function that compares the date portions of 2 dates.
 *
 * @param candidate - The candidate date.
 * @param expected - The expected date.
 * @returns - A Boolean value whether the values are equal.
 *
 * @example
 * ```ts-no-run
 * isEqualDate(new Date(2016, 0, 1, 10), new Date(2016, 0, 1, 20)); // true
 * isEqualDate(new Date(2016, 0, 1, 10), new Date(2016, 0, 2, 10)); // false
 * ```
 */
exports.isEqualDate = function (candidate, expected) {
    if (!candidate && !expected) {
        return true;
    }
    return candidate && expected && is_equal_1.isEqual(get_date_1.getDate(candidate), get_date_1.getDate(expected));
};
