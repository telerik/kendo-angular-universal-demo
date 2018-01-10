"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var first_decade_of_century_1 = require("./first-decade-of-century");
/**
 * A function that calculates duration in centuries between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in months.
 *
 * @example
 * ```ts-no-run
 * durationInCenturies(new Date(2016, 0, 1), new Date(3216, 0, 1)); // 12
 * durationInCenturies(new Date(2016, 6, 1), new Date(2617, 0, 1)); // 6
 * durationInCenturies(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
exports.durationInCenturies = function (start, end) { return ((first_decade_of_century_1.firstDecadeOfCentury(end).getFullYear() - first_decade_of_century_1.firstDecadeOfCentury(start).getFullYear()) / 100); };
