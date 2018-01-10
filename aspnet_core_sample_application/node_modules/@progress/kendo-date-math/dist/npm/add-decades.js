"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_years_1 = require("./add-years");
/**
 * A function that adds and subtracts decades from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of decades to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addDecades(new Date(2016, 5, 1), 5); // 2066-6-1
 * addDecades(new Date(2016, 5, 1), -5); // 1966-6-1
 * ```
 */
exports.addDecades = function (value, offset) {
    return add_years_1.addYears(value, 10 * offset);
};
