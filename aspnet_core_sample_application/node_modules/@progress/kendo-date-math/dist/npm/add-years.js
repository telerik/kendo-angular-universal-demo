"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adjust_dst_1 = require("./adjust-dst");
var set_year_1 = require("./set-year");
/**
 * A function that adds and subtracts years from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of years to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addYears(new Date(2016, 5, 1), 5); // 2011-6-1
 * addYears(new Date(2016, 5, 1), -5); // 2021-6-1
 * ```
 */
exports.addYears = function (value, offset) {
    return adjust_dst_1.adjustDST(set_year_1.setYear(value, value.getFullYear() + offset), value.getHours());
};
