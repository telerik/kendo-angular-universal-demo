"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var set_month_1 = require("./set-month");
/**
 * A function that returns a `Date` object of the last month in a year.
 *
 * @param date - The start date value.
 * @returns - The last month in a year.
 *
 * @example
 * ```ts-no-run
 * lastMonthOfYear(new Date(2017, 5, 3)); // 2017-12-3
 * lastMonthOfYear(new Date(2017, 11, 3)); // 2017-12-3
 * ```
 */
exports.lastMonthOfYear = function (value) { return set_month_1.setMonth(value, 11); };
