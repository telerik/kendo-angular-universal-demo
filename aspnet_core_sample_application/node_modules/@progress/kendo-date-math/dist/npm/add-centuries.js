"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_years_1 = require("./add-years");
/**
 * A function that adds and subtracts centuries from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of centuries to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addCenturies(new Date(2016, 5, 1), 5); // 2516-6-1
 * addCenturies(new Date(2016, 5, 1), -5); // 1516-6-1
 * ```
 */
exports.addCenturies = function (value, offset) {
    return add_years_1.addYears(value, 100 * offset);
};
