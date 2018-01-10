"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_month_1 = require("./set-month");
/**
 * A function that returns a `Date` object of the first month in a year.
 *
 * @param date - The start date value.
 * @returns - The first month in a year.
 *
 * @example
 * ```ts-no-run
 * firstMonthOfYear(new Date(2017, 11, 1)); // 2017-1-1
 * firstMonthOfYear(new Date(2017, 0, 1)); // 2017-1-1
 * ```
 */
exports.firstMonthOfYear = function (value) { return set_month_1.setMonth(value, 0); };
