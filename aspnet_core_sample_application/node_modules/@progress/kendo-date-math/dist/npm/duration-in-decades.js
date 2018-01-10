"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var first_year_of_decade_1 = require("./first-year-of-decade");
/**
 * A function that calculates duration in decades between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in months.
 *
 * @example
 * ```ts-no-run
 * durationInDecades(new Date(2016, 0, 1), new Date(2136, 0, 1)); // 12
 * durationInDecades(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
exports.durationInDecades = function (start, end) { return ((first_year_of_decade_1.firstYearOfDecade(end).getFullYear() - first_year_of_decade_1.firstYearOfDecade(start).getFullYear()) / 10); };
